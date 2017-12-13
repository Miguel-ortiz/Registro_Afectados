import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class RegistrarEventosService{
    constructor(private http:Http){}

    listarEventoTipos(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers }); 
        return this.http.post('http://localhost:8181/IDIGERRegistroAfectados/webresources/evento/listarEventoTipos', null, options)
                        .toPromise()
                        .then(respuesta => respuesta.json())
                        .catch(this.ocurrioUnError);
    }
    listarEventoEtapas(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers }); 
        return this.http.post('http://localhost:8181/IDIGERRegistroAfectados/webresources/evento/listarEventoEtapas', null, options)
                        .toPromise()
                        .then(respuesta => respuesta.json())
                        .catch(this.ocurrioUnError);
    }
    listarLocalidades(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers }); 
        return this.http.post('http://localhost:8181/IDIGERRegistroAfectados/webresources/localidad/listarLocalidades', null, options)
                        .toPromise()
                        .then(respuesta => respuesta.json())
                        .catch(this.ocurrioUnError);
    }  
    crear(evento:any){
        var body =  JSON.stringify(evento);
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers });       
        console.log(body);
       
        return this.http.post('http://localhost:8181/IDIGERRegistroAfectados/webresources/evento/crear', body, options)
                        .toPromise()
                        .then(respuesta => respuesta.json())
                        .catch(this.ocurrioUnError);
    }      
    private ocurrioUnError(error:any){
        console.log('Ocurrio Un Error en el llamado HTTP', error);
        return Promise.reject(error.message || error);
    }    

}