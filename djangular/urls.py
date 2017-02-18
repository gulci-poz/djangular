from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.views.decorators.csrf import ensure_csrf_cookie

urlpatterns = [
    url(r'^$', ensure_csrf_cookie(
        TemplateView.as_view(template_name='scrumboard/home.html')
    )),
    url(r'^admin/', admin.site.urls),
    url(r'^api/scrumboard/', include('scrumboard.urls')),
    url(r'^api/auth_api/', include('auth_api.urls')),
]
