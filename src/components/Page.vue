<template>
  <div class="page">
    <div class="navigation-bar">
      <span class="button-ll"></span>
      {{title}}
    </div>
    <iframe :src="src" class="webview"></iframe>
  </div>
</template>
<script lang="ts">
import { createComponent, PropType, reactive, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    url: String,
  },
  setup(props) {
    const state = reactive({
      title: 'title'
    });
    const src = computed(() => {
      return props.url;
    });
    return {
      ...state,
      src,
    }
  }
})
</script>
<style>
.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  outline: 1px solid #999;
  background: #fff;
}
.navigation-bar{
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #aaa;
  text-align: center;
  font-size: 20px;
}
.button-ll{
  position: absolute;
  left: 20px;
  top: 23px;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-top: 1px solid #666;
  border-left: 1px solid #666;
  transform: rotate(-45deg);
}
.webview{
  border: none;
  width: 100%;
  height: calc(100% - 64px);
}
</style>
