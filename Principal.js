const fs = require('fs');
const {cursos} = require ('./Cursos');
const estudiante = require ('./Estudiante');

const argv = require('yargs')
.command('inscribir','matricular un curso',estudiante)
.argv;
if(arvg == undefined){

    let Recorrer = (cursos,callback) => {
        cursos.forEach(element => {
            setTimeout(function() {
                let result = 'el curso: '+element.nombre+' con el id: '+element.id+' es de: '+element.duracion+'h y cuesta: '+ element.valor + '\n';
                callback (result);
            }, 2000); 
        });
    };
    
    
    Recorrer(cursos,function(result){
        console.log(result);
    });
    
}else{

var id = cursos.find(function(element){
    // cursos.forEach(element => {
    //      if(element.id == argv.id){
    //         return argv.id == element.id;
    //      }
    // });
    return argv.id == element.id;
});

function crearArchivo(arvg){
if(id == undefined){
    console.log('el id no corresponde a ningun curso\n');
    // Recorrer(cursos,function(result){
    //     console.log(result);
    // });
}else{
    cursos.forEach(element => {
        if (element.id == arvg.id) {
            var txt = 'el estudiante: ' + argv.nombre + '\n' +
                    'con la cedula: ' + argv.cedula + '\n' + 
                    'esta matriculado en el curso de: '+ element.nombre;
            fs.writeFile('Estudiantes.txt',txt,(err)=>{
                if(err) throw (err);
                console.log('archivo creado correctamente');
            });
        }
    });
}
}

crearArchivo(argv);


}

