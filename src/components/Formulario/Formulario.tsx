import { useState } from 'react';
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';
import { IColaborador } from '../../shared/interfaces/IColaborador';
interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void,
    times: string[],

}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');


    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        
        setNome('');
        setCargo('');
        setImagem('');
        setData('');
        setTime('Selecione o seu time');

    }

    return (

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto

                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}

                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                
                    label="Imagem"
                    placeholder="Digite o endereço de sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                
                <CampoTexto
                    label="Data"
                    placeholder=""
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>

            
        </section>
    )
}

export default Formulario;