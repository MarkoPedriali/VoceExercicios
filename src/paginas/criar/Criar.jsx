import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as C from './styledC';
import { Api } from '../../api/Api';


export default function Criar(){

    const [nome, setNome] = useState('');
    const [reps, setReps] = useState('');
    const [series, setSeries] = useState('');
    const [url, setUrl] = useState('');

    const history = useHistory();

    const item = {
        nome: nome,
        reps: reps,
        series: series
    }

    const submitHandler = async event => {
        event.preventDefault();

        const request = await Api.buildApiPostRequest(Api.criarUrl(), item).catch(e => {
            console.error('Erro ao tentar adicionar o item ao banco: ', e);
        })

        const result = await request.json();
        const id = result._id;

        history.push(`/ver/${id}`, result);
    }

    return(
        <>
        <C.Title>Adicione um exercício</C.Title>
        <C.Criar>
            <C.Form onSubmit={submitHandler}>
                <C.Label htmlFor="nome" onChange={e => setNome(e.target.value)} required>Nome do exercício:</C.Label>
                <C.Select onChange={e => setNome(e.target.value)} required>
                    <C.Option></C.Option>
                    <C.Option>Supino</C.Option>
                    <C.Option>CrossOver</C.Option>
                    <C.Option>PullOver</C.Option>
                    <C.Option>Remada lateral</C.Option>
                    <C.Option>Barra Fixa</C.Option>
                    <C.Option>Adutora</C.Option>
                    <C.Option>Extensora</C.Option>
                    <C.Option>Agachamento</C.Option>
                    <C.Option>Afundo</C.Option>
                    <C.Option>Leg Press</C.Option>
                </C.Select>
                
                <C.Label htmlFor="series">Números de séries:</C.Label>
                <C.Input type="number" min="1" onChange ={ e => setSeries(e.target.value)}required/>

                <C.Label>Repetições:</C.Label>
                <C.Input type="number" min="1" onChange ={ e => setReps(e.target.value)} required/>

                <C.botao type='submit' value ='ADICIONAR'></C.botao>
            </C.Form> 
        </C.Criar>
        </>
    )
}