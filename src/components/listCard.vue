<template>
  <div class="container mx-auto laptop:px-0 px-5">
    <h2 class="desktop:mb-[50px] laptop:mb-[30px] mb-[25px] font-medium text-[#00A6ED] desktop:text-[40px] laptop:text-[24px] text-[24px]">{{ title }}</h2>
    <div class="gap-6 grid laptop:grid-cols-3 grid-cols-1">
      <div v-for="(block, index) in blocks" :key="block.id">
        <Card :links="blocks[index].links" :iconName="block.iconName" :description="block.description" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  components:{
    Card,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    blocks: {
      type: Array,
      required: true
    },
  },
}
</script>

<style>

</style>