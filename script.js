 var numero1 = null;
var numero2 = null;
var operacion = null;
var resultado = null;

function limpiar() {
     numero1 = null;
     numero2 = null;
     operacion = null;
     resultado = null;
     console.log("limpiar");
     mostrarPorPantalla("0");
}
function mostrarPorPantalla(texto) {
     document.getElementById("screen").innerHTML = texto;
}

function suma(a, b) {
     return parseInt(a) + parseInt(b);
}

function resta(a, b) {
     return parseInt(a) - parseInt(b);
}

function multiplicacion(a, b) {
     return parseInt(a) * parseInt(b);
}

function division(a, b) {
     return parseInt(a) / parseInt(b);
}

function digitador(digito) {
     // recibe digito 
     // verificar si es el primer digito apretado 
     if (numero1 == null && numero2 == null && operacion == null) {
          if (digito == '+' || digito == '-' || digito == '/' || digito == '*' || digito == '=') {
               console.log("error")
          } else {
               numero1 = digito;
               console.log("numero1", numero1);
          }
     } else {
          console.log("digito", digito);
          if (operacion == null) {
               if (digito == '+' || digito == '-' || digito == '/' || digito == '*') {
                    operacion = digito;
                    console.log("operacion", operacion);

                    // la operacion aparece en la pantalla

               } else {
                    if (digito == '=') {
                         console.log("apreto igual antes de tiempo");
                    } else {
                         numero1 = numero1 + digito;
                         console.log("numero1", numero1);
                    }
               }
          } else {
               if (digito == '+' || digito == '-' || digito == '/' || digito == '*') {
                    operacion = digito;
                    console.log("operacion", operacion);
               } else {
                    if (numero2 == null) {
                         if (digito == '=') {
                              console.log("apreto = despues de la operación");
                         } else {
                              numero2 = digito;
                              console.log("numero2", numero2);
                         }
                    } else {
                         if (digito == '=') {
                              // calcular resultado
                              switch (operacion) {
                                   case '+':
                                        resultado = suma(numero1, numero2);
                                        break;
                                   case '-':
                                        resultado = resta(numero1, numero2);
                                        break;
                                   case '*':
                                        resultado = multiplicacion(numero1, numero2);
                                        break;
                                   case '/':
                                        resultado = division(numero1, numero2);
                                        break;
                              }
                         } else {
                              numero2 = numero2 + digito;
                              console.log("numero2", numero2);
                         }
                    }
               }
          }
     }
     if (resultado == null) {
          
           var screen = "";
           if (numero1 == null) {
                screen = '0';
           } else {
                screen = numero1;
               if (operacion != null) {
                screen = screen + operacion;     
               }
               if (numero2 != null) {
                screen = screen + numero2;     
               }
                
           }
           mostrarPorPantalla(screen);
     } else {
          mostrarPorPantalla(resultado);
     }
}