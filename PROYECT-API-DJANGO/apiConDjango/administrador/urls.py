from django.urls import path, include

from rest_framework import routers

from administrador.views import lista_personal, personal_detalle
from .views import home

router = routers.DefaultRouter()
urlpatterns = [
    path('person/', include(router.urls)),
    path('personal/<int:pk>', personal_detalle),
    path('personal/',lista_personal),
   # path('', home, name='home'),
]