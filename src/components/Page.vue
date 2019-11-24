<template>
  <div class="page">
    <div class="navigation-bar">
      {{title}}
      <span v-if="index > 0" class="button button-ll" data-act="back" @click="goback"></span>
    </div>
    <iframe :src="src" ref="iframe" @load="iframeOnLoad" class="webview"></iframe>
  </div>
</template>
<script lang="ts">
import { createComponent, PropType, reactive, computed, ref, onMounted } from '@vue/composition-api'

export default createComponent({
  props: {
    url: String,
    index: Number
  },
  setup(props, context) {
    const state = reactive({
      title: 'title'
    })
    const src = computed(() => {
      return props.url
    })
    function iframeOnLoad(e: Event) {
      const iframe = e.target as HTMLIFrameElement
      state.title = iframe.contentWindow!.document.title || ''
    }
    return {
      ...state,
      src,
      goback: () => history.go(-1),
      iframeOnLoad
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
.navigation-bar {
  position: relative;
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #aaa;
  text-align: center;
  font-size: 20px;
}
.button-ll {
  position: absolute;
  left: 20px;
  top: 50%;
  display: inline-block;
  transform: translate(0, -50%);
  cursor: pointer;
}
[data-act='back']:before {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-top: 1px solid #666;
  border-left: 1px solid #666;
  transform: rotate(-45deg);
}
.webview {
  border: none;
  width: 100%;
  height: calc(100% - 64px);
}
</style>
