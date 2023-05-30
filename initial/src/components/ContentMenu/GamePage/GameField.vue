<template>
    <div class = "root">
        <div class ="field">
            
            <GameButton v-for="button in GameButtons"
            :key="button.id"
            :player="player"
            :PopUpVisible="PopUpVisible"
            :button_data="button"
            @sendPlayer="showPlayer"
            @buttonState="buttonState"
            />
        </div>
        <g_PopUp class="modal" 
        v-if="PopUpVisible"
        @closePop = "closePopUp()"/>
    </div>
</template>

<script>

import GameButton from './GameButton.vue';
import g_PopUp from './Game_PopUp/G_PopUp.vue';

export default{
    name: 'GameXO', 
    data()
    {
        return{
            PopUpVisible: false,
            Winner:
            [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ],
            GameButtons:
            [
            {
                id: 0,
                state: null
            },
            {
                id: 1,
                state: null
            },
            {
                id: 2,
                state: null
            },
            {
                id: 3,
                state: null
            },
            {
                id: 4,
                state: null
            },
            {
                id: 5,
                state: null
            },
            {
                id: 6,
                state: null
            },
            {
                id: 7,
                state: null
            },
            {
                id: 8,
                state: null
            }
            ],
            player: true}
    } ,
    components:
    {
        GameButton,
        g_PopUp
    },
    methods: 
    {
        showPlayer(data)
        {   
            this.player = data == true? false:true

        },
        buttonState(data)
        {
            this.GameButtons[data.id].state =data.state
            this.CheckWinner()  
        },
        CheckWinner()
        {
            for (let i=0;i<8;i++)
            {   
                if (this.GameButtons[this.Winner[i][0]].state == this.GameButtons[this.Winner[i][1]].state &&  
                this.GameButtons[this.Winner[i][0]].state == this.GameButtons[this.Winner[i][2]].state && 
                this.GameButtons[this.Winner[i][0]].state != null)
                {
                    console.log('Победил ', this.GameButtons[this.Winner[i][0]].state)
                    this.PopUpVisible = true
                }
            }
        },
        closePopUp()
        {
            this.PopUpVisible = false
        }
    }

}

</script>

<style>
.root
{
    height: 99%;
}
.modal
{
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  left:30%;
  top:70%;
  width: 100%;
  height: 15%;
  z-index: 2;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 0, 0, 0.904);
  opacity: 100%;
  transition: opacity .4s, visibility .4s;
}
.field{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 99%;
    margin-Top: 10px
}
</style>