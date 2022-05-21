import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context";
import "./Phones.scss";

export function Phones() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [phones, setPhones] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const getPhones = async () => {
    const response = await axios.get(`http://localhost:4000/phones`);
    setPhones(response.data);
  };

  useEffect(() => {
    getPhones();
  }, []);

  const handleButton = (item) => {
    navigate(`/${item.id}`);
    console.log(item.id);
  };

  return (
    <div className="container">
      <header className="header">
        <h1> Phones available</h1>
      </header>

      <div className="card-wrapper">
      <button onClick={() => setShowLoading(!showLoading)}> Test Loading</button>
        {showLoading ? (
          phones.map((item) => (
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
          ))
        ) : (
          <div className="loading"> 
            <div className="spiner">

            </div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
}
