(() => {

    const batman: string = 'batman';
    const linternaVerde: string = "Linterna Verde";

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toLocaleLowerCase() || 'No está ');
    // Dependiendo el "?" podemos usar el operador ternario o solo verlo
    // Como una condicional para undefined :D

})()