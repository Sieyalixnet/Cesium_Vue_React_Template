<template>
  <div class="hello">
    <!-- <h3>{{ message }}</h3> -->
      <CesiumViewer />
    <div>
      <Draw></Draw>
    </div>
  </div>
</template>

<script setup>
import CesiumViewer from "./base_UI/CesiumViewer.vue";
import Draw from "./Component/draw.vue"
import {onMounted,provide, reactive} from "vue"

const GlobalProvide = reactive({
  Cesium: null,
  viewer:null
})
provide("GlobalProvide",GlobalProvide)
onMounted(() => {
  
})
// let message = "1"

</script>

<style >
h3 {
  margin: 30px 0 0;
  color: #42b983;
}
a{margin: 5px;}
</style>
