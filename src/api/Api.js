export const Api = {
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',
    authorization: 'markinativo@hotmail.com',

    //CRIEI ROTAS PARA A APLICAÇÃO INSOMNIA DE ACORDO COM OS MÉTODOS

    lerTudoUrl: () => Api.baseUrl + '/',
    lerUmUrl: (id) => Api.baseUrl + '/' + id,
    criarUrl: () => Api.baseUrl + '/',
    deletarTudoUrl: () => Api.baseUrl + '/',
    deletarUmURL: (id) => Api.baseUrl + '/' + id,
    atualizarUrl : (id) => Api.baseUrl + '/' + id,




    //GET REQUEST
    buildApiGetRequest : url => {
        return fetch(
            url, {
                method: 'GET',
                headers: new Headers({
                    Authorization: Api.authorization,
                })
            }
        )
    },

    //CREATE REQUEST

    buildApiPostRequest: (url, body) => {
        return(
            fetch(url, {
                method: 'POST',
                headers: new Headers({
                    Authorization: Api.authorization,
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(body)
            })
        )
    },

    //DELETE REQUEST TUDO

    buildApiDeleteRequest: (url => {
        return fetch( url, {
            method: 'DELETE',
            headers: new Headers({
                Authorization: Api.authorization,
            })
        }

        )
    }),

    //UPDATE REQUEST
    buildApiPutRequest :(url, body) =>{
        return fetch(url , {
            method: 'PUT',
            headers: new Headers({
                Authorization: Api.authorization,
                'Content-Type': 'application/json',

            }),
            body: JSON.stringify(body)
        })
    }

}