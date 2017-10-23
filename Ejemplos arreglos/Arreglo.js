
var materias =[
    {nombre: 'Tecnologias Web', creditos: 8, optativa: true},
    {nombre: 'Compìladores', creditos: 8, optativa:false},
    {nombre: 'Arqui', creditos: 8, optativa: false}
    
];
muestramaterias();

function muestramaterias(){
    var tabla = document.createElement('table');
tabla.appendChild(creaenca());
document.body.appendChild(tabla());

for( var i=0; i< materias.length; i ++)
    {
        console.log('Nombre:'+ materias[i].nombre);
        console.log('Creditos:'+ materias[i].creditos);
        console.log('Optativa:'+ materias[i].optativa);

    }

    console.log('forEach');
    materias.forEach(function(mat){
        console.log('Nombre'+ mat.nombre);
        console.log('Creditos'+ mat.creditos);
        console.log('Optativa'+ mat.optativa ? 'Si': 'No');
        
    });

   
}

function creaenca(){
    var encabezado= document.createElement('tr');
    var nombre= document.createElement('th'); 
    var textNombre = document.createTextNode('Nombre');
    nombre.appendChild(textNombre);


    var nombre= document.createElement('th'); 
    var textcreditos = document.createTextNode('Creditos');
    nombre.appendChild(textcreditos);


    var nombre= document.createElement('th'); 
    var textOptativa = document.createTextNode('Optativa');
    nombre.appendChild(textOptativa);


    encabezado.appendChild(textNombre);
    encabezado.appendChild(textcreditos);
    encabezado.appendChild(textOptativa);

}