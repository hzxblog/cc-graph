import TaskNode from './index.vue'
 
const port = {
  attrs: {
    circle: {
      r: 3,
      magnet: true,
      stroke: '#1459FA',
      strokeWidth: 2,
      fill: '#fff',
    },
  },
}

export default {
  shape: "task-node",
  component: TaskNode,
  strokeWidth: '1',
  width: 220,
  height: 44,
  ports: {
    groups: {
      top: { 
        position: 'top',
        ...port,
      },
      left: { 
        position: 'left',
        ...port,
      },
      right: { 
        position: 'right',
        ...port,
      },
      bottom: { 
        position: 'bottom',
        ...port,
      },
    },
    items: [
      { id: 'port1', group: 'top' }, 
      { id: 'port2', group: 'left', }, 
      { id: 'port3', group: 'right', },
      { id: 'port4', group: 'bottom', },
    ],
  }
}