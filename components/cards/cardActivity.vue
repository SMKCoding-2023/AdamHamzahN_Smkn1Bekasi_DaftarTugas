<!-- <script lang="ts" setup>
const props = defineProps({
    activity: {
        type: Object,
        default: {},
    }
});
console.log(props.activity.name);
</script> -->
<!-- <script lang="ts" setup>

import { useTodoStore } from '~/stores/todo';
const props = defineProps({
    activity: {
        type: Object,
        default: {},
    }
});
const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref("");
const router = useRouter();
const isLoading = ref(false);

const TodoStore = useTodoStore();

const deleteActivity = async () => {
    TodoStore.deleteTodo(activity.id);

}


const { baseStorageUrl } = useAppConfig();
</script> -->

<!-- <template>
    <section class="bg-white shadow-xl rounded-xl overflow-hidden">
        <div class="px-5 pb-5 pt-10 relative">
            <h5 class="text-xl font-semibold mb-2">{{ props.activity.name }}</h5>
            <NuxtLink :to="`/${activity.id}`" class="text-base">
                <button class="bg-green-500 text-white font-semibold py-2 px-4 rounded">ubah</button>
            </NuxtLink>
            <form @submit.prevent="deleteActivity">
                <button type="submit" class="bg-red-500 text-white font-semibold py-2 px-4 rounded">
                    Hapus
                </button>
            </form>

        </div>
    </section>
</template> -->

<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import { useTodoStore } from '~/stores/todo';
const props = defineProps({
    activity: {
        type: Object,
        default: {},
    }
});

const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref("");
const router = useRouter();
const isLoading = ref(false);

const TodoStore = useTodoStore();
const deleteActivity = async () => {
    let konfirmasi =confirm("yakin hapus?");
    // Gunakan props.activity.id di sini
    if(konfirmasi == true){
    const activityId = props.activity.id;
    // Lakukan sesuatu dengan activityId
    TodoStore.deleteTodo(activityId);}
    else{

    };
}

const { baseStorageUrl } = useAppConfig();
</script>

<template>
    <section class="bg-white shadow-xl rounded-xl overflow-hidden">
        <div class="px-5 pb-5 pt-10 relative">
            <h5 class="text-xl font-semibold mb-2">{{ props.activity.name }}</h5>
            <NuxtLink :to="`/${props.activity.id}`" class="text-base">
                <button class="bg-green-500 text-white font-semibold py-2 px-4 rounded">ubah</button>
            </NuxtLink>
            <form @submit.prevent="deleteActivity">
                <button type="submit" class="bg-red-500 text-white font-semibold py-2 px-4 rounded">
                    Hapus
                </button>
            </form>
        </div>
    </section>
</template>
