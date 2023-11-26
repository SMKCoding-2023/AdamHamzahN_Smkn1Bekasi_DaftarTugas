<script lang="ts" setup>
import { useTodoStore } from "~/stores/todo";

const Todostore = useTodoStore();
const allTodo = ref([]);

Todostore.getAllTodo().then(() => {
    allTodo.value = Todostore.todo;
});

const selectedActivity = ref("");
</script>
<template>
    <header class="w-full border-b border-slate-200 py-6">
        <div class="container">
            <div class="flex justify-between items-center">
                <div>
                    <h1 to="/" class="text-xl font-bold">DAFTAR TUGAS</h1>
                </div>
                <nav class="flex items-center gap-6">
                    <NuxtLink to="/tambah" class="text-base">
                        <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Tambah</button>
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </header>

    <body>
        <div class="container">
            <div class="py-10">
                <div class="flex gap-6 flex-wrap mx-auto">
                    <template v-if="allTodo.length === 0">
                        <h4 class="text-center mx-auto">Belum ada tugas ditambahkan</h4>
                    </template>
                    <template v-else>
                        <template v-for="(item, index) in allTodo" :key="index">
                            <CardsCardActivity :activity="item" class="w-[calc(100%/4-18px)]" />
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </body>
</template>