var formulario = document.getElementById('registro');
var mensaje= document.getElementById('mensaje');

formulario.addEventListener('blur', function(){
verificaNombre();
});
formulario.addEventListener('keyup', function()
{
    mensaje.innerHTML += formulario.contra.value.length;

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