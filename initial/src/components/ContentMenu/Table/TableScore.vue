<template>
    <div class = "UserArea"
    @keydown="keydown($event)"
    @mousedown="MouseDown()">
        <CardUser v-for="user in USERS"
            :key="user.id"
            :user_data="user"
            :IsMouseDown = "IsMouseDown"
            @TextContent = "TextContent"
            />
    </div>
</template>

<script>

import CardUser from './CardUser.vue';
import { mapActions,mapGetters } from 'vuex';


export default{
    components: {CardUser},
    name: "TableScore",
    data() {
        return {
            IsMouseDown: false,
            buff:[]
        };
    },
    methods: 
    {
        ...mapActions(
            [
                'GET_USERS_API'
            ]),
            MouseDown(){
                console.log(this.IsMouseDown)
                this.IsMouseDown = true
            },
            TextContent(data)
            {
                this.buff.push(data)
                console.log(this.buff)
            },
            keydown: function(event)
            {
                if (event.key == 'c' && event.ctrlKey )
                {
                    console.log("copy")
                    navigator.clipboard.writeText(this.buff)
                }
            }
    },
    mounted(){
        this.GET_USERS_API()
    },
    computed:
    {
        ...mapGetters([
            'USERS'
        ])
    }
}

</script>

<style>
.UserArea {
     display: flex;
    align-items: flex-start; 
    flex-direction: column;
     margin-top: 20px; 
}

</style>
