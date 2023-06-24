<template>
    <div class = "root">
        <div class ="field">
            
            <GameButton v-for="button in BUTTONS"
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
        @closePop = "closePopUp()"
        @UserName = "UserName"
        />
        
    </div>
</template>

<script>

import GameButton from './GameButton.vue';
import g_PopUp from './Game_PopUp/G_PopUp.vue';
import { mapActions,mapGetters } from 'vuex';

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
            user:
            [
                {
                    id: 0,
                    name: "empty"
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
        ...mapActions(
            [
                'GET_BUTTONS_API',
                'GET_USERS_API',
                'ADD_USER'
            ]
        ),
        showPlayer(data)
        {   
            this.player = data == true? false:true

        },
        buttonState(data)
        {
            this.BUTTONS[data[0]].state =data[1]
            this.CheckWinner()  
        },
        CheckWinner()
        {
            for (let i=0;i<8;i++)
            {   
                if (this.BUTTONS[this.Winner[i][0]].state == this.BUTTONS[this.Winner[i][1]].state &&  
                this.BUTTONS[this.Winner[i][0]].state == this.BUTTONS[this.Winner[i][2]].state && 
                this.BUTTONS[this.Winner[i][0]].state != null)
                {
                    console.log('Победил ', this.BUTTONS[this.Winner[i][0]].state)
                    this.PopUpVisible = true
                }
            }
        },
        closePopUp()
        {
            this.PopUpVisible = false
            for (let i =0;i<9;i++)
            {
                this.BUTTONS[i].state = null
            }
        },
        UserName(data)
        {
            this.user.name = data
            this.user.id = 4
            this.ADD_USER( this.user)
            console.log(this.user)
        }
    },
    mounted(){
        this.GET_BUTTONS_API(),
        this.GET_USERS_API()
    },
    computed:
    {
        ...mapGetters([
            'BUTTONS',
            'USERS'
        ])
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