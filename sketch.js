let geodata;
let waterData;

let bounds = {
  left: 8.20782,
  top: 47.094669,
  right: 8.365691,
  bottom: 47.024504,
};

function preload() {
  geodata = loadJSON("lucerne-water.geojson");
}

function setup() {
  createCanvas(900, 650);

  // console.log(geodata);
  waterData = geodata.features;
  console.log("waterData", waterData);

  noLoop();
}

function draw() {
  background(255);

  for (let i = 0; i < waterData.length; i++) {
    let waterObject = waterData[i];
    let geometry = waterObject.geometry;
    let coordinates = geometry.coordinates[0][0];
    noStroke();
    fill(random(0, 255), random(0, 255), random(255, 0));
    beginShape();
    for (let j = 0; j < coordinates.length; j++) {
      let coord = coordinates[j];
      let lat = coord[1];
      let lon = coord[0];

      let x = map(lon, bounds.left, bounds.right, 0, width);
      let y = map(lat, bounds.top, bounds.bottom, 0, height);
      // console.log(x, y);

      vertex(x, y);
    }
    endShape();
  }
}
