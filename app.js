
class Teclado{
    constructor(){
        this.miTeclado= document.getElementById('teclado')
    }
    generarTeclado(){
        
        for(let i = 65; i<=90; i++){
           const letra= String.fromCharCode(i);
           this.crearBoton(letra);

           if(i==78){
            this.crearBoton('Ñ');
           }
        }
    }
    crearBoton(letra){
        const boton = document.createElement('button');
        boton.classList.add('class','btn', 'btn-primary', 'm-1');
        boton.id=letra;
        boton.innerHTML = letra;
        boton.addEventListener('click',()=>{this.presionarBoton(letra)} )
        this.miTeclado.appendChild(boton)
    }
    presionarBoton(){

    }
}

const teclado = new Teclado()
teclado.generarTeclado();
