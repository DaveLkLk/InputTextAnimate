//obtener los elementos del documento
let inputText = document.getElementById('text')
let submit= document.getElementById('btn')
let reset = document.getElementById('reset')

let box = document.querySelector('.box')
let element = document.querySelector('.box p')
let h4 = document.querySelector('.box h4')



    // ************************************************
    //Obtenemos el valor del css y propiedad ya declarada
    //Objeto de SOLO LECTURA
    let estilo = window.getComputedStyle(box)
    let readWidth = estilo.getPropertyValue('--width');
    let readStep = estilo.getPropertyValue('--step');
    // console.log(readWidth);
    // console.log(readStep);
    // ************************************************


                       //tiempo de duración de la animacón
    // console.log(txtInicial)
    // 
    // h4.classList.remove('')
        
    
    //CUANDO TERMINE LA ANIMACION INICIAL P--TEST
    element.addEventListener('animationend', ()=>{
        element.style.animation = 'var(--borde)'
        setTimeout(() =>{
            box.classList.remove('box--reset')
            box.classList.add('box--animate-end')

            element.classList.remove('p--test')
            element.classList.add('p--test-end')
            element.textContent = "inserte texto"
        }, 2000)
    })
// document.addEventListener('DOMContentLoaded', ()=>{
    // console.log("DOM cargado");
// })



// ********************************************************
// ********************************************************
// ****************  EVENTO SUBMIT  ********************
// ********************************************************
// ********************************************************
submit.addEventListener('click', () =>{
    
    //obtenemos el valor del input
    let txt = document.getElementById('text').value;
    

    if (!txt == ''){
        //Cambia de color los bordes del contenedor BOX
        box.classList.remove('box--reset')
        box.classList.remove('box--animate-end')
        box.classList.add('box--active')
        // ***********************

        element.style.animation = 'none';
        
        element.classList.remove('p--active')
        element.classList.remove('p--test')
        element.classList.remove('p--test-end')
        element.classList.add('p--active')
        element.style.animation = `var(--type), var(--borde)`

        h4.classList.add('h4--active')

    
    //obtenemos el número de caracteres de la variable TXT 
    let caracteres = txt.length;

    //Establecemos los valores del step y width a las variables
    box.style.setProperty('--step', `${caracteres}`)
    box.style.setProperty('--width', `${caracteres}ch`)
    // *******************************************
    element.classList.remove('p--test')
    element.textContent = `${txt}`
    element.classList.add('p--active')

    // h4.textContent = 'Animate On'

    
    //El método getPropertyValue es de solo LECTURA ♪♪ pipipi ♪♪
    // let pasosActive = estilo.getPropertyValue('--step');
    // let widthActive = estilo.getPropertyValue('--width')

    element.addEventListener('animationend', ()=>{
        element.style.animation = 'var(--borde)'
        setTimeout(() =>{
            element.classList.remove('p--active')
            element.classList.add('p--test-end')
            box.classList.add('box--animate-end')
            element.textContent = "inserte texto"
            inputText.value = ''

            h4.classList.remove('h4--active')
        }, 2000)
    })
    } else{
        // alert("Inserte texto")
        inputText.classList.add('input--valid')
        setTimeout(()=>{
            inputText.classList.remove('input--valid')
        }, 2000)
    }

    
})

// ********************************************************
// ****************  EVENTO RESET  ********************
// ********************************************************

reset.addEventListener('click', ()=>{
    
    box.classList.remove('box--active')
    box.classList.add('box--reset')
    
    //RESET DE LOS VALORES STEP Y WIDTH
    box.style.setProperty('--step', '0')
    box.style.setProperty('--width', '0ch')
    
    //QUITAMOS LA CLASE ACTIVE, SI ES QUE ESTA DECLARADA
    //Y ASIGNAMOS UNA NUEVA CLASE PARA EL TEXTO
    element.classList.remove('p--active')
    element.textContent = "inserte texto"
    element.classList.add('p--test-end')
    element.style.animation = 'var(--borde)'

    h4.classList.remove('h4--active')
    h4.classList.add('h4--test')
})



// FALTA TERMINAR DETALLES MUY IMPORTANTES -- REVISAR!!!

//✅✅FALTA HABILITAR LA ANIMACION DEL BORDE DEL TEXTO Y MANTENERLO ACTIVO SIEMPRE

//✅✅conflicto cuando termina la animacion TEST y se agrega un texto, no se anima el texto, ARREGLAR MAÑANA LLEGANDO XD

//❌❌Arreglar la animacion de los span en el elemento (.box h4), tendran una animacion alternada al estar activa la animacion del textElement
//❌❌Terminar el CSS de los span para la animacion
//❌❌Insertar el texto OFF y ON en un span, para cambiarlo por su clase cuando exista ANIMACION en su contenedor.