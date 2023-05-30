<template>
    <div class = "root">
      <button v-on:click=" NewState() ">{{local_button_data.state}}</button>
    </div>
</template>

<script>
export default{
    name: 'GameButton',
    props:{
        player:{
            type: Boolean,
            default(){return true}
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
    data(){
        return{
            local_button_data:
            {
                id:this.button_data.id,
                state: this.button_data.state
            }

        }
    },
    methods: 
    {
        NewState()
        {
            console.log(this.PopUpVisible)
            if (this.player == true && this.local_button_data.state == null)
            {
                this.local_button_data.state = 'X'
                this.$emit('sendPlayer',this.player)
            }
            else if (this.player == false && this.local_button_data.state == null)
            {
                this.local_button_data.state = 'O' 
                this.$emit('sendPlayer',this.player)
            }
            this.$emit('buttonState',this.local_button_data)
            if (this.PopUpVisible == true)
            {
                this.local_button_data.state = null
            }
        }
    }
}

</script>

<style>
button{
    height: 99%;
    width: 99%; 
    font-size: 46px;
}

</style>