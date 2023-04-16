import React from 'react'

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center px-3 py-5">
    <div className="w-full bg-white text-gray-800 overflow-hidden border-4 border-white rounded-4xl shadow-lg relative">
        <div className="phone-top"><div className="phone-top-inner"></div></div>
        <div className="w-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white">
            <div className="mb-5">
                <input type="text" className="w-full text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50" placeholder="Search..." />
            </div>
            <h1 className="text-3xl font-light mb-3">Market Overview</h1>
        </div>
        <div className="bg-gray-50 px-2">
            <ul className="relative -top-10">
                <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                    <div className="flex items-center">
                        <div className="w-16 text-3xl leading-none">
                            <i className="cc BTC text-yellow-500"></i>
                        </div>
                        <div className="w-full">Bitcoin <span className="ml-3 text-gray-400">BTC</span></div>
                        <div className="text-green-500">+0.65%</div>
                    </div>
                </li>
                <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                    <div className="flex items-center">
                        <div className="w-16 text-3xl leading-none">
                            <i className="cc ETH text-gray-700"></i>
                        </div>
                        <div className="w-full">Ethereum <span className="ml-3 text-gray-400">ETH</span></div>
                        <div className="text-green-500">+0.98%</div>
                    </div>
                </li>
                <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                    <div className="flex items-center">
                        <div className="w-16 text-3xl leading-none">
                            <i className="cc XLM text-blue-300"></i>
                        </div>
                        <div className="w-full">Stellar <span className="ml-3 text-gray-400">XLM</span></div>
                        <div className="text-red-500">-1.24%</div>
                    </div>
                </li>
                <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500">
                    <div className="flex items-center">
                        <div className="w-16 text-3xl leading-none">
                            <i className="cc XRP text-blue-700"></i>
                        </div>
                        <div className="w-full">Ripple <span className="ml-3 text-gray-400">XRP</span></div>
                        <div className="text-green-500">+0.30%</div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="px-5 bg-white pb-2">
            <div className="flex">
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span className="block px-1">
                            <i className="far fa-home text-xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-1">Home</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span className="block px-1">
                            <i className="far fa-compass text-xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-1">Explore</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span className="block px-1">
                            <i className="far fa-search text-xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-1">Search</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span className="block px-1">
                            <i className="far fa-cog text-xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-1">Settings</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home