//*Estructura de una URL

//URL: Es la direccion de un recurso en la web

//*Estructura:

//https = protocolo
//www = subdominio
//.freecodecamp = dominio
//.org = dominio de nivel superior
// /espanol/ = Path, representa el archivo o directorio en el
//servidor y puede tener parametros

//*Tipos de parametos:

//*a)Parametros de ruta: www.ejemplo.org/usuario/14
//*b)Parametro query o de busqueda: ?q=cursos+de+node son parametros
//usados para obtener contenido dinamico Ej filtrar un lista de recursos
//* ?q=cursos+de+node => q => clave / cursos+de+node => valor

//*Incluir vario parametros query: se usa &
// - ?q=cursos+de+node&souceid=chorme&ie=UTF-8

    
         //*MODULO URL       

 //1)Crear un objeto URL
 const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

//2)Se obtiene el nombre del host
console.log(miURL.hostname) // www.ejemplo.org

//3)Obtener el path
console.log(miURL.pathname) // /cursos/programacion

//4)Acceder a los query params (parametros query)
console.log(miURL.searchParams) //{ 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(typeof miURL.searchParams)
//Acceder a los valres del objeto
console.log(miURL.searchParams.get('ordenar')) // vistas
console.log(miURL.searchParams.get('nivel')) // 1