const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Samia',
    email: 'samia.kamar@example.com',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({ contact }) {
    return new Promise((resolve) => {
      contacts.push({ id: v4(), ...contact });
      resolve();
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
