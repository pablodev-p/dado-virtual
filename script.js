
function lanzador() {

   const dado = document.querySelector("#lanzar")


    min = Math.ceil(0);
    max = Math.floor(6);
    const resultado = Math.ceil(Math.random() * (max - min) + min);

    console.log(resultado)


    
    if(resultado == 1){
        dado.src = "./contenido/dice-1-fill.svg";
    }
 
    if(resultado == 2){
        dado.src = "./contenido/dice-2-fill.svg";
    }
  
    
    if(resultado == 3){
        dado.src = "./contenido/dice-3-fill.svg";
    }


    if(resultado == 4){
        dado.src = "./contenido/dice-4-fill.svg";
    }

    
    if(resultado == 5){
        dado.src = "./contenido/dice-5-fill.svg";
    }

    
    if(resultado == 6){
        dado.src = "./contenido/dice-6-fill.svg";
    }

}





