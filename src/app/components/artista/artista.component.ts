import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{
  artista: any ={};
  topTracks: any[] = [];
  loading: boolean;
  constructor( private route: ActivatedRoute,
                private spotify: SpotifyService) { 
    this.loading = true;
    this.route.params.subscribe( params => {
    this.getArtista( params['id'] );  
    this.spotify.getTopTracks(params['id'])
      .subscribe(topTracks =>{
        this.topTracks = topTracks;
        console.log(this.topTracks);
      });

    });
 
  }

  getArtista(idArtista: string){
    this.spotify.getArtista(idArtista)
      .subscribe( (artista: any) => {
        this.artista = artista;
        this.loading = false;
      });
  }

}
