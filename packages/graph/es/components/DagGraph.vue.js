import { defineComponent, ref, onMounted, openBlock, createElementBlock, createElementVNode, createVNode, unref } from "vue";
import { DagGraph } from "../DagGraph.js";
import "../node_modules/@antv/x6-vue-shape/es/node.js";
import "../node_modules/@antv/x6-vue-shape/es/view.js";
import "../node_modules/@antv/x6-vue-shape/es/registry.js";
import { getTeleport } from "../node_modules/@antv/x6-vue-shape/es/teleport.js";
import { Selection } from "../node_modules/@antv/x6-plugin-selection/es/index.js";
const _hoisted_1 = { style: { "width": "100%", "height": "100%" } };
const __default__ = defineComponent({
  name: "VDagGraph"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    initGraph: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const TeleportContainer = getTeleport();
    const containerRef = ref(null);
    onMounted(() => {
      const graph = new DagGraph({
        container: containerRef.value
      });
      graph.use(
        new Selection(
          {
            multiple: true,
            rubberEdge: true,
            rubberNode: true,
            modifiers: "shift",
            rubberband: true,
            showNodeSelectionBox: true
          }
        )
      );
      props.initGraph(graph);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          ref_key: "containerRef",
          ref: containerRef
        }, null, 512),
        createVNode(unref(TeleportContainer))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
