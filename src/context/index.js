import axios from "axios";

import { useNavigate } from "react-router-dom";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();



export function AuthContextProvider({ children }) {


  const [phones, setPhones] = useState([]);


  const getPhones = async () => {
    const response = await axios.get(`http://localhost:4000/phones`);
    setPhones(response.data);
    console.log('test')
  };

  useEffect(() => {
    getPhones();
  }, []);



  const value = {
    getPhones,
    
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}