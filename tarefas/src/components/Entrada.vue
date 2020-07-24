<template>
    <div class="input-tarefa">     
        <input :placeholder="tarefas[0].titulo" >
        <button @click="adicionaTarefa">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tarefas: [
                {titulo: 'Teste'},
            ]
        }
    },
    methods: {
        adicionaTarefa() {
            return null
        }
    },
    created() {
        console.log(tarefas)
    }
}
</script>

<style scoped>
    .input-tarefa {
        width: 50%;
        text-align: center;
        margin: 10px;
    }

    button, input {
	    outline: inherit;
    }

    input {
        width: 40%;
        height: 34px;
        background-color: rgb(216, 216, 216, 0.3);
        border: 1px solid #fff;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-right: none !important;
        color: #fff;
        padding: 0 10px;
        font-size: 15px;
        margin-top: 1px;
    }

    button {
        height: 36px;
        width: 30px;
        color: #fff;
        border: 1px solid #fff;
        background-color: rgb(45, 116, 238);
        margin-left: -4px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        font-size: 15px;
    }

    ::-webkit-input-placeholder {
        color: rgb(174, 174, 174);
    }
    
    :-moz-placeholder { /* Firefox 18- */
        color: rgb(174, 174, 174);
    }
    
    ::-moz-placeholder {  /* Firefox 19+ */
        color: rgb(174, 174, 174);
    }
    
    :-ms-input-placeholder {  
        color: rgb(174, 174, 174);
    }
</style>