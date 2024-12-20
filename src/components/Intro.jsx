import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruckFast, faHeadset, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


const Intro = () => {
    return (
        <div className='relative z-20'>
            <div className=' flex justify-center items-center gap-9 -mt-10 mb-24 '>
                <div className='bg-lightPink flex items-center px-3 py-3 rounded-full gap-3 w-1/6'>
                    <div className=' bg-white rounded-full p-3 flex items-center justify-center'>
                        <FontAwesomeIcon className='text-primaryRed size-5' icon={faBox} />
                    </div>
                    <p className='font-montserrat font-medium text-sm'>Never Got Returned Products</p>
                </div>

                <div className='bg-lightPink flex items-center px-3 py-3 rounded-full gap-3 w-1/6'>
                    <div className=' bg-white rounded-full p-3 flex items-center justify-center'>
                        <FontAwesomeIcon className='text-primaryRed size-5' icon={faTruckFast} />
                    </div>
                    <p className='font-montserrat font-medium text-sm'>Fast Delivery</p>
                </div>

                <div className='bg-lightPink flex items-center px-3 py-3 rounded-full gap-3 w-1/6'>
                    <div className=' bg-white rounded-full p-3 flex items-center justify-center'>
                        <FontAwesomeIcon className='text-primaryRed size-5' icon={faHeadset} />
                    </div>
                    <p className='font-montserrat font-medium text-sm'>Customer Support</p>
                </div>

                <div className='bg-lightPink flex items-center px-3 py-3 rounded-full gap-3 w-1/6'>
                    <div className=' bg-white rounded-full p-3 flex items-center justify-center'>
                        <FontAwesomeIcon className='text-primaryRed size-5' icon={faHeadset} />
                    </div>
                    <p className='font-montserrat font-medium text-sm'>Lorem Ipsum</p>
                </div>

            </div>

            <div className='flex items-center justify-between mx-24 '>
                <div className='w-2/5 flex flex-col items-start'>
                    <p className='font-montserrat font-semibold text-black text-3xl'>Uniquely formulated
                        for horse trainers</p>
                    <p className='font-montserrat  font-bold text-primaryRed text-4xl mt-2 mb-4'>Who Want to Win</p>
                    <p className='font-montserrat font-light text-lg text-[##414142]'>From joint health to muscle strength, our products keep your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you’ve been aiming for.</p>
                    
                    <button className="group bg-primaryRed mt-12 py-3 px-5 rounded-3xl flex items-center text-white gap-2 transform transition-all duration-500 hover:bg-red-800 hover:pr-8 cursor-pointer">
                        Get Race Ready
                        <FontAwesomeIcon className="size-5 transform group-hover:translate-x-3 transition-transform duration-500" icon={faArrowRightLong} />
                    </button>

                </div>
                <div className='w-1/2'>
                    <img src="https://s3-alpha-sig.figma.com/img/61ba/62f5/55c8d87975e8e71ec7a28a3e3eb00e9e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DKYVl7cafz2DozQgQk-elNHUCI0YI2PQmoqlAyIAMdqzVcZ1JQ7dKyk2ey~YjiHDrI4vrvYvAZtnljkNfsJTBvRGa5rKJpQJpWJWUzi4KQkEXjX9CXLpzDMpPIwGpdKvDc162YV4EaNtXuApu46A3l4vwSycEZF-FyJvVo2WLzz0Uh2UhH1ZL-xagn5~CAKgeY7V-IdoRZkd6oOX8654UHEUnE~i2GkFjqtioeuQ-fb7jA~WY6jY3OG1TSUrCy6lzXPKSUUqncIhLyoQZNlIgTVXlBNckApHszbA1qs69flkZnIl06zbQfOq9ia6b7TdhqOMhiIm2fIKyA-Ih70RaQ__"
                        alt="intro"
                        className='rounded-3xl'
                    />
                </div>
            </div>

            {/* Intro 2 */}

            <div className='flex items-center justify-between mx-24 mt-24 '>
                <div className='w-1/2'>
                    <img src="https://s3-alpha-sig.figma.com/img/21bf/6ec3/3bd39c576a3c05564def7cc7cfa405fc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLrI1R8hJ8B-gp2WDYrWwQ~EG2j~ae9b-d-3N9eAqqA1WISj-9v9gzvookmHdpZ5HPFHACiAs2Ruq5JGra3fY39DW6zB~xuh~cbtef4DEd-Bkxl~sgjyrXn9Sdy7rqGNP1D5IqYR9GzW5kYlLnLsGcjTr4rzOA2vOa40d-doOpwEDoXIuX7BvHRYKzqernsOiZuaEYu0l1wx~mKhtjiKSZ19yHOUu6i0Z5weiehryJueuelKkZCikaFFj4sYfMYo9NL63y46fAHpJHxo8Ng6SqLf7FPDO8q~VLT6erUcmJSp2wWRS8zcXrq3XbNouD9fqMjgpCnGJkQCvMpC5gAbsg__"
                        alt="intro"
                        className='rounded-3xl'
                    />
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <p className='font-montserrat font-semibold text-black text-3xl'>Natural</p>
                    <p className='font-montserrat  font-bold text-primaryRed text-4xl mt-2 mb-4'>Bleeder Remedy</p>
                    <p className='font-montserrat font-light text-lg text-[##414142]'>While more than 95% of racehorses experience exercise-induced pulmonary haemorrhage (EIPH), commonly known as bleeders, you want to avoid exposing them to side effects like dehydration from potent drugs. TTL's BleederShield can help strengthen capillaries in the lungs, reduce oxidative stress, and improve blood flow.</p>
                    <button className="group bg-primaryRed mt-12 py-3 px-5 rounded-3xl flex items-center text-white gap-2 transform transition-all duration-500 hover:bg-red-800 hover:pr-8 cursor-pointer">
                        Get Race Ready
                        <FontAwesomeIcon className="size-5 transform group-hover:translate-x-3 transition-transform duration-500" icon={faArrowRightLong} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Intro