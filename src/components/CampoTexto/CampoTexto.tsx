import { useState } from 'react';
import './CampoTexto.css';

interface CampoTextoProps{
    aoAlterado: (target: string) => void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio?: boolean
}

const CampoTexto = ({aoAlterado, placeholder, label, valor, obrigatorio = false}: CampoTextoProps) => {
   
    const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value);
    }

    return (

        <div className='campo-texto'>
            <label> {label} </label>

            <input
            value={valor}
            onChange={aoDigitado}
            required={obrigatorio}
            placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto;