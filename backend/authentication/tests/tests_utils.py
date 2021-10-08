import re

from django.test import TestCase

from ..utils import get_link_suscription

class AuthUtilTestCase(TestCase):

	def get_link_suscription_test(self):

		link = get_link_suscription()

		self.assertRegex(link, 'https?://\w+.\w+/suscription')