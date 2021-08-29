import * as A from './styledA';
import Loading from '../../componentes/loading/Loading';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../../api/Api';


export default function AtualizarUm(props){

    const state = props.location.state;
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const [ nome, setNome ] = useState(state.nome);
    const [ series, setSeries ] = useState(state.series);
    const [ reps, setReps ] = useState(state.reps);

    const item = {
        nome : nome,
        series : series,
        reps : reps
    }

    const submitHandler = async event => {
        setLoading(true);
        event.preventDefault();

        const request = await Api.buildApiPutRequest(Api.atualizarUrl(state._id), item).catch(e => {
            console.error('Erro ao tentar atualizar o item ao banco: ', e);
        })

        const result = await request.json();
        const id = result._id; 
        
        history.push(`/ver/${id}`, item); 
    }

    return(
        <>
            {loading ===true ? <Loading/> :
                <>
                    <A.Title>Adicione um exercício</A.Title>
            <A.Criar>
            <A.Form onSubmit={submitHandler}>
                <A.Label htmlFor="nome">Nome do exercício</A.Label>
                <A.Select onChange={e => setNome(e.target.value)} value ={item.nome} required>
                <A.Option></A.Option>
                    <A.Option>Supino</A.Option>
                    <A.Option>CrossOver</A.Option>
                    <A.Option>PullOver</A.Option>
                    <A.Option>Remada lateral</A.Option>
                    <A.Option>Barra Fixa</A.Option>
                    <A.Option>Adutora</A.Option>
                    <A.Option>Extensora</A.Option>
                    <A.Option>Agachamento</A.Option>
                    <A.Option>Afundo</A.Option>
                    <A.Option>Leg Press</A.Option>
                </A.Select>

                <A.Label htmlFor="series">Números de séries:</A.Label>
                <A.Input type="number" min="1" onChange ={ e => setSeries(e.target.value)} value ={item.series} required/>

                <A.Label>Repetições:</A.Label>
                <A.Input type="number" min="1" onChange ={ e => setReps(e.target.value)} value ={item.reps} required/>

                <A.botao type='submit' value ='Atualizar'></A.botao>
            </A.Form> 
        </A.Criar>
                </>
            }
        </>
    )
}