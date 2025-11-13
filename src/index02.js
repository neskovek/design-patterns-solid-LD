// D - Dependency Inversion Principle (DIP)
// Definição: Módulos de alto nível não devem depender de módulos de baixo nível.
// Ambos devem depender de abstrações.
// As abstrações não devem depender de detalhes, mas os detalhes devem depender das abstrações.

// Basicamente criar um composer

// class MySQLDatabase {
//     save(data) {
//         console.log(`Salvando ${data} no MySQL`);
//     }
// }
  
// class UserService {
//     constructor() {
//         this.database = new MySQLDatabase();
//     }
    
//     saveUser(user) {
//         this.database.save(user);
//     }
// }

class Database {
    save(data) {
        throw new Error("Método save deve ser implementado.");
    }
}
  
class MySQLDatabase extends Database {
    save(data) {
        console.log(`Salvando ${data} no MySQL;`);
    }
}
  
class MongoDatabase extends Database {
    save(data) {
        console.log(`Salvando ${data} no MongoDB;`);
    }
}
  
class PostgreSQLDatabase extends Database {
    save(data) {
        console.log(`Salvando ${data} no PostgreSQL;`);
    }
}

class UserService {
    constructor(database) {
        this.database = database;
    }

    saveUser(user) {
        this.database.save(user);
    }
}
  
const mysqlDb = new MySQLDatabase();
const mongoDb = new MongoDatabase();

const userService1 = new UserService(mysqlDb);
userService1.saveUser("João");

const userService2 = new UserService(mongoDb);
userService2.saveUser("Maria");