const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List all registers
    const { order } = request.query;
    const contacts = await ContactsRepository.findAll(order);

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

  async store(request, response) {
    // Create a new register
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const emailExists = await ContactsRepository.findByEmail(email);
    if (emailExists) {
      return response.status(400).json({ error: 'This email is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.status(201).json(contact);
  }

  async update(request, response) {
    // Update a register
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const emailExists = await ContactsRepository.findByEmail(email);
    if (emailExists && emailExists.id !== id) {
      return response.status(400).json({ error: 'This email is already in use' });
    }

    const updatedContact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(updatedContact);
  }

  async delete(request, response) {
    // Delete a register
    const { id } = request.params;

    await ContactsRepository.delete(id);
    // 204: No content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
