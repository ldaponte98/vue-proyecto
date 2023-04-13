<template>
  <v-container class="mt-6 mb-6">
        <center>
            <h2><b>Consulta tus clientes reportados</b></h2>
            <h4>
                Verifica el estado actual de tus clientes<br> 
                Para analizar obligaciones pendientes de pago en sus comparendos<br>
            </h4>
            <v-btn

                class="ma-2 btn-generar"
                style="color:white"
                :loading="loadingSync"
                :disabled="loadingSync"
                :color="'primary'"
                x-large
                @click="syncReport()"
            >
            Actualizar reporte simit
            <template v-slot:loader>
                <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
                </span>
            </template>
            </v-btn>
            <br>
            <i v-if="lastDateSync == null">No hay registro de la última actualización con simit realizada</i>
            <section v-if="lastDateSync != null">
                <img class="img" src="https://i.pinimg.com/originals/b6/0c/44/b60c442e6dd69356b90b9e5bec23cc99.png"  
                    alt="Reporte simit"
                    width="250"
                    height="150"><br>
                <i>Última sincronización: {{lastDateSync}}</i><br>
                <v-btn

                    class="ma-2 btn-generar"
                    style="color:white"
                    :loading="loadingDownload"
                    :disabled="loadingDownload"
                    :color="'success'"
                    x-large
                    @click="dowlandReport()"
                >
                    Descargar resultados
                    <template v-slot:loader>
                        <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                        </span>
                    </template>
                </v-btn>
            </section>
            
      </center>
      
        <table v-if="list != null && list.length > 0" id="table-excel">
            <thead>
                <tr>
                    <th><b>Transacción</b></th>
                    <th><b>Nombre</b></th>
                    <th><b>Identificación</b></th>
                    <th><b>Tipo de identificación</b></th>
                    <th><b>Teléfono</b></th>
                    <th><b>Infracción</b></th>
                    <th><b>Fecha</b></th>
                    <th><b>Descripción</b></th>
                    <th><b>Tipo infracción</b></th>
                    <th><b>Secretaria</b></th>
                    <th><b>Infracción</b></th>
                    <th><b>Porcentaje de descuento</b></th>
                    <th><b>Otros valores</b></th>
                    <th><b>Valor infracción</b></th>
                    <th><b>Valor total</b></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.transaction_id}}</td>
                    <td>{{item.client}}</td>
                    <td>{{item.document}}</td>
                    <td>{{item.document_type}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.code_infraction}}</td>
                    <td>{{item.date_fines}}</td>
                    <td>{{item.description_infraction}}</td>
                    <td>{{item.fines_type}}</td>
                    <td>{{item.name_city}}</td>
                    <td>{{item.number_fines}}.</td>
                    <td>{{item.percentage_discount}}%</td>
                    <td>{{parseToMoney(item.others_value)}}</td>
                    <td>{{parseToMoney(item.fines_value)}}</td>
                    <td>{{parseToMoney(item.full_value)}}</td>
                </tr>
                <tr>
                    <td colspan="14"><b>Total</b></td>
                    <td align="right">
                        <b>{{ parseToMoney(list.reduce((a, b) => parseFloat(a) + parseFloat(b.full_value), 0)) }}</b>
                    </td>
                </tr>
            </tbody>
        </table>
    </v-container>
    
</template>

<script src="./Index.js"></script>
<style src="./Index.css"></style>