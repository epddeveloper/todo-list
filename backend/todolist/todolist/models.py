from django.db import models


class User(models.Model):
    name = models.CharField(max_length=150)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class ToDoItem(models.Model):
    item_name = models.CharField(max_length=150)
    is_accepted = models.BooleanField(default=False)

    def __str__(self):
        return self.item_name
