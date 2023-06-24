<template>
    <div class = "user"
    :style="{ 'border-color': dissapearColor, 'background-color' : selectColor}"
    @mouseenter="selectColor = '#f0f2f4'"
    @mouseleave="selectColor = 'white'">
        <div class="cell" tabindex="-1">
            {{ user_data.id+1 }}
        </div>
        <div class="cell mainCell" tabindex="-1"
            @click="CopyText(user_data.name)"
            @mouseenter="SelectsActive()"
            @mousedown=" SelectActive()">
            {{ user_data.name }}
        </div>
        <div class="cell ">
            score
        </div>
    </div>
</template>

<script>
export default{
    name: 'CardUser',

    data(){    

        return{
            dissapearColor: 'gray',
            selectColor: 'white'
        }
    },
    props:{
        user_data:{
            type: Object,
            default(){return null}
        },
        IsMouseDown: {type: Boolean}

    },        
    methods:
        {
            CopyText(message){
                this.$emit("TextContent",this.user_data.name)
            },
            SelectsActive(){
                if (this.IsMouseDown == true)
                {
                    this.$emit("TextContent",this.user_data.name)
                }
            },
            SelectActive(){
                this.$emit("TextContent",this.user_data.name)
            }
        }
}

</script>

<style>
.user{
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-left: 20px;
    font-size: 30px;
}
.cell{
    height: 35px;
    border-color: gray;
    border: solid;
    border-width: 1px;
    padding-left: 10px;
    padding-right: 40px;
    margin: 0;
    z-index: 0;
}
.cell:focus{
    border-color: blue;
    user-select: none;
}
.cell:hover{
    background-color: #f0f2f4;
}
.mainCell{
    width: 100%;
    }
</style>
