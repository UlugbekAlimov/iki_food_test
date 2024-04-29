<template>
<div>
  <div @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="w-auto z-10 h-[174px] laptop:w-[278px] laptop:h-[174px] desktop:w-[447px] desktop:h-[280px]
    rounded-[15px] flex flex-col p-10 justify-center items-center relative main">
    <div class="flex justify-center img">
      <icons :isHovered="isHovered" size="w-[259px] h-[160px]" :name="iconName" />
    </div>
    <div :class="isHovered ? 'opacity-100' : 'opacity-0' " class="flex justify-center absolute bottom-6 items-center transition-all duration-300">
      <a download href="../downloads/all.zip">
        <CustomBtn :links="links" name='down_all'></CustomBtn>
      </a>
    </div>
    
  </div>
  <p class="text-[#989898] desktop:text-[20px] laptop:text-[14px] text-[14px] my-[15px]">{{ description }}</p>
</div>
</template>

<script>
import icons from './icons.vue';
import CustomBtn from './CustomBtn.vue';
export default {
  props:{
    description:{
      type: String,
      required: true
    },
    iconName:{
      type:String,
      required: true
    },
    links:{
      type: Array,
      required: true
    }
  },
  components:{
    icons,
    CustomBtn,
  },
  data() {
    return{
      isHovered: false,
    }
  }
}
</script>

<style scoped>
.main{
  background: #f6f7f8;
  transition: all 300ms ease-in-out;
}
.main:hover{
  background: #00A6ED;
}
.img{
  transform: scale(1);
 }
.main:hover .img{
  transform: translateY(-30px) scale(0.8);
}
</style>
