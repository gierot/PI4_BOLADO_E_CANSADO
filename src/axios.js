const route = 'http://192.168.15.157:6969/api'

var retorno;
import axios from 'axios'
// const header = {
//     'Authorization': 'Bearer my-token',
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, OPTIONS, DELETE, POST, PUTCH',
//     'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
// };
const state = {
    data_user : {
        nome: '',
        senha: '',
        id:''
    },
    values : 0
};
const getters = {
    get_user : state => state.data_user
};
const actions = {
    async verifyAccontUser({ commit }, data) {
        await axios.post(route + '/login', data)
        .then((response) => {
            retorno = response.data.sucesso    
            commit('verifyAccontUser', response.data)
        })
        return retorno
    },

    async registerUser({ commit }, data) {
        axios.post(route + '/criar-usuario', data)
        .then((response) => {
            retorno = response.data.sucesso    
            commit('verifyAccontUser', response.data)
        })
        return retorno;
    },

    // async getTemperatura({ commit }, data) {
    //     axios.get('http://192.168.15.157:6969/api/temperatura-umidade', { headers: this.header })
    //         .then((response) => {
    //             console.log(response)
    //         })  
    // }
    
    async getSensorChoice({ commit }, data) {
        let values;
        if (data === '/leitor-rfid/') {
            await axios.get(route + data + state.data_user.id)
            .then((response) => {
                values = response.data
                commit('testeValues', response.data)
            })
        } else {
            await axios.get(route + data)
            .then((response) => {
                values = response.data
                commit('testeValues', response.data)
            })
        }
        return values;
    },
};
const mutations = {
    verifyAccontUser(state, data) {
        console.log(data)
        state.data_user.nome = data.nome
        state.data_user.senha = data.senha
        state.data_user.id = data.id
    },

    testeValues(state, data){
        state.values = data
    },
};

export default { 
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}