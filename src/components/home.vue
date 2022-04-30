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
              <v-btn flat text v-bind="attrs" v-on="on">
                <h2 class="navbarmenu">Fasilitas</h2>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item
                  href="#feature"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Fitur</v-list-item-title>
                </v-list-item>
                <v-list-item
                  href="#specification"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Spesifikasi</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
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
                <v-list-item
                  router
                  to="/blockB"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Block B</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/blockC">
                  <v-list-item-title>Block C</v-list-item-title>
                </v-list-item>

                <v-list-item
                  href="#progress"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Progress</v-list-item-title>
                </v-list-item>

                <v-list-item
                  href="#availability"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Daftar Harga</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <v-btn
            text
            flat
            href="#locationpart"
            v-smooth-scroll="{ duration: 1000, offset: 0 }"
          >
            <h2 class="navbarmenu">Lokasi Kami</h2>
          </v-btn>
          <v-btn
            text
            flat
            href="#footer"
            v-smooth-scroll="{ duration: 1000, offset: 0 }"
          >
            <h2 class="navbarmenu">Kontak</h2>
          </v-btn>
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
              <v-btn flat text v-bind="attrs" v-on="on">
                <h2 class="navbarmenu">Fasilitas</h2>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item
                  href="#featuremb"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Fitur</v-list-item-title>
                </v-list-item>
                <v-list-item
                  href="#specificationmb"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Spesifikasi</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
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
                <v-list-item
                  router
                  to="/blockB"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Block B</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/blockC">
                  <v-list-item-title>Block C</v-list-item-title>
                </v-list-item>

                <v-list-item
                  href="#progress"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Progress</v-list-item-title>
                </v-list-item>

                <v-list-item
                  href="#availability"
                  v-smooth-scroll="{ duration: 1000, offset: 2 }"
                >
                  <v-list-item-title>Daftar Harga</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <v-btn
            text
            flat
            href="#locationpart"
            v-smooth-scroll="{ duration: 1000, offset: 0 }"
          >
            <h2 class="navbarmenu">Lokasi Kami</h2>
          </v-btn>
          <v-btn
            text
            flat
            href="#footer"
            v-smooth-scroll="{ duration: 1000, offset: 0 }"
          >
            <h2 class="navbarmenu">Kontak</h2>
          </v-btn>
          <!-- <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item
            href="#salessection"
            v-smooth-scroll="{ duration: 1000, offset: 2 }"
          >
            <v-list-item-title>Sales</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item
            href="#contactus"
            v-smooth-scroll="{ duration: 1000, offset: 0 }"
          >
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </div>
    <div>
      <v-row no-gutters>
        <v-col>
          <v-card class="jumbotron">
            <v-container>
              <p class="jumbotrontulisan">ARGAGENDHIS</p>
              <p class="jumbotrontulisan1">Residence</p>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- ////////////////////// FEATURE SPESIFACTION SECTION //////////////////////////////////////////////////// -->
    <v-parallax :src="require('@/assets/pharalax4.png')" style="height: 250px">
      <v-container>
        <h1 class="featureSpecificationPart">Fitur & Spesifikasi</h1>
      </v-container>
    </v-parallax>
    <!-- <button @click="show = !show">Toggle Slide + Fade</button>
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition> -->
    <div id="feature" class="hidden-sm-and-down">
      <v-container>
        <h1 class="feature">Mengapa Argagendhis?</h1>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row justify="center">
              <v-avatar tile size="90" style="align: center; margin-top: 45px">
                <img
                  alt="user"
                  src="https://img.icons8.com/material/96/26e07f/lightning-bolt--v1.png"
                />
              </v-avatar>
            </v-row>
            <v-row justify="center" style="margin-top: 30px">
              <h1 class="featureCaption">Listrik 2200 Watt</h1>
              <p class="featureCaption2">
                2200 Watt daya listrik dengan sistem kelistrikan<br />
                bawah tanah yang terjamin keamanannya
              </p>
            </v-row>
            <!-- <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          </v-col>
          <v-col cols="3">
            <v-row justify="center">
              <v-avatar tile size="90" style="align: center; margin-top: 45px">
                <img
                  src="https://img.icons8.com/ios-glyphs/96/26e07f/last-24-hours.png"
                />
              </v-avatar>
            </v-row>
            <v-row justify="center" style="margin-top: 30px">
              <h1 class="featureCaption">Keamanan 24 Jam</h1>
              <p class="featureCaption2">
                Kami menjamin keamanan 24 jam non stop <br />
                dengan petugas keamanan terlatih dan terverifikasi.
              </p>
            </v-row>
            <!-- <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          </v-col>
          <v-col cols="3">
            <v-row justify="center">
              <v-avatar tile size="90" style="align: center; margin-top: 45px">
                <img
                  src="https://img.icons8.com/material/96/26e07f/tollbooth.png"
                />
              </v-avatar>
            </v-row>
            <v-row justify="center" style="margin-top: 30px">
              <h1 class="featureCaption">One Gate System</h1>
              <p class="featureCaption2">
                Tidak memiliki akses keluar masuk lain selain pintu utama<br />
                Dengan demikian tidak ada celah untuk pelaku kejahatan.
              </p>
            </v-row>
            <!-- <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          </v-col>
          <v-col cols="3">
            <v-row justify="center">
              <v-avatar tile size="90" style="align: center; margin-top: 45px">
                <div
                  v-animate-onscroll="{
                    down: 'animated flip',
                    up: 'animated rotateOut',
                  }"
                >
                  <img
                    src="https://img.icons8.com/material/96/26e07f/water-tap-.png"
                  />
                </div>
              </v-avatar>
            </v-row>
            <v-row justify="center" style="margin-top: 30px">
              <h1 class="featureCaption">PDAM atau Artetis</h1>
              <p class="featureCaption2">
                Tersedianya air PAM atau Sumur untuk menjamin <br />
                ketersediaan air bersih.
              </p>
            </v-row>
            <!-- <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- //////////////////// VERSI MOBILE FITUR ////////////////////////////////// -->
    <div id="featuremb" class="hidden-sm-and-up">
      <v-container>
        <h1 class="feature">Mengapa Argagendhis?</h1>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-avatar tile size="90" style="align: center">
              <img
                alt="user"
                src="https://img.icons8.com/material/96/26e07f/lightning-bolt--v1.png"
              />
            </v-avatar>
          </v-col>
          <v-col justify="left">
            <h1 class="featureCaption">Listrik 2200 Watt</h1>
            <p class="featureCaption2">
              2200 Watt daya listrik dengan sistem kelistrikan<br />
              bawah tanah yang terjamin keamanannya
            </p>
          </v-col>
          <!--<v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-avatar tile size="90" style="align: center">
              <img
                src="https://img.icons8.com/ios-glyphs/96/26e07f/last-24-hours.png"
              />
            </v-avatar>
          </v-col>
          <v-col justify="left">
            <h1 class="featureCaption">Keamanan 24 Jam</h1>
            <p class="featureCaption2">
              Kami menjamin keamanan 24 jam non stop <br />
              dengan petugas keamanan terlatih dan terverifikasi.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-avatar tile size="90" style="align: center">
              <img
                src="https://img.icons8.com/material/96/26e07f/tollbooth.png"
              />
            </v-avatar>
          </v-col>
          <v-col justify="left">
            <h1 class="featureCaption">One Gate System</h1>
            <p class="featureCaption2">
              Tidak memiliki akses keluar masuk lain selain pintu utama Dengan
              demikian tidak ada celah untuk pelaku kejahatan.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-avatar tile size="90" style="align: center">
              <div
                v-animate-onscroll="{
                  down: 'animated flip',
                  up: 'animated rotateOut',
                }"
              >
                <img
                  src="https://img.icons8.com/material/96/26e07f/water-tap-.png"
                />
              </div>
            </v-avatar>
          </v-col>
          <v-col justify="center">
            <h1 class="featureCaption">PDAM atau Artetis</h1>
            <p class="featureCaption2">
              Tersedianya air PAM atau Sumur untuk menjamin <br />
              ketersediaan air bersih.
            </p>
            <!-- <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- //////////////////// VERSI MOBILE FITUR ////////////////////////////////// -->
    <div id="specification" class="hidden-sm-and-down">
      <v-container>
        <v-row>
          <v-col cols="6" style="margin-top: 130px">
            <h1 class="spesifikasi">Spesifikasi</h1>
            <p class="LocationCaption2" style="margin-top: 10px">
              Pemilihan kombinasi bahan menjadi sangat penting <br />
              dalam pembangunan setiap unit karena kemegahan <br />
              dan kenyamanan merupakan piont penting dalam sebuah desain.
            </p>
          </v-col>
          <v-col cols="6">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in bahan" :key="item.name">
                    <td class="text-left">{{ item.name }}</td>
                    <td class="text-left">{{ item.detail }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- ////////////////////////////// SPESIFICATION MOBILE VERSION //////////////////////////////////////////////////////// -->
    <div id="specificationmb" class="hidden-sm-and-up">
      <v-container>
        <v-row>
          <v-col cols="12" style="margin-top: 20px">
            <h1 class="spesifikasi">Spesifikasi</h1>
            <p class="spesifikasiCaption" style="margin-top: 10px">
              Pemilihan kombinasi bahan menjadi sangat penting dalam pembangunan
              setiap unit karena kemegahan dan kenyamanan merupakan piont
              penting dalam sebuah desain.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in bahan" :key="item.name">
                    <td class="text-left">{{ item.name }}</td>
                    <td class="text-left">{{ item.detail }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!--//////////////////////////////////////// PRODUK ////////////////////////////////////////////////////// -->
    <v-parallax :src="require('@/assets/pharalax2.jpg')" style="height: 350px">
      <v-container>
        <h1 class="produk1" style="margin-top: 100px">Produk</h1>
        <h1 class="produk2" style="margin-top: -25px">Kami</h1>
      </v-container>
    </v-parallax>
    <div id="product" class="hidden-sm-and-down">
      <v-container>
        <div id="salessection" ref="section2">
          <v-row no-gutters style="padding-top: 45px">
            <v-col v-for="imgMap in mapImg" :key="imgMap" cols="7">
              <v-img :src="imgMap.src" style="width: 650px; height: 550px">
              </v-img>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col>
                  <h1 class="listpropertiSection">List</h1>
                  <h1 class="listpropertiSection" style="margin-top: -20px">
                    Properti
                  </h1>
                  <v-row>
                    <v-col
                      v-for="allblock in block"
                      :key="allblock.title"
                      cols="8"
                    >
                      <v-row>
                        <v-col cols="4">
                          <img :src="allblock.pict" />
                        </v-col>
                        <v-col>
                          <p class="LocationCaption1" style="margin-top: -2px">
                            {{ allblock.title }}
                          </p>
                          <v-btn
                            style="margin-top: -20px"
                            color="green"
                            router
                            :to="allblock.to"
                            outlined
                          >
                            View More
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <div id="product" class="hidden-sm-and-up">
      <v-container>
        <div class="selessectionmobile" id="salessection" ref="section2">
          <v-row no-gutters>
            <v-col v-for="imgMap in mapImg" :key="imgMap" cols="12">
              <v-img :src="imgMap.src" style="width: 650px; height: 450px">
              </v-img>
            </v-col>
            <v-col cols="12">
              <v-container>
                <v-row no-gutters>
                  <v-col>
                    <h1 class="listpropertiSection">List</h1>
                    <h1 class="listpropertiSection" style="margin-top: -20px">
                      Properti
                    </h1>
                    <v-row>
                      <v-col
                        v-for="allblock in block"
                        :key="allblock.title"
                        cols="12"
                      >
                        <v-row>
                          <v-col cols="3">
                            <img :src="allblock.pict" />
                          </v-col>
                          <v-col style="padding-left: 20px">
                            <p
                              class="LocationCaption1"
                              style="margin-top: -2px"
                            >
                              {{ allblock.title }}
                            </p>
                            <v-btn
                              style="margin-top: -20px"
                              color="green"
                              router
                              :to="allblock.to"
                              outlined
                            >
                              View More
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <!-- /////////////////////////////////// PROGRESS SECTION ////////////////////////////////////////// -->
    <v-parallax
      id="progress"
      :src="require('@/assets/pharalax3.png')"
      style="height: 350px"
    >
      <v-container>
        <h1 class="progresspart1">Progress</h1>
        <h1 class="progresspart2">Kami</h1>
      </v-container>
    </v-parallax>
    <div style="height: 415px">
      <v-row no-gutters>
        <v-col
          no-gutters
          cols="3"
          v-for="progressku in progress"
          :key="progressku.title"
        >
          <v-hover v-slot="{ hover }" close-delay="200">
            <v-card
              class="cardProgress"
              height="400"
              width="500"
              @click="overlayfunct(progressku.id)"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img :src="progressku.image" style="width: 100%; height: 100%">
              </v-img>
            </v-card>
          </v-hover>

          <v-overlay :value="overlay" v-for="overlayarray in arrayOverlay"
          :key="overlayarray.id">
            <v-card
              class="align-center white--text"
              height="400"
              width="500"
              color="teal"
              @click="overlay = false"
            >
              <v-img :src="overlayarray" style="width: 100%; height: 100%">
              </v-img>
            </v-card>
          </v-overlay>
        </v-col>
      </v-row>
    </div>
    <!-- <div style="height: 415px">
      <v-row no-gutters>
        <v-col no-gutters cols="3">
          <v-card
            height="400"
            width="500"
            @click="overlay = !overlay"
          >
            <v-img
              :src="require('@/assets/progress1.jpeg')"
              style="width: 100%; height: 100%"
            >
            </v-img>
          </v-card>
          <v-overlay :value="overlay">
            <v-card
              class="align-center white--text"
              height="400"
              width="500"
              color="teal"
              @click="overlay = false"
            >
              <v-img
                :src="require('@/assets/progress1.jpeg')"
                style="width: 100%; height: 100%"
              >
              </v-img>
            </v-card>
          </v-overlay>
        </v-col>
        <v-col no-gutters cols="3">
          <v-card height="400" width="500" @click="overlay = !overlay">
            <v-img
              :src="require('@/assets/progress2.jpeg')"
              style="width: 100%; height: 100%"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col no-gutters cols="3">
          <v-card height="400" width="500">
            <v-img
              :src="require('@/assets/progress3.jpeg')"
              style="width: 100%; height: 100%"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card height="400" width="500">
            <v-img
              :src="require('@/assets/progress4.jpeg')"
              style="width: 100%; height: 100%"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div> -->

    <!-- ////////////////////////// DAFTAR HARGA ///////////////////////////////////////////////////////// -->
    <div id="availability">
      <v-container>
        <h1 class="pricelist">Daftar Harga</h1>
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
        </v-data-table>
      </v-container>
    </div>

    <!-- //////////////////////////////////////// LOCATION SECTION /////////////////////////////////////////  -->
    <v-parallax
      id="locationpart"
      :src="require('@/assets/pharalax.jpg')"
      style="height: 425px"
    >
      <v-container>
        <h1 class="locationPart">Lokasi</h1>
        <h1 class="locationPart2">Kami</h1>
      </v-container>
    </v-parallax>

    <div
      id="location"
      style="background-color: #f1f2f6; height: "
      class="hidden-sm-and-down"
    >
      <v-row no-gutters>
        <v-col cols="6">
          <iframe
            width="100%"
            height="636px"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=argagendhis&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
        </v-col>
        <v-col cols="6" style="padding-left: 25px">
          <h1 class="location" style="margin-top: 100px">Tempat Terdekat</h1>
          <p class="LocationCaption2" style="margin-top: 2px">
            Area pribadi dengan aksesibilitas mudah adalah yang utama <br />
            dan perlu menjadi pertimbangan untuk memilih sebuah hunian. <br />
            Pilih lokasi terbaik Anda di Argagendhis Residence.
          </p>
          <v-row>
            <v-col cols="5">
              <v-row>
                <v-col cols="4">
                  <v-avatar tile size="90">
                    <img
                      src="https://img.icons8.com/material/85/00b894/road--v2.png"
                    />
                  </v-avatar>
                </v-col>
                <v-col>
                  <p class="LocationCaption1">50 m</p>
                  <p class="LocationCaption2">Dari Jalan Raya</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="3">
                  <v-avatar tile size="90">
                    <img
                      src="https://img.icons8.com/material/85/00b894/hospital-2.png"
                    />
                  </v-avatar>
                </v-col>
                <v-col>
                  <p class="LocationCaption1">06 Menit</p>
                  <p class="LocationCaption2">Dari RSUD Ketileng</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-row>
                <v-col cols="4">
                  <v-avatar tile size="90">
                    <img
                      src="https://img.icons8.com/material/85/00b894/highway.png"
                    />
                  </v-avatar>
                </v-col>
                <v-col>
                  <p class="LocationCaption1" style="margin-top: 2px">
                    12 Menit
                  </p>
                  <p class="LocationCaption2">
                    Dari pintu masuk<br />
                    Toll Gayamsari
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="3">
                  <v-avatar tile size="90">
                    <img
                      src="https://img.icons8.com/material/85/00b894/university--v1.png"
                    />
                  </v-avatar>
                </v-col>
                <v-col>
                  <p class="LocationCaption1" style="margin-top: -5px">
                    04 Menit
                  </p>
                  <p class="LocationCaption2">Dari UNIMUS</p>
                  <p class="LocationCaption1" style="margin-top: -15px">
                    16 Menit
                  </p>
                  <p class="LocationCaption2">Dari UNDIP</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!-- //////////////////////////////// LOCATION SECTION MOBILE VERSION ////////////////////////////////////////////// -->
    <div
      id="location"
      style="background-color: #f1f2f6; height: "
      class="hidden-sm-and-up"
    >
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <iframe
              width="100%"
              height="636px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=argagendhis&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>
          </v-col>
          <v-col cols="12">
            <h1 class="location">Tempat Terdekat</h1>
            <p class="LocationCaption2" style="margin-top: 2px">
              Area pribadi dengan aksesibilitas mudah adalah yang utama dan
              perlu menjadi pertimbangan untuk memilih sebuah hunian. Pilih
              lokasi terbaik Anda di Argagendhis Residence.
            </p>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="3">
                    <v-avatar tile size="90" style="align: center">
                      <img
                        src="https://img.icons8.com/material/85/00b894/road--v2.png"
                      />
                    </v-avatar>
                  </v-col>
                  <v-col style="padding-left: 20px">
                    <p class="LocationCaption1">50 m</p>
                    <p class="LocationCaption3">Dari Jalan Raya</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-avatar tile size="90" style="align: center">
                      <img
                        src="https://img.icons8.com/material/85/00b894/hospital-2.png"
                      />
                    </v-avatar>
                  </v-col>
                  <v-col style="padding-left: 20px">
                    <p class="LocationCaption1">06 Menit</p>
                    <p class="LocationCaption3">Dari RSUD Ketileng</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-avatar tile size="90" style="align: center">
                      <img
                        src="https://img.icons8.com/material/85/00b894/highway.png"
                      />
                    </v-avatar>
                  </v-col>
                  <v-col style="padding-left: 20px">
                    <p class="LocationCaption1" style="margin-top: 2px">
                      12 Menit
                    </p>
                    <p class="LocationCaption3">
                      Dari pintu masuk<br />
                      Toll Gayamsari
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-avatar tile size="90" style="align: center">
                      <img
                        src="https://img.icons8.com/material/85/00b894/university--v1.png"
                      />
                    </v-avatar>
                  </v-col>
                  <v-col style="padding-left: 20px">
                    <p class="LocationCaption1" style="margin-top: -5px">
                      04 Menit
                    </p>
                    <p class="LocationCaption3">Dari UNIMUS</p>
                    <p class="LocationCaption1" style="margin-top: -15px">
                      16 Menit
                    </p>
                    <p class="LocationCaption3">Dari UNDIP</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- /////////////////////////////////////////////// FOOTER SECTION ///////////////////////////////////////// -->
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
// import {onMounted,ref} from "vue"
import { Icon } from "@iconify/vue2";
export default {
  name: "Home",

  data() {
    // const X = ref(null);
    // const section1 = ref(null);
    // const section2 = ref(null);

    // function handleScroll(){
    //     if(window.scrollY >= section1.value.offsetHeight){
    //         X.value = -(window.scrollY - section1.value.offsetHeight)
    //     }
    // }

    // onMounted(()=>{
    //     document.addEventListener('scroll',handleScroll)
    // })

    return {
      overlay: false,
      zIndex: 0,
      show: false,
      Icon,
      drawer: false,
      model: null,
      arrayOverlay: [],
      block: [
        {
          pict: "https://img.icons8.com/material/85/be2edd/circled-a.png",
          to: "/blockA",
          title: "Blok A",
        },
        {
          pict: "https://img.icons8.com/material/85/FDA7DF/circled-b.png",
          to: "/blockB",
          title: "Blok B",
        },
        {
          pict: "https://img.icons8.com/material/85/ffb8b8/circled-c.png",
          to: "/blockC",
          title: "Blok C",
        },
      ],
      progress: [
        {
          id: 1,
          title: "progress 1",
          image: require("../assets/progress1.jpeg"),
        },
        {
          id: 2,
          title: "progress 2",
          image: require("../assets/progress2.jpeg"),
        },
        {
          id: 3,
          title: "progress 3",
          image: require("../assets/progress3.jpeg"),
        },
        {
          id: 4,
          title: "progress 4",
          image: require("../assets/progress4.jpeg"),
        },
      ],
      bahan: [
        {
          name: "Pondasi",
          detail: "Pondasi Batu Kali & Footplate",
        },
        {
          name: "Dinding",
          detail: "Pasangan Batu Merah",
        },
        {
          name: "Lantai Induk",
          detail: "Granitile 60 x 60",
        },
        {
          name: "Plafond",
          detail: "Gypsum Rangka Galvalum",
        },
        {
          name: "Rangka Atap",
          detail: "Rangka Atap Baja Ringan",
        },
        {
          name: "KM/WC Induk",
          detail:
            "Dinding full kramik 25 x 40 Lantai kramik 40 x 40 Closet duduk",
        },
        {
          name: "Kusen",
          detail: "Alumunium powder coating 4",
        },
        {
          name: "Daun Jendela",
          detail: "Alumunium",
        },
        {
          name: "Daun Pintu",
          detail:
            "Pintu utama panil jati finish cat duco. Pintu dalam fabrikasi finish HPL",
        },
        {
          name: "Listrik",
          detail: "2200 Watt, Instalasi bawah tanah",
        },
        {
          name: "Sumber Air Bersih",
          detail: "PDAM/Artetis",
        },
      ],
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "no",
        },
        { text: "Type", value: "type" },
        { text: "LT", value: "lt" },
        { text: "LB1", value: "lb1" },
        { text: "LB2", value: "lb2" },
        { text: "LB", value: "lb" },
        { text: "Harga", value: "harga" },
      ],
      desserts: [
        {
          no: "A1",
          type: "Argapura 71 (Rumah)",
          lt: 47,
          lb1: 41,
          lb2: 30,
          lb: 71,
          harga: "Rp. 640,500,000",
        },
        {
          no: "A1",
          type: "Argapura 55 (Rukan)",
          lt: 47,
          lb1: 30,
          lb2: 25,
          lb: 55,
          harga: "Rp. 550,000,000",
        },
        {
          no: "A2",
          type: "Argapura 60 ( Rumah )",
          lt: 40,
          lb1: 30,
          lb2: 30,
          lb: 60,
          harga: "Rp. 545,000,000",
        },
        {
          no: "A3",
          type: "Argapura 60 ( Rumah ) ",
          lt: 40,
          lb1: 30,
          lb2: 30,
          lb: 60,
          harga: "Rp. 545,000,000",
        },
        {
          no: "A5",
          type: "Mahendra 112",
          lt: 91,
          lb1: 57.49,
          lb2: 54.5,
          lb: 111.99,
          harga: "Rp. 1,098,195,000",
        },
        {
          no: "A6",
          type: "Mahendra 111",
          lt: 71,
          lb1: 56.62,
          lb2: 54.02,
          lb: 110.64,
          harga: "Rp. 990,530,000",
        },
        {
          no: "A7",
          type: "Sindoro 58",
          lt: 46,
          lb1: 33.55,
          lb2: 25.3,
          lb: 58.85,
          harga: "Rp. 566,325,000",
        },
        {
          no: "B1",
          type: "Mahameru 128",
          lt: 100,
          lb1: 65.76,
          lb2: 61.63,
          lb: 127.39,
          harga: "Rp. 1,231,460,000",
        },
        {
          no: "B2",
          type: "Mahameru 128",
          lt: 100,
          lb1: 65.76,
          lb2: 61.63,
          lb: 127.39,
          harga: "Rp. 1,231,460,000",
        },
        {
          no: "B3",
          type: "Sindoro 80",
          lt: 82,
          lb1: 40,
          lb2: 40,
          lb: 80,
          harga: "Rp. 870,000,000",
        },
        {
          no: "B3",
          type: "Sindoro 50",
          lt: 82,
          lb1: 50,
          lb2: 0,
          lb: 50,
          harga: "Rp. 685,000,000",
        },
        {
          no: "B3",
          type: "Sindoro 45",
          lt: 82,
          lb1: 45,
          lb2: 0,
          lb: 45,
          harga: "Rp. 657,500,000",
        },
        {
          no: "B5",
          type: "Sindoro 159",
          lt: 145,
          lb1: 83.35,
          lb2: 75.25,
          lb: 158.6,
          harga: "Rp. 1,634,925,000",
        },
        {
          no: "B6",
          type: "Mahameru 128",
          lt: 100,
          lb1: 65.76,
          lb2: 61.63,
          lb: 127.39,
          harga: "Rp. 1,231,460,000",
        },
        {
          no: "B7",
          type: "Mahameru 128",
          lt: 100,
          lb1: 65.76,
          lb2: 61.63,
          lb: 127.39,
          harga: "Rp. 1,231,460,000",
        },
        {
          no: "C1",
          type: "Sindoro 133",
          lt: 107,
          lb1: 68.1,
          lb2: 64.9,
          lb: 133,
          harga: "Rp. 1,298,950,000",
        },
        {
          no: "C2",
          type: "Mahameru 128",
          lt: 104,
          lb1: 65.76,
          lb2: 61.63,
          lb: 127.39,
          harga: "Rp. 1,251,460,000",
        },
        {
          no: "C5",
          type: "Mahameru 124",
          lt: 94,
          lb1: 63.81,
          lb2: 59.63,
          lb: 123.44,
          harga: "Rp. 1,178,735,000",
        },
        {
          no: "C6",
          type: "Mahameru 124",
          lt: 92,
          lb1: 63.81,
          lb2: 59.63,
          lb: 123.44,
          harga: "Rp. 1,168,735,000",
        },
        {
          no: "C7",
          type: "Sindoro 156",
          lt: 110,
          lb1: 83.04,
          lb2: 73.47,
          lb: 156.51,
          harga: "Rp. 1,447,540,000",
        },
      ],
      paralax: {
        src: require("../assets/pharalax.jpg"),
      },
      mapImg: [
        {
          src: require("../assets/gendhisMap2.png"),
        },
      ],
      icons: [
        {
          icon: "mdi-instagram",
          href: "https://www.instagram.com/{ARGAGENDHIS}",
        },
        {
          icon: "mdi-twitter",
          href: "https://www.instagram.com/dionisiusaa/",
        },
        {
          icon: "mdi-facebook",
          href: "https://www.instagram.com/dionisiusaa/",
        },
      ],
    };
  },
  // watch: {
  //   overlay(val) {
  //     val &&
  //       setTimeout(() => {
  //         this.overlay = false;
  //       }, 2000);
  //   },
  // },
  // mounted() {
  //   this.initMap();
  //   this.initLayers();
  // },
  methods: {
    overlayfunct(id) {
      for (var i = 0; i < this.progress.length; i++) {
        if (id === this.progress[i].id) {
          this.arrayOverlay.push(this.progress[i].image)
        }
      }
      this.overlay = true;
    },
    // submitComment: function (reply) {
    //   this.comments.push({
    //     id: 1,
    //     user: this.current_user.user,
    //     avatar: this.current_user.avatar,
    //     text: reply,
    //   });
    // },
  },
};
</script>

