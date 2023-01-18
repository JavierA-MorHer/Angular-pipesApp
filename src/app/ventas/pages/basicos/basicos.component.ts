import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent{

  nombreLower:string = 'javier';
  nombreUpper:string = 'JAVIER';
  nombreCompleto:string = 'JaViER mOraLeS';

  fecha :Date = new Date();


}
