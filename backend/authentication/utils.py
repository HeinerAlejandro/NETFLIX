def get_link_suscription(request):
	link = request.build_absolute_uri('/suscription')
	return link