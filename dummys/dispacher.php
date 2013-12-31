<?php
    //var_dump($_REQUEST);
    $request_body = json_decode (file_get_contents('php://input'));;
    $metodo =$request_body->{'metodo'};  
    

    switch ($metodo)
    {
        case "favoritos":
	        include('favoritos.json');
	        break;
        case "favoritosvacios":
            include('favoritosvacios.json');
            break;
        case "unfavorito":
            include('unfavorito.json');
            break;
        case "salidas":
            include('salidas.json');
            break;
        case "llegadas":
            include('llegadas.json');
            break;
        case "aeropuerto":
            include('aeropuerto.json');
            break;       
        case "resultados":
            include('resultados.json');
            break;
        case "detallevuelo":
            include('detallevuelo.json');
            break;
        case "detallevuelo2":
            include('detallevuelo2.json');
            break;
        case "detallefavoritos":
            include('detallevuelo.json');
            break;
        case "detalleaeropuerto":
            include('detalleaeropuerto.json');
            break;
        case "alertas":
            include('alertas.json');
            break;
        case "autocompletarAeropuertos":
            include('autocompletarAeropuertos.json');
            break;
        case "autocompletarAerolineas":
            include('autocompletarAerolineas.json');
            break;
        


        case "null":
            echo '{';
                  echo '   "_respuesta": {';
                     echo '    "_error": "1208",';
                       echo '  "_descripcion": "No esta llegando el <b>metodo asociado al Json a dispacher.php</b>. 
                                Asegurate de que esta dado de alta porque <b>esta llegando NULL</b>, 
                                <i>dummys/dispacher.php?metodo=null</i>. <br />Recuerda definir el en modelo,  
                                junto a la url, el atributo <b>cache_servicio</b>"';
                     echo '},';
                     echo '"_contenido":{}';
                echo '}';
             break;                                
        default:
            echo '{';
                  echo '"_respuesta": {';
                     echo ' "_error": "1209",';
                        echo ' "_descripcion": "No esta llegando ningun metodo conocido a Dispacher.php. metodo ='.$metodo ;
                        echo ' <br />----------------------------------------------<br />' ;
                        echo ' Es posibles que en configuracion.js y/o en dispacher.php falte dar de alta el metodo"';
                     echo '},';
                     echo '"_contenido":{}';
                echo '}';
             break;   
    }    
?>