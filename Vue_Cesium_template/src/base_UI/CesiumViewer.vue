
<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import { inject } from "vue";
import * as Cesium from "cesium";
import { Viewer } from "cesium";
import "cesium/Source/Widgets/widgets.css";
import { onMounted } from "_vue@3.2.45@vue";
import img1 from "./worldimage.jpg";
const GlobalProvide = inject("GlobalProvide");

onMounted(() => {
  const viewer = new Viewer("cesiumContainer", {
    imageryProvider: new Cesium.SingleTileImageryProvider({
      url: img1,
    }),
    baseLayerPicker: false,
    geocoder: false,
    timeline: false,
    animation: false,
  });
  viewer.scene.debugShowFramesPerSecond = true;
  GlobalProvide.Cesium = Cesium;
  GlobalProvide.viewer = viewer;
});
</script>

<style scoped>
#cesiumContainer {
  height: 80%;
  width: 80%;
  margin: 0;
  padding: 0;
}
:deep(.cesium-widget-credits) {
  display: none !important;

}
</style>