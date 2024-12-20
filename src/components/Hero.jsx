import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruckFast, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/e0d1/a272/fc7b9a86d0d47a85eb643a2756c7d0d5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7NgfxOjuPDpAfyfI1PRei-TTX4zUCY8XCmot-hbIJp9qQlhDtsqvr~7npSAzQMuezmS0ClRtY3MdFpY65id7qx8~D0QSGtWmyMqnHP-j9CECBLKFJvjUl6T9maI8SyfXeHvMR~9yieLSSJo82vL5cLZgvvnKSbG6u~GywwhDfX-LMMf~mm9VB8KRQiKsiYls0gMDMrE3GgHwZf4xXbDAkKd7EeZ12hXZ6hbM84b9XuCRZSdYtmfkafCpTDQtjv-EqDXl-0Tu4DtSNnP1yx-ZuKjWC1W0pQwhJgSOJP9oLy9YaJIhGWDUN4-e7mFp4gmrQubeWhasE4Rj7XyLNuq~A__')`,
                }}
            ></div>

            {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}

            <Navbar />

            <div className="relative z-10 ml-24 flex flex-col items-start text-white w-1/2 mb-40">
                <p className='font-montserrat font-medium text-base '>Microseconds Matter</p>
                <p className='font-montserrat font-bold text-6xl mt-4 mb-9'>Win your horserace
                    with TTL supplements</p>
                <p className='font-montserrat font-normal text-2xl'>Scientifically formulated racehorse supplements from the home of champions </p>
                <button className='bg-primaryRed mt-20 py-3 px-5 rounded-3xl'>
                    Discover
                </button>
            </div>
            
        </div>
    )
}

export default Hero