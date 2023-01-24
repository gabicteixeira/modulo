const form = document.getElementById('form-exercicio');
const campoB = document.getElementById('campo-b');
let formEvalido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    
    formEvalido = parseInt(campoB.value) > parseInt(campoA.value)
    
   
        if (formEvalido){
        
            campoA.value = '';
            campoB.value = '';
            campoB.classList.add('success');
            document.querySelector('.success-message').style.display = 'block';
            
                   
        } else {
            campoB.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
            campoB.classList.remove('success');
            document.querySelector('.success-message').style.display = 'none';
        }

})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEvalido = e.target.value;

        if (!formEvalido){
            campoB.classList.remove('success');
            document.querySelector('.success-message').style.display = 'none';
            campoB.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';

        } else {
            campoB.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
           
    }
})

    