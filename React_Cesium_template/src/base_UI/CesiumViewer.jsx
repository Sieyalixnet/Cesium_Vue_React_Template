import {React,useState,useEffect} from 'react';
import * as Cesium from "cesium"
import { Viewer } from "cesium";
import "cesium/Source/Widgets/widgets.css";
import img1 from "./worldimage.jpg"
import "./style.css"

const CesiumViewer = () => {
    useEffect(()=>{
        const viewer = new Viewer("cesiumContainer"
        ,{
            imageryProvider: new Cesium.SingleTileImageryProvider({
              url: img1
            }),
            baseLayerPicker: false,
            animation:false,
            geocoder: false,
            timeline:false,
          }
          );
        viewer.scene.debugShowFramesPerSecond = true;
          
    },[])
  return (<div id="cesiumContainer"></div>)
}


export default CesiumViewer;