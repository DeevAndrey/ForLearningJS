<template>
    <div class = "root">
        <div></div>

            <div class = "TextMenu" @click="$router.push('/Game')">Игры</div>
            <div class = "TextMenu" @click="$router.push('/Build')">Дизайн</div>
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