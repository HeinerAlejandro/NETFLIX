from django.test import TestCase

from django.urls import (
	reverse,
	resolve, 
	NoReverseMatch
)

from rest_auth.registration.views import RegisterView

from authentication.views import (
	EmailRegisterView
)

class AuthTestCase(TestCase):

	def test_url_mail_link_register(self):
		url_mail_link = reverse('auth:mail-link-register')

		func, args, kwargs = resolve(url_mail_link)

		self.assertEqual(func.cls, EmailRegisterView)

	def test_url_register_form(self):
		
		url_register_form = reverse('auth:registration')

		func, args, kwargs = resolve(url_register_form)

		self.assertEqual(func.cls, RegisterView)