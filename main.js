const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido')
const edad=document.getElementById('edad')
const mostrar=document.getElementById('mostrar')
const boton=document.getElementById('save')
const fila2=document.getElementById('fila')



console.log(save);

boton.addEventListener('click', () =>{

    const tr=document.createElement('tr')
    
    const texto=document.createElement('td')
    const texto1=document.createElement('td')
    const texto2=document.createElement('td')

    tr.append(texto)
    tr.append(texto1)
    tr.append(texto2)

    mostrar.append(tr)

    texto.innerText=nombre.value
    texto1.innerText=apellido.value
    texto2.innerText=edad.value

    if('click'){
        nombre.value=''
        apellido.value=''
        edad.value=''
        
    }
})