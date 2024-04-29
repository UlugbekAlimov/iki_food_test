<template>
  <div>
    <button
      v-if="name === 'btn'"
      class=" desktop:w-[347px] desktop:text-[28px] desktop:h-[51px] laptop:w-[215px] w-[285px] h-[30px] laptop:text-[17px] text-[#00A6ED] laptop:h-[30px] rounded-[7px] border-2 border-[#00A6ED] bg-white hover:bg-[#F6F7F8] transition-colors duration-300"
    >
      {{ title }}
    </button>
    <button
      v-if="name === 'btn_downall'"
      class="desktop:w-[217px] desktop:text-[28px] desktop:h-[58px] laptop:h-[36px] laptop:w-[134px] w-[134px] h-[36px] text-[16px] laptop:text-[17px] text-[#00A6ED] hover:text-[#ffff] rounded-[15px] border-2 border-[#00A6ED] bg-white hover:bg-[#00A6ED] transition-colors duration-300"
    >
      скачать все
    </button>
  </div>

  <div v-if="name === 'down_all'">
    <!-- <a href="src/downloads/all.zip"> -->
      <button class="desktop:w-[287px] desktop:text-[26px] desktop:h-[60px] laptop:w-[164px] laptop:text-[17px] laptop:h-[32px] w-[234px] h-[33px] rounded-l-[7px] border-2 border-[#ffffff] text-[#00A6ED] bg-[#ffff] hover:bg-[#F6F7F8] transition-colors duration-300">
          Скачать (zip)
      </button>
    <!-- </a> -->
      <button @click="open = !open" class="desktop:pl-6 laptop:pl-4 pl-[14px] laptop:pt-1 pt-1 desktop:pt-[5px] desktop:w-[80px] desktop:h-[63px] laptop:w-[50px] laptop:h-[35px] w-[50px] h-[36.6px] rounded-r-[7px] border-2 border-[#00A6ED] text-[#00A6ED] bg-[#ffff] transition-colors duration-300">
        <svg class="desktop:w-[24px] laptop:w-[15px] w-[13px]" viewBox="0 0 24 15" xmlns="http://www.w3.org/2000/svg"><path d="M11.8149 11.2711L12.0001 11.4755L12.1854 11.2711L21.3729 1.13262C21.6428 0.834723 21.9399 0.705074 22.2747 0.713941C22.6146 0.722942 22.917 0.865224 23.1896 1.16686L23.1899 1.1671C23.4613 1.46659 23.5939 1.80928 23.5939 2.20619C23.5939 2.6031 23.4613 2.9458 23.1899 3.24528L23.1896 3.24558L13.5961 13.8666C13.596 13.8666 13.5959 13.8667 13.5959 13.8668C13.3673 14.119 13.1142 14.3039 12.8367 14.4264C12.553 14.5517 12.2747 14.6121 12.0001 14.6121C11.7255 14.6121 11.4472 14.5517 11.1636 14.4264C10.8859 14.3039 10.6327 14.1188 10.4041 13.8666L0.779114 3.24528C0.510173 2.9485 0.38139 2.60243 0.390057 2.19356C0.398796 1.78131 0.537932 1.43166 0.809919 1.13311L0.810364 1.13262C1.08163 0.833276 1.38145 0.697476 1.71886 0.697476C2.05628 0.697476 2.35609 0.833276 2.62736 1.13262L11.8149 11.2711Z" fill="#00A6ED" stroke="white" stroke-width="0.5"/></svg>
      </button>
    <div
      v-show="open"
      class="absolute right-1 mt-2 desktop:w-[350px] desktop:h-[94px] laptop:w-[210px] laptop:h-[58px] w-[275px] h-[58px] rounded-[10px] shadow-lg bg-white"
    >
      <div
        class="flex flex-col"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <span class="desktop:text-[20px] laptop:text-[12px] text-[12px] font-medium desktop:py-2 desktop:pl-7 text-[#818181] laptop:pl-4 py-1 pl-6 laptop:py-1">Тип файла</span>
        <hr class="desktop:mb-2 mb-0">
        <div class="flex flex-row font-semibold desktop:pb-3 justify-around desktop:ml-2 laptop:ml-2 w-full desktop:pr-6 laptop:pr-5">
          <span v-for="link in links" :key="link.id">
            <a
              download
              :href="link.path"
              class="desktop:text-[20px] hover:bg-[#F6F7F8] text-[12px] laptop:w-[12px] text-[#00A6ED]"
              role="menuitem"
              >
              {{ link.title }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      open: false,
      links: [],
      imgUrl: '../downloads/jpg/'
    };
  },
  props: {
    title:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    links:{
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.btn-blue {
  @apply bg-[#ffff] hover:bg-[#F4F5F9] text-[#00A6ED] desktop:text-[28px] w-[267px] h-[51px] py-1 text-center rounded-[10px];
}


</style>
