'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import '../styles/streaming.css';

const Streaming = () => {
    return (
        <div className='streaming-container'>
            <div className='streaming-logo-price-container'>
                <Link href="https://www.Netflix.com/">
                    <div className='streaming-logo-price-container'>
                        <Image className="streaming-logo" src={"/streaming/netflix.jpg"} width="90" height="60" alt=""></Image>
                        <p>$8.99</p>
                    </div>
                </Link>
            </div>
            <div className='streaming-logo-price-container'>
                <Link href="https://www.peacocktv.com/">
                    <div className='streaming-logo-price-container '>
                        <Image width={90} height={60} className="streaming-logo" src={"/streaming/apple.jpg"} alt="" />
                        <p>$8.99</p>
                    </div>
                </Link>
            </div>
            <div className='streaming-logo-price-container'>
                <Link href="https://www.hulu.com/">
                    <div className='streaming-logo-price-container '>
                        <Image width={90} height={60} className="streaming-logo" src={"/streaming/hulu.jpg"} alt="" />
                        <p>$8.99</p>
                    </div>
                </Link>
            </div>
            <div className='streaming-logo-price-container'>
                <Link href="https://www.peacocktv.com/">
                    <div className='streaming-logo-price-container '>
                        <Image width={90} height={60} className="streaming-logo" src={"/streaming/peacock.jpg"} alt="" />
                        <p>$8.99</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Streaming
