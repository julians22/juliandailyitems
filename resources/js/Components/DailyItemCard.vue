<script setup>

import { defineProps } from "vue";
import { event } from "vue-gtag";

const props = defineProps(['title', 'link', 'image']);

function goTo(item, url) {
  event('klik_daily_item', {
    'event_category' : 'engagement',
    'event_label' : 'view_item',
    'value' : item
  });

  window.open(url, '_blank', 'noreferrer');
}

</script>

<template>

<div class="flex flex-col justify-center items-center items-wrapper border-[2px] border-dajgreen-light shadow-dayitem dark:shadow-dayitem-green w-full overflow-hidden">
    <div class="flex flex-col items-center mx-auto py-2 overflow-hidden group">
        <img class="group-hover:scale-105 rounded-md w-11/12 transform transition-all duration-300 aspect-square object-center object-contain" :alt="`Dean Abner Julian daily items ${props.title}`" width="300" height="300" :src="`storage/${props.image}`" alt="">
        <p class="my-2 font-medium text-black text-center text-sm dark:text-white tracking-tight" :title="props.title">{{ props.title }}</p>
        <a title="Beli Human Greatness Midweight T-shirt Maroon" target="_blank" @click="goTo(`${props.title}`, props.url)" class="group-hover:scale-105 bg-dajgreen dark:bg-dajgreen-light mt-auto px-2 py-1 border rounded-full font-semibold text-base text-white transform transition-all group-hover:-translate-y-2 duration-300 cursor-pointer group/button"><span class="group-hover/button:animate-blink duration-75">Gasken!</span><span class="transform transition-all group-hover/button:animate-blink duration-75 delay-1000">🔥</span></a>
    </div>
</div>

</template>
