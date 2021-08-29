import * as L from './styledLer';
import { useState } from 'react';
import { useEffect } from 'react';
import { Api } from '../../../api/Api';
import Card from '../../../componentes/card/Card';

export default function LerTodos(){

    const [data,setData] = useState([]);
    
    useEffect (() => {
        async function fetchAPi(){ 
            let response = await Api.buildApiGetRequest(
                Api.lerTudoUrl()
            ).catch(e =>{
                console.error('Erro ao ler itens no banco de dados:', e);
            })

            response = await response.json();
            setData(response);
        } 

        fetchAPi();

    },[]) 


    return(
        <>
        <L.Title>Lista de exercícios</L.Title>
        {
            data.length > 0 ? (
            
                <L.CardAread>
                    
                    {
                        data.map( (item) => (
                            <L.Linked to ={{ pathname:`/ver/${item._id}`, state: item }} key={item._id}>
                                <Card url={item.url} nome={item.nome}/> {/*componente*/}
                            </L.Linked>
                        ))
                    }
                </L.CardAread>
            ) : (
                <L.CardAread>
                    <L.Title>Não há exercícios cadastrados</L.Title>
                </L.CardAread>
            )
        }
        </>
       
    )
}