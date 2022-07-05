<template>
  <v-main>
    <div>
      <transition name="fade">
        <div
          v-if="loading == true"
          style="
            width: 100vw;
            height: 100vh;
            background: white;
            position: fixed;
            z-index: 10000;
            text-align: center;
          "
        >
          <img class="preload" src="~@/assets/gendislogo.png" />
        </div>
      </transition>
    </div>
    <div id="navbar" ref="section1">
      <!-- percobaan navbar 1 -->
      <v-toolbar dense height="80">
        <v-container>
          <v-toolbar-title>
            <a @click="toHome">
              <img
                src="~@/assets/gendislogo.png"
                style="width: 200px; height: 60px; position: relative; top: 3px"
              />
            </a>
          </v-toolbar-title>
        </v-container>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-flex">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn flat text v-bind="attrs" v-on="on" router to="/">
                <h2 class="navbarmenu">Home</h2>
              </v-btn>
            </template>
          </v-menu>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn flat text v-bind="attrs" v-on="on">
                <h2 class="navbarmenu">Produk</h2>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item router to="/blockA">
                  <v-list-item-title>Blok A</v-list-item-title>
                </v-list-item>
                <v-list-item router to="/blockB">
                  <v-list-item-title>Blok B</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-toolbar>
      <v-list nav dense v-if="drawer" class="hidden-sm-and-up">
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn flat text v-bind="attrs" v-on="on" router to="/">
                <h2 class="navbarmenu">Home</h2>
              </v-btn>
            </template>
          </v-menu>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn flat text v-bind="attrs" v-on="on">
                <h2 class="navbarmenu">Produk</h2>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item router to="/blockA">
                  <v-list-item-title>Block A</v-list-item-title>
                </v-list-item>
                <v-list-item router to="/blockB">
                  <v-list-item-title>Block B</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-list-item-group>
      </v-list>
    </div>
    <v-parallax :src="require('@/assets/pharalax2.jpg')" style="height: 250px">
      <v-container>
        <h1 class="BlockA" style="margin-top: 100px">Blok C</h1>
      </v-container>
    </v-parallax>
    <div style="height: 750px">
      <v-carousel
        hide-delimiters
        cycle
        height="100%"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.image"
        >
          <v-row class="fill-height" align="center" justify="center">
            <h1 class="tipe">{{ slide.tipe }}</h1>
            <div id="btnViewMore">
              <v-btn
                color="green"
                style="align: center"
                :href="slide.to"
                v-smooth-scroll="{ duration: 1000, offset: 2 }"
              >
                <h2 class="navbarmenu">View More</h2>
              </v-btn>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div id="app">
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>call</v-icon>
      </v-btn>
    </div>
    <!-- ///////////////// TIPE SECTION BLOCK C ///////////////////////////////// -->
    <div id="tipeSemua">
      <div id="tipeA1a">
        <v-container>
          <div class="d-none d-sm-flex">
            <v-row no-gutters>
              <v-col class="d-flex">
                <h1 class="tipeMain">Tipe A1 a (Rumah)</h1>
                <v-spacer></v-spacer>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 640,500,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <h1 class="tipeMain">Tipe A1 a (Rumah)</h1>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 640,500,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters style="margin-top: 20px">
            <p class="fasilitas">Fasilitas:</p>
          </v-row>
          <v-row no-gutters style="margin-top: -20px">
            <v-col v-for="n in fasilitasa1a" :key="n" class="d-flex" cols="4">
              >
              <v-avatar tile size="30">
                <img alt="user" :src="n.img" />
              </v-avatar>
              <p
                class="fasilitasCaption"
                style="margin-top: 5px; padding-left: 10px"
              >
                {{ n.title }}
              </p>
            </v-col>
          </v-row>
          <div class="d-none d-sm-flex">
            <v-card style="height: 350px; margin-top: 20px" tile>
              <v-row no-gutters>
                <v-col cols="6">
                  <img
                    src="~@/assets/argapuraA1A.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
                <v-col>
                  <img
                    src="~@/assets/argapura 66 A1.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
              </v-row>
            </v-card>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <img
                  src="~@/assets/argapuraA1A.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="~@/assets/argapura 66 A1.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>

    <div id="tipeSemua">
      <div id="tipeA1b">
        <v-container>
          <div class="d-none d-sm-flex">
            <v-row no-gutters>
              <v-col class="d-flex">
                <h1 class="tipeMain">Tipe A1 b (Rukan)</h1>
                <v-spacer></v-spacer>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 550,000,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <h1 class="tipeMain">Tipe A1 b (Rukan)</h1>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 550,000,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Hubungi Pengembang
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters style="margin-top: 20px">
            <p class="fasilitas">Fasilitas:</p>
          </v-row>
          <v-row no-gutters style="margin-top: -20px">
            <v-col v-for="n in fasilitasa1a" :key="n" class="d-flex" cols="4">
              >
              <v-avatar tile size="30">
                <img alt="user" :src="n.img" />
              </v-avatar>
              <p
                class="fasilitasCaption"
                style="margin-top: 5px; padding-left: 10px"
              >
                {{ n.title }}
              </p>
            </v-col>
          </v-row>
          <div class="d-none d-sm-flex">
            <v-card style="height: 350px; margin-top: 20px" tile>
              <v-row no-gutters>
                <v-col cols="6">
                  <img
                    src="~@/assets/argapuraA1B.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
                <v-col>
                  <img
                    src="~@/assets/argapura 66 A1.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
              </v-row>
            </v-card>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <img
                  src="~@/assets/argapuraA1A.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="~@/assets/argapura 66 A1.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>

    <div id="tipeSemua">
      <div id="tipeA2A3">
        <v-container>
          <div class="d-none d-sm-flex">
            <v-row no-gutters>
              <v-col class="d-flex">
                <h1 class="tipeMain">Tipe A2 & A3 (Rumah)</h1>
                <v-spacer></v-spacer>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 545,000,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <h1 class="tipeMain">Tipe A2 & A3 (Rumah)</h1>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 545,000,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters style="margin-top: 20px">
            <p class="fasilitas">Fasilitas:</p>
          </v-row>
          <v-row no-gutters style="margin-top: -20px">
            <v-col v-for="n in fasilitasa1a" :key="n" class="d-flex" cols="4">
              >
              <v-avatar tile size="30">
                <img alt="user" :src="n.img" />
              </v-avatar>
              <p
                class="fasilitasCaption"
                style="margin-top: 5px; padding-left: 10px"
              >
                {{ n.title }}
              </p>
            </v-col>
          </v-row>
          <div class="d-none d-sm-flex">
            <v-card style="height: 350px; margin-top: 20px" tile>
              <v-row no-gutters>
                <v-col cols="6">
                  <img
                    src="~@/assets/argapuraA2A3.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
                <v-col>
                  <img
                    src="~@/assets/argapura 66 A1.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
              </v-row>
            </v-card>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <img
                  src="~@/assets/argapuraA2A3.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="~@/assets/argapura 66 A1.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>

    <div id="tipeSemua">
      <div id="tipeA5">
        <v-container>
          <div class="d-none d-sm-flex">
            <v-row no-gutters>
              <v-col class="d-flex">
                <h1 class="tipeMain">Tipe A5</h1>
                <v-spacer></v-spacer>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 1,098,195,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <h1 class="tipeMain">Tipe A5</h1>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 1,098,195,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters style="margin-top: 20px">
            <p class="fasilitas">Fasilitas:</p>
          </v-row>
          <v-row no-gutters style="margin-top: -20px">
            <v-col v-for="n in fasilitasa1a" :key="n" class="d-flex" cols="4">
              >
              <v-avatar tile size="30">
                <img alt="user" :src="n.img" />
              </v-avatar>
              <p
                class="fasilitasCaption"
                style="margin-top: 5px; padding-left: 10px"
              >
                {{ n.title }}
              </p>
            </v-col>
          </v-row>
          <div class="d-none d-sm-flex">
            <v-card style="height: 350px; margin-top: 20px" tile>
              <v-row no-gutters>
                <v-col cols="6">
                  <img
                    src="~@/assets/mahendraA5.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
                <v-col>
                  <img
                    src="~@/assets/argapura 66 A1.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
              </v-row>
            </v-card>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <img
                  src="~@/assets/mahendraA5.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="~@/assets/argapura 66 A1.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>

    <div id="tipeSemua">
      <div id="tipeA6">
        <v-container>
          <div class="d-none d-sm-flex">
            <v-row no-gutters>
              <v-col class="d-flex">
                <h1 class="tipeMain">Tipe A6</h1>
                <v-spacer></v-spacer>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 990,530,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <h1 class="tipeMain">Tipe A6</h1>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 990,530,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters style="margin-top: 20px">
            <p class="fasilitas">Fasilitas:</p>
          </v-row>
          <v-row no-gutters style="margin-top: -20px">
            <v-col v-for="n in fasilitasa1a" :key="n" class="d-flex" cols="4">
              >
              <v-avatar tile size="30">
                <img alt="user" :src="n.img" />
              </v-avatar>
              <p
                class="fasilitasCaption"
                style="margin-top: 5px; padding-left: 10px"
              >
                {{ n.title }}
              </p>
            </v-col>
          </v-row>
          <div class="d-none d-sm-flex">
            <v-card style="height: 350px; margin-top: 20px" tile>
              <v-row no-gutters>
                <v-col cols="6">
                  <img
                    src="~@/assets/mahendraA6.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
                <v-col>
                  <img
                    src="~@/assets/argapura 66 A1.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
              </v-row>
            </v-card>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <img
                  src="~@/assets/mahendraA6.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="~@/assets/argapura 66 A1.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>

    <div id="tipeSemua">
      <div id="tipeA7">
        <v-container>
          <div class="d-none d-sm-flex">
            <v-row no-gutters>
              <v-col class="d-flex">
                <h1 class="tipeMain">Tipe A7</h1>
                <v-spacer></v-spacer>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 566,325,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <h1 class="tipeMain">Tipe A7</h1>
                <div class="d-block pa-2" style="margin-top: 5px">
                  <p class="harga">Rp. 566,325,000</p>
                  <v-btn style="margin-top: -20px" color="green" outlined>
                    Tersedia
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters style="margin-top: 20px">
            <p class="fasilitas">Fasilitas:</p>
          </v-row>
          <v-row no-gutters style="margin-top: -20px">
            <v-col v-for="n in fasilitasa1a" :key="n" class="d-flex" cols="4">
              >
              <v-avatar tile size="30">
                <img alt="user" :src="n.img" />
              </v-avatar>
              <p
                class="fasilitasCaption"
                style="margin-top: 5px; padding-left: 10px"
              >
                {{ n.title }}
              </p>
            </v-col>
          </v-row>
          <div class="d-none d-sm-flex">
            <v-card style="height: 350px; margin-top: 20px" tile>
              <v-row no-gutters>
                <v-col cols="6">
                  <img
                    src="~@/assets/sindoroA7.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
                <v-col>
                  <img
                    src="~@/assets/argapura 66 A1.png"
                    style="width: 100%; height: 350px"
                  />
                </v-col>
              </v-row>
            </v-card>
          </div>
          <div class="hidden-sm-and-up reveal">
            <v-row no-gutters>
              <v-col>
                <img
                  src="~@/assets/sindoroA7.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img
                  src="~@/assets/argapura 66 A1.png"
                  style="width: 100%; height: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
    <!-- //////////////////////////////////////////////////////////////////////// -->
    <div id="footer">
      <v-container>
        <v-row>
          <v-container>
            <v-col>
              <v-row style="padding-top: 20px">
                <v-col cols="4">
                  <img
                    src="~@/assets/gendislogoputih.png"
                    style="
                      width: 200px;
                      height: 60px;
                      position: relative;
                      top: 3px;
                    "
                  />
                  <p class="Footerfont">
                    Showcase all your properties in a truly <br />
                    modern manner. Welcome to ARGAGENDHIS.
                  </p>
                </v-col>
                <v-col>
                  <h1>Kontak</h1>
                  <p>
                    <a
                      class="Footerfont"
                      style="text-decoration: none; color: white"
                      href="https://api.whatsapp.com/send?phone=628112714200"
                      >+62811-2714-200</a
                    >
                  </p>
                  <p class="Footerfont" style="margin-top: -10px">
                    gendhisargasadana@gmail.com
                  </p>
                  <p class="Footerfont" style="margin-top: -10px">
                    Jl. Kompol R Soekanto, Mangunharjo,<br />
                    Kec. Tembalang, Kota Semarang, Jawa Tengah 50272
                  </p>
                </v-col>
                <v-col>
                  <h1>Sosial Media Kami</h1>
                  <div class="d-flex">
                    <v-btn
                      dark
                      icon
                      href="https://www.instagram.com/argagendhis"
                    >
                      <v-icon size="24px" color="white"> mdi-instagram </v-icon>
                    </v-btn>
                    <v-btn
                      class="ml-4"
                      dark
                      icon
                      href="https://www.facebook.com/Argagendhis-Residence-101331898865469"
                    >
                      <v-icon size="24px" color="white"> mdi-facebook </v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-4"
                      dark
                      icon
                      @click="toTop"
                    >
                      <v-icon size="24px" color="white"> mdi-whatsapp </v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <h1 class="FooterfontCopyright" style="margin-top: 20px">
                Made by<a
                  href="https://www.instagram.com/tiodong99"
                  style="text-decoration: none; color: white"
                >
                  @tiodong99</a
                >
              </h1>
            </v-col>
          </v-container>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "Home",
  mounted: function () {
    this.loading = true;
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = "auto";
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  destroyed: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
  },
  data() {
    return {
      fab: false,
      loading: true,
      drawer: false,
      slideGroup: 0,
      length: 6,
      onboarding: 0,
      fasilitasa1a: [
        {
          title: "1 Ruang Tidur",
          img: "https://img.icons8.com/material/96/000000/bedroom.png",
        },
        {
          title: "1 Ruang Tamu",
          img: "https://img.icons8.com/material/96/000000/living-room.png",
        },
        {
          title: "1 Ruang Makan",
          img: "https://img.icons8.com/material/96/000000/dining-room.png",
        },
        {
          title: "1 Kamar Mandi",
          img: "https://img.icons8.com/material/96/000000/shower.png",
        },
        {
          title: "1 Garasi Mobil",
          img: "https://img.icons8.com/material/96/000000/garage.png",
        },
        {
          title: "1 Dapur",
          img: "https://img.icons8.com/material/96/000000/kitchen.png",
        },
        {
          title: "Taman",
          img: "https://img.icons8.com/material/96/000000/house-with-a-garden.png",
        },
      ],

      icons: [
        {
          keterangan: "Tipe A1 a",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A1 b",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A2 & A3",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A5",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A6",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
        {
          keterangan: "Tipe A7",
          image:
            "https://img.icons8.com/fluency-systems-regular/96/1e272e/dining-room.png",
        },
      ],
      slides: [
        {
          tipe: "Tipe A1 a",
          image: require("@/assets/argapuraA1A.png"),
        },
        {
          tipe: "Tipe A1 b",
          image: require("@/assets/argapuraA1B.png"),
        },
        {
          tipe: "Tipe A2 & A3",
          image: require("@/assets/argapuraA2A3.png"),
        },
        {
          tipe: "Tipe A5",
          image: require("@/assets/mahendraA5.png"),
        },
        {
          tipe: "Tipe A6",
          image: require("@/assets/mahendraA6.png"),
        },
        {
          tipe: "Tipe A7",
          image: require("@/assets/sindoroA7.png"),
        },
      ],
    };
  },
  // computed: {
  //   columns() {
  //     if (this.$vuetify.breakpoint.xl) {
  //       return 4;
  //     }

  //     if (this.$vuetify.breakpoint.lg) {
  //       return 3;
  //     }

  //     if (this.$vuetify.breakpoint.md) {
  //       return 3;
  //     }

  //     return 1;
  //   },
  // },
  //   mounted() {
  //     this.nextSlide();
  //     this.previousSlide();
  //   },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      window.location = "https://api.whatsapp.com/send?phone=628112714200";
    },
    toHome(){
      this.$router.push({
        name: 'Root',
      })
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style scoped>
.preload {
  width: 25%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.BlockA {
  font-family: poppinssemibold;
  color: white;
  margin-top: 180px;
  font-size: 75px;
  text-align: center;
  margin-bottom: 30px;
}
.tipe {
  font-family: poppinssemibold;
  color: white;
  font-size: 55px;
  text-align: center;
}
.tipeBlockA {
  font-family: poppinssemibold;
  color: black;
  font-size: 55px;
  text-align: center;
}

.footertext {
  font-family: poppinssemibold;
  color: white;
  font-size: 24px;
  text-align: center;
}

.footertext2 {
  font-family: poppinslight;
  color: white;
  font-size: 18px;
  text-align: center;
}

.feature {
  font-family: poppinssemibold;
  color: black;
  font-size: 45px;
  text-align: center;
}
.featureCaption {
  font-family: poppinssemibold;
  color: black;
  font-size: 20px;
  text-align: center;
}
.featureCaption2 {
  font-family: poppinslight;
  color: black;
  font-size: 10px;
  text-align: center;
}
.featureSpecificationPart {
  font-family: poppinssemibold;
  color: white;
  font-size: 75px;
}

.tipeMain {
  font-family: poppinssemibold;
  color: black;
  font-size: 55px;
  text-align: left;
}
.harga {
  font-family: poppinslight;
  color: black;
  font-size: 25px;
  margin-top: -10px;
  text-align: left;
}
.fasilitas {
  font-family: poppinssemibold;
  color: black;
  font-size: 35px;
  text-align: left;
}
.fasilitasCaption {
  font-family: poppinslight;
  color: black;
  font-size: 14px;
  text-align: left;
}
#btnViewMore {
  margin: 0;
  position: absolute;
  top: 57%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#footer {
  height: auto !important;
  background-color: black;
}

#tipeA1a {
  height: auto !important;
  min-height: 800px;
}
#tipeSemua {
  height: auto !important;
  min-height: 800px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 576px) {
  .preload {
    width: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>