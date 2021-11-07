from rest_framework_simplejwt.tokens import RefreshToken


def my_acces_token_generator(request, refresh_token=False):
	refresh = RefreshToken.for_user(request.user)
	return str(refresh.access_token)


def my_refresh_token_generator(request, refresh_token=False):
	refresh = RefreshToken.for_user(request.user)
	return str(refresh)
