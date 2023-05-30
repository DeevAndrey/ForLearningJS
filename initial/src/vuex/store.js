import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        buttons:[]
    },
    mutations:{
        SET_BUTTONS_TO_STATE: (state,buttons)=>{
            state.buttons = buttons
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
        }
    },
    getters:{
        BUTTONS(state){
            return state.buttons;
        }
    }
});

export default store;