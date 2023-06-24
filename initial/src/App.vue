<template>

  <div id="app" class = "grid">
    <MyHeader class="Header"/>
    <MyMenu class="Menu"/>
      <div class = "MainContent" :style="myCustomStyle">
        <router-view/>
      </div>
  </div>
</template>

<script>


import MyHeader from './components/Header'
import MyMenu from './components/Menu'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyMenu
  }, 
  computed:{
    myCustomStyle(){
      return {'font-size': '10px'}
    }
  }
  
}
</script>

<style>
html, body
{
  height: 100%;
  margin:0;
}

.grid 
{
  height: 100%;
  display: grid;
  grid-template-rows: 100px 5fr;
  grid-template-columns: 200px 4fr;
  grid-template-areas: 
  "Header Header"
  "menu MainContent";
}

.Header{
  grid-area: Header;
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 12px rgb(255, 0, 0);
  background-color: rgb(240, 235, 235);
}

.Menu
{
  width: 100%;
  grid-area: menu;
  z-index: 0;
  box-shadow: 0px 5px 25px rgb(219, 213, 213);
  background: linear-gradient(20deg, rgb(238, 231, 231), rgb(243, 240, 240));
  display: grid;
  grid-template-rows: 5px 60px 60px;

}
.Menu div:hover{
  background-color: #e2dddd;
}
.MainContent
{
  grid-area: MainContent;
  display: grid;
  background-color: #ffffff;
}
</style>

