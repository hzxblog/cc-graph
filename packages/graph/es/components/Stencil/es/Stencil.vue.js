import { ref, onMounted, openBlock, createElementBlock, createElementVNode, toDisplayString, Fragment, renderList, createCommentVNode } from "vue";
import _imports_0 from "./arrow.png.js";
import { Dnd } from "./node_modules/@antv/x6-plugin-dnd/es/index.js";
import "./Stencil.vue2.js";
const _hoisted_1 = { class: "widget-stencil" };
const _hoisted_2 = { class: "widget-stencil-title" };
const _hoisted_3 = { class: "widget-stencil-title-name" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("div", { class: "widget-stencil-title-extra" }, null, -1);
const _hoisted_5 = { class: "widget-stencil-content" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_8 = {
  key: 0,
  class: "widget-stencil-group-content"
};
const _hoisted_9 = ["onMousedown"];
const _sfc_main = {
  __name: "Stencil",
  props: {
    graph: {
      type: Object,
      required: true
    },
    title: String,
    nodes: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const dnd = ref(null);
    onMounted(() => {
      dnd.value = new Dnd({
        target: props.graph,
        scaled: false,
        dndContainer: props.container
      });
    });
    function collapseGroup(node) {
      node.collapsed = !node.collapsed;
    }
    function startDrag(child, e) {
      console.log(child);
      const node = props.graph.createNode({
        shape: child.type,
        width: child.width || 220,
        height: child.height || 44,
        data: child
      });
      dnd.value.start(node, e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, toDisplayString(__props.title), 1),
          _hoisted_4
        ]),
        createElementVNode("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.nodes, (cell, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "widget-stencil-group collapsable"
            }, [
              createElementVNode("div", {
                class: "widget-stencil-group-title",
                onClick: ($event) => collapseGroup(cell)
              }, [
                _hoisted_7,
                createElementVNode("span", null, toDisplayString(cell.title), 1)
              ], 8, _hoisted_6),
              cell.collapsed ? (openBlock(), createElementBlock("ul", _hoisted_8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(cell.children, (child, index2) => {
                  return openBlock(), createElementBlock("li", {
                    key: index2,
                    class: "widget-stencil-group-content-node",
                    onMousedown: ($event) => startDrag(child, $event)
                  }, toDisplayString(child.label), 41, _hoisted_9);
                }), 128))
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
