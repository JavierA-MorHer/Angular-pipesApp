import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

  //i18nSelect
    nombre:string = 'Javier';
    genero:string ='masculino';


    invitacionMap = {
      'masculino':'invitarlo',
      'femenino':'invitarla'
    }

    //i18nPlural
    clientes:string[] = ['Javier','Alejandro','Maria','Eduardo','Laura','Iker'];

    clientesMap = {
      '=0':'no tenemos ningun cliente esperando',
      '=1':'tenemos un cliente esperando',
      '=2':'tenemos 2 clientes esperando',
      'other': 'tenemos # clientes esperando'

    }

    cambiarCliente(){
      if( this.nombre === 'Javier'){
        this.nombre='Alejandra';
        this.genero='femenino'
      }
      else{
        this.nombre='Javier';
        this.genero='masculino'
      }
    }

    quitarClientes(){
      this.clientes.pop();
    }

    //KeyValue Pipe
    persona={
      nombre:'Javier',
      edad:23,
      direccion:'Leon'
    }

    //JSON Pipe
    heroes=[
      {
        nombre:'superman',
        vuela:true
      },
      {
        nombre:'robin',
        vuela:false
      },
      {
        nombre:'aquaman',
        vuela:false
      }
    ]

    //Async Pipe
    miObservable = interval( 1000 );

    valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
    });

}
