<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

}

</script>
<style>
@font-face {
  font-family: ubuntu;
  src: url("~@/assets/ubuntubold.ttf");
}

@font-face {
  font-family: ranco;
  src: url("~@/assets/Rancho.ttf");
}

@font-face {
  font-family: laxend;
  src: url("~@/assets/LexendDeca.ttf");
}

@font-face {
  font-family: poppinslight;
  src: url("./assets/fonts/Poppins-Light.ttf");
}
@font-face {
  font-family: poppinsreguler;
  src: url("./assets/fonts/Poppins-Regular.ttf");
}
@font-face {
  font-family: poppinsbold;
  src: url("./assets/fonts/Poppins-Bold.ttf");
}
@font-face {
  font-family: poppinssemibold;
  src: url("./assets/fonts/Poppins-SemiBold.ttf");
}
.navbarmenu{
  font-family: poppinssemibold;
  color: black;
  font-size: 22px;
}
.salesjenis{
  font-family: poppinsbold;
  color: black;
  font-size: 40px;
}
.saleskonfig{
  font-family: poppinssemibold;
  margin-top: -15px;
  color: black;
  font-size: 20px;
}
.salesketerangan{
  font-family: poppinslight;
  font-size: 12px;
  color: black;
  text-align: justify;
  margin-top: -10px;
  font-weight: 200;
}

.LocationCaption1{
  font-family: poppinssemibold;
  color: black;
  margin-top:15px;
  font-size: 20px;
}
.LocationCaption2{
  font-family: poppinslight;
  font-size: 15px;
  color: black;
  text-align: justify;
  margin-top: -20px;
  font-weight: 200;
}

.Footerfont{
  font-family: poppinslight;
  font-size: 15px;
  color: white;
  text-align: left;
  font-weight: 200;
}

.FooterfontCopyright{
  font-family: poppinslight;
  font-size: 15px;
  color: white;
  text-align: center;
  font-weight: 200;
}

.btn{
  font-family: poppinssemibold;
  color: white;
  font-size: 12px;
}


.jumbotrontulisan{
  font-family: poppinssemibold;
  color: white;
  margin-top: 180px;
  font-size: 75px;
  margin-bottom: 30px;
}
.jumbotrontulisan1{
  font-family: poppinslight;
  color: white;
  margin-top: -45px;
  font-size: 45px;
  margin-bottom: 30px;
}
.namaJenis{
  font-family: poppinssemibold;
  color: white;
  margin-top: -45px;
  font-size: 35px;
  margin-bottom: 30px;
}
.textbox {
    font-size: 16px;
    text-transform: uppercase;
    font-family: poppinsbold;
    margin-top: 5px;
}
.textbox2 {
    font-family: poppinslight;
    font-size: 12px;
    color: #ACACAC;
    margin-top: -5px;
    font-weight: 200;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: left;*/
  color: white;
  /*overflow-y: hidden !important;*/
  /*margin-top: 60px;*/
}


/*html {*/
/*  overflow: hidden !important;*/
/*  scrollbar-width: none;*/
/*  -ms-overflow-style: none;*/
/*}*/

/*html::-webkit-scrollbar {*/
/*  width: 0;*/
/*  height: 0;*/
/*}*/
</style>
