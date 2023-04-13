import {api} from "@/util/EndPoint";
import utilDate from "@/util/UtilDate";
import utilExcel from "@/util/UtilExcel";
import axios from 'axios'
import 'vuejs-noty/dist/vuejs-noty.css';
export default {
    data() {
        return {
            list: [],
            loadingSync: false,
            loadingDownload: false,
            textButton: "Generar reporte",
            lastDateSync: null
        }
    },
    methods: {
        syncReport(){
            this.loadingSync = true
            axios.get(api.site.syncReportReported)
            .then((response) => {
                this.loadingSync = false
                this.$noty.success('Se ha generado el reporte de SIMIT de forma exitosa') 
                this.lastDateSync = utilDate.getCurrent()
            })
            .catch(error => {
                this.loadingSync = false
                console.log(error);
                this.$noty.error('Ocurrió un error al generar el reporte, por favor intenta de nuevo más tarde')                  
            });  
        },
        dowlandReport(){
            this.loadingDownload = true
            axios.get(api.site.findReportedSimit)
                .then((response) => {
                    this.list = response.data.data
                    if (this.list.length == 0) {
                        this.$noty.error('El reporte no tiene resultados')
                        this.loadingDownload = false
                        return
                    }
                    setTimeout(() => {
                        utilExcel.tableToExcel("table-excel", `Reporte actualizado simit - ${this.lastDateSync}`)
                        this.loadingDownload = false
                        this.$noty.success('Reporte descargado exitosamente')
                    }, 1000);
                })
                .catch((error) => {
                    this.$noty.error('Ocurrio un error al generar el reporte')
                })
        },
        evaluateState(state){
            switch (state) {
                case "PP":
                    return "Pago pendiente";
                case "SP":
                    return "Pago realizado";
                default:
                    return "Indefinido"
            }
        },
        formatMoney(value){
            return `$${new Intl.NumberFormat('de-DE').format(value)}`
        },
        getLastDateSyncServer(){
            axios.get(api.site.findLastDateSyncSimit)
                 .then((response) => {
                    this.lastDateSync = response.data.data
                 })
                 .catch((error) => {
                     console.log(error)
                 })
        },
        parseToMoney(number){
            return `${new Intl.NumberFormat('en-CO', { style: 'currency', currency: 'USD' }).format(number)}`
        }
    },
    mounted() {
        this.getLastDateSyncServer()
    }
}