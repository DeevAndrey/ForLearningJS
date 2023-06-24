<template>
    <div class="g-popup">
        <p class = "PopText">Игра окончена, запишите имя победителя!</p>
        <div class="PopInput">
            <input class="InputPop" type ="text" 
            v-model="UserName"
            placeholder="Введите имя"
            />
        </div>
            <div class="buttonAreaPop"> 
                <button class="buttonPop" @click="closePop()">Играть еще</button>
            </div>

    </div>
</template>

<script>
export default
{
    name:'g_PopUp',
    data(){
        return { UserName: ""}
    },
    methods:
    {
        closePop(){
            this.$emit('closePop')
            this.$emit('UserName',this.UserName)
        }
    }
}

</script>

<style>
.InputPop{
    font-size: 26px;
}
    .g-popup
    {  display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 100%;
    grid-template-areas: 
    "PopText"
    "PopInput"
     "PopButton";
    min-height: 150px;
    max-width: 700px;
    padding: 45px;
    z-index: 2;
    border: 2px;
    border-radius: 80px;
    background-color: red;
    }
    .buttonAreaPop
    {
    grid-area: PopButton;
    display: flex;
    justify-content: space-around;
    height: 90%;

    }
    .buttonPop{
        max-width: 300px;
        width: 40%;
        font-size: 26px;
        height: 100%;
    }
    .PopText{
        font-size: 30px;
        display: grid;
        justify-content: center;
        margin: 10px;
    }
    .PopInput{
        grid-area: PopInput;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50%;
        margin: 5px;

    }
</style>