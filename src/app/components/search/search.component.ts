import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;
  error = false;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) { 
  }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.loading = true;
    this.mensajeError = "";
    this.spotify.getArtistas( termino)
    .subscribe( (resp: any) => {
      this.artistas= resp;
      this.loading = false;
    }, (errorServicio)=>{
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }
}
