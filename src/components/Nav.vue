<script setup>
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
</script>

<template>
    <nav class="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div class="container mx-auto flex flex-wrap items-center justify-between" bis_skin_checked="1">
            <a href="https://www.codecafe.com" class="flex items-center">
                Code Cafe
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
            class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg> -->
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default" bis_skin_checked="1">
                <ul
                    class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
                    <li>
                        <RouterLink :to="{ name: 'Home' }"
                            class="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                            aria-current="page">Home</RouterLink>
                    </li>
                    <template v-if="!authStore.user">
                        <li>
                            <RouterLink :to="{ name: 'Login' }"
                                class="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
                                Login</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'Register' }"
                                class="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
                                Register</RouterLink>
                        </li>
                    </template>
                    <template v-else>
                        <button @click="authStore.handleLogout" class="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Logout</button>
                    </template>
            </ul>
        </div>
    </div>

</nav></template>