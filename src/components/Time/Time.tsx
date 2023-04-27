import { IColaborador } from "../../shared/interfaces/IColaborador";
import Colaborador from "../Colaborador/Colaborador";

import "./Time.css";

interface TimeProps{
  corPrimaria: string,
  corSecundaria: string,
  nameTime: string,
  colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
  
    return props.colaboradores.length > 0 ? (
    
    
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderColor: props.corPrimaria }}> {props.nameTime}</h3>
        <div className="colaboradores">
            {props.colaboradores.map((colaborador) => (
            <Colaborador
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                data={colaborador.data}
            />
            ))}
        </div>
        </section>
  ) : (
    <></>
  );
};

export default Time;
