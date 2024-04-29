<template>
  <div class="bg-[#F6F7F8]">
    <div class="container flex flex-col-reverse laptop:flex-row justify-between laptop:items-center desktop:h-[136px] laptop:h-[69px] h-[126px] font-medium desktop:text-[20px] laptop:text-[11px] mx-auto p-4 text-black">
      <div class="laptop:pl-0 pl-3">©2023 ООО «Karimov Group»</div>
      <div class="flex my-4 gap-x-2 md:mt-0">
        <icons name="insta"></icons>
        <icons name="telegram"></icons>
        <icons name="facebook"></icons>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './icons.vue';
export default {
  components:{
    icons
  }
};
</script>
