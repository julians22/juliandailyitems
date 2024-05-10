<script setup>
import { defineAsyncComponent } from 'vue'
import TogglerTheme from '@/Components/TogglerTheme.vue'
import { Head, Link } from '@inertiajs/vue3';

const props = defineProps(['collection_url']);

const isBrowser = typeof window !== 'undefined';

// LoadingComponent
import LoadingComponent from "@/Components/utils/Loading.vue";

// ErrorComponent
import ErrorComponent from "@/Components/utils/Error.vue";

// import WinBoxContact from "@/Components/Winbox/Contact.vue";

const WinBoxContact = defineAsyncComponent({
    loader: () => import('@/Components/Winbox/Contact.vue'),

    // A component to use while the async component is loading
    loadingComponent: LoadingComponent,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,

    // A component to use if the load fails
    errorComponent: ErrorComponent,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000    
});

const WinBoxAbout = defineAsyncComponent({
    loader: () => import('@/Components/Winbox/About.vue'),

    // A component to use while the async component is loading
    loadingComponent: LoadingComponent,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,

    // A component to use if the load fails
    errorComponent: ErrorComponent,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000    
});

</script>

<template>
    <Head>
        <title>Home</title>
        <meta name="description" content="Dean Abner Julian personal information website's">
    </Head>
    <div class="flex flex-col justify-between">
        <header class="font-console">
            <div class="mx-auto">
                <TogglerTheme/>
            </div>
            <div class="flex justify-center items-center mb-6">
                <div class="border-8 border-green-900 rounded-full w-52 h-52 overflow-hidden">
                    <img src="/public/Julian.jpg" alt="" width="200" height="200" class="object-left w-full scale-100 hover:scale-125 transition-all duration-500 aspect-square ease-in-out object-cover"/>
                </div>
            </div>
            <nav class="mb-2">
                <ul class="flex flex-wrap justify-center items-center space-x-6 lg:space-x-4 space-y-2 lg:space-y-0 font-semibold">
                    <li class="tracking-normal cursor-pointer">
                        <WinBoxContact v-if="isBrowser">
                            /contact-me
                        </WinBoxContact>
                    </li>
                    <li class="tracking-normal cursor-pointer">
                        <WinBoxAbout v-if="isBrowser">
                            /about-me
                        </WinBoxAbout>
                    </li>
                    <li class="tracking-normal cursor-pointer"><Link :href="props.collection_url">/my-collection</Link></li>
                </ul>
            </nav>
            <h1 class="font-bold text-2xl text-green-900 tracking-wide"><img src="/public/pixelate_julian.png" alt="Dean Abner Julian Pixelate" width="30" height="30" class="float-left mr-2">deanabnerjul:$<span class="animate-blink duration-75 ease-in-out">|</span></h1>
        </header>
        <footer class="mt-6 font-console overflow-x-hidden">
            <h3 class="font-medium text-xl">Find me online:</h3>
            <ul class="social-wrapper">
                <li class="social-link">
                    <a href="https://twitter.com/deanabnerjul" target="_blank" class="link"><img class="social-icon" width="15" height="15" src="/public/icons/twitter.png" alt=""> Twitter</a>
                </li>
                <li class="social-link">
                    <a href="https://www.linkedin.com/in/deanabner" target="_blank" class="link"><img class="social-icon" width="15" height="15" src="/public/icons/linkedin.png" alt=""> Linkedin</a>
                </li>
                <li class="social-link">
                    <a href="https://www.instagram.com/deanabnerjul" target="_blank" class="link"><img class="social-icon" width="15" height="15" src="/public/icons/instagram.png" alt=""> Instagram</a>
                </li>
                <li class="social-link">
                    <a href="https://github.com/julians22" target="_blank" class="link"><img class="social-icon" width="15" height="15" src="/public/icons/github.png" alt=""> Github</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

