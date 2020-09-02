(() =>{

    //Promesas, nos sirven para ejecutar un codigo sin bloquear el código de mi aplicación

    console.log( 'Inicio');

    const prom1 = new Promise((resolve, reject) =>{

        setTimeout(() => {
            reject('Se terminó el timeout');

        }, 1000);

    });//Necesito mandar una función con dos argumentos, que son dos funciones una que se llama resolve y otra que se llama reject.
    // El resolve es lo que vamos a retornar cuando todo sucede correctamente y el reject cuando sucede algun error.

    prom1
    .then( mensaje => console.log( mensaje ))
    .catch( err => console.warn( err ));

    console.log( 'Fin' );

})();