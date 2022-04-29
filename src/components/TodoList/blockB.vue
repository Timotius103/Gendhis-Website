<template>
  <v-main>
    <div id="navbar" ref="section1">
      <!-- percobaan navbar 1 -->
      <v-toolbar dense height="80">
        <v-container>
          <v-toolbar-title>
            <img
              src="~@/assets/gendislogo.png"
              style="width: 200px; height: 60px; position: relative; top: 3px"
            />
          </v-toolbar-title>
        </v-container>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
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
                <v-list-item router to="/blockC">
                  <v-list-item-title>Blok C</v-list-item-title>
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
                <v-list-item router to="/blockC">
                  <v-list-item-title>Block C</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-list-item-group>
      </v-list>
    </div>
    <v-parallax :src="require('@/assets/pharalax2.jpg')" style="height: 250px">
      <v-container>
        <h1 class="BlockA" style="margin-top: 100px">Blok B</h1>
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
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%" width="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-card height="100%" width="100%">
                <v-img
                  :src="slide.image"
                  style="width: 100%; height: 100%; align-items: center"
                >
                  <h1 class="tipe">{{ slide.tipe }}</h1>
                  <div id="btnViewMore">
                    <v-btn color="green" style="align: center">
                      <h2 class="navbarmenu">View More</h2>
                    </v-btn>
                  </div>
                </v-img>
                <!-- <v-btn
                  text
                  flat
                  href="#locationpart"
                  v-smooth-scroll="{ duration: 1000, offset: 0 }"
                >
                  <h2 class="navbarmenu">Lokasi Kami</h2>
                </v-btn> -->
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div style="height: 400px">
      <v-container>
        <h1 class="tipeBlockA">Tipe A1</h1>
      </v-container>
    </div>
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
                      href="https://api.whatsapp.com/message/FAXQXMO3HVMKC1"
                    >
                      <v-icon size="24px" color="white"> mdi-whatsapp </v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <h1 class="FooterfontCopyright" style="margin-top: 20px">
                make with <v-icon color="red">mdi-heart</v-icon> by<a
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

  data() {
    return {
      drawer:false,
      slideGroup: 0,
      length: 6,
      onboarding: 0,
      slides: [
        {
          tipe: "Tipe B1 & B2",
          image: require("@/assets/mahameruB1B2.png"),
        },
        {
          tipe: "Tipe B3",
          image: require("@/assets/sundoroB3.png"),
        },
        {
          tipe: "Tipe B5",
          image: require("@/assets/sundoroB5.png"),
        },
        {
          tipe: "Tipe B6 & B7",
          image: require("@/assets/mahameruB6B7.png"),
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
  methods: {},
};
</script>

<style scoped>
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
  margin-top: 300px;
  text-align: center;
}
.tipeBlockA {
  font-family: poppinssemibold;
  color: black;
  font-size: 55px;
  text-align: left;
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

#btnViewMore {
  margin: 0;
  position: absolute;
  margin-top: 85px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#footer {
  height: auto !important;
  background-color: black;
}
</style>