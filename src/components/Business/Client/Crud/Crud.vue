<template>

  <v-data-table
    :headers="headers"
    :items="list"
    class="elevation-1 table-clients"
    :loading= "loading"
    :search="search"
    loading-text="Consultando información..."
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Clientes</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nuevo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.document"
                      label="N° documento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                  <v-select
                    v-model="editedItem.documentType"
                    item-text="text"
                    item-value="value"
                    :items="documentTypes"
                    label="Tipo de documento"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.phone"
                      label="Teléfono"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field v-show="editedItem.documentType != '4'"
                      v-model="editedItem.plate"
                      label="Placa"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                  <v-select
                    v-model="editedItem.state"
                    item-text="text"
                    item-value="value"
                    :items="status"
                    label="Estado"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="align-center"><center>¿Seguro desea eliminar este registro?</center></v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Confirmar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field><br>
    </template>
    <template v-slot:item.documentType="{ item }">
        {{ validateDocumentType(item.documentType) }}
    </template>
    <template v-slot:item.state="{ item }">
        {{ validateState(item.state) }}
    </template>
    <template v-slot:item.actions="{ item }">
        <v-btn
        class="mr-2"
        fab
        dark
        x-small
        color="primary"
        >
            <v-icon 
            x-small
            @click="editItem(item)"
            dark>
                mdi-pencil
            </v-icon>
        </v-btn>
        <v-btn
        fab
        dark
        x-small
        color="primary"
        >
            <v-icon 
            x-small
            @click="deleteItem(item)"
            dark>
                mdi-delete
            </v-icon>
        </v-btn>
    </template>
    <br>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="getClients"
      >
        Refrescar
      </v-btn>
    </template>
  </v-data-table>
</template>
<script src="./Crud.js"></script>
<style src="./Crud.css"></style>