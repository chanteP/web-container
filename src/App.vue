<template>
  <div class="wrapper">
    <view-port></view-port>
    <fn></fn>
  </div>
</template>
<script lang="ts">
import './App.css'
import { createComponent, PropType } from '@vue/composition-api'

import Fn from './components/Fn.vue'
import ViewPort from './components/ViewPort.vue'

export default createComponent({
  components: { Fn, ViewPort },
  props: {},
  setup(props) {
    return {}
  }
})
</script>
<style>
.wrapper{
  height: 100%;
}
</style>