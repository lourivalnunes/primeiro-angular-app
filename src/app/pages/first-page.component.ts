import { Component } from "@angular/core";

@Component({
    selector:'app-first-page',
    templateUrl:'./first-page.component.html'
})
export class FirstPageComponent {
    btnDisabled = false
    name ='Teste de alerta' 
    botaoClicado = false
    novoItem = ''; //nova variavel para armazenar o valor do input

    mostrarValor(){
        alert(this.name)
    }

    trocarBotao(){
        this.botaoClicado = ! this.botaoClicado;
    }
    
    adicionarItem(){
        if(this.novoItem){
            this.items.push({name: this.novoItem});
            this.novoItem = ''; // limpar o inut após adicionar
        }
    }
    
    items = [{name:'teste'}, {name:'outro item'}]
}