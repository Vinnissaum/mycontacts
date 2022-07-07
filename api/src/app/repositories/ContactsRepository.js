const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Samia',
    email: 'samia.kamar@example.com',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();
