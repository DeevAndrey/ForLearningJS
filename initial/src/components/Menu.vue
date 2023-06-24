<template>
    <div class = "root">
        <div></div>

            <div class = "TextMenu" @click="$router.push({name: 'Game'})">Игра</div>
            <div class = "TextMenu" @click="$router.push({name: 'TableScore'})">Победители</div>
    </div>
</template>

<script>


export default{
    name: 'MyMenu',
    comments:{

    },
    data(){
        return{
            
        }
    }
}

</script>

<style>
.TextMenu
{
  width: 92%;
  font-family: 'Roboto', sans-serif;
  font-size: 25px; 
  padding-left: 15px;
  padding-top: 25px;
  border: 1px;

}
</style>