import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RegistrarEventosService } from "./registrar-eventos.service";
import { DireccionComponent } from "../../theme/components/direccion/direccion.component";

@Component({
  selector: 'az-registrar-eventos',
  templateUrl: './registrar-eventos.component.html',
  styleUrls: ['./registrar-eventos.component.scss']
})
export class RegistrarEventosComponent implements OnInit {
  @ViewChild(DireccionComponent) modal: DireccionComponent;
  eventoTipos:Array<Object>;
  eventoEtapas:Array<Object>;
  localidades:Array<any>;
  upzs:Array<any>;
  
  
  constructor(private registrarEventosService: RegistrarEventosService ) { }

  ngOnInit(){
    this.registrarEventosService.listarEventoTipos()
                              .then(respuesta => this.eventoTipos = respuesta);   
    this.registrarEventosService.listarEventoEtapas()
                              .then(respuesta => this.eventoEtapas = respuesta);  
    this.registrarEventosService.listarLocalidades()
                              .then(respuesta => this.localidades = respuesta);                                                                      

  }  
  registrarEvento(fomulario:NgForm){
    console.log("en registrarEvento");
    console.log(fomulario);
    var evento =
    {     
      barrio:fomulario.value.barrio,
      descripcion:fomulario.value.descripcion,
      direccion:fomulario.value.direccion,
      fechaFin: new Date(fomulario.value.fechaFin).toISOString(),      
      fechaInicio: new Date(fomulario.value.fechaInicio).toISOString(),
      idEventoEtapa:{
        id:fomulario.value.idEventoEtapa
      },
      idEventoTipo:{
        id:fomulario.value.idEventoTipo
      },
      idLocalidad:{
        id:fomulario.value.idLocalidad
      }
    }
    this.registrarEventosService.crear(evento)
                              .then(respuesta => this.localidades = respuesta);            
  }
   
  
  openMyModal() {
    this.modal.openModal();
  }
  cambioLocalidad(localidad:number):void{
    console.log("en cambioLocalidad");
    console.log(this.localidades);
    console.log(this.localidades.find(localidad => localidad.id === 5));
    return this.localidades.find(localidad => localidad.id === localidad);
    
    
   /*
    
    for (let localidad of this.localidades) {
      console.log(localidad.id);
      if (localidad.id === localidad)
      {
        console.log(localidad.upzList);
        this.upzs = localidad.upzList;
      }

    }
    */
    
  }
}
