<template>
  <div>
    <div @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="w-auto h-[174px] laptop:w-full laptop:h-[174px] desktop:w-[447px] desktop:h-[280px]
      rounded-[15px] flex flex-col desktop:p-10 laptop:pl-[30px] laptop:pt-[40px] px-[30px] pt-[40px] main" :style="{ backgroundColor: color.hex }">
      <div class="img">
        <div :style="{ backgroundColor: color.hex }" class=""></div>
        <p :style="{ color: fontColor }" class="text-[#ffff] desktop:text-[32px] laptop:text-[20px] text-[20px] desktop:my-[15px]">{{ title }}</p>
        <div :style="{ color: fontColor }" class="text-white text-[14px] laptop:text-[14px] desktop:text-[22px]">
          <div>HEX: {{ color.hex }}</div>
          <div>RGB: {{ color.rgb }}</div>
          <div>CMYK: {{ color.cmyk }}</div>
      </div>
      </div>
      <div :class="isHovered ? 'opacity-100' : 'opacity-0' " class="flex justify-center desktop:bottom-6 laptop:bottom-6 bottom-6 transition-all duration-300">
        <button class="copy-button desktop:w-[360px] desktop:text-[28px] desktop:h-[51px] laptop:w-[215px] w-full h-[30px] laptop:text-[17px] text-[#00A6ED] laptop:h-[30px] rounded-[7px] border-2 border-[#00A6ED] bg-white hover:bg-[#F6F7F8] ransition-colors duration-300" @click="copyHexCode">{{ buttonText }}</button>
      </div>

    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
export default {
  props:{
    title:{
      type: String,
      required: true
    },
    color:{
      type: Object,
      required: true
    },
    fontColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data() {
    return{
      isHovered: false,
      buttonText: 'Скопировать'
    }
  },
  methods: {
    copyHexCode() {
      const clipboard = new ClipboardJS('.copy-button', {
        text: () => this.color.hex,
      });

      clipboard.on('success', (e) => {
        console.log('HEX код скопирован успешно');
        this.buttonText = 'Скопировано';
        setTimeout(() => {
          this.buttonText = 'Скопировать';
        }, 2000);
        e.clearSelection();
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        console.error('Не удалось скопировать HEX код');
        clipboard.destroy();
      });

      clipboard.onClick(event);
    },
  },
}
</script>

<style scoped>
.main{
  transition: all 300ms ease-in-out;
}
.img{
  transform: scale(1);
}
.main:hover .img{
  transform: translateY(-30px) scale(1);
}
</style>
