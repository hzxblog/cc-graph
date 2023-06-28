export default {
  snap: true,
  allowBlank: false,
  allowLoop: false,
  allowNode: false,
  highlight: true,
  sourceAnchor: {
    name: 'left',
    args: {
      dx: 3,
    },
  },
  targetAnchor: {
    name: 'right',
    args: {
      dx: -3,
    },
  },
  createEdge() {
    return this.createEdge({
      connector: { 
        name: 'smooth'
      },
      attrs: {
        line: {
          stroke: '#D3DBEB',
          strokeWidth: 2
        },
      },
      zIndex: 1,
    })
  },
  // 连接桩校验
  validateConnection({
    sourceCell,
    targetCell,
    sourceMagnet,
    targetMagnet,
  }) {
    return true
  },
}