<style scoped>
.fullheight {
  min-height: 100vh !important;
}
/* ///////////////////////// JUMBOTRON CSS /////////////// */
.jumbotron {
  background-image: url("../assets/homepage.jpg");
  background-size: cover;
  height: 625px;
  width: max;
  align-items: center;
  text-align: right;
  position: relative;
}

.mapsection {
  font-family: poppinssemibold;
  color: black;
  font-size: 65px;
  text-align: left;
}

.listpropertiSection {
  font-family: poppinssemibold;
  color: black;
  font-size: 65px;
  text-align: left;
}

.float-left {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

.jumbotron.container {
  z-index: 1;
  position: relative;
}

.jumbotron::after {
  content: "";
  display: block;
  width: 100%;
  height: 60%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
}

/* ///////////////////////// SALES CSS //////////////// */
.sales {
  padding-left: 89px;
  padding-right: 89px;
}

.salespart {
  font-family: poppinssemibold;
  color: black;
  font-size: 55px;
  text-align: left;
}
.feature {
  font-family: poppinssemibold;
  color: black;
  margin-top: 60px;
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
  margin-top: 100px;
  text-align: center;
}

.produk1 {
  font-family: poppinssemibold;
  color: white;
  margin-top: 100px;
  font-size: 75px;
  text-align: left;
}
.produk2 {
  font-family: poppinssemibold;
  color: white;
  font-size: 75px;
  margin-top: -25px;
  text-align: left;
}

.progresspart1 {
  font-family: poppinssemibold;
  color: white;
  margin-top: 100px;
  font-size: 75px;
  text-align: left;
}
.progresspart2 {
  font-family: poppinssemibold;
  color: white;
  font-size: 75px;
  margin-top: -25px;
  text-align: left;
}

.locationPart {
  font-family: poppinssemibold;
  color: white;
  font-size: 75px;
  margin-top: 125px;
  text-align: right;
}
.locationPart2 {
  font-family: poppinssemibold;
  color: white;
  font-size: 75px;
  margin-top: -25px;
  text-align: right;
}
.spesifikasi {
  font-family: poppinssemibold;
  color: black;
  font-size: 45px;
  text-align: left;
}
.viewAll {
  font-family: poppinssemibold;
  color: rgb(40, 27, 219);
  font-size: 20px;
  padding-top: 35px;
  text-align: center;
}

.title2 {
  font-family: poppinssemibold;
  color: black;
  font-size: 25px;
  text-align: left;
}
.location {
  font-family: poppinssemibold;
  color: black;
  font-size: 45px;
  text-align: left;
}
.value2 {
  font-family: poppinslight;
  color: black;
  font-size: 12px;
  text-align: left;
}

.spesifikasiCaption {
  font-family: poppinslight;
  font-size: 15px;
  color: black;
  text-align: left;
  margin-top: -20px;
  font-weight: 200;
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

.pricelist {
  font-family: poppinssemibold;
  font-size: 45px;
  color: black;
  margin-top: 100px;
  text-align: center;
  font-weight: 200;
}

:root {
  --animate-duration: 800ms;
  --animate-delay: 1s;
}

#feature {
  height: auto !important;
  min-height: 500px;
}
#specification {
  height: auto !important;
  min-height: 700px;
}
#product {
  height: auto !important;
  min-height: 650px;
  background-color: #f1f2f6;
}
#availability {
  height: auto !important;
  min-height: 650px;
}
#location {
  height: auto !important;
  min-height: 650px;
}
#footer {
  height: auto !important;
  background-color: black;
}

