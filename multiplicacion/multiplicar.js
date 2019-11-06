const fs=require('fs'); //utilizamos e en modulo
let base =5;

let crearArchivo=(base)=>{

    return new Promise((resolve, reject) => {

        const fs=require('fs'); //utilizamos e en modulo
//let base =5;
if (!Number(base)){
    reject(`el valor ingresado ${base}  no es correcto`)
    return
}

let data='';

 for (let i=1; i<=10;i++){

    console.log(`${base}* ${i} = ${base*i}\n`);
 }
console.log(module)

//appendFile para apara agregar en el mismo documento
 fs.writeFile(`tabla/tabla ${base}.txt`,data,(err)=>{ //para crear un documento

    if (err)
    reject('error');//capturamos el error
    else
    resolve(`tabla-${base}.txt`)
  
    
 });
        


    });


}

module.exports = {
    crearArchivo
}