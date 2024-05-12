<script setup>
import VueWinBox from 'vue-winbox';
import PixelateImage from '/public/pixelate_julian.png';
import { ref, onMounted } from "vue";
import { event } from 'vue-gtag';

const winboxref = ref(null)

// OPTIONS PROPERTY
const OPTIONS = {
  title: 'Contact me',
  class: 'modern',
  background: '#00aa00',
  width: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  icon: PixelateImage
}

const isOpen = ref(false);

const width = window.innerWidth;

const terminalOpt = ref(null);

const toggle = async () => {
  isOpen.value = true;
  winboxref.value?.winbox?.initialize();
}

onMounted(() => {
    terminalOpt.value = initTerminalWidth()

    OPTIONS.width = terminalOpt.value.width
    OPTIONS.top = terminalOpt.value.top
    OPTIONS.left = terminalOpt.value.left
    OPTIONS.right = terminalOpt.value.right
    OPTIONS.bottom = terminalOpt.value.bottom
});

const initTerminalWidth = () => {
  return {
    width: width <= 425 ? 300 : 400,
    top: width <= 425 ? 10 : 50,
    right: width <= 425 ? 10 : 50,
    left: width <= 425 ? 10 : 50,
    bottom: width <= 425 ? 10 : 50
  }
}

const blur = (name) => {
  event('view_item', {
    'event_label': name,
    'event_category': 'engagement',
  })
}

</script>



<template>
    <span @click="toggle()">
        <slot></slot>
    </span>
    <div v-if="isOpen">
        <VueWinBox ref="winboxref" :options="OPTIONS" @close="isOpen = false" @focus="blur('contact')">
          <div class="p-3 font-console text-white">
            <h1 class="font-bold text-green-900 text-lg tracking-wide">contact-me:$<span class="animate-blink duration-75 ease-in-out">|</span></h1>
            <div class="font-extralight text-xs leading-normal">
    
            <p>You can contact me at the email and phone number below</p>
            <ul>
              <li>Phone: +62-812-1856-261</li>
              <li>Email: dabnerjulian@gmail.com</li>
            </ul>
            </div>
          </div>
        </VueWinBox>
    </div>
</template>
