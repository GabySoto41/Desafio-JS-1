


function precio (){


    let texto= "";
    let precio_unidad= 0;
    let precio_total= 0; 
    let producto= "";
    

   while (producto != "esc"){

     producto= prompt ("Ingrese el nombre del producto que desea comprar( Si desea terminar escriba esc):","");

        if (producto == "buzo ferrari") {

            precio_unidad= 5000;
            texto+= producto + "-->" + "$" + precio_unidad + "\n";
           
        }

        else if ( producto == "buzo mercedes") {

            precio_unidad= 5000;
            texto+= producto + "-->" + "$" + precio_unidad + "\n";
        }

        else if ( producto == "buzo red bull") {

            precio_unidad= 5000;
            texto+= producto + "-->" + "$" + precio_unidad + "\n";
        }

        else if ( producto == "remera coraje") {

            precio_unidad= 1500;
            texto+= producto + "-->" + "$" + precio_unidad + "\n";
        }

        else {
            if (producto == "esc" || producto == null ) {
                break;
            } else {
                alert ("No es un producto existente");
            }

           
        }

        if (precio_total == 0){
            precio_total = precio_unidad

        } else {
                precio_total += precio_unidad
            }
        

    }  

   if (texto != "") {
    console.log (texto + "\n" + "precio total -->" + "$" + precio_total);

    alert (texto + "\n" + "precio total -->" + "$" + precio_total);
   }
}
