import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Phones({phones}) {

/* const { id } = useParams()

  const [phones, setPhones] = useState([]);
  const [show, setShow] = useState(false);

  const getPhones = async () => {
    const response = await axios.get(`http://localhost:4000/phones`);
    setPhones(response.data);
  };

  useEffect(() => {
    getPhones();
  }, []);

  const handleShow = (e) => {
    e.preventDefault()

  } */

  return (
    <div className="container">
      <header className="header">
        <h1> Phones available</h1>
      </header>

      {console.log(phones)}

     {/*  <div className="card-wrapper">
        {phones.map((item) => (
          <div key={item.id} className="phone-card">
         
            <div className="top-card">
              <h3 onClick={() => setShow(!show)}>{item.name}</h3>
              {show && (
                <>
                  <small>{item.manufacturer}</small>
                  <p>{item.description}</p>
                  <img src="" alt="" />
                  <div className="phone-details">
                    <small>{item.color}</small>
                    <small>{item.screen}</small>
                    <small>{item.processor}</small>
                    <small>{item.ram}</small>
                  </div>
                </>
              )}
            </div>

            <div className="bottom-card"></div>
          </div>
        ))}
      </div> */}

      
    </div>
  );
}
