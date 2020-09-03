(() =>{

    const sumar = (a: number, b: number): number => a + b;

    const obtenerSalario = (): Promise<string> =>{
        
        return new Promise ((resolve, reject) => {

        });
    }

    obtenerSalario().then( a => console.log( a ))

})();