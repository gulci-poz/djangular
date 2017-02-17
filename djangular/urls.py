from django.conf.urls import url, include
from django.contrib import admin
# from django.views.generic import TemplateView

urlpatterns = [
    # aplikację będzie serwował web serwer,
    # dane będziemy uzyskiwali z django za pomocą REST API
    # strona główna jest w index.html

    # url(r'^$', TemplateView.as_view(template_name="scrumboard/home.html")),

    url(r'^admin/', admin.site.urls),
    url(r'^api/scrumboard/', include('scrumboard.urls')),
    url(r'^api/auth_api/', include('auth_api.urls')),
]
