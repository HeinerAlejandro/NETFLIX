import os
from uuid import uuid4

from django.test import TestCase
from django.db.models import ImageField

from django.core.files.uploadedfile import SimpleUploadedFile

from django.conf import settings

from movies.models import (Serie, Season, Capitule)

# Create your tests here.


class MovieModelTestCase(TestCase):

	def setUp(self):
		
		self.series = []

		self._create_series()

	def _get_image(self):

		return SimpleUploadedFile(
			name = f'{uuid4()}.jpg',
			content = b'sdfssdfs',
			content_type = 'image/jpg'
		)

	def _create_seasons(self):

		BASE_DIR = settings.BASE_DIR

		for i in range(3):
			Season.objects.create(
				name = f'temporada {i}',
				description = f'temporada {i}, muy buena',
				presentation = self._get_image(),
				serie = self.series[0]
			)

	def _create_series(self):

		BASE_DIR = settings.BASE_DIR

		serie_1_file = self._get_image()

		serie_2_file = self._get_image()

		s1 = Serie.objects.create(
			name = 'Serie 1',
			description = 'Esta es la Serie 1, muy buena',
			presentation = serie_1_file
		)

		s2 = Serie.objects.create(
			name = 'Serie 2',
			description = 'Esta es la Serie 2, Hiper muy buena',
			presentation = serie_2_file
		)

		self.series.extend([s1, s2])

	def _create_capitules(self):

		for i in range(3):
			Capitule.objects.create(
				name = f'capitule {i}',
				description = f'capitulo {i}, muy bueno',
				presentation = self._get_image(),
				season = Season.objects.get(name = 'temporada 1')
			)

	def test_serie_save(self):

		serie_1 = Serie.objects.get(name = 'Serie 1')
		serie_2 = Serie.objects.get(name = 'Serie 2')

		self.assertEquals(serie_1.name, 'Serie 1')
		self.assertEquals(serie_2.name, 'Serie 2')

		self.assertIn(serie_1, self.series)
		self.assertIn(serie_2, self.series)

	def test_season_save(self):
		self._create_seasons()

		season_1 = Season.objects.get(name = "temporada 1")
		season_2 = Season.objects.get(name = "temporada 2")

		self.assertIn(season_1.serie, self.series)
		self.assertIn(season_2.serie, self.series)

		self.assertEqual(season_1.name, 'temporada 1')
		self.assertEqual(season_2.name, 'temporada 2')
	
	def test_capitule_save(self):
		self._create_seasons()
		self._create_capitules()

		capitule_1 = Capitule.objects.get(pk = 'capitule 1')
		capitule_2 = Capitule.objects.get(pk = 'capitule 2')

		self.assertEquals(capitule_1.description, 'capitulo 1, muy bueno')
		self.assertEquals(capitule_2.description, 'capitulo 2, muy bueno')

