<script lang="ts" setup>
import { activity } from "~/composables/constants/activity";
import { type Activity } from "~/types/activity";
const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) :
    null;
const product = ref(activity.find((item: Activity) => item.id === id));
</script>
<template>
    <DatailActivity :activity="activity" />

</template>