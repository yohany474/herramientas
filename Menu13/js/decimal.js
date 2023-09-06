function decimalN(){
    var num = parseInt(document.formulario.decimal.value);
    var binary = [];
    while(num / 2 !==0){
        binary.unshift(num% 2);
        num = Math.floor(num/2);
    }
   document.formulario.resultado.value=(binary);

    
}
/*
convertir numeros 
binarios a decimales
*/
