let qs = function (elemento) {
    return document.querySelector(elemento)
}
window.addEventListener('load', function() {

    let formulario = qs ('form#productAdd')
    
    let inputNombre = qs ('#inputNombre');
    let inputCategoria = qs ('#inputCategoria');
    let inputPrecio = qs ('#inputPrecio');
    let inputStock = qs ('#inputStock');
    let inputCantidad = qs ('#inputCantidad');
    let inputAvatar = qs ('#inputAvatar')

    let regExLetras = /^[A-Z]+$/i ;
    let regExNumeros = /^([0-9])*$/ ;



    inputNombre.addEventListener('blur', function () {
        switch (true) {
            case this.value.lenght == 0: 
                errorNombre.innerHTML = "El campo de Nombre es obligatorio";
                this.classList.add('is_invalid')
                break;
            case this.value.lenght <= 3: 
                errorNombre.innerHTML = "El campo del Nombre debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML == 0
                break;
        }
    })

    inputCategoria.addEventListener('blur', function () {
        switch (true) {
            case this.value == "" :
                errorCategoria.innerHTML = "El campo de Categoria es obligatorio";
                this.classList.add('is_invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorCategoria.innerHTML = ""
                break;
        }
    })

    inputPrecio.addEventListener('blur', function () {
        switch (true) {
            case this.value == "": 
                errorPrecio.innerHTML = "El campo de Precio es obligatorio";
                this.classList.add('is_invalid')
                break;
            case !regExNumeros.test(this.value):
                errorPrecio.innerHTML = "El campo del Precio debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPrecio.innerHTML = ""
                break;
        }
    })

    inputStock.addEventListener('blur', function () {
        switch (true) {
            case this.value == "": 
                errorStock.innerHTML = "El campo de Stock es obligatorio";
                this.classList.add('is_invalid')
                break;
            case !regExNumeros.test(this.value):
                errorStock.innerHTML = "El campo del Stock debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorStock.innerHTML = ""
                break;
        }
    })

    inputCantidad.addEventListener('blur', function () {
        switch (true) {
            case this.value == "": 
                errorCantidad.innerHTML = "El campo de Cantidad es obligatorio";
                this.classList.add('is_invalid')
                break;
            case !regExNumeros.test(this.value):
                errorCantidad.innerHTML = "El campo del Cantidad debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorCantidad.innerHTML = ""
                break;
        }
    })

    inputAvatar.addEventListener('change',function(e){

        console.log(!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))

        if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)){
            errorAvatar.innerHTML = "file inválido"
            this.classList.add('is-invalid')
        }else{

            let reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = function(){
                    vistaPrevia.src = reader.result;
                    inputAvatar.classList.remove('is-invalid')
                    inputAvatar.classList.add('is-valid');
                    errorAvatar.innerHTML = ""
            }  
        }  

    })


    formulario.addEventListener('submit', function (event) {
        let error = false
        event.preventDefault()

        let elementosForm = this.elements

        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value == "") {
                elementosForm[index].classList.add('is-invalid');
                msgError.innerHTML = "Los campos señadados son obligatorios";
                error = true
            }
        }
        if (!error) {
            console.log("Todo Perfecto!!");
            formulario.submit()
        }

    })

})