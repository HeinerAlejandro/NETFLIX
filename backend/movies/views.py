from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser

from .models import Serie, Season, Capitule
from .serializers import SerieSerializer, SeasonSerializer, CapituleSerializer

from .permissions import SeriesPermissions
# Create your views here.

class CapituleMovieViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = Capitule.objects.all()
	serializer_class = CapituleSerializer


class SeasonMovieViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = Season.objects.all()
	serializer_class = SeasonSerializer

	lookup_url_kwarg = 'name'
	lookup_field = 'name'

class SeriesMovieViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = Serie.objects.all()
	serializer_class = SerieSerializer
	
	lookup_field = 'name'
	lookup_url_kwarg = 'name'

	permissions = [
		SeriesPermissions
	]

	@action(methods = ['get',], detail = True, url_path = 'list-seasons', url_name = 'list-seasons')
	def getSeasons(self, request, name):

		serie = Serie.objects.get(name = name)

		seasons = SeasonSerializer(serie.seasons.all(), context = { 'request': request }, many = True)

		content = dict(
			serie = serie.name,
			seasons = seasons.data
		)

		return Response(content)