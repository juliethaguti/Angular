(() =>{

    const avenger = {
        nombre: 'steve',
        clave: 'Capitan America',
        poder: 'Escudo'
    }

    const extraer = ( { nombre, poder }: any ) => {

        // const { nombre, poder } = avenger;

        console.log( nombre );
        console.log( poder );
    }

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [ , , araña] = avengers;

    //console.log( loki );
    //console.log( hombre );
    console.log( araña );

    const extraerArr = ( [ thor, ironman, spiderman] : string[] ) => {

        console.log( thor);
        console.log( ironman );
        console.log( spiderman );
    }
    

    extraerArr( avengers );

})();