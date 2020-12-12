window.addEventListener('load',()=>{
    console.log('Buscando...');
    
    let formSearch = document.getElementById('formSearch');
    let inputSearch = document.getElementById('search');
    
    formSearch.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(inputSearch.value != ""){
            formSearch.submit()
        }
    })
})