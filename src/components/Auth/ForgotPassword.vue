<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();

const form = ref({
    email: '',
});
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Forgot password?
                    </h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Remember your password?
                        <RouterLink to="/login" class="text-blue-600 decoration-2 hover:underline font-medium">
                            Login here
                        </RouterLink>
                    </p>
                    <div class="p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status">
                        {{ authStore.status }}
                    </div>
                    <form @submit.prevent="authStore.handleForgotPassword(form.email)">
                        <div class="grid gap-y-4">
                            <div>
                                <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                    Email address
                                </label>
                                <div class="relative">
                                    <input v-model="form.email" type="email" id="email" name="email"
                                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                        required aria-describedby="email-error" placeholder="Enter Email Address">
                                    <div v-if="authStore.errors.email">
                                        <span class="text-red-400 text-sm">
                                            {{ authStore.errors.email[0] }}
                                        </span>
                                    </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email
                                    address so we can get back to you</p>
                            </div>
                            <button type="submit"
                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset
                                password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

