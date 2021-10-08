import socket

from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

from django.template.loader import get_template

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .utils import get_link_suscription
from .templatetags.auth import get_logo_base_64
# Create your views here.

class EmailRegisterView(APIView):

	def post(self, request):

		email = request.data.get('email', None)

		if not email:
			return Response(
				"Es requerido el email",
				status = status.HTTP_400_BAD_REQUEST
			)

		template = get_template('email_link_register.html')

		template_text = template.render({
			'link' : f'{ get_link_suscription(request) }'
		}, request)

		send_mail(
			"LINK A FORMULARIO DE REGISTRO",
			"ESTIMADO USUARIO A CONTINUACION SE LE MUESTRA EL \
			LINK QUE LO DIRIGIRA AL FORMULARIO DE REGISTRO",
			settings.EMAIL_HOST_USER,
			[email],
			html_message = template_text
		)

		return Response(
			"Correo Electronico Enviado correctamente, Revise su bandeja de mensajes \
			y acceda al Link al formulario de Registro"
		)





