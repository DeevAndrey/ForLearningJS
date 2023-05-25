<template>
    <div class = "root">
        <div class ="field">
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>
            <GameButton :player="player" 
            @click=" ChangePlayer()"
            @sendPlayer="showPlayer"/>

        </div>
    </div>
</template>

<script>

import GameButton from './GameButton.vue';
export default{
    name: 'GameXO', 
    data()
    {
        return{player: true}
    } ,
    components:
    {
        GameButton
    },
    methods: 
    {
        showPlayer(data)
        {   
            console.log(this.player)
            if (data == true)
            {
                
                this.player = false
            }
            else
            {
                this.player = true
            }
        }
    }

}

</script>

<style>

.field{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 99%;
    margin-Top: 10px
}
</style>