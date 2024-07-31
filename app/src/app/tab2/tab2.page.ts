import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
