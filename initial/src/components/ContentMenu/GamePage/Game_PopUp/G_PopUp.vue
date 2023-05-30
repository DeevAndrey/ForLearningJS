<template>
    <div class="g-popup">
        <p style="font-size: 25px;">Ай молодец, поздравляем с победой!</p>
            
        <button class ="buttonPop" @click="closePop()">Играть еще</button>
    </div>
</template>

<script>
export default
{
    name:'g_PopUp',
    methods:
    {
        closePop(){
            this.$emit('closePop')
        }
    }
}

</script>

<style>
    .g-popup
    {  display: grid;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    max-width: 700px;
    padding: 45px;
    z-index: 2;
    border: 2px;
    border-radius: 80px;
    background-color: red;

    }
    button
    {
    font-size: 70px;
    }
    .buttonPop
    {
    margin-top: 15px;
    font-size: 40px;

    }
</style>