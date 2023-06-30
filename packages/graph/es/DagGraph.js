import "./node_modules/@antv/x6/es/shape/rect.js";
import "./node_modules/@antv/x6/es/shape/edge.js";
import "./node_modules/@antv/x6/es/shape/ellipse.js";
import "./node_modules/@antv/x6/es/shape/polygon.js";
import "./node_modules/@antv/x6/es/shape/polyline.js";
import "./node_modules/@antv/x6/es/shape/path.js";
import "./node_modules/@antv/x6/es/shape/text-block.js";
import "./node_modules/@antv/x6/es/shape/image.js";
import "./node_modules/@antv/x6/es/shape/circle.js";
import "./node_modules/@antv/x6/es/shape/html.js";
import "./node_modules/@antv/x6/es/registry/grid/index.js";
import "./node_modules/@antv/x6/es/registry/background/index.js";
import "./node_modules/@antv/x6/es/registry/filter/index.js";
import "./node_modules/@antv/x6/es/registry/attr/index.js";
import "./node_modules/@antv/x6/es/registry/highlighter/index.js";
import "./node_modules/@antv/x6/es/registry/port-layout/index.js";
import "./node_modules/@antv/x6/es/registry/port-label-layout/index.js";
import "./node_modules/@antv/x6/es/registry/tool/index.js";
import "./node_modules/@antv/x6/es/registry/marker/index.js";
import "./node_modules/@antv/x6/es/registry/node-anchor/index.js";
import "./node_modules/@antv/x6/es/registry/edge-anchor/index.js";
import "./node_modules/@antv/x6/es/registry/connection-point/index.js";
import "./node_modules/@antv/x6/es/registry/router/index.js";
import "./node_modules/@antv/x6/es/registry/connector/index.js";
import "./node_modules/@antv/x6/es/registry/registry.js";
import "./node_modules/@antv/x6/es/model/cell.js";
import "./node_modules/@antv/x6/es/model/node.js";
import "./node_modules/@antv/x6/es/model/edge.js";
import "./node_modules/@antv/x6/es/model/model.js";
import "./node_modules/@antv/x6-common/es/polyfill/index.js";
import "./node_modules/@antv/x6-common/es/common/disposable.js";
import "./node_modules/@antv/x6-common/es/common/basecoat.js";
import "./node_modules/@antv/x6-common/es/platform/index.js";
import "./node_modules/@antv/x6-common/es/datauri/index.js";
import "./node_modules/@antv/x6-common/es/unit/index.js";
import "./node_modules/@antv/x6-common/es/dom/prefix.js";
import "./node_modules/@antv/x6-common/es/dom/text.js";
import "./node_modules/@antv/x6-common/es/dom/matrix.js";
import "./node_modules/@antv/x6-common/es/dom/event/hook.js";
import "./node_modules/@antv/x6-common/es/dom/event/main.js";
import "./node_modules/@antv/x6-common/es/dom/event/object.js";
import "./node_modules/@antv/x6-common/es/vector/index.js";
import "./node_modules/@antv/x6-common/es/size-sensor/index.js";
import "./node_modules/@antv/x6-common/es/algorithm/priorityqueue.js";
import "./node_modules/@antv/x6-common/es/algorithm/dijkstra.js";
import "./node_modules/@antv/x6-common/es/color/index.js";
import "./node_modules/@antv/x6-common/es/modifier/index.js";
import "./node_modules/@antv/x6-common/es/animation/timing.js";
import "./node_modules/@antv/x6-common/es/animation/interp.js";
import "./node_modules/@antv/x6/es/view/markup.js";
import "./node_modules/@antv/x6/es/view/view.js";
import "./node_modules/@antv/x6/es/view/cell.js";
import "./node_modules/@antv/x6/es/view/edge.js";
import "./node_modules/@antv/x6/es/view/node.js";
import "./node_modules/@antv/x6/es/view/tool.js";
import { Graph } from "./node_modules/@antv/x6/es/graph/graph.js";
import "./node_modules/@antv/x6/es/graph/view.js";
import "./node_modules/@antv/x6-geometry/es/angle.js";
import "./node_modules/@antv/x6-geometry/es/point.js";
import "./node_modules/@antv/x6-geometry/es/line.js";
import "./node_modules/@antv/x6-geometry/es/ellipse.js";
import "./node_modules/@antv/x6-geometry/es/rectangle.js";
import "./node_modules/@antv/x6-geometry/es/path/path.js";
import "./node_modules/@antv/x6-geometry/es/util.js";
import "./node_modules/@antv/x6-geometry/es/curve.js";
import "./node_modules/@antv/x6-geometry/es/polyline.js";
import "./node_modules/@antv/x6/es/util/index.js";
import "./node_modules/@antv/x6/es/graph/background.js";
import grid from "./options/grid.js";
import highlighting from "./options/highlighting.js";
import panning from "./options/panning.js";
import connecting from "./options/connecting.js";
import "./node_modules/@antv/x6-vue-shape/es/node.js";
import "./node_modules/@antv/x6-vue-shape/es/view.js";
import { register } from "./node_modules/@antv/x6-vue-shape/es/registry.js";
import "./node_modules/@antv/x6-vue-shape/es/teleport.js";
import TaskNode from "./components/TaskNode/index.js";
class DagGraph {
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
  registerEdge() {
  }
  register() {
    this.registerNode();
    this.registerEdge();
  }
}
export {
  DagGraph
};
