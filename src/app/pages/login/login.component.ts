import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from "./autenticacion.service";

@Component({
  selector: 'az-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  
    //public router: Router;
    public form:FormGroup;
    public usuario:AbstractControl;
    public password:AbstractControl;

    constructor( private router: Router, fb:FormBuilder,private autenticacionService: AutenticacionService) {
        router = router;
        this.form = fb.group({
            'usuario': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.usuario = this.form.controls['usuario'];
        this.password = this.form.controls['password'];
    }

    public onSubmit(values:Object):void {
        if (this.form.valid) {
            console.log(values);

        
         this.autenticacionService.login(this.usuario.value, this.password.value)
            .subscribe(
                data => {
                    this.router.navigate(['pages/dashboard']);
                },
                error => {
                    this.ocurrioUnError(error);
                   
                });


        }
    }
    private ocurrioUnError(error:any){
        console.log('Ocurrio Un Error en el llamado HTTP', error);
        return Promise.reject(error.message || error);
    }    
}

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}
