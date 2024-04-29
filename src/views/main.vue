<template>
  <Header />
  <div v-for="logo in logos" :key="logo.id" class="desktop:mt-[120px] laptop:mt-[60px] mt-[50px]">
    <listCard :title="logo.title" :blocks="logo.child"/>
  </div>
  <div class="container mx-auto laptop:px-0 px-5 desktop:my-[120px] laptop:my-[60px] py-[50px]">
    <a href="../downloads/all.zip" download>
      <CustomBtn name="btn_downall" />
    </a>
  </div>
  <h1 class="container mx-auto font-semibold desktop:text-[40px] laptop:text-[24px] text-[24px] text-[#00A6ED] laptop:px-0 px-5 mb-[50px]">Цвета</h1>
  <div class="container mx-auto laptop:px-0 px-5 my-5 gap-5 grid laptop:grid-cols-3 grid-cols-1">
    <hexBlock v-for="(colorBlock, index) in colorBlocks" :key="index" :fontColor="colorBlock.fontColor" :title="colorBlock.title" :color="colorBlock.color"></hexBlock>
  </div>
  <Footer class="desktop:mt-[120px] laptop:mt-[60px] mt-[50px]" />
</template>

<script>
import hexBlock from "../components/hexBlock.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue";
import listCard from '../components/listCard.vue';
import CustomBtn from '../components/CustomBtn.vue'; 
export default {
  components:{
    hexBlock,
    Header,
    Footer,
    listCard,
    CustomBtn,
  },
  data() {
    return{
      colorBlocks: [
        { title: "Azure", color: { hex: '#00A6ED', rgb: '0, 166, 237', cmyk: '100, 30, 0, 7' }, fontColor: '#FFFFFF' },
        { title: "Black", color: { hex: '#000000', rgb: '0, 0, 0', cmyk: '0, 0, 0, 100' }, fontColor: '#FFFFFF' },
        { title: "Gray", color: { hex: '#F4F5F9', rgb: '128, 128, 128', cmyk: '0, 0, 0, 50' }, fontColor: '#000000' }
      ],
      logos: [
        {id: 1, title: 'Логотипы - iki food', 
          child: [
            {id: 1, iconName: 'ikifood', description: 'Горизонтальный формат логотипа ', 
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikifood.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikifood.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikifood.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikifood.pdf'},
              ]
            },
            {id: 2, iconName: 'ikifood2', description: 'Вертикальный формат логотипа ',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikifood2.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikifood2.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikifood2.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikifood2.pdf'},
              ]
            },
            {id: 3, iconName: 'ikifood3', description: 'Горизонтальный формат логотипа - blob',
              links: [
              { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikifood3.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikifood3.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikifood3.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikifood3.pdf'},
              ]
            },
          ]
        },
        {id: 2, title: 'Логотипы - iki delivery',
          child: [
            {id: 1, iconName: 'ikidel', description: 'Горизонтальный формат логотипа ',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikidel.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikidel.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikidel.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikidel.pdf'},
              ]
            },
            {id: 2, iconName: 'ikidel2', description: 'Вертикальный формат логотипа ',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikidel2.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikidel2.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikidel2.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikidel2.pdf'},
              ]
            },
            {id: 3, iconName: 'ikidel3', description: 'Горизонтальный формат логотипа - blob',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikidel3.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikidel3.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikidel3.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikidel3.pdf'},
              ],
            },
          ]
        },
        {id: 3, title: 'Логотипы - iki partner', 
          child: [
            {id: 1, iconName: 'ikipart', description: 'Горизонтальный формат логотипа ',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikipart.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikipart.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikipart.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikipart.pdf'},
              ]
            },
            {id: 2, iconName: 'ikidel2', description: 'Вертикальный формат логотипа ',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikipart2.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikipart2.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikipart2.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikipart2.pdf'},
              ]
            },
            {id: 3, iconName: 'ikidel3', description: 'Горизонтальный формат логотипа - blob',
              links: [
                { id: 1 , title: 'SVG' , path: 'src/downloads/svg/ikipart3.svg'},
                { id: 2 , title: 'PNG' , path: 'src/downloads/png/ikipart3.png'},
                { id: 3 , title: 'JPG' , path:'src/downloads/jpg/ikipart3.jpg'},
                { id: 4 , title: 'PDF' , path:'src/downloads/pdf/ikipart3.pdf'},
              ],
            },
          ]
        },
      ]
    }
  }
}
</script> 

<style scoped>
.hexBlock:nth-of-type(3) .hexBlock-title {
  color: #0000;
}

</style>