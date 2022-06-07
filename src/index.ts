let dimensionArray: number = 0 ;
let v: number[] = new Array(dimensionArray);
let min : number;

function cargaArreglo(dimensionArray : number) {
 dimensionArray = Number(prompt(`Ingrese la dimension del arreglo`));
  for(let i= 0 ; i < dimensionArray; i++) {
  v[i] = Math.floor(Math.random() * 100)
}
}

function menorValor(v : number[])  {
let menor: number = 0
for (let i = 0; i < v.length; i++) {
  if (v[i] > v[i + 1]){
menor = v[i]
}
}
min = menor
}
function mostrarValores(menor: number , v: number[]) {
  console.log(`El arreglo es ${v}`);
  console.log(`El valor minimo es ${menor}`);
}
cargaArreglo(dimensionArray);
menorValor(v);
mostrarValores(min ,v);