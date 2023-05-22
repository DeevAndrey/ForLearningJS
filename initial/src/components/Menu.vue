<template>
    <div class = "root">
        <div></div>
            <a class = "TextMenu" >Игры</a>
            <a class = "TextMenu">Дизайн</a>
    </div>
</template>

<script>
export default{
    name: 'MyMenu',
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