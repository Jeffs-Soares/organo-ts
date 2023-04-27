import './Banner.css';
import React from 'react';

interface BannerProps{
    enderecoImagem: string,
    textoAlternativo?: string
}

const Banner = ({enderecoImagem, textoAlternativo}:BannerProps) => {
    return (
        <header className='banner'>
            {/* <img src="/imgs/banner.png" alt=""></img> */}
            <img src={enderecoImagem} alt={textoAlternativo}></img>
        </header>
    )
}

export default Banner;