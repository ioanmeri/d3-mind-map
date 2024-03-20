import map from './data/mapdata';
import { MindMap } from './mindmap';

function init() {
  let data = { ...map };
  let dataLocalStorage = localStorage.getItem("d3-map-data");
  if (dataLocalStorage) {
    data = JSON.parse(dataLocalStorage);
  }
  console.log(data, "data");
  let svgEl = document.getElementsByClassName("mindmap-svg")[0];

  let mindmap = new MindMap(svgEl, data);
  mindmap.renderMap();
}
init();
