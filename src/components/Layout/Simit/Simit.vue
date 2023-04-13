<template>

  <v-app>
    <v-app-bar
      app
      color="#fff"
      dark
    >
      <div class="d-flex align-center">
        <img src="https://cdn.quipux.com/simit2/resources/images/logo-landing.png">
      </div>
    </v-app-bar>
    <v-main class="container-main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script src="./Simit.js"></script>
<style src="./Simit.css"></style>