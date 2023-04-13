import sesion from "@/util/Sesion";
export default {  
    data: () => ({
      //
    }),
    methods: {
        logout(){ 
            sesion.logout() 
        }
    }
};