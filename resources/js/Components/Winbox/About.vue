<script setup>
import { VueWinBox } from 'vue-winbox';
import PixelateImage from '/public/pixelate_julian.png';
import { ref, onMounted } from "vue";

const winboxref = ref(null)

const isOpen = ref(false);

const width = window.innerWidth;

const terminalOpt = ref(null);

const toggle = async () => {
  isOpen.value = true;
  winboxref.value?.winbox?.initialize();
}

const OPTIONS = {
  title: 'About me',
  class: 'modern',
  background: '#00aa00',
  width: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  icon: PixelateImage
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
    width: width <= 425 ? 300 : 800,
    top: width <= 425 ? 10 : 50,
    right: width <= 425 ? 10 : 50,
    left: width <= 425 ? 10 : 50,
    bottom: width <= 425 ? 10 : 50
  }
}

const blur = (name) => {
//   event('view_item', {
//     'event_label': name,
//     'event_category': 'engagement',
//   })
}

</script>



<template>
    <span @click="toggle()">
        <slot></slot>
    </span>
    <div v-if="isOpen">
        <VueWinBox ref="winboxref" :options="OPTIONS" @close="isOpen = false" @focus="blur('about')">
        <div class="p-3 font-console text-white">
            <h1 class="font-bold text-green-900 text-lg tracking-wide">about-me:$<span class="animate-blink duration-75 ease-in-out">|</span></h1>
            <div class="font-extralight text-xs leading-normal">
            <p class="mb-2">My name is Dean Abner Julian Gerung, and I boast a rich {{ $calculateYear(2018, '09') }} years tenure in the realm of programming. Fluent in languages such as JavaScript and PHP, I bring a dynamic skill set to the table.</p>
            <p class="mb-2">I hold a Bachelor's Degree in System Information from Nusa Mandiri University in Jakarta, Indonesia, a testament to my commitment to academic excellence.As a seasoned web developer with {{ $calculateYear(2018, '09') }} years of hands-on experience, I specialize in crafting cutting-edge solutions using Laravel, Vue.js, native JavaScript, and SCSS. My expertise extends beyond mere development; I am also adept at managing Linux VPS and Google Cloud servers, ensuring seamless deployment and maintenance of digital assets.I am a Bachelor Degree System Information from Nusa Mandiri University in Jakarta, Indonesia.</p>
            <p class="mb-2">My journey in the programming world spans {{ $calculateYear(2018, '09') }} years, commencing from my college days and continuing to evolve to this day. Throughout this time, I have honed my craft and cultivated a deep understanding of creating intuitive, efficient, and captivating web experiences.</p>
            <p>Driven by a passion for innovation and a desire to push boundaries, I believe in the power of collaborative efforts to build outstanding digital solutions. Let’s work together to transform ideas into reality and leave a lasting mark in the digital landscape.</p>
            </div>
        </div>
        </VueWinBox>
    </div>

</template>
