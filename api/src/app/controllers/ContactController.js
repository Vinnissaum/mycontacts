const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List all registers
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Get a single register
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  store() {
    // Create a new register
  }

  update() {
    // Update a register
  }

  async delete(request, response) {
    // Delete a register
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactsRepository.delete(id);
    // 204: No content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
