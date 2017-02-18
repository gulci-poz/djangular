from django.conf.urls import url, include
from django.contrib import admin
# from django.views.generic import TemplateView
# from django.views.decorators.csrf import ensure_csrf_cookie

urlpatterns = [
    # aplikację będzie serwował web serwer,
    # dane będziemy uzyskiwali z django za pomocą REST API
    # strona główna jest w index.html

    # wymuszenie ustawienia cookie,
    # gdy mamy wymusząną ochronę csrf (dekorator),
    # a nie np. przez tag csrf_token (template), autentykację
    # i wysyłanie nagłówka z tokenem csrf z POST (działa, gdy jesteśmy
    # zalogowani, inaczej możemy nie mieć cookie, a i tak uda się wysłać POST,
    # stąd to wymuszenie)
    # jeśli na LoginView nie mamy ochrony (dekorator),
    # to uda nam sie wysłać POST bez nagłówka csrf (brak cookie)

    # url(r'^$', ensure_csrf_cookie(
    #     TemplateView.as_view(template_name="scrumboard/home.html")
    # )),

    # jak ustawić cookie na statycznej stronie SPA?
    # ~ możemy zrobić punkt wejścia i przekierować do strony początkowej SPA
    # jak z django używać HTTPS?

    url(r'^admin/', admin.site.urls),
    url(r'^api/scrumboard/', include('scrumboard.urls')),
    url(r'^api/auth_api/', include('auth_api.urls')),
]
