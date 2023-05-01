import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

interface cryptoType {
  id: string;
  current_price: number;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
}

const AppContext = React.createContext("")

const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState("")
  const [cryptos, setCryptos] = useState<cryptoType[]>([]);
  const [excessAPI, setExcessAPI] = useState<boolean>(false);

  const callCryptos = useCallback(async()=>{  
        try {
          const res = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
          );
          setCryptos(res.data);
          setExcessAPI(false);
        } catch (error) {
          setExcessAPI(true);
          console.log(error);
        }
  },[])  

  const userValidate = useCallback( async () => {
    const res = await axios.get('http://localhost:3000/api/auth/validate', {withCredentials: true})
    setUser(res.data);
    
  },[])
  useEffect(() => {
    callCryptos();
  }, [callCryptos])

  useEffect(() => {
    userValidate();
  }, [userValidate])
  
  
  return (
    <AppContext.Provider
      value={{ user, excessAPI, cryptos }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }