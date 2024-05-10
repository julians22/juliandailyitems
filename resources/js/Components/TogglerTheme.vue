<script setup>
    import { useDark, useToggle } from '@vueuse/core'
    import { UseDark } from "@vueuse/components";
    const isDark = useDark({
      selector: 'body',
      attribute: 'class',
      valueDark: 'dark',
      valueLight: 'light',
    })
    
    const toggleDark = useToggle(isDark);
    
</script>

<template>
    <UseDark v-slot="{ isDark, toggleDark }" >
        <div class="relative bg-dajgreen dark:bg-white shadow-inner mx-auto mb-6 rounded-full w-14 md:w-16 h-8 md:h-10 transform transition-all duration-700 overflow-hidden ease-in-out">
            <span @click="toggleDark()" :class="{'translate-x-6' : isDark, 'translate-x-0' : !isDark}" class="top-0 absolute bg-white dark:bg-dajgreen-light rounded-full w-8 md:w-10 h-8 md:h-10 transition-transform duration-1000 cursor-pointer ease-in-out scale-75"></span>
        </div>
    </UseDark>
</template>
