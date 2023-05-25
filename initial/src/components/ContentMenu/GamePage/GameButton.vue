<template>
    <div class = "root">
      <button v-on:click=" NewState() ">{{state}}</button>
    </div>
</template>

<script>
export default{
    name: 'GameButton',
    props:{
        player:{
            type: Boolean,

        }
    },
    data(){
        return{
            state: null
        }
    },
    methods: 
    {
        NewState()
        {
            if (this.player == true && this.state == null)
            {
                this.state = 'O'
                this.$emit('sendPlayer',this.player)
            }
            else if (this.player == false && this.state == null)
            {
                this.state = 'X' 
                this.$emit('sendPlayer',this.player)
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