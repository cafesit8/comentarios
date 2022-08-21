let botones = document.querySelectorAll('.titulo2');
let article = document.querySelectorAll('#articleEscondido')


botones.forEach((cadaBoton, indice)=>{
    cadaBoton.addEventListener('click', function(){
        article[indice].classList.toggle('articleVisible');
    })
    // cadaBoton.addEventListener('blur', function(){
    //     article[indice].classList.remove('articleVisible')
    // })
})
