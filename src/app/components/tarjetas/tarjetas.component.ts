import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{
  
  @Input() items: any[] = [];

  constructor( private router: Router ) { }  

  ver( item: any ){
    let idArtista;
    idArtista = (item['type'] === 'artist') ? item['id']: item.artists[0].id;
    this.router.navigate(['/artist', idArtista ]);
  }
}
