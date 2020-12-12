let qs = function (elemento) {
    return document.querySelector(elemento)
}
window.addEventListener('load', function() {
    
    let formulario = qs('form#formIngreso')

    let inputEmail = qs('#inputEmail');
    let inputPass = qs('#inputPass');
    let errorPass= qs('#errorPass');

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    inputEmail.addEventListener('blur', function () {
        switch (true) {
            case this.value.lenght == 0: 
                errorEmail.innerHTML = "El campo de email es obligatorio";
                this.classList.add('is_invalid')
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El campo del email debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorEmail.innerHTML == 0
                break;
        }
    })

    inputPass.addEventListener('blur', function () {
        switch (true) {
            case this.value.length == 0: 
                errorPass.innerHTML = "El campo de contraseña obligatorio";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPass.innerHTML == 0
                break;
        }
    })
    
    errorPass.innerText =""

    formulario.addEventListener('submit', function (event) {

        errorPass.innerText = ""

        let error = false
        event.preventDefault()

        let elementosForm = formulario.elements

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