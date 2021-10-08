from django.contrib import admin
from django.utils.html import format_html

from .models import Entry, Action, Category
# Register your models here.

def categories_presentation(obj):
	
	html = """
		<ul class = 'content-categories'>
	"""
	if obj.categories:
		for category in obj.categories.all():
			html += "<li class = 'category-item'>{}</li>".format(category.title)

	html += "</ul>"

	return format_html(html)

categories_presentation.short_description = 'categories'

def image_presentation(obj):
	html = """
		<img
			src = {}
		>
	"""
	return format_html(html, obj.presentation.url)

image_presentation.short_description = 'portada'

class StackedAction(admin.StackedInline):

	model = Action
	extra = 3


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):

	inlines = [
		StackedAction
	]

	list_display_link = ('title', )
	list_display = ('title', image_presentation, categories_presentation, 'date', 'short_description')


admin.site.register(Category)