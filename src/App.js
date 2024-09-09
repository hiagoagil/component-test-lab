import React, { useState } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Input from './components/Input';
import DownloadCSVButton from './components/DownloadCSVButton';
import Table from './components/Table';
import Footer from './components/Footer';

const App = () => {
  const [name, setName] = useState('');
  const [customers] = useState([
    { id: 1, name: 'Customer A', employees: 10 },
    { id: 2, name: 'Customer B', employees: 20 },
  ]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCustomerClick = (customer) => {
    alert(`Customer: ${customer.name}`);
  };

  return (
    <div className="App">
      <Header />
      <Greeting name={name} />
      <Input onChange={handleNameChange} />
      <DownloadCSVButton customers={customers} />
      <Table customers={customers} customerClickHandler={handleCustomerClick} />
      <Footer></Footer>
    </div>
  );
};

export default App;
