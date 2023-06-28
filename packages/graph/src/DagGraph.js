import { Graph } from "@antv/x6";
import { grid, highlighting, panning, connecting } from './options';
import { register } from "@antv/x6-vue-shape";
import TaskNode from './components/TaskNode/index';

export class DagGraph {
  constructor(options) {
    this.register();
    this.graph = new Graph({ 
      autoResize: true,
      panning,
      highlighting,
      grid,
      connecting,
      ...options
    });

    return this.graph;
  }

  registerNode() {
    register(TaskNode);
  }

  registerEdge() {}

  register() {
    this.registerNode();
    this.registerEdge();
  }
}