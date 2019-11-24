<template>
  <div class="viewport" @click="push">
    <div class="page-list-container">
      <transition-group name="page-list" tag="div">
        <page v-for="(url, index) in stack" :url="url" :index="index" :key="url"></page>
      </transition-group>
    </div>

    <div>
      <ul class="stack-info">
        <li v-for="(url, index) in stack" :key="url">
          {{`[${index}] ${url}`}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent, PropType, reactive } from '@vue/composition-api'
import page from './Page.vue'

export default createComponent({
  components: { page },
  props: {},
  setup(props) {
    const state = reactive({
      stack: [] as string[]
    })

    function pushPage(url: string, title = '') {
      history.pushState({}, title, url)
      state.stack.push(url)
    }
    function popPage() {
      state.stack.pop()
    }
    function clearTo() {}

    window.addEventListener('popstate', popPage)

    return {
      ...state,
      push: () => {
        pushPage(`/pages/${Math.random()}`)
      }
    }
  }
})
</script>

<style>
.viewport {
  position: relative;
  top: 50%;
  margin-left: 10%;
  padding-left: 375px;
  height: 667px;
  transform: translate(0, -50%);
  overflow: visible;
}
.page-list-container {
  position: absolute;
  left: 0;
  width: 375px;
  height: 100%;
  border: 1px solid #999;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 40px;
  background: #fcfcfc;
  overflow: hidden;
}

.page-list-enter-active,
.page-list-leave-active {
  transition: all 0.5s ease;
}
.page-list-enter, .page-list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
}

.stack-info{
  margin: 0;
  font-size: 12px;
  color: #999;
}
.stack-info li:hover{
  background: rgba(144,144,144,.2);
}
</style>
