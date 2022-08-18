// https://calculator.swiftutors.com/curved-surface-area-of-a-cylinder-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const curvedSurfaceAreaofCylinderRadio = document.getElementById('curvedSurfaceAreaofCylinderRadio');
const radiusoftheCylinderRadio = document.getElementById('radiusoftheCylinderRadio');
const heightoftheCylinderRadio = document.getElementById('heightoftheCylinderRadio');

let curvedSurfaceAreaofCylinder;
const PI = Math.PI;
let radiusoftheCylinder = v1;
let heightoftheCylinder = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

curvedSurfaceAreaofCylinderRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Radius of the Cylinder (cm)';
  variable2.textContent = '(h) Height of the Cylinder (cm)';
  radiusoftheCylinder = v1;
  heightoftheCylinder = v2;
  result.textContent = '';
});

radiusoftheCylinderRadio.addEventListener('click', function() {
  variable1.textContent = '(E) Curved Surface Area of Cylinder (cm²)';
  variable2.textContent = '(h) Height of the Cylinder (cm)';
  curvedSurfaceAreaofCylinder = v1;
  heightoftheCylinder = v2;
  result.textContent = '';
});

heightoftheCylinderRadio.addEventListener('click', function() {
  variable1.textContent = '(E) Curved Surface Area of Cylinder (cm²)';
  variable2.textContent = '(r) Radius of the Cylinder (cm)';
  curvedSurfaceAreaofCylinder = v1;
  radiusoftheCylinder = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(curvedSurfaceAreaofCylinderRadio.checked)
    result.textContent = `Curved Surface Area of Cylinder = ${computeCurvedSurfaceAreaofCylinder().toFixed(2)} cm²`;

  else if(radiusoftheCylinderRadio.checked)
    result.textContent = `Radius of the Cylinder = ${computeRadiusoftheCylinder().toFixed(2)} cm`;

  else if(heightoftheCylinderRadio.checked)
    result.textContent = `Height of the Cylinder = ${computeHeightoftheCylinder().toFixed(2)} cm`;
})

// calculation

function computeCurvedSurfaceAreaofCylinder() {
  return 2 * PI * Number(radiusoftheCylinder.value) * Number(heightoftheCylinder.value);
}

function computeRadiusoftheCylinder() {
  return Number(curvedSurfaceAreaofCylinder.value) / (2 * PI * Number(heightoftheCylinder.value));
}

function computeHeightoftheCylinder() {
  return Number(curvedSurfaceAreaofCylinder.value) / (2 * PI * Number(radiusoftheCylinder.value));
}