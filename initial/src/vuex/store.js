import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        buttons:[],
        users:[]
    },
    mutations:{
        SET_BUTTONS_TO_STATE: (state,buttons)=>{
            state.buttons = buttons
        },
        SET_USERS_TO_STATE: (state,users)=>{
            state.users = users
        },
        SET_USER:(state,user)=>{
            state.users.push(user)
        }
    },
    actions:{
        GET_BUTTONS_API({commit}){
            return axios('http://localhost:3000/Buttons', {
            method: "GET"
            })
            .then((buttons)=>{
                commit('SET_BUTTONS_TO_STATE',buttons.data)
                return buttons
            })
            .catch((error)=>
            {
                console.log(error)
                return error
            })
        },
        GET_USERS_API({commit}){
            return axios('http://localhost:3000/Users', {
            method: "GET"
            })
            .then((users)=>{
                commit('SET_USERS_TO_STATE',users.data)
                return users
            })
            .catch((error)=>
            {
                console.log(error)
                return error
            })
        },
        ADD_USER({commit},user){
            commit('SET_USER',user);
        }
    },
    getters:{
        BUTTONS(state){
            return state.buttons;
        },
        USERS(state){
            return state.users;
        }
    }
});

export default store;