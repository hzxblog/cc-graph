<template>
  <div class="content">
    <div ref="stencilRef" style="width: 300px;"></div>
    <div class="graph">
      <VDagGraph :initGraph="initGraph"/>
    </div>
  </div>
</template>

<script setup>
import '@cc-design/web-vue/es/style/theme/css-variables.less';
import { onMounted, ref } from 'vue';
import { VDagGraph, VStencil } from '@cc/graph';
import '@cc/graph/es/style.css';

const stencilRef = ref(null);

const graph = ref({});

const initGraph = (graph) => {

  graph.value = graph;
  const Stencil = new VStencil({
    title: '标题名称',
    target: graph,
    container: stencilRef.value,
    groups: [
      {
        title: '数据加工',
        children: [
          {
            type: 'task-node',
            label: 'SQL',
          }
        ]
      },
      {
        title: '数据集成',
        children: [
          {
            type: 'task-node',
            label: '离线同步',
          }
        ]
      }
    ]
  })
}


</script>

<style lang="less" scoped>
.stencil {
  position: relative;
}
.content {
  display: flex;
  width: 100%; 
  height: 100%;
}
.graph {
  width: calc(100% - 300px);
}
</style>