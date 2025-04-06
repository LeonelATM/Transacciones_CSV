# Transacciones_CSV
# Proyecto: Procesamiento de Transacciones Bancarias (CLI).

### Introducción:
El proposito de este proyecto es procesar la información de un archivo en formato.csv para poder manipular los datos del mismo con el fin de hallar:
- **Balance Final:**
Suma de los montos de las transacciones de tipo "Crédito" menos la suma de los montos de las transacciones de tipo "Débito".

- **Transacción de mayor monto:**
Identificar el ID y el monto de la transacción con el valor más alto.

- **Conteo de Transacciones:**
Número total de transacciones para cada tipo ("Crédito" y "Débito").

##Instrucciones de Ejecución:
**Dependencias:**
- **` csv-parser`**: Dependencia para Node.js que permite analizar archivos en formato **`.csv`** y transformarlos en objetos JavaScript, facilitando la manipulación de datos como tipo **`.json`**. 

**Comando de instalación:**
En la teminal de Node.js se debe ingresar el siguiente comando: **`npm install csv-parser`**, para instalar la dependencia  **` csv-parser`**.


**Ejecución de la aplicación:**
Para ejecutar la aplicación en la terminal de Node.js se debe ingrese el comando: **`node index.js`** para hacer referencia al archivo donde esta desarrollada la aplicación.

----
###Enfoque y Solución:
El enfoque de la aplicación en monolitico ya que se esta desarrollando todas las responsabilidades en un archivo sin funciones u otros componentes reutilizables a futuro.

#### **Tecnologias:**
Para el desarrollo de la aplicación se esta haciendo uso de las siguientes tecnologias:
- Lenguaje de programación `JavaScript`.

- Entorno de ejecución `Node.js`.

- Dependencia `csv-parser`.

#### **Solución:**
La solución consiste en una aplicación de linea de comandos (CLI) que permite extraer la información de un archivo en formato`.csv`, con el  fin de manipular dichos datos y obtener una respuesta segun la consulta que solicita el reto.

### Estructura del Proyecto:
El proyecto está desarrollado en Node.js y tiene como objetivo el análisis y la conversion de archivos CSV utlizando la dependencia `csv-parser`. La organización de archivos es la siguiente.
- `node_modules/` : Contiene la dependencia instaladas mediante `npm`.

- `src/ `: Directorio donde se almacena los archivos de extracción.

    - `data.csv` : Archivo CSV que se utilizara como la fuente de datos.
	
- `index.js` : Archivo principal que posee y ejecutara la logica de la aplicación.

- `package.json` : Archivo que define las dependencias y configuraciones ddel proyecto.

- `package-lock,json` : Archivo dde control de versiones de dependencias para asegurar la compatibilidad.

- `README.md` : Documentación del proyecto que explica su objetivo y estructura.



