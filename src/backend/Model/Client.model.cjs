const db = require('../db.cjs');

class Client {
    static all() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM clients', (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            })
        })
    }

    static create(clientData) {
        const { name, email, cpf, phone, status } = clientData;
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO clients (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)',
            [name, email, cpf, phone, status],
            (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(this.lastID);
            })
        })
    }
}

module.exports = Client;