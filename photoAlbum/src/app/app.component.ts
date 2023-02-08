import { Component } from '@angular/core';
import { RecursosService } from './servicios/recursos.service';

export interface Foto {
  id: number,
  title: string,
  description: string,
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photoAlbum';
  fotos: Foto [] = []
  constructor(private recursosService: RecursosService){ 

    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
      console.log(this.fotos);
    })
  }
}
