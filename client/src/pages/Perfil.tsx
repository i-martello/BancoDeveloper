import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

interface cryptos {
  nombre: string;
  saldo: number;
  img: string;
  simbolo: string;
  precio: number;
  price: number;
}

interface cryptosType {
  user: string;
  usd: number;
  cryptos: cryptos[];
}

type cuentaType = {
  cryptoStore: cryptosType;
};

const Perfil = () => {
  const { user, cryptos }: any = useGlobalContext();
  const [precios, setPrecios] = useState<any>();
  const [userCryptos, setUserCryptos] = useState<cryptosType>();
  const cuenta = useSelector((state: cuentaType) => state.cryptoStore);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/api/market/cuentacryptos", {
          withCredentials: true,
        })
        .then((res) => {
          if (!res.data.msg) {
            setUserCryptos(res.data);
          }
        });
    })();
  }, []);
  
  useEffect(() => {
    let prevPrecios: any = { ...precios };
    const copyCryptos = [...cryptos];
    copyCryptos.forEach((crypto: any) => {
      userCryptos?.cryptos.forEach((cuenta) => {
        if (crypto.id === cuenta.nombre) {
          prevPrecios[cuenta.nombre] = crypto.current_price;
        }
      });
    });
  
    setPrecios(prevPrecios);
  }, [cryptos, userCryptos]);

  const sellCrypto = () => {
    console.log(userCryptos);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-screen ml-[20%] w-[70%] justify-center">
        <div className="w-full bg-[#1f2937] overflow-hidden border-4 border-white rounded-4xl shadow-lg relative">
          <div className="px-5 pb-2">
            <div className="flex"></div>
          </div>
          <div className="w-full bg-gradient-to-br bg-[#1f2937] pt-12 pb-12 px-4 text-white">
            <div className="mb-5">
              <input
                type="text"
                className="w-full text-black bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50"
                placeholder="Search..."
              />
            </div>
            <h1 className="text-3xl font-light mb-3">Billetera Virtual</h1>
          </div>
          <div className="bg-[#1f2937] px-2">
            <ul className="relative">
              {userCryptos?.cryptos.map((crypto) => {
                let cryptoCuenta: number = Number(crypto.saldo.toFixed(2));
                const CryptoUSD = (crypto.saldo * crypto.precio).toFixed(2);

                if (crypto.saldo < 1) {
                  cryptoCuenta = Number(crypto.saldo.toFixed(6));
                }
                return (
                  <li
                    key={crypto.nombre}
                    className="mb-2  p-7 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                    // onClick={() => setSaldo(crypto.current_price / saldo)}
                  >
                    <Link to="">
                      <div className="flex items-center">
                        <div className="text-3xl leading-none">
                          <img
                            src={crypto.img}
                            className=" BTC text-yellow-500"
                          ></img>
                        </div>
                        <div className="w-full text-white m-5 capitalize">
                          {crypto.nombre}
                          <span className=""></span>
                        </div>
                        <div className="flex w-[30%] mx-[10%] text-[20px] font-bold text-white">
                          {cryptoCuenta}
                          <div className="w-[30%] mx-[10%] ml-3 text-gray-400 uppercase text-[20px] font-bold">
                            {crypto.simbolo}
                          </div>
                        </div>
                        {precios[crypto.nombre] ? (
                          <div className="flex w-[30%] mx-[10%] text-[20px] font-bold text-white">
                            {(precios[crypto.nombre] * cryptoCuenta).toFixed(2)}

                            <div className="w-[30%] mx-[10%] ml-3 text-gray-400 uppercase text-[20px] font-bold">
                              USD
                            </div>
                          </div>
                        ) : (
                          <h2 className="text-white text-center font-bold">
                            API Excedida
                          </h2>
                        )}
                        <div className="flex">
                          <button
                            type="submit"
                            className="text-white w-15  bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={sellCrypto}
                          >
                            Vender
                          </button>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="max-w-xs mx-[5%]">
          <div className="bg-white shadow-xl rounded-lg py-3 ">
            <div className="photo-wrapper p-2 ">
              <img
                className="w-32 h-32 rounded-full mx-auto border-solid border-2 border-[#1f2937]"
                src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl capitalize text-gray-900 font-medium leading-8">
                {user}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
