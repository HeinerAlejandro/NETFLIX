import base64

from django import template

from core.models import LogoEnterprise
from movies.models import Serie

register = template.Library()

@register.simple_tag
def get_logo_base_64():
	logo = LogoEnterprise.objects.first()
	imagen_base64 = base64.b64encode(logo.logo.read()).decode('utf-8')

	return imagen_base64
