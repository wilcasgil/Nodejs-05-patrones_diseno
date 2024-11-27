// Ejemplo Práctico 2: Patrón Factory - Creación de Objetos de Usuarios

// Creación de la clase User
class User {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

// Creación de la clase UserFactory
class UserFactory {
    createUser(name, type) {
        return new User(name, type);
    }
}

// Creación de la instancia de UserFactory
const userFactory = new UserFactory();

// Creación de los objetos de usuario
const user1 = userFactory.createUser('Juan', 'admin');
const user2 = userFactory.createUser('Pedro', 'user');

console.log(user1);

console.log(user2);

// Resultado:
// User { name: 'Juan', type: 'admin' }
// User { name: 'Pedro', type: 'user' }

// En este ejemplo, se ha creado una clase User con dos propiedades: name y type. Luego, se ha creado una clase UserFactory con un método createUser que crea un objeto de usuario. Finalmente, se ha creado una instancia de UserFactory y se han creado dos objetos de usuario utilizando el método createUser.

// Este patrón es útil cuando se necesita crear múltiples objetos de un tipo similar y se desea encapsular la lógica de creación en una clase separada. También es útil cuando se necesita crear objetos de diferentes subtipos de una clase base.

// En resumen, el patrón Factory es un patrón de diseño creacional que se utiliza para crear objetos de un tipo específico sin exponer la lógica de creación al cliente. Permite encapsular la lógica de creación en una clase separada y proporciona una forma de crear objetos de diferentes subtipos de una clase base. Este patrón es útil cuando se necesita crear múltiples objetos de un tipo similar y se desea encapsular la lógica de creación en una clase separada. También es útil cuando se necesita crear objetos de diferentes subtipos de una clase base.

// En general, el patrón Factory es una herramienta poderosa que puede mejorar la modularidad, la reutilización y la flexibilidad de un sistema de software. Al utilizar este patrón de diseño de manera efectiva, se puede lograr un código más limpio, mantenible y escalable.
