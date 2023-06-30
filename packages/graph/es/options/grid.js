const grid = {
  visible: true,
  type: "doubleMesh",
  args: [
    {
      color: "#F7F9FC",
      // 主网格线颜色
      thickness: 1
      // 主网格线宽度
    },
    {
      color: "#EBF0FA",
      // 次网格线颜色
      thickness: 1,
      // 次网格线宽度
      factor: 5
      // 主次网格线间隔
    }
  ]
};
export {
  grid as default
};
