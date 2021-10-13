from .serializers import UserSerializer,ItemsSerializer
from rest_framework import generics
from .models import User,ToDoItem


class UserView(generics.ListAPIView):
    """
    Returns a list of all users.
    """
    # model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ItemsView(generics.ListAPIView):
    queryset = ToDoItem.objects.all()
    serializer_class = ItemsSerializer
