<script setup>
import TogglerTheme from '@/Components/TogglerTheme.vue';
import { Head } from '@inertiajs/vue3';

import { router } from '@inertiajs/vue3'
import { vIntersectionObserver } from '@vueuse/components'

import { ref, onMounted } from "vue";

const props = defineProps(['dailyItems']);

const dailyItemsData = ref([]);

const root = ref(null)
const isVisible = ref(false)

const initialUrl = ref(router.page.url);

function onIntersectionObserver([{ isIntersecting }]) {
  isVisible.value = isIntersecting;
  loadMorePosts();
}

onMounted(() => {
    dailyItemsData.value = props.dailyItems.data;
});

function loadMorePosts() {
    if (props.dailyItems.next_page_url === null) {
        console.log('no more fetch');
        return
    }

    router.get(props.dailyItems.next_page_url, {}, {
        preserveState: true,
        preserveScroll: true,
        only: ['dailyItems'],
        onSuccess: () => {
            dailyItemsData.value = [...dailyItemsData.value, ...props.dailyItems.data]
            window.history.replaceState({}, router.page.url, initialUrl.value)
            // this.allPosts = [...this.allPosts, ...this.posts.data]
        }
    })
}


</script>

<template>

    <Head>
        <title>Collection</title>
        <meta name="description"
            content="Dean Abner Julian personal collection/daily items website's. May you want it too">
    </Head>
    <main class="mt-10" ref="root">
        <TogglerTheme/>
        <div class="mx-auto container">
            <div class="gap-4 lg:gap-6 xl:gap-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 pb-4">
                <div class="flex flex-col justify-center items-center items-wrapper border-[2px] border-dajgreen-light shadow-dayitem dark:shadow-dayitem-green w-full overflow-hidden" v-for="collection in dailyItemsData" :key="collection.id">
                    <div class="flex flex-col items-center mx-auto py-2 overflow-hidden group">
                        <img class="group-hover:scale-105 rounded-md w-11/12 transform transition-all duration-300 aspect-square object-center object-contain" :alt="`Dean Abner Julian daily items ${collection.title}`" width="300" height="300" :src="`storage/${collection.image}`" alt="">
                        <p class="my-2 font-medium text-black text-center text-sm dark:text-white tracking-tight" :title="collection.title">{{ collection.title }}</p>
                        <a title="Beli Human Greatness Midweight T-shirt Maroon" target="_blank" :href="collection.url" class="group-hover:scale-105 bg-black mt-auto px-2 py-1 border rounded-full font-semibold text-base text-white transform transition-all group-hover:-translate-y-2 duration-300 group/button"><span class="group-hover/button:animate-blink duration-75">Gasken!</span><span class="transform transition-all group-hover/button:animate-blink duration-75 delay-1000">🔥</span></a>
                    </div>

                </div>
            </div>
        </div>

        <span aria-hidden="true" v-intersection-observer="[onIntersectionObserver, { root, rootMargin: '-150px 0px 0px 0px' }]"></span>
    </main>
</template>
