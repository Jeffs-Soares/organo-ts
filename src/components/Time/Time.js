import Colaborador from '../Colaborador/Colaborador';
import './Time.css';


const Time = (props)=>{
 
    return (

        //Way 1

       /* (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nameTime}</h3>
            <div className='colaboradores'>

            
            {props.colaboradores.map(colaborador => <Colaborador
                                                        nome={colaborador.nome}
                                                        cargo = {colaborador.cargo}
                                                        imagem = {colaborador.imagem}
                                                        />)}



            </div>
        </section> */



        // Way 2

(props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nameTime}</h3>
            <div className='colaboradores'>

            
            {props.colaboradores.map(colaborador => <Colaborador
                                                        corDeFundo={props.corPrimaria}
                                                        key={colaborador.nome}
                                                        nome={colaborador.nome}
                                                        cargo = {colaborador.cargo}
                                                        imagem = {colaborador.imagem}
                                                        />)}



            </div>
        </section>

        : ''

    )
}

export default Time;