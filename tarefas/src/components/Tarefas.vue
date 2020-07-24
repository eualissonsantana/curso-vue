<template>
    <div class="area-tarefa">
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa.index">
                <section class="tarefa">
                    {{tarefa.titulo}}
                </section>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tarefas: [
                {titulo: 'Primeiro teste'},
                {titulo: 'Primeiro teste'},
            ]
        }
    }
}
</script>

<style scoped>
    
    ul {
        list-style: none;
        padding: 0;
        text-align: center;
    }

    ul li {
        display: inline;
    }

    .area-tarefa {
        margin: 30px;
        width: 80%;
    }

    .tarefa {
        display: inline;
        background-color: rgb(10, 201, 10);
        padding: 40px 50px;
        margin: 20px;
        border-radius: 6px; 
    }

    .barra-verde, .tarefa p {
        display: inline;
    }

    hr {
        background-color: green;
        height: 100%;
        width: 10px;
    }


</style>