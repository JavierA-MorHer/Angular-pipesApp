import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent{

  ordenarPor:string ='';
  enMayusculas : boolean = false;
  heroes:Heroe[] =[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'Ironman',
      vuela:true,
      color:Color.rojo
    },
    {
      nombre:'Spideman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    }
  ] 

  toggleMayusculas(){
   (this.enMayusculas) 
    ? this.enMayusculas=false
    : this.enMayusculas=true; 
  }

  cambiarOrden( valor:string ){
    this.ordenarPor = valor;
  }

}
