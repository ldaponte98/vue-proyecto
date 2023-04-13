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
            <v-btn
              id="btn-input"
              class="mr-4"
              :style="`color: blue;`"
              color="#fff"
              elevation="5"
              to="/export-report">Reporte simit</v-btn>
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

<script src="./Basic.js"></script>
<style src="./Basic.css"></style>