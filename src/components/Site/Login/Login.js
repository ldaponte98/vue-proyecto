import {api} from "@/util/EndPoint";
import axios from 'axios'
import 'vuejs-noty/dist/vuejs-noty.css';
export default {
    data() {
        return {
            loading: false,
            form: {
                username: "",
                password: "" 
            }
        }
    },
    methods: {
        login(){
            if (this.validateForm()) {
                this.loading = true
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                };

                let request = new FormData();
                request.append('username', this.form.username);
                request.append('password', this.form.password); 
                axios.post(api.auth, request, axiosConfig)
                .then((response) => {
                    this.loading = false
                    this.saveSesion(response.data)
                    this.$router.push('/export-report')
                    this.$noty.success('Bienvenido', "Acceso concedido")    
                    console.log(response.data)
                })
                .catch(error => {
                    this.loading = false
                    console.log(error);
                    this.$noty.error('Credenciales inválidas')                  
                }); 
            }
        },
        validateForm(){
            if (this.form.username.trim() == "") {
                this.$noty.error("El nombre de usuario es obligatorio")
                return false
            }
            if (this.form.password.trim() == "") {
                this.$noty.error("La contraseña es obligatoria")
                return false
            }
            return true
        },
        saveSesion(data){
            localStorage.setItem("access_token", data.accessToken)
        }
    }
}