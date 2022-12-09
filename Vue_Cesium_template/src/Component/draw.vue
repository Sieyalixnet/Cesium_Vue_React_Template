<template><button @click="draw">draw</button>
</template>

<script setup>
import { inject, onMounted } from "vue";
const GlobalProvide = inject("GlobalProvide");
let Cesium,viewer 
onMounted(()=>{
    Cesium = GlobalProvide.Cesium
    viewer = GlobalProvide.viewer
})
const draw = ()=>{
    let geojson = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "marker-symbol": "0",
            "marker-color": "#000000",
          },
          "geometry": {
            "coordinates": [
              17.212385631223754,
              23.801793012604378
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [
                  13.192129694727697,
                  23.295752503985824
                ],
                [
                  12.76051102683087,
                  20.733546379421
                ],
                [
                  19.193289250294924,
                  19.47083570578242
                ],
                [
                  20.20593304805189,
                  22.898733309597304
                ],
                [
                  14.495286057416621,
                  23.851110123194175
                ],
                [
                  13.192129694727697,
                  23.295752503985824
                ]
              ]
            ],
            "type": "Polygon"
          }
        }
      ]
    }
    const dataSource = Cesium.GeoJsonDataSource.load(
      geojson
    );
    viewer.dataSources.add(dataSource);
    viewer.zoomTo(viewer.entities);

}

</script>