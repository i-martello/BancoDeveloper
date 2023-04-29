import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { RiAlertLine } from "react-icons/ri";

interface cryptoType {
  id: string;
  current_price: number;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
}

const Home = () => {
  const { excessAPI, cryptos }: any = useGlobalContext();
  const [saldo, setSaldo] = useState<number>(1000);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 w-[84%] ml-[16%] flex items-center justify-center px-3 py-5">
        <div className="w-full text-gray-800 overflow-hidden border-4 border-white rounded-4xl shadow-lg relative">
          <div className="px-5 pb-2">
            <div className="flex">
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                >
                  <span className="block px-1">
                    <i className="far fa-home text-xl pt-1 mb-1 block"></i>
                    <span className="block text-xs text-black pb-1">Home</span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                >
                  <span className="block px-1">
                    <i className="far fa-search text-xl pt-1 mb-1 block"></i>
                    <span className="block text-xs text-black pb-1">
                      Search
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500"
                >
                  <span className="block px-1">
                    <i className="far fa-cog text-xl pt-1 mb-1 block"></i>
                    <span className="block text-xs text-black pb-1">
                      Saldo disponible: ${saldo}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-br bg-[#1a1d1e] pt-12 pb-12 px-4 text-white">
            <div className="mb-5">
              <input
                type="text"
                className="w-full text-black bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50"
                placeholder="Search..."
              />
            </div>
            <h1 className="text-3xl font-light mb-3">Market Overview</h1>
          </div>
          <div className="bg-[#1a1d1e] px-2">
            <ul className="relative">
              {!excessAPI ? (
                cryptos.map((crypto: cryptoType) => {
                const crypto_price_porcentaje24hs = crypto.price_change_percentage_24h.toFixed(2);
                  return (
                    <li
                      key={crypto.id}
                      className="mb-2  p-7 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                      onClick={() => setSaldo(crypto.current_price / saldo)}
                    >
                      <Link to={`/coin/${crypto.id}`}>
                        <div className="flex items-center">
                          <div className="w-16 text-3xl leading-none">
                            <img
                              src={crypto.image}
                              className="cc BTC text-yellow-500"
                            ></img>
                          </div>
                          <div className="w-full text-white m-5">
                            {crypto.name}
                            <span className="ml-3 text-gray-400 uppercase">
                              {crypto.symbol}
                            </span>
                          </div>
                          <div className="inline-block w-[30%] mx-[10%] text-[20px] font-bold text-white">
                            $ {crypto.current_price}
                          </div>

                          <div
                            className={
                              crypto.price_change_percentage_24h > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {crypto_price_porcentaje24hs}%
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <div className="text-white text-center p-10 text-[22px]">
                  <div className="my-5 ml-[50%] text-red-500 text-7xl">
                    <RiAlertLine />
                  </div>
                  <h1 className="text-4xl text-white text-center">
                    Ha excedido el limite de peticiones, vuelva a intentar en un minuto
                  </h1>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
