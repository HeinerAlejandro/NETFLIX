from uuid import uuid4

from django.test import TestCase
from django.http import Http404
from django.urls import (reverse, resolve, NoReverseMatch)
from django.core.files.uploadedfile import SimpleUploadedFile

from movies.models import (Serie, Season) 
from movies.views import (SeriesMovieViewSet, SeasonMovieViewSet)

class MovieUrlsTestCase(TestCase):

	@classmethod
	def setUpClass(cls):
		super().setUpClass()

		cls.namespace = 'movies'

	def _get_url(self, postfix, prefix = 'serie'):
		return f'{self.namespace}:{prefix}-{postfix}'
	
	def tests_movies_list_url(self):
		movies_urls_name = self._get_url(postfix = 'list')

		movies_url_list = reverse(movies_urls_name)

		func, args, kwargs = resolve(movies_url_list)

		self.assertEqual(func.cls, SeriesMovieViewSet)

	def tests_movies_detail_url(self):

		movies_urls_name = self._get_url(postfix = 'detail')

		movies_url_detail = reverse(
			movies_urls_name,
			kwargs = {
				'name' : 'SERIE PRUEBA' 
			}
		)

		func, args, kwargs = resolve(movies_url_detail)

		self.assertIn('name', kwargs)
		self.assertEqual(kwargs.get('name').replace('%20', ' '), 'SERIE PRUEBA')

		self.assertEqual(func.cls, SeriesMovieViewSet)

	def test_error_movies_create_url(self):
		movies_urls_name = self._get_url(postfix = 'create')

		with self.assertRaises(NoReverseMatch):
			movies_url_create = reverse(movies_urls_name)		

			with self.assertRaises(Http404):
				func, args, kwargs = resolve(movies_url_create)

	def test_error_movies_update_url(self):
		movies_urls_name = self._get_url(postfix = 'update')

		with self.assertRaises(NoReverseMatch):
			movies_url_update = reverse(movies_urls_name)		

			with self.assertRaises(Http404):
				func, args, kwargs = resolve(movies_url_update)

	def test_season_list_url(self):
		movies_urls_name = self._get_url(prefix = 'season', postfix = 'list')

		movies_url_seasones = reverse(
			movies_urls_name
		)							

		func, kwargs, args = resolve(movies_url_seasones)

		self.assertEqual(func.cls, SeasonMovieViewSet)

	def test_season_detail_url(self):
		movies_urls_name = self._get_url(prefix = 'season', postfix = 'detail')

		movies_url_seasones = reverse(
			movies_urls_name, 
			kwargs = {
				'name' : 'Temporada'
			}
		)

		func, kwargs, args = resolve(movies_url_seasones)

		self.assertEqual(func.cls, SeasonMovieViewSet)	

	def test_error_season_create(self):
		movies_urls_name = self._get_url(prefix = 'season', postfix = 'create')

		with self.assertRaises(NoReverseMatch):
			movies_url_seasones = reverse(
				movies_urls_name,
				kwargs = {
					'name' : 'Temporada'
				}
			)		

			with self.assertRaises(Http404):
				func, args, kwargs = resolve(movies_url_update)

	def test_get_season_movie_url(self):
		movies_urls_name = self._get_url(postfix = 'list-seasons')

		movies_url_seasones = reverse(
			movies_urls_name, 
			kwargs = {
				'name' : 'SERIE 2'
			}
		)

		func, kwargs, args = resolve(movies_url_seasones)

		self.assertEqual(func.cls, SeriesMovieViewSet)

	def test_get_capitule_season_url(self):
		pass
