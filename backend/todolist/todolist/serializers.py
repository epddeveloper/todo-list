from rest_framework import serializers
from .models import User, ToDoItem


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = "__all__"
