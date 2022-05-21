
import './App.css';
import { Phones } from './components';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [phones, setPhones] = useState([]);
  const [show, setShow] = useState(false);

  const getPhones = async () => {
    const response = await axios.get(`http://localhost:4000/phones`);
    setPhones(response.data);
  };

  useEffect(() => {
    getPhones();
  }, []);
  return (
    <div className="App">
  {/*   <Phones/> */}

    {phones.map((phone) => {
                return <Phones key={phone.id} phones={phone} />;
            }) }
    </div>
  );
}

export default App;
