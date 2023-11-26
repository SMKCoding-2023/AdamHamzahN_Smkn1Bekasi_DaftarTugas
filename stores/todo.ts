export const useTodoStore = defineStore("Todo", {
    state: () => ({
        todo: {} as any,
        status: false,
        message: "",
    }),
    actions: {
        async getAllTodo() {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch("/rest/v1/todo", {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            })

            if (error.value) {
                this.status = false;
                this.message = "Get Tugas Failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Tugas Berhasil Ditambahkan";
                this.todo = data.value;
            }
        },
        async readAllTodo(id : any) {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch(`rest/v1/todo?id=eq.${id}&select=*`, {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            })

            if (error.value) {
                this.status = false;
                this.message = "Get Tugas Failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Tugas Berhasil DiTambahkan";
                this.todo = data.value;
            }
        },
        async createTodo(payload: any) {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch("/rest/v1/todo", {
                baseURL: baseUrl,
                method: "POST",
                headers: {
                    apikey: apikey,
                },
                body: payload,
            })


            if (error.value) {
                this.status = false;
                this.message = "Get Tugas failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Tugas Berhasil Ditambahkan";
            }
        },
        async updateTodo(payload: any, id: any) {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch(`/rest/v1/todo?id=eq.${id}`, {
                baseURL: baseUrl,
                method: "PATCH",
                headers: {
                    apikey: apikey,
                },
                body: 
                    payload,
            })


            if (error.value) {
                this.status = false;
                this.message = "Get Tugas failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Tugas Berhasil diubah";
            }
        },
        async deleteTodo(id: any) {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch(`/rest/v1/todo?id=eq.${id}`, {
                baseURL: baseUrl,
                method: "DELETE",
                headers: {
                    apikey: apikey,
                },
            })


            if (error.value) {
                this.status = false;
                this.message = "Get Tugas failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Tugas Berhasil Dihapus";
            }
        },


    }
})