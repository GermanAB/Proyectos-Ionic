import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class MusicService {
  url = 'http://ws.audioscrobbler.com/2.0/';
  apikey = 'c809f65bf19ca8ad73c73f18ac5c0463';
  
  constructor( private http : HttpClient)  { }


  topRolas (artista:string,){
    return this.http.get(this.url + '?method=artist.gettoptracks&artist='
     + artista + '&api_key=' + this.apikey + '&format=json' )
  }   

  infoArtista( artistas:string){
    return this.http.get(this.url + '?method=artist.getinfo&artist=' + artistas + '&api_key='
     + this.apikey + '&format=json')
  }

  infoArtista2( x:string){
    return this.http.get(this.url + '?method=album.search&album=' + x + '&api_key='
     + this.apikey + '&format=json')
  }
  

}


// /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
// http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c809f65bf19ca8ad73c73f18ac5c0463&artist=panda&album=poetics&format=json
// este link nos trae informacion de las cancion de un album especifico
//album.getInfo https://www.last.fm/api/show/album.getInfo

// http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=panda&api_key=c809f65bf19ca8ad73c73f18ac5c0463&format=json
// este link nos trae las top canciones de un artista
// artist.getTopTracks https://www.last.fm/api/show/artist.getTopTracks