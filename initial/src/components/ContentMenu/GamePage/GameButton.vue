<template>
    <div class = "root">
        <button class ="GameButton" 
            :disabled="PopUpVisible" 
            v-on:click=" NewState() ">{{button_data.state}}
        </button>
    </div>
</template>

<script>
export default{
    name: 'GameButton',
    props:{
        player:{
            type: Boolean
        },
        button_data:{
            type: Object,
            default(){return null}
        },
        PopUpVisible:
        {
            type: Boolean
        }
    },
    methods: 
    {
        NewState()
        {
            if (this.player == true && this.button_data.state == null)
            {
                this.$emit('sendPlayer',this.player)
                this.$emit('buttonState',[this.button_data.id,'O'])
            }
            else if (this.player == false && this.button_data.state == null)
            {
                this.$emit('sendPlayer',this.player)
                this.$emit('buttonState',[this.button_data.id,'X'])
            }
            
        }
    }
}

</script>

<style>
.GameButton{
    height: 99%;
    width: 99%; 
    font-size: 60px;
}

</style>