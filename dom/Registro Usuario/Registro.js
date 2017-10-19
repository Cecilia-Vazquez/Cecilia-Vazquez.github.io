var formulario = document.getElementById('registro');
var mensaje= document.getElementById('mensaje');
var retro = document.getElementById('retroalimentacion');



formulario.addEventListener('blur', function(){
verificaNombre();
});
formulario.addEventListener('keyup', function()
{
   // mensaje.innerHTML += formulario.contra.value.length;
    var letras =(/[a,z]/i).test(formulario.contra.value);
    var digitos=(/[0,9]/i).test(formulario.contra.value);
    var simbolos= (/[!"·$%&/()"]/i).test(formulario.contra.value);
    
    
    
    if(letras)
        {
            retro.innerHTML='Segura';
            retro.className='nivel-seguro';
    
        }
       else{
          
        if(letras && digitos)
             {
                   retro.innerHTML='Mediana';
                    retro.className='nivel-mediano';
       }
              else{
                   
                   
                   retro.innerHTML='Debil';
                            //retro.className="nivel-debil";
           
                    }             }
                
                
});
formulario.addEventListener('submit', function(evento){
    if (!verificaNombre()||
    verificaContraseña()||
    verificaTermino())
    {
        evento.preventDefault();
    }
});
function verificaNombre()
{
    var expReg= /[a-z]/i;
    if (expReg.test(formulario.nombre.value.charAt(0)))
        {
            return true;
        }
        else
            {
            mensaje.innerHTML("El nombre debe iniciar con una letra");
            } 
   
  
}
function verificaContraseña()
{
    return false;

}
function verificaTermino()
{
    return false;
}