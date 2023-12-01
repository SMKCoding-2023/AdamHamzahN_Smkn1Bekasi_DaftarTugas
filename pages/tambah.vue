<script lang="ts" setup>
import { useTodoStore } from '~/stores/todo';
import type { FormField } from '~/types/activity';

const TodoStore = useTodoStore();

const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref("");
const router = useRouter();
const isLoading = ref(false);

const { todo } = storeToRefs(TodoStore);
TodoStore.getAllTodo();

const formCreateTodo = [
    { name: "name", label: "Name", type: "text", value: "", placeholder: "tugas mtk", required: true },
]
const createProduct = async () => {
    isLoading.value = true;
    const result: { [key: string]: any } = {};
    formCreateTodo.forEach((item: FormField) => {
        if (item.name) {
            result[item.name] = item.value;
        }
        console.log(result)
    })
    await TodoStore.createTodo(result);
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
    <section class="flex justify-center py-10">
        <div class="w-[500px]">
            <NuxtLink to="/" class="text-base">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 left-0 mt-2 ml-2">
                    Kembali
                </button>
            </NuxtLink>
            <br>
            <h1 class="text-2xl mb-7 font-medium">Tambahkan Tugas Baru</h1>
            <div v-if="isShowAlert"
                :class="`p-4 mb-4 text-sm rounded-lg ${isSuccess ? 'bg-green-100 text-green-800' : 'text-red-800 bg-red-100'}`"
                role="alert">
                {{ message }}
            </div>
            <div class="border border-gray-500 rounded-md p-10 bg-grey-500">
                <form @submit.prevent="createProduct" >
                    <div class="mb-6" v-for="(item, index) in formCreateTodo" :key="index">
                        <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-900">
                            {{ item.label }}
                        </label>
                        <input :type="item.type" :id="item.name" v-model="item.value"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            :placeholder="item.placeholder" :required="item.required">
                    </div>
                    <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                        <span v-if="!isLoading">Tambah Tugas</span>
                        <div v-else class="flex items-center gap-3">
                            <div class="w-5 h-5 rounded-full border-2 border-t-blue-500 animate-spin">
                            </div>
                            <span>Loading</span>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
