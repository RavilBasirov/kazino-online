from django.db import models

class Email(models.Model):
    email = models.CharField(max_length=200)
    send_date = models.DateTimeField('Почта пришла')
    def __str__(self):
        return self.email