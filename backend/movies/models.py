from django.db import models
from django.shortcuts import reverse as reverse_django
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models import F

from rest_framework import reverse



# Create your models here.

def upload_image_movie(instance, filename):
	return 'movies/{0}/{1}'.format(instance.name, filename)

def upload_image_season(instance, filename):
	return 'movies/{0}/seasons/{1}'.format(
		instance.serie.name, 
		instance.name, 
		filename
	)

def upload_capitule(instance, filename):
	return 'movies/{0}/seasons/{1}/capitules/{2}'.format(
		instance.season.serie.name, 
		instance.season.name, 
		filename
	)

class DescriptionData(models.Model):

	name = models.CharField(max_length = 50, verbose_name = 'Nombre', primary_key = True)
	description = models.TextField(verbose_name = 'Descripcion')

	date = models.DateTimeField(verbose_name = 'Fecha de publicacion', auto_now_add = True)

	presentation = models.ImageField(upload_to = upload_image_movie, verbose_name = 'Portada')
	
	def __str__(self):
		return self.name

	class Meta:
		abstract = True


class Season(DescriptionData):

	presentation = models.ImageField(upload_to = upload_image_season, verbose_name = 'Portada')
	serie = models.ForeignKey('Serie', verbose_name = 'Serie', on_delete = models.CASCADE, related_name = 'seasons')

	class Meta:
		verbose_name = 'Temporada'
		verbose_name_plural = 'Temporadas'

class Capitule(DescriptionData):
	
	capitule = models.FileField(upload_to = upload_capitule, blank = True, null = True)

	season = models.ForeignKey('Season', verbose_name = 'Temporada', on_delete = models.CASCADE, related_name = 'capitules')

	presentation = models.ImageField(upload_to = upload_capitule)

	class Meta:

		verbose_name = 'Capitulo'
		verbose_name_plural = 'Capitulos'

class Serie(DescriptionData):

	has_new_histories = models.BooleanField(default = False)
	number_seasons = models.IntegerField(default = 0)

	def get_absolute_url(self):
		return ''


	class Meta:

		verbose_name = 'Serie'
		verbose_name_plural = 'Series'

@receiver(post_save, sender = Season)
def saved_season(sender, **kwargs):
	
	season_instance = kwargs.get('instance')

	if kwargs.get('created', False):
		serie = season_instance.serie
		
		serie.number_seasons += 1
		serie.has_new_histories = not not F('has_new_histories')

		serie.save()