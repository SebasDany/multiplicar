// const fs=require('fs'); //utilizamos e en modulo
// let base =5;
const argv=require('yargs')
.command('crear','crea un archivo con la tabla de multiplicar',{
base:{
    demand:true, 
    alias:'b',
    description:'tabla de multiplicar requerida'

},
limite:{
    alias:'l',
    default:10,
    description:'el limite de la tabla de nulti0plicar'
}
})
.command('listar','lista una tabla de multiplicar',{
    base:{
        demand:true, 
        alias:'b',
        description:'tabla de multiplicar requerida'
    
    },
    limite:{
        alias:'l',
        default:10,
        description:'el limite de la tabla de nulti0plicar'
    }
})
.help()
.argv;


//const argv=require('yargs').argv

//importaciio simple para crear el dovumento de jmultiplicacion

//const multiplicar = require('./multiplicacion/multiplicar.js')

const{crearArchivo}=require('./multiplicacion/multiplicar.js')
let comando=argv._[0]

switch(comando){
    case 'crear':
            // crearArchivo(argv.base).then(archivo=>console.log(`archivo creado: ${archivo}`))
            // .catch(e=>console.log(e));
            crearArchivo(argv.base,argv.limite).then(archivo=>console.log(`archivo creado: ${archivo}`))
            .catch(e=>console.log(e))
        break;
    case 'listar':
        console.log('listar...');
        break;
    default:
        console.log('comando no validor...');
        break;

}

// let base =5;
// multiplicar.crearArchivo(base).then(archivo=>console.log(`archivo creado: ${archivo}`))
// .catch(e=>console.log(e))

//para crear los datos de destrucuturacion
// const{crearArchivo}=require('./multiplicacion/destructuracio.js')
// crearArchivo(base).then(archivo=>console.log(`archivo creado: ${archivo}`))
// .catch(e=>console.log(e))
///////////////////////////////////////777

//console.log(process);

//////////////////solucion simple//////////////

 
//let base1 =parametro.split('=')[1];

//
//console.log(base1);
let argv2=process.argv
console.log(argv2);
console.log(argv);
/////////////////////

// let data='';

//  for (let i=1; i<=10;i++){

//     console.log(`${base}* ${i} = ${base*i}\n`);
//  }
// console.log(module)

// //appendFile para apara agregar en el mismo documento
//  fs.writeFile(`tabla/tabla ${base}.txt`, data,(err)=>{ //para crear un documento

//     if (err) throw err;//capturamos el error
//     console.log(`el archivo ${base} asido gradad0`)
//  })


