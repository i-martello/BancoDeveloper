import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useSelector } from "react-redux";

interface cryptos {
  nombre: string;
  saldo: number;
}

interface cuentaType {
  cryptoStore: {
    usd: number;
    cryptos: cryptos[];
  };
}

const Perfil = () => {
  const { user }: any = useGlobalContext();
  const cuenta = useSelector((state: cuentaType) => state.cryptoStore);
  console.log(cuenta);

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-screen ml-[20%] w-[60%] justify-center">
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
            <h1 className="text-3xl font-light mb-3">Market Overview</h1>
          </div>
          <div className="bg-[#1f2937] px-2">
            <ul className="relative">
              {cuenta.cryptos.map((crypto) => {
                let cryptoCuenta = crypto.saldo.toFixed(2);
                if(crypto.saldo < 1){
                  cryptoCuenta = crypto.saldo.toFixed(6);
                }
                return (
                  <li
                    className="mb-2  p-7 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                    // onClick={() => setSaldo(crypto.current_price / saldo)}
                  >
                    <Link to="">
                      <div className="flex items-center">
                        <div className="w-full text-white m-5">
                          {crypto.nombre}
                          <span className="ml-3 text-gray-400 uppercase">
                            BTC
                          </span>
                        </div>
                        <div className="inline-block w-[30%] mx-[10%] text-[20px] font-bold text-white">
                          {cryptoCuenta}
                        </div>

                        <div
                        // className={
                        //   crypto.price_change_percentage_24h > 0
                        //     ? "text-green-500"
                        //     : "text-red-500"
                        // }
                        >
                          {/* {crypto_price_porcentaje24hs}% */}
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
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
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
