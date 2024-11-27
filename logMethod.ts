// Los decoradores permiten añadir comportamiento a clases y métodos de manera concisa y reutilizable.
// Decorator de método que logea los argumentos de la función. Se aplica a un método de una clase.
// El decorador @logMethod se aplica a los métodos para registrar cada vez que son llamados.

function logMethod(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): void {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {
        console.log(`Método ${propertyName} llamado con argumentos: ${JSON.stringify(args)}`);
        return method.apply(this, args);
    };
}

class UserService {
    @logMethod
    getUserById(id: number) {
        return { id, name: 'Juan', email: 'juan@example.com' };
    }
}

const service = new UserService();
service.getUserById(1); // Log en consola cuando se llama al método

// npm install typescript ts-node
// npx tsc --init

// ejecutar el archivo: npx ts-node logMethod.ts

// Cada vez que se llame al método getUserById, deberías ver en la consola un mensaje que indica que el método fue llamado y muestra sus argumentos.
// Output: Método getUserById llamado con argumentos: [1]
