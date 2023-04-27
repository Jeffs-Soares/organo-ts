import './CampoTexto.css';

interface CampoTextoProps{
    aoAlterado: (target: string) => void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio?: boolean,
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado, placeholder, label, valor, obrigatorio = false, tipo='text'}: CampoTextoProps) => {
   
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
            type={tipo}
            />
        </div>
    )
}

export default CampoTexto;