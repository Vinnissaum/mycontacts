import { Link } from 'react-router-dom';

import { useEffect, useMemo, useState } from 'react';
import {
  Container, InputSearchContainer, Header, Card, ListHeader,
} from './styles';
import Loader from '../../components/Loader';
import delay from '../../utils/delay';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchTerm, setSearchTerm] = useState('');
  const [isContactsLoading, setIsContactsLoading] = useState(true);
  const filteredContacts = useMemo(() => contacts.filter((contact) => contact.name.toLowerCase()
    .includes(searchTerm.toLowerCase())), [contacts, searchTerm]);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?order=${orderBy}`)
      .then(async (response) => {
        setIsContactsLoading(true);
        await delay(2000);
        const json = await response.json();
        setContacts(json);
      })
      .finally(() => setIsContactsLoading(false));
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Loader isLoading={isContactsLoading} />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearchTerm}
          value={searchTerm}
        />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos' }
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>
      {filteredContacts.length > 0 && (
      <ListHeader orderBy={orderBy}>
        <button
          type="button"
          onClick={handleToggleOrderBy}
        >
          <span>Nome</span>
          <img className="arrow" src={arrow} alt="Arrow" />
        </button>
      </ListHeader>
      )}
      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
