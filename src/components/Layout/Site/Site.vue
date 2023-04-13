<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <img width="300" height="83" src="logo.png">
      </div>
      <v-row>
        <v-col cols="12" align="right">
          <router-link to="/clients">
            <v-btn
              id="btn-input"
              class="mr-4"
              :style="`color: blue;`"
              color="#fff"
              elevation="5">Mis clientes</v-btn>
          </router-link>
            <v-btn
              id="btn-input"
              class="mr-4"
              :style="`color: blue;`"
              color="#fff"
              elevation="5"
              @click="logout">Cerrar sesión</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script src="./Site.js"></script>
<style src="./Site.css"></style>