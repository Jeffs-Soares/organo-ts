import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    return (

        <div className='lista-suspensa'>

            <label>{props.label} </label>
            <select onChange={e => props.aoAlterado(e.target.value)} value={props.valor} required={props.required}>
                <option> Selecione o seu time </option>
                {props.itens.map(item => <option key={item}> {item}</option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa;