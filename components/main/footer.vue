<script setup lang="ts">

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}

</script>

<template>
  <div class="grid sm:flex py-5 mt-5 text-[#263238] dark:text-zinc-300 text-[19px]">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="p-2 space-x-4 font-Inter" style="direction: ltr"><div class="inline">© 2024 Adam Rofayel.</div>

      <a v-if="colorMode.value === 'light'" class="inline space-x-2"
        @click="onClick('dark')" style="cursor: pointer;"><svg width="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline">
          <path d="M2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 14.5C9.38071 14.5 10.5 13.3807 10.5 12C10.5 10.6193 9.38071 9.5 8 9.5C6.61929 9.5 5.5 10.6193 5.5 12C5.5 13.3807 6.61929 14.5 8 14.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg><p class="inline">Dark</p></a>

      <a v-if="colorMode.value === 'dark'" class="inline space-x-2"
        @click="onClick('light')" style="cursor: pointer;"><svg width="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline">
          <path d="M2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 14.5C17.3807 14.5 18.5 13.3807 18.5 12C18.5 10.6193 17.3807 9.5 16 9.5C14.6193 9.5 13.5 10.6193 13.5 12C13.5 13.3807 14.6193 14.5 16 14.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg><p class="inline">Light</p></a>

    </div></div>

    <NuxtLink to="about" class="px-8 py-2 pb-8 sm:py-0 sm:pb-0 transform hover:scale-110 duration-500 ease-in-out cursor-pointer"><Icon name="lucide:arrow-up-right" size="24px" class="relative top-1.5"></Icon><div class="p-1 inline"></div>About me</NuxtLink>

  </div>
</template>

<style>

</style>
