<template>
    <button @click="handleClick" class="my-button" >{{ buttonText }}</button>
</template>
  
<script>
import { useTodoStore } from '~/stores/todo';

const TodoStore = useTodoStore;

export default {
    props: {
        buttonText: {
            type: String,
            default: "Click me"
        }
    },
    methods: {
        async handleClick() {
            // Tambahkan logika atau aksi yang ingin Anda lakukan saat tombol diklik

            
        }
    }
};
</script>
  
<style scoped>
/* Tambahkan gaya sesuai kebutuhan Anda */
.my-button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
}
</style>