import { defineComponent, ref, onMounted, openBlock, createElementBlock, createElementVNode, createBlock, createCommentVNode, createVNode, unref } from "vue";
import _sfc_main$1 from "./Zoom.vue.js";
import { DagGraph } from "../DagGraph.js";
import "../node_modules/@antv/x6-vue-shape/es/node.js";
import "../node_modules/@antv/x6-vue-shape/es/view.js";
import "../node_modules/@antv/x6-vue-shape/es/registry.js";
import { getTeleport } from "../node_modules/@antv/x6-vue-shape/es/teleport.js";
import { Selection } from "../node_modules/@antv/x6-plugin-selection/es/index.js";
import { MiniMap } from "../node_modules/@antv/x6-plugin-minimap/es/index.js";
import "./TaskNode/index.vue2.js";
import { VStencil } from "./Stencil/index.js";
import "./VGraph.vue2.js";
const _hoisted_1 = { class: "cc-graph" };
const _hoisted_2 = { class: "graph-container" };
const __default__ = defineComponent({
  name: "VDagGraph"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    title: {
      type: String
    },
    mode: {
      type: String,
      default: "dag"
    },
    initGraph: {
      type: Function,
      default: () => {
      }
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
  },
  setup(__props) {
    const props = __props;
    const stencilRef = ref(null);
    const TeleportContainer = getTeleport();
    const minimapRef = ref(null);
    const containerRef = ref(null);
    const graph = ref();
    onMounted(() => {
      if (props.mode === "dag") {
        graph.value = new DagGraph({
          container: containerRef.value
        });
      }
      if (props.groups.length) {
        new VStencil({
          title: props.title,
          target: graph.value,
          container: stencilRef.value,
          groups: props.groups
        });
      }
      graph.value.use(
        new Selection({
          multiple: true,
          rubberEdge: true,
          rubberNode: true,
          modifiers: "shift",
          rubberband: true,
          showNodeSelectionBox: true
        })
      );
      if (props.minimap) {
        graph.value.use(
          new MiniMap({
            container: minimapRef.value,
            height: 136,
            width: 200,
            padding: 8
          })
        );
      }
      props.initGraph(graph.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          ref_key: "stencilRef",
          ref: stencilRef,
          style: { "width": "300px" }
        }, null, 512),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", {
            ref_key: "containerRef",
            ref: containerRef
          }, null, 512),
          createElementVNode("div", {
            ref_key: "minimapRef",
            ref: minimapRef,
            class: "minimap"
          }, null, 512)
        ]),
        __props.isZoom ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true),
        createVNode(unref(TeleportContainer))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
