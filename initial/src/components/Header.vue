<template>
    <div class = "root"> 
        <div class = "logo">
          <div class="TextLogo">
            АЙ
          </div> 
        </div>
        <div class="TextLogo">БУРЕНИЕ</div> 
    </div>
</template>

<script>
export default{
    name: 'MyHeader',
    data(){
        return{
            
        }
    }
}

</script>

<style>
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
</style>
