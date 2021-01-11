import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }


  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB-7CDPLvy1G23hkq5wIM7oHAbA7ZJblzkmkkRgzAe9HwjrYZ0C6k5MDrK9T8q1jTkAUgMYCrhnCsrsurw'
    });
    return this.http.get( url, { headers });
  }


  getNuevosLanzamientos() {
    return this.getQuery( 'browse/new-releases' )
      .pipe( map( ( resp: any ) => resp['albums'].items ));
  }


  getArtistas(termino: string) {
    return this.getQuery( `search?q=${termino}&type=track%2Cartist&market=US&limit=15&offset=5` )
      .pipe( map((resp: any) => resp['artists'].items));
  }

  getArtista( idArtista: string){
    return this.getQuery(`artists/${idArtista}`);
  }

  getTopTracks( idArtista: string){
    return this.getQuery(`artists/${idArtista}/top-tracks?market=ES`)
      .pipe( map( (resp: any) => resp.tracks));
  }
}
