import "../node_modules/@arco-design/web-vue/es/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/input/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/_components/input-label/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/tag/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/input-tag/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/_components/select-view/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/trigger/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/empty/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/checkbox/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/scrollbar/style/index.css.js";
import "../node_modules/@arco-design/web-vue/es/select/style/index.css.js";
import { ref, openBlock, createElementBlock, createVNode, withCtx, Fragment, renderList, createTextVNode, toDisplayString, createElementVNode } from "vue";
import _imports_0 from "../assets/svg/shrink.svg.js";
import _imports_1 from "../assets/svg/magnify.svg.js";
import "./Zoom.vue2.js";
import Option from "../node_modules/@arco-design/web-vue/es/select/option.js";
import Select from "../node_modules/@arco-design/web-vue/es/select/index.js";
const _hoisted_1 = { class: "zoom-wrap" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { class: "btn" }, [
  /* @__PURE__ */ createElementVNode("img", {
    src: _imports_0,
    alt: ""
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "btn" }, [
  /* @__PURE__ */ createElementVNode("img", {
    src: _imports_1,
    alt: ""
  })
], -1);
const _sfc_main = {
  __name: "Zoom",
  setup(__props) {
    const scale = ref(1);
    const scaleOptions = [0.25, 0.5, 0.75, 1, 2];
    return (_ctx, _cache) => {
      const _component_a_option = Option;
      const _component_a_select = Select;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_a_select, {
          modelValue: scale.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => scale.value = $event),
          bordered: false
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(scaleOptions, (item) => {
              return createVNode(_component_a_option, {
                key: item,
                value: item
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item * 100 + "%"), 1)
                ]),
                _: 2
              }, 1032, ["value"]);
            }), 64))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _hoisted_3
      ]);
    };
  }
};
export {
  _sfc_main as default
};
