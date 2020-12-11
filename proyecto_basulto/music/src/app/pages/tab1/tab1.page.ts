import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  resultado;
  artista :string = '';
  contador = 0;
  value:string;

  constructor(public service:MusicService, public toastController: ToastController ) {}

  ngOnInit() {
    this.service.infoArtista('shakira').subscribe(res=>console.log(res))
    
  }

  async consultaRola(){
    this.resultado='';
    
    await this.service.infoArtista(this.artista).subscribe(res => this.resultado = res);
    await this.contador++;
    
  }
  async buscar(event){
    const valor = encodeURIComponent(event.detail.value);
    this.artista = valor;
    await console.log("VALOR: ", valor);
  }

  async presentToast() {
    
    const toast = await this.toastController.create({
      message: 'Tu artista chingon ha sido encontrado',
      duration: 2000
    });
    
    toast.present();
  
  }
  
}
