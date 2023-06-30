<template>
  <div style="width: 100%; height: 100%">
    <div ref="containerRef"></div>
    <TeleportContainer />
  </div>
</template>

<script setup name="VDagGraph">
import { ref, onMounted } from 'vue';
import { DagGraph } from "../DagGraph";
import { getTeleport } from "@antv/x6-vue-shape";
import { Selection } from '@antv/x6-plugin-selection';

const TeleportContainer = getTeleport();

const props = defineProps({
  initGraph: {
    type: Function,
    default: () => {}
  }
});
const containerRef = ref(null);

onMounted(() => {
  const graph = new DagGraph({
    container: containerRef.value
  });
  graph.use(
      new Selection({
        multiple: true,
        rubberEdge: true,
        rubberNode: true,
        modifiers: 'shift',
        rubberband: true,
        showNodeSelectionBox: true,
      }
    ),
  )
  props.initGraph(graph);
})
</script>