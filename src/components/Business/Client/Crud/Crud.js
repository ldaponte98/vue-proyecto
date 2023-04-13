import {api} from "@/util/EndPoint";
import axios from 'axios'
import 'vuejs-noty/dist/vuejs-noty.css';
export default {
    data: () => ({
        search: '',
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: 'N° documento',value: 'document' },
            { text: 'Tipo de documento', value: 'documentType' },
            { text: 'Teléfono', value: 'phone' },
            { text: 'Placa', value: 'plate' },
            { text: 'Estado', value: 'state' },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        list: [],
        editedIndex: -1,
        editedItem: {
            id: null,
            document: '',
            documentType: '',
            phone: '',
            plate: '',
            state: ''
        },
        defaultItem: {
            id: null,
            document: '',
            documentType: '',
            phone: '',
            plate: '',
            state: ''
        },
        loading: false,
        documentTypes: [
            { value: '1', text: 'Cedula de ciudadania' },
            { value: '2', text: 'Tarjeta de identidad' },
            { value: '3', text: 'Cédula extranjería' },
            { value: '4', text: 'Nit' },
            { value: '6', text: 'Pasaporte' },
            { value: '7', text: 'Carnet Diplomático' },
            { value: '8', text: 'Registro Civil' },
            { value: '9', text: 'Cedula venezolana' }
        ],
        status:[
            { value: 'A', text: 'Activo' },
            { value: 'I', text: 'Inactivo' }
        ]
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo cliente' : 'Editar cliente'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.getClients()
    },

    methods: {
        getClients(){
            this.loading = true
            axios.get(api.client.list)
            .then((response) => {
                console.log(response)
                this.loading = false
                this.list = response.data.data;
            })
            .catch(error => {
                this.loading = false
                console.log(error);
                this.$noty.error('Ocurrio un error')                  
            });  
        },
        editItem (item) {
            this.editedIndex = this.list.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            this.editedIndex = this.list.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            axios.delete(api.client.delete + this.editedItem.id)
            .then((response) => {
                this.getClients()
                this.closeDelete()
            })
            .catch(error => {
                this.$noty.error('Ocurrio un error')  
            })
        },
        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        validateState(state){
            switch (state) {
                case "A":
                    return "Activo";
                case "I":
                    return "Inactivo";
                default:
                    return "Desconocido"
            }
        },
        validateDocumentType(type){
            if(type == "1") return 'Cédula de ciudadanía'
            if(type == "2") return 'Tarjeta de identidad'
            if(type == "3") return 'Cédula extranjería'
            if(type == "4") return 'Nit'
            if(type == "6") return 'Pasaporte'
            if(type == "7") return 'Carnet Diplomático'
            if(type == "8") return 'Registro Civil'
            if(type == "9") return 'Cédula venezolana'
        },
        save() {
            if(this.validateInputs()){
                if (this.editedIndex > -1) {
                    this.updateServer()
                } else {
                    this.saveServer()
                }
            }
        },
        saveServer(){
            let self = this
            axios.post(api.client.save, this.editedItem)
            .then((response) => {
                this.getClients()
                this.close()
            })
            .catch(function (error) {
                if (error.response.data.message) {
                    self.$noty.error(error.response.data.message)
                }else{
                    self.$noty.success(error.response.data.message)
                }
            })
        },
        updateServer(){
            let self = this
            axios.put(api.client.update + this.editedItem.id, this.editedItem)
            .then((response) => {
                this.getClients()
                this.close()
            })
            .catch(function (error) {

                if (error.response.data.message) {
                    self.$noty.error(error.response.data.message)
                }else{
                    self.$noty.success(error.response.data.message)
                }
            })
        },
        validateInputs(){
            if (this.editedItem.document == "") { this.$noty.error('El campo [N° documento] es obligatorio'); return false; }
            if (this.editedItem.documentType == "") { this.$noty.error('El campo [Tipo de documento] es obligatorio'); return false; }
            if (this.editedItem.plate == "" && this.editedItem.documentType != '4') { this.$noty.error('El campo [Placa] es obligatorio'); return false; }
            if (this.editedItem.state == "") { this.$noty.error('El campo [Estado] es obligatorio'); return false; }
            if (this.editedItem.phone == "") { this.$noty.error('El campo [Teléfono] es obligatorio'); return false; }
            return true
        }
    },
  }