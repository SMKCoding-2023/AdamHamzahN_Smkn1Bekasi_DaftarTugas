<script lang="ts" setup>
import { ref } from 'vue';
import { activity } from'~/composables/constants/activity';

const allactivity = ref(activity);
</script>
<template>
    <header class="w-full border-b border-slate-200 py-6">
        <div class="container">
            <div class="flex justify-between items-center">
                <div>
                    <h1 to="/" class="text-xl font-bold">TODO LIST</h1>
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
                    <template v-for="(item, index) in allactivity" :key="index">
                        <CardsCardActivity :activity="item" class="w-[calc(100%/4-18px)]" />
                    </template>
                </div>
            </div>
        </div>
    </body>
</template>