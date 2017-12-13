import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListarEventosService } from "./listar-eventos.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'az-listar-eventos',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './listar-eventos.component.html'
})
export class ListarEventosComponent implements OnInit {
     //public data: any;
     eventos:Array<Object>;
        
    constructor(private listarEventosService: ListarEventosService){
      

    } 
  


  ngOnInit() {
  }

  listarEventos(fomulario:NgForm){
     console.log("en listarEventos");
    
    var parametrosConsultaEvento =
    {
      maxRegistros:10,
      primerRegistro:0,
      idEventoTipo:0,
      fechaInicial:fomulario.value.fechaInicial,
      fechaFinal: fomulario.value.fechaFinal,
      eventoSire:fomulario.value.eventoSire,
      eventoNuse:fomulario.value.eventoNuse,
      identificacion:fomulario.value.identificacion
    }
    
    this.listarEventosService.listarEventos(parametrosConsultaEvento)
                              .then(respuesta => this.eventos = respuesta);

                              
    //console.log(this.eventos);

  }
  listarEventosSireRelacionados(eventosRel:Array<any>): string{
    let sire:string = '';
    if (eventosRel)
    {
      for (let e of eventosRel) {    
        if(e.eventoSire != null) 
        {
          sire = sire + e.eventoSire + ' ';
        }
      }
    }
    return sire;
  }
  listarEventosNuseRelacionados(eventosRel:Array<any>): string{
    let nuse:string = '';
    if (eventosRel)
    {
      for (let e of eventosRel) {     
        if(e.eventoNuse != null) 
        {
          nuse = nuse + e.eventoNuse + ' ';
        }      
        
      }
    }
    return nuse;
  }
}




