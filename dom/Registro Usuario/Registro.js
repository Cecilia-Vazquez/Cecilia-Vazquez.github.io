var formulario = document.getElementById('registro');
var mensaje= document.getElementById('mensaje');

formulario.addEventListener('blur', function(evento){
verificaNombre();
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
            mensaje.innerHTML(":,v");
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