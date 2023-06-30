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
      }, [createVNode("div", {
        "class": "node-label"
      }, [data.value.label])]);
    };
  }
};
export {
  _sfc_main as default
};
