const fs = require('fs');
const {cursos} = require ('./Cursos');
const estudiante = require ('./Estudiante');
const express = require('express')
const app = express()
const argv = require('yargs')
.command('inscribir','matricular un curso',estudiante)
.argv;

var result ="";
 
app.listen(3000)


let Recorrer = (cursos,callback) => {
    cursos.forEach(element => {
             result = 'el curso: '+element.nombre+' con el id: '+element.id+' es de: '+element.duracion+'h y cuesta: '+ element.valor + '\n';
            callback (result);
    });
};




var id = cursos.find(function(element){
    return argv.id == element.id;
});

function crearArchivo(arvg){
if(id == undefined){
    console.log('el id no corresponde a ningun curso\n');
    Recorrer(cursos,function(result){
        setTimeout(function() {
        console.log(result);
    }, 2000); 
    });
}else{
    cursos.forEach(element => {
        if (element.id == arvg.id) {
            var txt = 'el estudiante: ' + argv.nombre + '\n' +
                    'con la cedula: ' + argv.cedula + '\n' + 
                    'esta matriculado en el curso de: '+ element.nombre;
                    app.get('/', function (req, res) {
                        res.send(txt);
                      });
            // fs.writeFile('Estudiantes.txt',txt,(err)=>{
            //     if(err) throw (err);
            //     console.log('archivo creado correctamente');
            // });
        }
    });
}
}

if(argv._[0] == 'inscribir'){
    crearArchivo(argv);
}else{
    Recorrer(cursos,function(result){
        setTimeout(function() {
        console.log(result);
    }, 2000); 
    });
}







