<template>
  <div class="viewport">
    <page></page>
  </div>
</template>
<script lang="ts">
import { createComponent, PropType } from '@vue/composition-api'
import Page from './Page.vue';

export default createComponent({
  components: {Page},
  props: {},
  setup(props) {
    return {}
  }
})
</script>

<style>
.viewport {
  position: relative;
  top: 50%;
  left: 10%;
  width: 375px;
  height: 812px;
  border: 1px solid #999;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 40px;
  background: #fff;
  transform: translate(0, -50%);
  overflow: hidden;
}
</style>
