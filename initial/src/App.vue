<template>

  <div id="app">
    <div class = "grid">
      <div class = "Header"> 
        <div class = "logo">
          <div class="TextLogo">
            АЙ
          </div> 
        </div>
        <div class="TextLogo">БУРЕНИЕ</div> 
      </div>
      <div class = "Menu">
            <a class = "TextMenu" >Игры</a>
            <a class = "TextMenu">Дизайн</a>
      </div> 
      <div class = "MainContent">123</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.grid 
{
  height: 100%;
  display: grid;
  grid-template-rows: 100px 5fr;
  grid-template-columns: 200px 4fr;
  grid-template-areas: 
  "Header Header"
  "Menu MainContent";
}

.Header{
  grid-area: Header;
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 12px rgb(255, 0, 0);
  background-color: rgb(240, 235, 235);
}
.MainContent
{
  grid-area: MainContent;
  display: grid;
  background-color: #ffffff;
}
.logo
{
  height: 60%;
  width: 80px;
  margin-left: 25px;
  margin-top: 20px;
  display: inline-block;
  background-color: red;
  color: white;
  ;
}

.TextLogo
{
  
  display: inline-block;
  margin: 5px;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 300%;
  margin: 5px;
}
.TextMenu
{
  width: 92%;
  font-family: 'Roboto', sans-serif;
  font-size: 25px; 
  padding-left: 15px;
  padding-top: 5px;
  border: 1px;
}
.Menu
{
  width: 100%;
  grid-area: menu;
  z-index: 0;
  box-shadow: 0px 5px 25px rgb(219, 213, 213);
  background: linear-gradient(20deg, rgb(238, 231, 231), rgb(243, 240, 240));
  display: grid;
  grid-template-rows: 35px 60px 60px;

}
.Menu a:hover{
  background-color: #e2dddd;
}
html, body
{
  height: 100%;
  margin:0;
}
</style>

