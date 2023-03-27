<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth'; 

const authStore = useAuthStore();
// const user = ref();
// const getToken = async () => {
//     await axios.get('/sanctum/csrf-cookie');
// }

onMounted(async () => {
    await authStore.getUser();
    // Get Token
    // await getToken();
    // Get User
    // const data = await axios.get('/api/user');
    // user.value = data.data;
});

</script>

<template>
    <div class="h-full  bg-gradient-to-r from-pink-300 to-indigo-300">
        <div class="grid grid-cols-12 gap-0">
            <div class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 xxl:col-span-4 px-6 py-6 justify-end">
                <div class="bg-white rounded-xl p-4 shadow-xl justify-center">
                    <div  v-if="authStore.user" class="flex flex-col justify-center items-center">
                        <div class="w-32 h-32 rounded-full bg-gray-300 border-2 border-white mt-2">
                            <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU" 
                            class="rounded-full w-auto"
                            />
                        </div>
                            <p class="font-semibold text-xl mt-1">{{ authStore.user.name }}</p>
                            <p class="font-semibold text-base text-gray-400">{{ authStore.user.email }}</p>
                    
                        <div class="relative  p-4 rounded-lg shadow-xl w-full bg-cover bg-center h-32 mt-4"
                            style="background-image: url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');"
                        >
                        <div class="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
                            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                                <div>
                                    <h3 class="text-center text-white text-lg">
                                        Created Date
                                    </h3>
                                    <h3 class="text-center text-white text-3xl mt-2 font-bold">
                                        {{ authStore.user.created_at }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Go and login</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>