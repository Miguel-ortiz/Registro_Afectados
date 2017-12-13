
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ListarEventosService{
    constructor(private http:Http){}

    listarEventos(parametros:any){
        
         //var body =  JSON.stringify({ maxRegistros: maxRegistros, primerRegistro: primerRegistro })
        var body =  JSON.stringify(parametros)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers });       
        console.log(body);
       
        return this.http.post('http://localhost:8181/IDIGERRegistroAfectados/webresources/evento/listarTodo', body, options)
                        .toPromise()
                        .then(respuesta => respuesta.json())
                        .catch(this.ocurrioUnError);
    }

    private ocurrioUnError(error:any){
        console.log('Ocurrio Un Error en el llamado HTTP', error);
        return Promise.reject(error.message || error);
    }    

}