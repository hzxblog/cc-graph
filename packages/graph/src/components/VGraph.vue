<template>
  <div class="cc-graph">
    <div ref="stencilRef" style="width: 300px;"></div>
    <div class="graph-container">
      <div ref="containerRef"></div>
      <div ref="minimapRef" class="minimap"></div>
    </div>
    <Zoom v-if="isZoom"></Zoom>
    <TeleportContainer />
  </div>
</template>

<script setup name="VDagGraph">
import Zoom from './Zoom.vue'
import { ref, onMounted } from 'vue';
import { DagGraph } from "../DagGraph";
import { getTeleport } from "@antv/x6-vue-shape";
import { Selection } from '@antv/x6-plugin-selection';
import { MiniMap } from '@antv/x6-plugin-minimap'
import { VStencil  } from '../index';

const stencilRef = ref(null);
const TeleportContainer = getTeleport();
const minimapRef = ref(null);

const props = defineProps({
  title: {
    type: String
  },
  mode: {
    type: String,
    default: 'dag'
  },
  initGraph: {
    type: Function,
    default: () => {}
  },
  isZoom: {
    type: Boolean,                 
    default: false
  },
  minimap: {
    type: Boolean,                 
    default: false
  },
  groups: {
    type: Array,
    default: () => []
  }
});

const containerRef = ref(null);
const graph = ref();

onMounted(() => {

  // dag模式
  if (props.mode === 'dag') {
    graph.value = new DagGraph({
      container: containerRef.value
    });
  }
  
  // 节点列表
  if (props.groups.length) {
    new VStencil({
      title: props.title,
      target: graph.value,
      container: stencilRef.value,
      groups: props.groups
    })
  }

  // 使用节点选择
  graph.value.use(
    new Selection({
      multiple: true,
      rubberEdge: true,
      rubberNode: true,
      modifiers: 'shift',
      rubberband: true,
      showNodeSelectionBox: true,
    })
  )

  // 加载小地图 
  if (props.minimap) {
    graph.value.use(
      new MiniMap({
        container: minimapRef.value,
        height: 136,
        width: 200,
        padding: 8
      }),
    )
  }
  props.initGraph(graph.value);
})
</script>


<style lang="less">

.minimap {
  position: absolute;
  bottom: 16px;
  right: 16px;
  border: 1px solid #1459FA;
}
.cc-graph {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}
.graph-container {
  width: calc(100% - 300px);
}
</style>