<template>
    <div>
        <form @submit.prevent="buscarReporte">
            <h1>Ingrese los datos de su reporte</h1>
            <div class="form-compo">
                <input type="date" name="date-added" id="date" class="input-form" placeholder=" " />
                <label for="date-added" class="lbl-form">Fecha *</label>
            </div>
            <div class="form-compo">
                <input type="text" name="country/region" id="cty-rg" class="input-form" placeholder=" "  />
                <label for="country/region" class="lbl-form">Pais/Region</label>
            </div>
            <div class="form-compo">
                <input type="text" name="iso-filter" id="filter-iso" class="input-form" placeholder=" " />
                <label for="iso-filter" class="lbl-form">Filtro de pais por ISO</label>
            </div>
            <div class="form-compo">
                <input type="text" name="country-region-filter" id="cty-rg-filter" class="input-form" placeholder="" />
                <label for="country-region-filter" class="lbl-form">Filtro por pais o reguion</label>
            </div>
            <div class="form-compo">
                <input type="text" name="province-filter" id="filter-province" class="input-form" placeholder=" " />
                <label for="province-filter" class="lbl-form">Filtro de provincia</label>
            </div>
            <div class="form-compo">
                <input type="number" name="pagination" id="pagination-page" class="input-form" placeholder=" " />
                <label for="pagination" class="lbl-form">Paginacion por pagina</label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                tables:[],
                error:"",
                region:null,
                reports:null
            }
        },
        methods:{
            async fetchRegions(){
                try{
                    //Guardamos en una variable el link de la API
                    const url="https://covid-api.com/api/regions?per_page=20&order=iso&sort=desc"
                
                    //Realizamos la peticion
                    const response = await fetch(url);

                    //Verificamos que se consigan los datos
                    if(!response.ok){
                        this.error="No se encontro informacion";
                    }

                    //Convertimos la infomacion a tipo JSON
                    const data= await response.json
                    this.region=data;

                    
                } catch(err){
                    this.error = err.message;
                    console.log(this.error);
                }
            },
            async fethReports(){

            }

        }
    }
</script>
<style scoped>
    div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
form{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.form-compo{
    position: relative;
    width: 100%;
}
.input-form {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  background: none;
  box-sizing: border-box;
  color: #fff;
  margin-bottom: 1px;
}
.input-form:focus {
  border-color: #FFCC00;
}
.lbl-form {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.input-form:focus + .lbl-form,
.input-form:not(:placeholder-shown) + .lbl-form {
  top: 0px;
  font-size: 0.8rem;
  color: #FFCC00;
  padding: 3px;
  background-color: #2c3e50;
}
button {
  border: 2px solid transparent;
  color: #fff;
  border-radius: 10px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  transition: all 1s ease;
  color: #000;
  margin-bottom: 10px;
}
button:hover {
  background-color: #FFCC00;
  color: #000;
  animation: gradientAnimation 3s linear infinite;
}
@keyframes gradientAnimation {
  0% {
    background-image: linear-gradient(#2c3e50,#2c3e50),linear-gradient(90deg, #FFCC00, #FF8400);
    background-origin: border-box;
    background-clip: padding-box,border-box;
  }50%{
    background-image: linear-gradient(#2c3e50,#2c3e50),linear-gradient(90deg, #FF8400, #FF8400);
    background-origin: border-box;
    background-clip: padding-box,border-box;
  }
  100% {
    background-image: linear-gradient(#2c3e50,#2c3e50),linear-gradient(90deg, #FF8400, #FFCC00);
    background-origin: border-box;
    background-clip: padding-box,border-box;
  }
}


</style>
