import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const contextValue = { allCoin, currency, setCurrency };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const fetchAllCoin = async () => {
    const url = `http://localhost:5000/api/coins?currency=${currency.name}`;

    try {
      const res = await axios.get(url);
      setAllCoin(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
