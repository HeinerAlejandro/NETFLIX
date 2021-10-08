from django.test import TestCase

from rest_framework.reverse import reverse
from rest_framework.test import (APIRequestFactory, APITestCase)

class AuthTestViewCase(APITestCase):
	
	def test_email_link_register(self):

		with self.settings(EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'):
			response = self.client.post(
				reverse('auth:mail-link-register'), { 'email' : 'heiner.enis@gmail.com' }
			)

			self.assertEqual(response.status_code, 200)