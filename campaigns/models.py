from django.db import models
from django.contrib.auth.models import User

class Lead(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

class Campaign(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Email(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    subject = models.CharField(max_length=200)
    content = models.TextField()
    sent_at = models.DateTimeField(null=True, blank=True)

class LeadActivity(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    email = models.ForeignKey(Email, on_delete=models.CASCADE)
    opened = models.BooleanField(default=False)
    clicked = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)