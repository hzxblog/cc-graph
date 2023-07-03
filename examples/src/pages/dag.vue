<template>
  <div class="content">
    <VGraph
      mode="dag"
      title="标题名称"
      :initGraph="initGraph"
      :minimap="true"
      :is-zoom="true"
      :groups="groups"
    />
  </div>
</template>

<script setup>
import '@cc-design/web-vue/es/style/theme/css-variables.less';
import { onMounted, ref } from 'vue';
import { VGraph } from '@cc/graph';
import '@cc/graph/es/style.css';
import sqlIcon from '../assets/svg/sql.svg'
import syncIcon from '../assets/svg/sync.svg'

const graph = ref({});

const groups = [
  {
    title: '数据加工',
    children: [
      {
        type: 'task-node',
        label: 'SQL',
        icon: sqlIcon
      }
    ]
  },
  {
    title: '数据集成',
    children: [
      {
        type: 'task-node',
        label: '离线同步',
        icon: syncIcon
      }
    ]
  }
]

onMounted(() => {})

const initGraph = (graph) => {
  graph.value = graph;
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