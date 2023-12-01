<script lang="ts" setup>
import { activity } from "~/composables/constants/activity";
import { type Activity } from "~/types/activity";
import { useTodoStore } from '~/stores/todo';
import type { FormField } from '~/types/activity';

const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) :
    null;
const Todostore = useTodoStore();
const allTodo = ref([]);

Todostore.readAllTodo(id).then(() => {
    allTodo.value = Todostore.todo;
});

// Todostore.getAllTodo().then(() => {
// allTodo.value = Todostore.todo;
// });

const product = ref(activity.find((item: Activity) => item.id === id));
const kegiatan = allTodo.value;


const TodoStore = useTodoStore();

const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref("");
const router = useRouter();
const isLoading = ref(false);

const { todo } = storeToRefs(TodoStore);
TodoStore.getAllTodo();

const formCreateTodo = [
    { name: "name", label: "Name", type: "text", value: kegiatan, placeholder: "tugas mtk", required: true },
]
const updateProduct = async () => {
    isLoading.value = true;
    const result: { [key: string]: any } = {};
    formCreateTodo.forEach((item: FormField) => {
        if (item.name) {
            result[item.name] = item.value;
        }
        console.log(result)
    })
    await TodoStore.updateTodo(result,id);
    if (!TodoStore.status) {
        isSuccess.value = TodoStore.status;
        message.value = TodoStore.message;
        isShowAlert.value = true;
        isLoading.value = false;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    } else {
        isSuccess.value = TodoStore.status;
        message.value = TodoStore.message;
        isShowAlert.value = true;
        isLoading.value = false;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(() => {
            router.push({ path: "/" });
        }, 1000);
    }
}
</script>
<template>
    <DatailActivity :activity="activity" />
    <section class="flex justify-center py-10">
        <div class="w-[500px]">
            <h1 class="text-2xl mb-7 font-medium">Ubah Tugas</h1>
            <div v-if="isShowAlert"
                :class="`p-4 mb-4 text-sm rounded-lg ${isSuccess ? 'bg-green-100 text-green-800' : 'text-red-800 bg-red-100'}`"
                role="alert">
                {{ message }}
            </div>
            <form @submit.prevent="updateProduct">
                <div class="mb-6" v-for="(item, index) in formCreateTodo" :key="index">
                    <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-900">
                        {{ item.label }}
                    </label>
                    <input :type="item.type" :id="item.name" v-model="item.value"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        :placeholder="item.placeholder" :required="item.required">
                </div>
                <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                    <span v-if="!isLoading">Ubah</span>
                    <div v-else class="flex items-center gap-3">
                        <div class="w-5 h-5 rounded-full border-2 border-t-blue-500 animate-spin">
                        </div>
                        <span>Loading</span>
                    </div>
                </button>
            </form>
        </div>
    </section>
</template>