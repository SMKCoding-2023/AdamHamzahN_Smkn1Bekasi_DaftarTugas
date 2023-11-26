<script setup lang="ts">
const props = defineProps({
    activity: {
        type: Object,
        default: {},
    }
})
</script>

<template>
    <section class="py-10">
        <div class="container">
            <NuxtLink to="/product" class="bg-white border border-slate-300 w-max flex items-center gap-1 py-2 px-5 rounded-full mb-7 cursor-pointer">
                <i class="ri-arrow-left-s-line text-base font-medium"></i>
                <span class="text-base font-medium">Kembali</span>
            </NuxtLink>
            <div class="flex items-center">
                <div class="w-1/2 pl-5">
                    <label for="activity">Aktivitas</label>
                    <input type="text" name="activity">
                </div>
            </div>
        </div>
    </section>
</template>
