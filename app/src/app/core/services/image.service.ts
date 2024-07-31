import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  image: string = '';
  title: string = '';
  description: string = '';
  brandName: string = '';

  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
  
    this.image = image.webPath || '';
  }

  constructor() { }

  generateImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = this.image;

    if(context)
  
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
  
      // Añadir degradado
      const gradient = context?.createLinearGradient(0, canvas.height * 0.65, 0, canvas.height);
      gradient?.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient?.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      if(context)
      context.fillStyle = gradient;
      context?.fillRect(0, canvas.height * 0.65, canvas.width, canvas.height * 0.35);
  
      // Añadir texto
      context.fillStyle = 'white';
      context.font = '20px Arial';
      if (this.title) context.fillText(this.title, 10, 30);
      if (this.description) context.fillText(this.description, 10, 60);
      if (this.brandName) context.fillText(this.brandName, 10, 90);
  
      // Descargar imagen
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'image.png';
      link.click();
    };
  }
}
