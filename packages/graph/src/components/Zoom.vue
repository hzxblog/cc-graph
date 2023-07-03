<template>
  <div class="zoom-wrap">
    <div class="btn">
      <!-- <IconEditShrinkOutline /> -->
      <img src="../assets/svg/shrink.svg" alt="">
    </div>
    <a-select v-model="scale" :bordered="false">
      <a-option v-for="item in scaleOptions" :key="item" :value="item">{{ item * 100 + '%' }}</a-option>
    </a-select>
    <div class="btn">
      <!-- <IconEditMagnifyOutline /> -->
      <img src="../assets/svg/magnify.svg" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select } from '@arco-design/web-vue';
// import { IconEditShrinkOutline, IconEditMagnifyOutline } from '@cc-design/web-vue/es/icon';

const scale = ref(1);
const scaleOptions = [0.25, 0.5, 0.75, 1, 2];
</script>

<style lang="less">
.btn {
  padding: 8px;
  color: #465A80;
  img {
    height: 14px;
    width: 14px;
  }
}
.zoom-wrap {
  position: absolute;
  top: 16px;
  right: 16px;
  box-shadow: var(--shadow-s1);
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 8px;
}
</style>