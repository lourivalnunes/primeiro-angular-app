import { Component } from "@angular/core";

@Component({
    selector:'app-first-page',
    templateUrl:'./first-page.component.html'
})
export class FirstPageComponent {
    btnDisabled = false
    name ='Teste de alerta' 

    mostrarValor(){
        alert(this.name)
    }
}