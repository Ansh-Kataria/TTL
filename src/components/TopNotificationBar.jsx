import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const TopNotificationBar = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-white bg-primaryRed py-4 sm:py-3'>
            <div className='flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faBolt} />
                <p className='font-montserrat font-normal text-xs sm:text-sm lg:text-base hover:underline'>UNLOCK THE PRE-RACE PASTE</p>
            </div>
            <p className='font-montserrat font-normal text-xs sm:text-sm lg:text-base'>Find the sprint to be finish! 1 FREE with a 7 pack</p>
        </div>
    )
}

export default TopNotificationBar