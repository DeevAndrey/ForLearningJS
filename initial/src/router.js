import Vue from 'vue'
import Router from 'vue-router'

import GameXO from './components/ContentMenu/Game'
import BuildWell from './components/ContentMenu/BuildWell'

Vue.use(Router)

let router = new Router(
    
    {
        mode: 'history',
        routes: 
        [
            {
                path:'/Game',
                name: 'main',
                component: GameXO
            },
            {
                path: '/Build',
                name: 'Build',
                component: BuildWell
            }

        ]
    }
)

export default router;