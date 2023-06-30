import { createApp, h, reactive } from 'vue';
import SimpleStencil from './SimpleStencil.vue';
import Stencil from './Stencil.vue';

class VueRender {
  constructor() {
    this.vm = null;
  }

  render({ component, props, root }) {
    this.vm = createApp({
      render() {
        return h(component, props)
      }
    })
    this.vm.mount(root);
    return this.vm;
  }
}

export class VSimpleStencil extends VueRender {
  constructor(options) {
    super();
    return this.render({
      component: SimpleStencil,
      root: options.container,
      props: {
        title: options.title,
        graph: options.target,
        nodes: reactive(options.groups.map(item => ({ ...item, collapsed: true })))
      }
    });
  }
}

export class VStencil extends VueRender {
  constructor(options) {
    super();
    return this.render({
      component: Stencil,
      root: options.container,
      props: {
        title: options.title,
        graph: options.target,
        nodes: reactive(options.groups.map(item => ({ ...item, collapsed: true })))
      }
    });
  }
}