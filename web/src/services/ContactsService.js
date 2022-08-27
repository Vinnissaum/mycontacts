import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'ASC') {
    return this.httpClient.get(`/contacts?order=${orderBy}`);
  }
}

export default new ContactsService();
