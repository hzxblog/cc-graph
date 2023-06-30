import { reactive, createApp, h } from "vue";
import SimpleStencil from "./SimpleStencil.vue.js";
import _sfc_main from "./Stencil.vue.js";
class VueRender {
  constructor() {
    this.vm = null;
  }
  render({ component, props, root }) {
    this.vm = createApp({
      render() {
        return h(component, props);
      }
    });
    this.vm.mount(root);
    return this.vm;
  }
}
class VSimpleStencil extends VueRender {
  constructor(options) {
    super();
    return this.render({
      component: SimpleStencil,
      root: options.container,
      props: {
        title: options.title,
        graph: options.target,
        nodes: reactive(options.groups.map((item) => ({ ...item, collapsed: true })))
      }
    });
  }
}
class VStencil extends VueRender {
  constructor(options) {
    super();
    return this.render({
      component: _sfc_main,
      root: options.container,
      props: {
        title: options.title,
        graph: options.target,
        nodes: reactive(options.groups.map((item) => ({ ...item, collapsed: true })))
      }
    });
  }
}
export {
  VSimpleStencil,
  VStencil
};
