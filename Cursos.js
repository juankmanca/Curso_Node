let cursos =[
    {
        nombre: 'Node.js',
        id: 1,
        valor: 0,
        duracion: 32,
        alias: 'c'
    },{
        nombre: 'Ingles',
        id: 2,
        valor: 40000,
        duracion: 16,
        alias: 'i'
    },{
        nombre: 'Programacion',
        id: 3,
        valor: 20000,
        duracion: 18,
        alias: 'p'
    }];

//  let Recorrer = (cursos,callback) => {
//        cursos.forEach(element => {
//            setTimeout(function() {
//                let result = 'el curso: '+element.nombre+' con el id: '+element.id+' es de: '+element.duracion+'h y cuesta: '+ element.valor + '\n';
//                callback (result);
//            }, 2000);
//        });
// };

// Recorrer(cursos,function(result){
//     console.log(result);
// });


// let Recorrer = (cursos) => {
//         setTimeout(() => {
//             return console.log('el curso: '+cursos.Nodejs.nombre+' con el id: '+cursos.Nodejs.id+' es de: '+cursos.Nodejs.duracion+'h y cuesta: '+ cursos.Nodejs.valor + '\n'
//             + 'el curso: '+cursos.Ingles.nombre+' con el id: '+cursos.Ingles.id+' es de: '+cursos.Ingles.duracion+'h y cuesta: '+ cursos.Ingles.valor + '\n'
//             + 'el curso: '+cursos.Programacion.nombre+' con el id: '+cursos.Programacion.id+' es de: '+cursos.Programacion.duracion+'h y cuesta: '+ cursos.Programacion.valor + '\n');
//         }, 2000);
// };



module.exports = {cursos};