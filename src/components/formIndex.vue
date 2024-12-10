<template>
    <h1>Formulario de registro</h1>
    <div>
        <form @submit.prevent="enviarFormulario">
            <div class="lbl-input-container">
                <input 
                    type="text" 
                    v-model="name" 
                    class="input-form" 
                    placeholder=" " 
                    required
                />
                <label for="name-input" class="lbl-input">Ingrese su nombre</label>
            </div>
            <div class="lbl-input-container">
                <input 
                    type="text" 
                    v-model="lastName"
                    class="input-form" 
                    placeholder=" " 
                    required
                />
                <label for="last-name-input" class="lbl-input">Ingrese su apellido</label>
            </div>
            <div class="lbl-input-container">
                <input 
                    type="number" 
                    v-model="phoneNumber"
                    class="input-form" 
                    placeholder=" " 
                    required
                />
                <label for="phone-input" class="lbl-input">Ingrese su numero de telefono</label>
            </div>
            <div class="lbl-input-container">
                <input 
                    type="text" 
                    v-model="address" 
                    class="input-form" 
                    placeholder=" " 
                    required
                />
                <label for="address-input" class="lbl-input">Ingrese su direccion</label>
            </div>
            <button type="submit" id="sub-btn" class="button-submit">Enviar el formulario</button>
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            name:"",
            lastName:"",
            phoneNumber:"",
            address:""
        };
    },
    methods: {
    enviarFormulario() {
      // Emitimos los datos al componente padre
        this.$emit("form-enviado", {
            name: this.name,
            lastName: this.lastName,
            phoneNumber: String(this.phoneNumber),
            address: this.address,
        });
      // Limpiar los campos del formulario
        this.name = "";
        this.lastName = "";
        this.phoneNumber = "";
        this.address = "";
    },
  }
};
</script>

<style scoped>
.lbl-input-container {
    position: relative;
    width: 100%;
    margin: 20px auto;
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
}

.input-form:focus {
    border-color: #6c63ff;
}

.lbl-input {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    font-size: 1rem;
    color: #aaa;
    pointer-events: none;
}

.input-form:focus + .lbl-input,
.input-form:not(:placeholder-shown) + .lbl-input {
    top: 0px;
    font-size: 0.8rem;
    color: #6c63ff;
    padding: 3px;
}
.button-submit{
    cursor: pointer;
    border: 2px solid #6c63ff;
    border-radius: 6px;
    width: 100%;
    height: 30px;
    color: #fff;
    transition: all 0.3s ease;
}
.button-submit:hover{
    background-color: #6c63ff;
}
</style>