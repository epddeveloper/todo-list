from .serializers import UserSerializer, ItemsSerializer
from rest_framework import generics
from .models import User, ToDoItem
# from rest_framework.views import APIView
from rest_framework import mixins


class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ItemsView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    queryset = ToDoItem.objects.all()
    serializer_class = ItemsSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.destroy()
        return Response("retrun some info")

        # return Response(status=status.HTTP_204_NO_CONTENT)

    # def post(self, request, *args, **kwargs):
    #     return self.create(request, *args, **kwargs)



