
import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Arama terimi:', searchTerm);
  
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center mx-5 my-4">
      <FormControl
        type="text"
        placeholder="Ara.."
        className="mr-sm-2"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-light" type="submit">Ara</Button>
    </Form>
  );
};

export default SearchForm;
