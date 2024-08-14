from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LeadViewSet, CampaignViewSet, EmailViewSet, LeadActivityViewSet

router = DefaultRouter()
router.register(r'leads', LeadViewSet)
router.register(r'campaigns', CampaignViewSet)
router.register(r'emails', EmailViewSet)
router.register(r'lead-activities', LeadActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
]