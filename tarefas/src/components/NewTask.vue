<template>
    <div class="new-task">
        <input @keydown.enter="add" v-model="name" type="text"
            class="form-element" placeholder="Nova tarefa?">
        <button @click="add" class="form-element">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            this.$emit('taskAdded', {name: this.name })
            this.name = ''
        }
    }
}
</script>

<style scoped>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outiline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;
    }

    input.form-element {
        width: 500px;
        background-color: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196f3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>