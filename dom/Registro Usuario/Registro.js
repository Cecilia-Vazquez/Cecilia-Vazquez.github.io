var formulario = document.getElementById('registro');
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