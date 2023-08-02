# Apuntes sobre Curso de Fundamentos de TypeScript

## Crear un archivo TSConfig.json

En la terminar se ejecuta: 
  
  npx tsc --init
  Created a new tsconfig.json with:                                          
                                                                        TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


Esto crea un archivo con propiedades comentadas las cuales podemos activar. El código de Typescript se compila con las preferencias que nosotros realicemos en el archivo _TSConfig.json_

  npx tsc // Ejecula la compilación
  npx tsc --watch //detecta los cambios en los archivos ts y realiza la compilación en automatico. 

### Preferencias recomendadas
* outDir: indicando la carpeta dist como el directorio destino de los archivos transpilados.
* rootDir: indicamos que nuestros archivos TypeScript, los cuales serán “compilados” luego, estarán en la carpeta src.

## Tipado 
JS < ESNext < Typescript

Js no tiene un sistema de tipado fuerte. P. eje. renombrar una variable.
En Typescript podemos tener tipado fuerte con flexibilidad. 

### verbose: declaración de variables en TS
Declaraión de la variable | tipado (typer anootation)| valor 
          const product   :            numbre        =  12  

Se pueden inferir los tipos o mandar de forma explicita. 
 * Tipos inferidos - los detecta automaticamente.
Para ver ejemplos revisar el archivo _03-typing.js_
si nombramos dos archivos con el mismo cógido habrá errores. Usualmente en producción estos problemas no se presentan ya que el scope esta bien definido. 
NOTA: ¿Qué es una función anónima autoejecutable? 
  (()=>{
      // permite establecer el scope de la variables
  })(); 
 * Valores Booleanos
 Los valores booleanos se declaran con tipado en minusculas 
    const myBooolean : boolean = true;
 Los valores se pueden reasignar y evaluar siempre y cuando sean de tipo booleano: 
    let isNew : boolean = false;
    isNew = random>= 0.5 ? true : false;
 * String
