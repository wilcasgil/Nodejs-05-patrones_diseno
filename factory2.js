// Objetivo: Crear una fábrica de objetos que permita crear objetos de diferentes tipos (user o admin).
// Tarea:
// 1. Crear una clase User con una propiedad name y type.
class User {
    constructor(name) {
        this.name = name;
        this.type = "user";
    }
}

// 2. Crear una clase Admin que herede de User y tenga una propiedad type con el valor "admin".
class Admin {
    constructor(name) {
        this.name = name;
        this.type = "admin";
    }
}

// 3. Crear una clase UserFactory con un método estático createUser que reciba un nombre y un tipo, y devuelva un objeto de tipo User o Admin según el tipo especificado.
class UserFactory {
    static createUser(name, type) {
        switch (type) {
            case 'admin':
                return new Admin(name);
            case 'user':
                return new User(name);
            default:
                throw new Error("Tipo de usuario no reconocido");
        }
    }
}

// 4. Crear dos instancias de usuario utilizando la clase UserFactory.
const user1 = UserFactory.createUser("Juan", "user");
const user2 = UserFactory.createUser("Maria", "admin");

// 5. Imprimir los objetos de usuario en la consola.
console.log(user1); // User { name: 'Juan', type: 'user' }
console.log(user2); // Admin { name: 'Maria', type: 'admin' }
