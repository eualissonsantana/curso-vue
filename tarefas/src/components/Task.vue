<template>
    <div class="task" :class="stateClass">
    <span @click="$emit('taskDeleted', task)" class="close">x</span>
        <p>{{task.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: {Type: Object, required: true}
    },
    computed: {
        stateClass() {
            return {
                pedding: this.task.pedding,
                done: !this.task.pedding
            }
        }
    }
}
</script>

<style scoped>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pedding {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0a8f08;
        background-color: #4caf50;
        text-decoration: line-through;
    }

    .pedding .close {
        background-color: #b73229;
    }

    .done .close {
        background-color: #0a8f08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>