import datetime

from django.contrib.admin.templatetags.admin_urls import add_preserved_filters
from django.contrib.admin.utils import (
    display_for_field, display_for_value, label_for_field, lookup_field,
)
from django.contrib.admin.views.main import (
    ALL_VAR, ORDER_VAR, PAGE_VAR, SEARCH_VAR,
)
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.template import Library
from django.template.loader import get_template
from django.templatetags.static import static
from django.urls import NoReverseMatch
from django.utils import formats
from django.utils.html import format_html
from django.utils.safestring import (
    mark_safe,
)
from django.utils.text import capfirst
from django.utils.translation import gettext as _

from django.contrib.admin.templatetags.admin_list import (
    _boolean_icon,
    _coerce_field_name,
    ResultList,
    result_headers,
    result_list,
    admin_actions
)

from django.contrib.admin.templatetags.base import InclusionAdminNode

register = Library()

def get_description_header(headers):
    def get_short_descriptions(item):
        if type(item) == str:
            return item
        
        return item.short_description

    return tuple(
        map(
            get_short_descriptions,
            headers
        )
    )
def items_for_result(cl, result, form):
    """
    Generate the actual list of data.
    """
    
    def link_in_col(is_first, field_name, cl):
        if cl.list_display_links is None:
            return False
        if is_first and not cl.list_display_links:
            return True
        return field_name in cl.list_display_links

    first = True
    pk = cl.lookup_opts.pk.attname
    
    for field_index, field_name in enumerate(cl.list_display):

        empty_value_display = cl.model_admin.get_empty_value_display()
        row_classes = ['field-%s' % _coerce_field_name(field_name, field_index)]
        try:
            f, attr, value = lookup_field(field_name, result, cl.model_admin)
        except ObjectDoesNotExist:
            result_repr = empty_value_display
        else:
            empty_value_display = getattr(attr, 'empty_value_display', empty_value_display)
            if f is None or f.auto_created:
                if field_name == 'action_checkbox':
                    row_classes = ['action-checkbox']
                boolean = getattr(attr, 'boolean', False)
                result_repr = display_for_value(value, empty_value_display, boolean)
                
                if isinstance(value, (datetime.date, datetime.time)):
                    row_classes.append('nowrap')
            else:
                if isinstance(f.remote_field, models.ManyToOneRel):
                    field_val = getattr(result, f.name)
                    if field_val is None:
                        result_repr = empty_value_display
                        
                    else:
                        result_repr = mark_safe(field_val)
                        
                else:
                    result_repr = display_for_field(value, f, empty_value_display)
                if isinstance(f, (models.DateField, models.TimeField, models.ForeignKey)):
                    row_classes.append('nowrap')
        if str(result_repr) == '':
            result_repr = mark_safe('&nbsp;')
        row_class = mark_safe(' class="%s"' % ' '.join(row_classes))
        # If list_display_links not defined, add the link tag to the first field
        if link_in_col(first, field_name, cl):
            first = False

            # Display link to the result's change_view if the url exists, else
            # display just the result's representation.
            try:
                url = cl.url_for_result(result)
            except NoReverseMatch:
                link_or_text = result_repr
            else:
                url = add_preserved_filters({'preserved_filters': cl.preserved_filters, 'opts': cl.opts}, url)
                # Convert the pk to something that can be used in Javascript.
                # Problem cases are non-ASCII strings.
                if cl.to_field:
                    attr = str(cl.to_field)
                else:
                    attr = pk
                value = result.serializable_value(attr)
                link_or_text = format_html(
                    '<a href="{}"{}>{}</a>',
                    url,
                    format_html(
                        ' data-popup-opener="{}"', value
                    ) if cl.is_popup else '',
                    result_repr)

            yield link_or_text
        else:
            # By default the fields come from ModelAdmin.list_editable, but if we pull
            # the fields out of the form instead of list_editable custom admins
            # can provide fields on a per request basis
            if (form and field_name in form.fields and not (
                    field_name == cl.model._meta.pk.name and
                    form[cl.model._meta.pk.name].is_hidden)):
                bf = form[field_name]
                
                result_repr = mark_safe(str(bf.errors) + str(bf))
                
            yield format_html('{}', result_repr)
    if form and not form[cl.model._meta.pk.name].is_hidden:
        #raise Exception(form[cl.model._meta.pk.name])
        yield format_html('{}', form[cl.model._meta.pk.name])

def results(cl):
    if cl.formset:
        for res, form in zip(cl.result_list, cl.formset.forms):
            yield ResultList(form, items_for_result(cl, res, form))
    else:
        for res in cl.result_list:
            yield ResultList(None, items_for_result(cl, res, None))

def result_list_custom(cl):
    def iter_headers(item):
        return item['text']

    if cl.model._meta.model_name in ['entry', 'serie']:

        data = []
        headers = get_description_header(cl.list_display)
        descriptions_headers = tuple(map(iter_headers, list(result_headers(cl))))

        items = list(results(cl))
        

        for r in items:
            elm_zip = zip(descriptions_headers, r)
            element = dict(zip(headers, elm_zip))
            data.append(element)

        data = {
            'cl': cl,
            'model_name' : cl.model._meta.model_name,
            'select_all' : list(result_headers(cl))[0]['text'],
            #'result_hidden_fields': list(result_hidden_fields(cl)),
            #'result_headers': headers,
            #'num_sorted_fields': num_sorted_fields,
            'results': (data, )
        }

        return data

    data = result_list(cl)

    data.update({ 'model_name' : cl.model._meta.model_name })

    return data 


@register.tag(name='admin_actions_custom')
def admin_actions_tag(parser, token):
    return InclusionAdminNode(parser, token, func=admin_actions, template_name='actions_custom.html')

@register.tag(name='result_list_custom')
def result_list_tag(parser, token):
    return InclusionAdminNode(
        parser, token,
        func = result_list_custom,
        template_name = 'change_list_results.html',
        takes_context = False,
    )