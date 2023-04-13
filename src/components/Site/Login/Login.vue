<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Cefatrans</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="username"
                              label="Usuario"
                              type="text"
                              v-model="form.username"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Contraseña"
                              type="password"
                              v-model="form.password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn v-show="!loading" color="primary" @click="login()">Ingresar</v-btn>
                        <v-progress-circular
                            v-show="loading"
                            indeterminate
                            color="primary"
                        ></v-progress-circular>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>

   
</template>

<script src="./Login.js"></script>
<style src="./Login.css"></style>