const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List all registers
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Get a single register
  }

  store() {
    // Create a new register
  }

  update() {
    // Update a register
  }

  delete() {
    // Delete a register
  }
}

module.exports = new ContactController();
