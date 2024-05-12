<script setup>
import TogglerTheme from '@/Components/TogglerTheme.vue';
import { Head, router, usePage } from '@inertiajs/vue3';

import axios from "axios";

import { route } from 'ziggy-js';

import { ref, onMounted, defineAsyncComponent } from "vue";
import { pageview } from 'vue-gtag';

const props = defineProps(['dailyItems']);

const dailyItemsData = ref([]);

const root = ref(null)
const apiurl = ref(`${import.meta.env.VITE_API_URL}/public/daily-items`);
const nextUrl = ref(apiurl.value);

const DailyItemCard = defineAsyncComponent(() => import('@/Components/DailyItemCard.vue'));

onMounted(() => {
    pageview({
        page_title: 'Collection - Deanabnerjul',
        page_location: window.location,
        page_path: '/collections',
    });
    
    loadMorePosts();
});

const goback = () => router.visit(route('frontend.home'), {
    method: 'get',
    preserveScroll: true
});

function loadMorePosts() {
    if (nextUrl.value === null) {
        console.log('no more fetch');
        return
    }
    const url = nextUrl.value;

    nextUrl.value = null;
    
    axios.get(url)
        .catch(function () {
            nextUrl.value = null;
        })
        .then(function (response) {
            dailyItemsData.value = [...dailyItemsData.value, ...response.data.data];
            nextUrl.value = response.data.links.next || null;
        });
}


</script>

<template>

    <Head>
        <title>Collection</title>
        <meta name="description" content="Dean Abner Julian personal collection/daily items website's. May you want it too">
    </Head>
    <main class="flex flex-col">
        <div class="flex-shrink mt-10">
            <span class="float-left dark:border-white dark:bg-dajgreen-light hover:shadow p-2 border border-black rounded-full hover:scale-105" title="Kembali" @click="goback()">
                <img width="20" height="20" src="/public/icons/prev.png" alt="" class="dark:invert">
            </span>
            <TogglerTheme/>
        </div>

        <div class="flex-grow">
            <div class="mx-auto container">
                <div class="gap-4 lg:gap-6 xl:gap-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 pb-4" ref="root">
                    <DailyItemCard v-for="collection in dailyItemsData" :key="collection.id" :title="collection.title" :image="collection.image" :link="collection.url"/>
                </div>
            </div>

            <div v-if="nextUrl !== null" class="flex justify-center">
                <button class="bg-dajgreen dark:bg-dajgreen-light mx-auto px-4 py-2 border rounded-full text-white" @click="loadMorePosts()">Selanjutnya</button>
            </div>
        </div>

    </main>
</template>
