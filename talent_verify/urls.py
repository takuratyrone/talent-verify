"""
URL configuration for talent_verify project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
# from rest_framework import routers
from talentVerify import views

# router = routers.DefaultRouter()
# router.register(r'talentVerify', views.CompanyView, 'company')

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('r^api/company/$', views.company_list),
    re_path('r^api/departments/$', views.departments_list),
    re_path('r^api/role/$', views.role_list),
    re_path('r^api/employees/$', views.employees_list),
    re_path('r^api/role_duties/$', views.role_duties_list),

    re_path('r^api/company/([0-9])$', views.company_detail),
    re_path('r^api/departments/([0-9])$', views.departments_detail),
    re_path('r^api/role/([0-9])$', views.role_detail),
    re_path('r^api/employees/([0-9])$', views.employees_detail),
    re_path('r^api/role_duties/([0-9])$', views.role_duties_detail),
    # path('api/', include(router.urls)),
]
