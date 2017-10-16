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
    if(formulario.nombre.value.
    return false;
}
function verificaContraseña()
{
    return false;

}
function verificaTermino()
{
    return false;
}