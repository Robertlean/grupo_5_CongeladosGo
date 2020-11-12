let qs = function (elemento) {
    return document.querySelector(elemento)
}
window.addEventListener('load', function () {

    let formulario = qs('form#userPerfil')

    let inputDireccion = qs('#direccion');
    let inputCiudad = qs('#ciudad');

    inputDireccion.addEventListener('blur', function () {
        switch (true) {
            case this.value.lenght == 0:
                errores.Direccion = "El campo ded  dirección es obligatorio";
                errorDireccion.innerHTML = errores.Direccion
                this.classList.add('is_invalid')
                break;
            case this.value.length <= 0:
                errores.Direccion = "El campo de dirección tiene pocos caracteres";
                errorDireccion.innerHTML = errores.Direccion
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDireccion.innerHTML == 0
                break;
        }
    })

    inputCiudad.addEventListener('blur', function () {
        switch (true) {
            case this.value.length == 0:
                errores.Ciudad = "El campo de ciudad obligatorio";
                errorCiudad.innerHTML = errores.Ciudad
                this.classList.add('is-invalid')
                break;
            case this.value.length <= 3:
                errores.Ciudad = "El campo de ciudad tiene pocos caracteres";
                errorCiudad.innerHTML = errores.Ciudad
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorCiudad.innerHTML == 0
                break;
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