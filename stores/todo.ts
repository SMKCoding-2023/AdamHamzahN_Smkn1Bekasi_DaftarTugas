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
                this.message = "Get Products Failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Get Products successfully";
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
                this.message = "Get Products failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Get Products successfully";
            }
        },
        async updateTodo(payload: any, id: any) {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch(`rest/v1/todo?id=eq.${id}`, {
                baseURL: baseUrl,
                method: "POST",
                headers: {
                    apikey: apikey,
                },
                body: payload,
            })


            if (error.value) {
                this.status = false;
                this.message = "Get Products failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Get Products successfully";
            }
        },
        async deleteTodo(id: any) {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch(`rest/v1/todo?id=eq.${id}`, {
                baseURL: baseUrl,
                method: "POST",
                headers: {
                    apikey: apikey,
                },
            })


            if (error.value) {
                this.status = false;
                this.message = "Get Products failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Get Products successfully";
            }
        },


    }
})