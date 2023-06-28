<script lang="jsx">
import { inject, onMounted, ref } from "vue";
export default {
  setup(props, { slots }) {

    const data = ref({});
    const getNode = inject('getNode');

    onMounted(() => {
      const node = getNode();
      data.value = node.data;
    })
    return () => {
      return (
        <div class="task-node">
          <div class="node-label">{ data.value.label }</div>
        </div>
      )
    }
  }
}

</script>

<style lang="less" scoped>
.task-node {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  background: #fff;
  border: 3px solid var(--color-border-3);
  color: var(--color-text-2);
  border-radius: 8px;
  padding: 10px 8px;
  box-sizing: border-box;
}
.node-label {
  flex: 1;
  width: 0;
  white-space: nowrap; 
  text-overflow: ellipsis;
  overflow: hidden; 
}
</style>