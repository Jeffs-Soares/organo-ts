import './ListaSuspensa.css';

interface ListaSuspensaProps{
    aoAlterado: (target: string) => void,
    label: string,
    required: boolean,
    valor: string,
    itens: string[]

}

const ListaSuspensa = (props: ListaSuspensaProps) => {

    return (

        <div className='lista-suspensa'>

            <label>{props.label} </label>
            
            <select
            onChange={e => props.aoAlterado(e.target.value)}
            value={props.valor}
            required={props.required}
            >

                <option> Selecione o seu time </option>
                {props.itens.map(item => <option key={item}> {item}</option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa;