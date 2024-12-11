<template>
    <div>
        <div class="calculator">
            <div class="screen-calc">{{ display }}</div>
            <div class="number-pad">
                <button @click="appendNumber(num)" v-for="num in numbers" :key="num" class="num-buttons">{{ num }}</button>
                <button @click="setOperation(operator)" v-for="operator in operations" :key="operator" class="op-buttons" >{{ operator }}</button>
                <button @click="calculate" class="calc-button" >=</button>
                <button @click="clear" class="clear-button" >C</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            display:"",
            numbers: [7,8,9,4,5,6,1,2,3,0],
            operations: ['+', '-', '*', '/'],
            currentOperation: null,
            previosValue:null
        }
    },
    methods:{
        appendNumber(num){
            this.display+=num;
        },
        setOperation(operator){
            if(this.display=='') return;
            this.currentOperation=operator;
            this.previosValue=this.display;
            this.display='';
        },
        calculate(){
            let result=0;
            if(this.currentOperation==null || this.previosValue==null) return;
            switch(this.currentOperation){
                case '+':
                    result=parseFloat(this.previosValue)+parseFloat(this.display);
                    break;
                case '-':
                    result=parseFloat(this.previosValue)-parseFloat(this.display);
                    break;
                case '*':
                    result=parseFloat(this.previosValue)*parseFloat(this.display);
                    break;
                case '/':
                    result=parseFloat(this.previosValue)/parseFloat(this.display);
                    break;
                default:
                    console.log("Algo malo ocurrio y no se selecciono ningun numero pero se selecciono algun operador")
                    break;
            }
            this.display=result.toString();
            this.currentOperation=null;
            this.previosValue=null;
        },
        clear(){
            this.display="";
            this.currentOperation=null;
            this.previosValue=null;
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *{
        font-family: "Montserrat",sans-serif;
    }
    .calculator{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        margin: auto;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        background-color: #dfb89a;
    }
    .screen-calc{
        width: 100%;
        height: 50px;
        background-color: #fff;
        margin-bottom: 5px;
        font-size: 1.5rem;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 5px
    }
    .number-pad{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 5px;
        width: 100%;
        background-color: #dfb89a;
    }
    button{
        border-radius: 10px;
        font-weight: 600;
    }
    .num-buttons{
        background-color: #92797a;
    }
    .op-buttons{
        background-color: #1d5a8c;
    }
    .clear-button{
        background-color: #d98539;
    }
    .calc-button{
        background-color: #90e9e7;
    }

</style>