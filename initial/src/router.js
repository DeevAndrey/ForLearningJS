import Vue from 'vue'
import Router from 'vue-router'

import GameXO from './components/ContentMenu/GamePage/GameField'
import TableScore from './components/ContentMenu/Table/TableScore'

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
                path: '/TableScore',
                name: 'TableScore',
                component: TableScore
            }

        ]
    }
)

export default router;