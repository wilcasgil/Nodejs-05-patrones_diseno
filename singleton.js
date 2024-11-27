// Patrón Singleton - Conexión a la Base de Datos
// Singleton: Patrón de diseño que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.

/* class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance;
        }
        this._data = data;
        Database.instance = this;
        Database.exists = true;
        return this;
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData()); // MongoDB

const mysql = new Database('MySQL');
console.log(mysql.getData()); // MongoDB

console.log(mongo === mysql); // true

mysql.setData('MySQL');

console.log(mongo.getData()); // MongoDB
console.log(mysql.getData()); // MySQL
 */

// ejemplo 2
class Database {
    constructor() {
        if (!Database.instance) {
            this.connection = this.createConnection();
            Database.instance = this;
        }
        return Database.instance;
    }

    createConnection() {
        console.log("Nueva conexión a la base de datos creada");
        // Aquí se puede implementar la lógica real para conectarse a la base de datos, como MySQL o MongoDB
        return { /* conexión a la base de datos */ };
    }

    getConnection() {
        return this.connection;
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true: Ambas referencias son a la misma instancia
console.log(`conexion 1 ${db1.getConnection()}`); // Nueva conexión a la base de datos creada
console.log(`${db2.getConnection()}, conexion 2`); // Nueva conexión a la base de datos creada

// En este caso, la conexión a la base de datos se crea una sola vez y se reutiliza en todas las instancias de la clase Database.
// Esto es útil cuando se necesita una única conexión a la base de datos en toda la aplicación, como en un servidor web o una aplicación de consola.
// En lugar de crear una nueva conexión cada vez que se necesita, se puede utilizar la misma conexión en todas partes.
// Esto ahorra recursos y mejora el rendimiento de la aplicación.

// En resumen, el patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
// Esto es útil cuando se necesita una única instancia de una clase en toda la aplicación, como una conexión a la base de datos o un registro de eventos.
// El patrón Singleton se implementa utilizando una variable estática para almacenar la instancia única y un método estático para devolver esa instancia.
// Al llamar a este método estático, se garantiza que siempre se obtiene la misma instancia de la clase, independientemente de cuántas veces se llame.
// Esto permite compartir la misma instancia entre diferentes partes de la aplicación y garantiza que no se creen instancias adicionales de la clase.
// En general, el patrón Singleton es útil cuando se necesita una única instancia de una clase en toda la aplicación y se quiere garantizar que siempre se utilice la misma instancia.
// Esto puede mejorar el rendimiento y la eficiencia de la aplicación al evitar la creación de instancias adicionales y al permitir compartir la misma instancia entre diferentes partes de la aplicación.

// Referencia: https://www.digitalocean.com/community/tutorials/js-design-patterns-singleton
// node singleton.js
