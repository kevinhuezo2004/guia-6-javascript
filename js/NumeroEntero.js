const btnAnalizar = document.querySelector("#idBtnAnalizar");
btnAnalizar.addEventListener("click", AnalizarNumero);

function AnalizarNumero(){
    let numero = parseInt(document.querySelector("#inputNumeroEntero").value);

    let CantidadCifras = 0;
    let CantidadImpares = 0;
    let CantidadPares = 0;
    let SumaPares = 0;
    let SumaImpares = 0;
    let Sumatotal = 0;
    let CifraMayor = 0;
    let CifraMenor = 9;

    while(numero>0){
        let cifra = numero % 10;
        CantidadCifras++;
        if(cifra%2==0){
            CantidadPares++;
            SumaPares+= cifra;
        }else{
            CantidadImpares++;
            SumaImpares+= cifra;
        }
        Sumatotal+=cifra;
        if(cifra>CifraMayor){
            CifraMayor = cifra;
        }
        if(cifra<CifraMenor){
            CifraMenor=cifra;
        }
            numero = Math.floor(numero / 10);
        
        
    }
    let resultado = `<h3>Cantidad de cifras: ${CantidadCifras}</h3>`;
    resultado += `<h3>Cantidad de cifras Pares: ${CantidadPares}</h3>`;
    resultado += `<h3>Cantidad de cifras Impares: ${CantidadImpares}</h3>`;
    resultado += `<h3>Suma de cifras pares: ${SumaPares}</h3>`;
    resultado += `<h3>Suma de cifras Impares: ${SumaImpares}</h3>`;
    resultado += `<h3>Suma de cifras: ${Sumatotal}</h3>`;
    resultado += `<h3>Cifra mayor: ${CifraMayor}</h3>`;
    resultado += `<h3>Cifra menor: ${CifraMenor}</h3>`;
    

    document.querySelector("#idContainerNumero").innerHTML = resultado;
}