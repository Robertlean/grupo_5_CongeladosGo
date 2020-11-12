let qs = function(elemento){
     return document.querySelector(elemento)
}
window.addEventListener('load',function(){

    console.log('JS vinculado correctamente...')

    let formulario = qs ('form#formRegister')

    let inputNombre = qs('#inputNombre');
    let inputApellido = qs('#inputApellido');
    let inputEmail = qs('#inputEmail');
    let inputPass = qs('#inputPass');
    let inputPass2 = qs('#inputPass2');
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    inputNombre.addEventListener('blur', function(){
        switch (true) {
            case this.value.lenght == 0:
                errorNombre.innerHTML = "El campo del  nombre es obligatorio";
                this.classList.add('is_invalid')
                break;
            case this.value.length == 0:
                errorNombre.innerHTML = "El campo del nombre debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML = ""
                break;
        }
    })

    inputApellido.addEventListener('blur',function(){
        switch (true) {
            case this.value.length == 0:
                errorApellido.innerHTML =  "El campo del apellido obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.length <= 2:
                errorapellido.innerHTML = "El campo del apellido debe tener al menos 3 letras";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorApellido.innerHTML = ""
                break;
            }
        })

        inputEmail.addEventListener('blur',function(){
            switch (true) {
                case this.value.length == 0:
                    errorEmail.innerHTML = "El campo del email obligatorio";
                    this.classList.add('is-invalid')
                    break;
                case !regExEmail.test(this.value):
                    errorEmail.innerHTML = "El campo del email debe tener al menos 3 letras";
                    this.classList.add('is-invalid')
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorEmail.innerHTML = ""
                    break;
             }
         })

         inputPass.addEventListener('blur',function(){
            switch (true) {
                case this.value.length == 0:
                    errorPass.innerHTML ="El campo del Contraseña obligatorio";
                    this.classList.add('is-invalid')
                    break;
                case !regExPass.test(this.value):
                    errorPass.innerHTML = "El campo del Contraseña debe tener: entre 6 y 12 caracteres al menos una mayuscula, una miniscula y un numero";
                    this.classList.add('is-invalid')
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPass.innerHTML = ""
                    break;
             }
         })
    
         inputPass2.addEventListener('blur',function(){
            switch (true) {
                case this.value == "":
                    errorPass2.innerHTML = "La verificación de contraseña es obligatorio"
                    this.classList.add('is-invalid')
                break
                case this.value != inputPass.value:
                    errorPass2.innerHTML ="Las contraseñas no coinciden"
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