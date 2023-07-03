import { ref, inject, onMounted, createVNode } from "vue";
const _sfc_main = {
  setup(props, {
    slots
  }) {
    const data = ref({});
    const getNode = inject("getNode");
    onMounted(() => {
      const node = getNode();
      data.value = node.data;
    });
    return () => {
      return createVNode("div", {
        "class": "task-node"
      }, [data.value.icon && createVNode("img", {
        "class": "node-logo",
        "src": data.value.icon
      }, null), createVNode("div", {
        "class": "node-label"
      }, [data.value.label]), createVNode("div", {
        "class": "status-action"
      }, null)]);
    };
  }
};
export {
  _sfc_main as default
};
