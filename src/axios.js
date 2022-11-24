//import axios from 'axios'
// const header = {
//     'Authorization': 'Bearer my-token',
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, OPTIONS, DELETE, POST, PUTCH',
//     'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
// };
const state = {
    data_user : {
        name: '',
        password:''
    }
};
const getters = {
    get_user : state => state.data_user
};
const actions = {
    async verifyAccontUser({ commit }, data) {
        console.log(data)
        commit('verifyAccontUser', data)
        //await axios.post('https://localhost:6969/api/login',{headers: header}, data)
        //.then((response) => {
        //    if (response.data.sucesso) {
        //        commit('verifyAccontUser', response.data)
        //    }
        //})
        //.catch((error) => { 
        //    console.log(error)
        //})
        return true   
    },

    async registerUser({ commit }, data) {
        let user = {
            name: data.name,
            password: data.password
        }
        commit('verifyAccontUser', user)
        return true;
    }
};
const mutations = {
    verifyAccontUser(state, data) {
        state.data_user.name = data.name
        state.data_user.password = data.password
    },
};

export default { 
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}