const route = 'http://192.168.15.157:6969/api'
import axios from 'axios'
var retorno;

const state = {
    data_user : {
        nome: '',
        senha: '',
        id:''
    },
    values: 0,
    card:''
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
        .catch((error) => {
            console.log(error)
            retorno = false
        })
        return retorno
    },

    async registerUser({ commit }, data) {
        await axios.post(route + '/criar-usuario', data)
        .then((response) => {
            retorno = response.data.sucesso    
            commit('verifyAccontUser', response.data)
        })
        .catch((error) => {
            console.log(error)
            retorno = false
        })
        return retorno;
    },

    registerCard({ commit }, data) {
        axios.post(route + data, { usuarioId: state.data_user.id })
        .then((response) => {
            retorno = response.cadastro
            commit('registerCard', retorno)
        })
        .catch((error) => {
            console.log(error)  
        })
    },
    
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
        state.data_user.nome = data.nome
        state.data_user.senha = data.senha
        state.data_user.id = data.id
    },

    testeValues(state, data){
        state.values = data
    },

    registerCard(state, data) {
        state.card = data
    }
};

export default { 
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}