/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

/* //////////////////////////////////// RESPONSIVE CSS ///////////////////////////////////////////////////// */
@media screen and (max-width: 768px) {
  nav ul {
    width: 50%;
  }
}

@media screen and (max-width: 576px) {
  .jumbotron {
    background-image: url("../assets/homepage.jpg");
    background-size: cover;
    height: 625px;
    width: max;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .jumbotron .jumbotrontulisan {
    font-family: poppinssemibold;
    color: white;
    font-size: 45px;
    margin-bottom: 30px;
  }

  .jumbotron .jumbotrontulisan1 {
    font-family: poppinslight;
    color: white;
    margin-top: -45px;
    font-size: 25px;
    margin-bottom: 30px;
  }
  .featureSpecificationPart {
    font-family: poppinssemibold;
    color: white;
    font-size: 45px;
    margin-top: 100px;
    text-align: center;
  }

  .feature {
    font-family: poppinssemibold;
    color: black;
    margin-top: 20px;
    font-size: 35px;
    text-align: center;
  }

  .featureCaption {
    font-family: poppinssemibold;
    color: black;
    font-size: 20px;
    text-align: left;
  }
  .featureCaption2 {
    font-family: poppinslight;
    color: black;
    font-size: 10px;
    text-align: left;
  }

  .spesifikasi {
    font-family: poppinssemibold;
    color: black;
    font-size: 35px;
    text-align: center;
  }
  .spesifikasiCaption {
    font-family: poppinslight;
    font-size: 15px;
    color: black;
    text-align: center;
    margin-top: -20px;
    font-weight: 200;
  }

  .produk1 {
    font-family: poppinssemibold;
    color: white;
    margin-top: 100px;
    font-size: 45px;
    text-align: left;
  }
  .produk2 {
    font-family: poppinssemibold;
    color: white;
    font-size: 45px;
    margin-top: -25px;
    text-align: left;
  }

  .listpropertiSection {
    font-family: poppinssemibold;
    color: black;
    font-size: 45px;
    text-align: left;
  }

  .progresspart1 {
    font-family: poppinssemibold;
    color: white;
    margin-top: 100px;
    font-size: 45px;
    text-align: left;
  }
  .progresspart2 {
    font-family: poppinssemibold;
    color: white;
    font-size: 45px;
    margin-top: -25px;
    text-align: left;
  }
  .locationPart {
    font-family: poppinssemibold;
    color: white;
    font-size: 45px;
    margin-top: 125px;
    text-align: right;
  }

  .locationPart2 {
    font-family: poppinssemibold;
    color: white;
    font-size: 45px;
    margin-top: -25px;
    text-align: right;
  }

  .location {
    font-family: poppinssemibold;
    color: black;
    font-size: 35px;
    text-align: center;
  }
  .LocationCaption2 {
    font-family: poppinslight;
    font-size: 15px;
    color: black;
    text-align: center;
    margin-top: -20px;
    font-weight: 200;
  }

  .LocationCaption3 {
    font-family: poppinslight;
    font-size: 15px;
    color: black;
    text-align: center;
    margin-top: -20px;
    font-weight: 200;
  }

  .LocationCaption3 {
    font-family: poppinslight;
    font-size: 15px;
    color: black;
    text-align: left;
    margin-top: -20px;
    font-weight: 200;
  }

  .pricelist {
    font-family: poppinssemibold;
    font-size: 45px;
    color: black;
    margin-top: -20px;
    text-align: center;
    font-weight: 200;
  }
}
</style>
