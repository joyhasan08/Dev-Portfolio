import React from 'react';
import zar from '../assets/logo/titleLogo.png'

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 bg-gray-100 text-gray-600">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 rounded-full bg-default-600">
                            <img className='w-64 border-2  border-yellow-300 rounded p-1' src={zar} alt="" />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a rel="noopener noreferrer" href="#">Instagram</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Facebook</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;