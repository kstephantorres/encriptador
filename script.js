
function $ (selector, node = document.body){
    return node.querySelector(selector)
}

const inputTexto = $("#input-texto");
const mensaje = $("#mensaje");
const btnCopiar = $("#copiar");
const textoTemporal= $(".texto-temporal")
const muñeco = $('.muñeco')
const contenedorMensaje = $('.contenedor-mensaje')

//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado   
    configuracion()
}

/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/
const claves = {
    e:'enter',
    i:'imes',
    a:'ai',
    o:'ober',
    u:'ufat'
}

const encriptar = (texto) =>{
    return texto.toLowerCase()
                .split('')
                .map(caracter => {
                    return caracter = claves[caracter] || caracter})
                .join('')
}
//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    configuracion()
}

const desencriptar = (texto) =>{
    const entradas = Object.entries(claves)
    return texto.toLowerCase()
                .split(' ')
                .map(palabra => {
                    entradas.forEach(llaveValor => {
                        if(palabra.includes(llaveValor[1]))
                            {
                                palabra = palabra.replaceAll(llaveValor[1],llaveValor[0])
                            }
                    })
                    return palabra 
                })
                .join(' ')
}

//botón copiar

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

function configuracion() {
    inputTexto.value = ""
    mensaje.classList.remove('no-mostrar')
    mensaje.classList.add('input-mensaje')
    textoTemporal.classList.add('no-mostrar')
    btnCopiar.classList.remove('no-mostrar')
    muñeco.classList.add('no-mostrar')
    contenedorMensaje.style.justifyContent = "space-between"
}
