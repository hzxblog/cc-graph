<template>
  <div class="widget-stencil">
    <div class="widget-stencil-title">
      <div class="widget-stencil-title-name">{{ title }}</div>
      <div class="widget-stencil-title-extra"></div>
    </div>
    <div class="widget-stencil-content">
      <div v-for="(cell, index) in nodes" :key="index" class="widget-stencil-group collapsable">
        <div class="widget-stencil-group-title" @click="collapseGroup(cell)">
          <img src="./arrow.png" alt="">
          <span>{{ cell.title }}</span>
        </div>
        <ul v-if="cell.collapsed" class="widget-stencil-group-content">
          <li 
            v-for="(child, index) in cell.children"
            :key="index"
            class="widget-stencil-group-content-node"
            @mousedown="startDrag(child, $event)"
          >
            <img v-if="child.icon" class="widget-stencil-group-content-node-icon" :src="child.icon" />
            {{ child.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Dnd } from "@antv/x6-plugin-dnd";

const props = defineProps({
  graph: {
    type: Object,
    required: true,
  },
  title: String,
  nodes: {
    type: Array,
    default: () => []
  }
})

const dnd = ref(null);

onMounted(() => {
  dnd.value = new Dnd({
    target: props.graph,
    scaled: false,
    dndContainer: props.container,
  })
})

function collapseGroup(node) {
  node.collapsed = !node.collapsed;
}

function startDrag(child, e) {
  const node = props.graph.createNode({
    shape: child.type,
    width: child.width || 220,
    height: child.height || 44,
    data: child
  })
  dnd.value.start(node, e);
}


</script>

<style lang="less">
.widget-stencil-group-content-node-icon {
  margin-right: 6px;
}
.widget-stencil-group-content-node {
  cursor: pointer;
  padding-left: 32px;
  border-radius: 4px;
  &:hover {
    background: var(--color-fill-2);
  }
}
.widget-stencil-group-content-node,
.widget-stencil-group-title {
  font-size: 14px;
  height: 36px;
  display: flex;
  align-items: center;
  color: var(--color-text-2);
}

.widget-stencil-group {
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-2);
    padding-bottom: 8px;
  }
}
.widget-stencil-group-title {
  cursor: pointer;
  img {
    margin:0 8px;
    cursor: pointer
  }
}
.widget-stencil-content {
  padding: 0 12px;
}
.widget-stencil-title {
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.widget-stencil-title-name {
  color: var(--color-text-1);
  font-size: 16px;
  font-weight: bold;
}
.widget-stencil-title-extra {}
</style>