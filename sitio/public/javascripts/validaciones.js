let qs = function(elementos){
     return document.querySelector(elemento)
}
window.addEventListener('load',function(){

    let formulario = qs ('form#elementos')

    let inputNombre = qs('#nombre');
    let inputApellido = qs('#apellido');
    let inputEmail = qs('#email');
    let inputPass = qs('#pass');
    let inputPass2 = qs('#pass2');
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

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

    inputApellido.addEventListener('blur',function(){
        switch (true) {
            case this.value.length == 0:
                errores.apellido = "El campo del apellido obligatorio";
                errorapellido.innerHTML = errores.apellido
                this.classList.add('is-invalid')
                break;
            case this.value.length <= 2:
                errores.apellido = "El campo del apellido debe tener al menos 3 letras";
                errorapellido.innerHTML = errores.apellido
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorapellido.innerHTML == 0
                break;
            }
        })

        inputEmail.addEventListener('blur',function(){
            switch (true) {
                case this.value.length == 0:
                    errores.email = "El campo del email obligatorio";
                    errorEmail.innerHTML = errores.email
                    this.classList.add('is-invalid')
                    break;
                case !regExEmail.test(this.value):
                    errores.email = "El campo del email debe tener al menos 3 letras";
                    errorEmail.innerHTML = errores.email
                    this.classList.add('is-invalid')
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorEmail.innerHTML == 0
                    break;
             }
         })

         inputPass.addEventListener('blur',function(){
            switch (true) {
                case this.value.length == 0:
                    errores.pass = "El campo del Contraseña obligatorio";
                    errorPass.innerHTML = errores.pass
                    this.classList.add('is-invalid')
                    break;
                case !regExPass.test(this.value):
                    errores.pass = "El campo del Contraseña debe tener: entre 6 y 12 caracteres al menos una mayuscula, una miniscula y un numero";
                    errorpass.innerHTML = errores.pass
                    this.classList.add('is-invalid')
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPass.innerHTML == 0
                    break;
             }
         })
    
         inputPass2.addEventListener('blur',function(){
            switch (true) {
                case this.value == "":
                    errores.pass2 = "La verificación de contraseña es obligatorio"
                    errorPass2.innerHTML = errores.pass2;
                    this.classList.add('is-invalid')
                break
                case this.value != inputPass.value:
                    errores.pass2 = "Las contraseñas no coinciden"
                    errorPass2.innerHTML = errores.pass2;
                    this.classList.add('is-invalid')
                break;
                default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPass2.innerHTML = "";
            }
        })

    formulario.addEventListener('submit',function(event){
        let error = false
        event.preventDefault()

        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('is-invalid');
                msgError.innerHTML = "Los campos señadados son obligatorios";
                error =true
            }
        }
        if(!error){
            console.log("Todo Perfecto!!");
            formulario.submit()
        }
        
    })

    
})