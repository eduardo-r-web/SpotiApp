import { Component} from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor( private spotify: SpotifyService) { 
    this.loading = true;
    this.error = false;
    this.mensajeError = "";
    spotify.getNuevosLanzamientos()
    .subscribe((resp: any) => {
      this.nuevasCanciones = resp;
      this.loading = false;
    }, (errorServicio)=>{
      this.error = true;
      this.loading = false;
      console.log(errorServicio.error.error.message);
      this.mensajeError = errorServicio.error.error.message;
    });
  }
  
}
