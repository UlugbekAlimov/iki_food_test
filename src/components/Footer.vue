<template>
  <div class="bg-[#F6F7F8]">
    <div class="container flex flex-col-reverse laptop:flex-row justify-between laptop:items-center desktop:h-[136px] laptop:h-[69px] h-[126px] font-medium desktop:text-[20px] laptop:text-[11px] mx-auto p-4 text-black">
      <div class="laptop:pl-0 pl-3">©2023 ООО «Karimov Group»</div>
      <div class="flex my-4 gap-x-2 md:mt-0">
        <a href="https://www.instagram.com/ikifood.tj?igsh=cW90aHFheHdubmg="><icons name="insta"></icons></a>
        <a href="https://t.me/ikifood"><icons name="telegram"></icons></a>
        <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.facebook.com/ikifood.inari/&ved=2ahUKEwjY7LLp_ueFAxWeBxAIHSKZC2gQFnoECBEQAQ&usg=AOvVaw0nA354T1y2ECJKMrkyDbC3"><icons name="facebook"></icons></a>
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
