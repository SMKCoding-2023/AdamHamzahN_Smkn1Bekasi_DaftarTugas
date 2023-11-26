<!-- <script lang="ts" setup>
const props = defineProps({
    activity: {
        type: Object,
        default: {},
    }
});
console.log(props.activity.name);
</script> -->
<script lang="ts" setup>
const props = defineProps({
    activity: {
        type: Object,
        default: {},
    }
});

const { baseStorageUrl } = useAppConfig();
</script>

<template>
    <section class="bg-white shadow-xl rounded-xl overflow-hidden">
        <div class="px-5 pb-5 pt-10 relative">
            <h5 class="text-xl font-semibold mb-2">{{ props.activity.name }}</h5>
            <NuxtLink :to="`/${activity.id}`" class="text-base">
                <button class="bg-green-500 text-white font-semibold py-2 px-4 rounded">ubah</button>
            </NuxtLink>
            <button class="bg-red-500 text-white font-semibold py-2 px-4 rounded">hapus</button>


        </div>
    </section>
</template>