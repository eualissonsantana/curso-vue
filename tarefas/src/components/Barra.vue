<template>
    <div id="barra">
        <div id="progresso" :style="{width: porcentagem + '%'}">{{porcentagem}} %</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            porcentagem: 100
        }
    }
}
</script>

<style scoped>
    #barra {
        width: 80%;
        height: 25px;
        border: 1px solid #fff;
        border-radius: 6px;
        margin: 10px;
    }

    #progresso {
        text-align: center;
        height: 100%;
        background-color: green;
        border-radius: 6px;
    }

</style>