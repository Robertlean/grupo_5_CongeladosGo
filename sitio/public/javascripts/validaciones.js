let qs = function(elementos){
     return document.querySelector(elemento)
}
window.addEventListener('load',function(){

    let formulario = qs ('form#elementos')

    let inputNombre = qs('#nombre');



    inputNombre.addEventListener('blur', function(){
        switch (true) {
            case this.value.lenght == 0:
                errores.nombre = "El campo del  nombre es obligatorio";
                errorNombre.innerHTML = errores.nombre
                this.classList.add('is_invalid')
                break;
            case this.value.length == 0:
                errores.nombre = "El campo del nombre debe tener al menos 3 letras";
                errorNombre.innerHTML = errores.nombre
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-invalid');
                errorNombre.innerHTML == 0
                break;
        }
    })
})