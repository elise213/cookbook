import React from 'react'
import Link from 'next/link';
import styles from "../screenings/screenings.css"
import Image from 'next/image';

const Resources = () => {
    return (
        <div className='screenings-container'>
            <Image height={600} width={600} className="screenings-image" src={"/img/sample6.png"} alt=""></Image>
            <div className='about'>
                <span className=''>
                </span>
            </div>
        </div>
    )
}

export default Resources








