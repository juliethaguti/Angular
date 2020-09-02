(function(){

    function getEdad(){
        return 143+424+200;
    }

    const nombre   = 'Fernando';
    const apellido = 'Rodriguez';
    const edad     = 29;

    //const salida = nombre + apellido + edad;
    //const salida = nombre + " "+ apellido + " ( " + edad + " )";
    const salida = `
    ${nombre } 
    ${ apellido } 
    ( ${ getEdad()} )`;
    //Fernando Rodriguez (Edad: 29)

    console.log(salida);

})();