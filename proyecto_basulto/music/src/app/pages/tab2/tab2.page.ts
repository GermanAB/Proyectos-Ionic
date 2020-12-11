import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {
  resultado;

  constructor(public service:MusicService, public toastController: ToastController) {}

  ngOnInit() {
    this.service.infoArtista2('reptilectric').subscribe(res=>console.log(res))
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Gracias amigue',
      duration: 2000
    });
    toast.present();
  }
  
}
