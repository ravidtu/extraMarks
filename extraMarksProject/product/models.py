from djongo  import models

# Create your models here.
def upload_to(instance,filename):
    return 'images/{filename}'.format(filename=filename)
class Files(models.Model):
    images = models.ImageField(upload_to = upload_to)
    time_created = models.DateTimeField(auto_now_add=True)
                              