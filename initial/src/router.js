import Vue from 'vue'
import Router from 'vue-router'

import GameXO from './components/ContentMenu/GamePage/GameField'
import ListUsers from './components/ContentMenu/ListUsers'

Vue.use(Router)

let router = new Router(
    
    {
        mode: 'history',
        routes: 
        [
            {
                path:'/Game',
                name: 'Game',
                component: GameXO
            },
            {
                path: '/ListUsers',
                name: 'ListUsers',
                component: ListUsers
            }

        ]
    }
)

export default router;