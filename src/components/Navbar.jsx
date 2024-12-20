import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import basket from "../assets/basket.png"

const Navbar = () => {
    return (
        <div className=' relative z-10 flex items-center justify-between px-24 py-3'>
            <img
                src="https://s3-alpha-sig.figma.com/img/6186/73fa/ba3eaf429acea64136d2cfc533bef868?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bxkJ14HiCOy7QNF8fgDxMqmUxfUfHOdnc0mFTCu6TqYq1RjkVmdfdpanPOdk9kZNv4XGt5dyrz67u5Mi9VZ29VF7PHXdACyg6WWXTV5ThEg1wXnSs6-O9jms9tOkxpYO9LHjFJaiZhJbjhd3F9jrE3gOV~8qZRJPNHV7Ea~yX1sEBOe3VFW2JSvZ2iQgmEKfd2xMS1r97VO~BhHAO~8n2J7-7HFDum~DzhPtMTJ9HN0fpy14cEW3QMCnuko-wjsyLL5ftwoPc63t5lm2UE-BnMLWxcX-fOM7gFxRB~KJxIlAB~qJJQWtRR9FeW2tim6IaPu92lF4Z35WKknf5fIPuA__"
                alt="Logo"
                className="h-16 w-auto invert"
                style={{
                    filter: "brightness(0) saturate(100%) invert(100%)",
                }}
            />
            <div className='text-white flex gap-12 font-montserrat font-medium text-base '>
                <a href="">Shop All</a>
                <a href="">Shop by Benefits</a>
                <a href="">About</a>
                <a href="">Bundles</a>
                <a href="">Contact</a>
            </div>

            <div className='text-white flex items-center gap-12'>
                <FontAwesomeIcon className='size-5' icon={faMagnifyingGlass} />
                <img className='size-5' src={basket} alt="basket" />
                <FontAwesomeIcon className='size-5' icon={faUser} />
            </div>
        </div>
    )
}

export default Navbar