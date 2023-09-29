const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
if (!gl){
throw new Error('WebGL not supported');
}


const vertexData = [ //สร้างposition ของจุด
    -0.5, 0.15, 0, //V1 position 1
    -1, 0.1, 0, //V2 position
    -0.90, 0, 0, 

    -0.9, 0, 0, //2
    -0.95, -0.1, 0,
    -0.7, -0.15,0, 

    -0.9, 0, 0, //3
    -0.5, 0.15, 0,
    -0.7, -0.15,0,

    -0.5, 0.15, 0, //4
    -0.7, -0.15, 0,
    -0.3, -0.2, 0,

    -0.7, -0.15, 0,
    -0.6, -0.25, 0, //5
    -0.3, -0.2, 0,

    -0.6, -0.25, 0, //ล่าง 6
    -0.7, -0.15, 0,
    -0.75, -0.24, 0,

    -0.5, 0.15, 0, //ลำตัวท่อนกลาง 7
    -0.15, -0.21, 0,
    -0.3, -0.2, 0,

    -0.3, -0.2, 0, //8
    -0.15, -0.21, 0,
    -0.6, -0.35, 0,

    -0.5, 0.15, 0,  //9
    0, 0.25, 0,
    -0.15, -0.21, 0,

    0, 0.25, 0,
    -0.15, -0.21, 0,
    -0.005, -0.15, 0, //ลำตัวล่าสุด 10

    -0.15, -0.21, 0, //11
    -0.005, -0.15, 0,
    -0.006, -0.21,0,

    0, 0.25, 0,
    -0.005, -0.15, 0, //12
    0.25, 0.26, 0,

    0.25, 0.26, 0,
    -0.005, -0.15, 0, //13
    0.3, -0.04, 0,

    0.3, -0.04, 0,
    -0.005, -0.15, 0,
    0.15, -0.4, 0, //14

    -0.005, -0.15, 0,
    -0.006, -0.21, 0,
    0.15, -0.4, 0,

    0.15, -0.4, 0,
    0.3, -0.04, 0,
    0.4, -0.2, 0,

    0.4, -0.2, 0,
    0.3, -0.04, 0,
    0.7, 0, 0,

    0.7, 0, 0,
    0.3, -0.04, 0,
    0.5, 0.26, 0,

    0.5, 0.26, 0,
    0.3, -0.04, 0,
    0.25, 0.26, 0, //19

    0.7, 0, 0,
    0.5, 0.26, 0,
    0.6, 0.3, 0,

    0.7, 0, 0,
    0.6, 0.3, 0,
    0.8, 0.3, 0,

    0.7, 0, 0,
    0.8, 0.3, 0,
    0.81, 0.15, 0,

    0.8, 0.3, 0,
    0.81, 0.15, 0,
    0.9, 0.16, 0,

    0.9, 0.16, 0,
    0.8, 0.3, 0,
    0.94, 0.32, 0,

    0.94, 0.32, 0,
    0.9, 0.16, 0,
    1, 0.2, 0,

    0.9, 0.16, 0,
    1, 0.2, 0,
    0.92, 0, 0,

    0.8, 0.3, 0,
    0.94, 0.32, 0,
    0.86, 0.4, 0,

    0.8, 0.3, 0,
    0.86, 0.4, 0,
    0.7, 0.42, 0,

    0.7, 0.42, 0,
    0.8, 0.3, 0,
    0.6, 0.3, 0,

    0.7, 0.42, 0,
    0.6, 0.3, 0,
    0.55, 0.35, 0,

    0.6, 0.3, 0,
    0.55, 0.35, 0,
    0.5, 0.26, 0,

    0.15, -0.4, 0,
    -0.1, -0.5, 0,
    0.07, -0.49, 0,

    -0.1, -0.5, 0,
    0.07, -0.49, 0,
    0.03, -0.55, 0,

    0.07, -0.49, 0,
    0.03, -0.55, 0,
    0.3, -0.49, 0,

    0.3, -0.49, 0,
    0.07, -0.49, 0,
    0.2, -0.44, 0,

    0.2, -0.44, 0,
    0.3, -0.49, 0,
    0.4, -0.4, 0,

    0.4, -0.4, 0,
    0.3, -0.49, 0,
    0.55, -0.6, 0,


    
];
const colorData = [ //ใส่สีตามจุด
    0, 0.7, 1, //V1 Color 1
    0, 0.7, 1, //V2 Color
    0, 0.7, 1, //V3 Color

    0, 0.75, 1,
    0, 0.75, 1, //2
    0, 0.75, 1,


    0, 0.68, 1, //3
    0, 0.68, 1,
    0, 0.68, 1,

    0, 0.65, 1, //4
    0, 0.65, 1,
    0, 0.65, 1,

    0, 0.5, 1, //5
    0, 0.5, 1,
    0, 0.5, 1,

    0, 0.5, 1, //6
    0, 0.5, 1,
    0, 0.5, 1,

    0, 0.6, 1, //7
    0, 0.6, 1,
    0, 0.6, 1,

    0, 0.5, 1, //8
    0, 0.5, 1,
    0, 0.5, 1,

    0, 0.77, 0.9, //9
    0, 0.77, 0.9,
    0, 0.77, 0.9,

    0, 0.6, 1,
    0, 0.6, 1, //10
    0, 0.6, 1,


    0, 0.5, 1, //11
    0, 0.5, 1,
    0, 0.5, 1,

    0, 0.77, 0.8, //12
    0, 0.77, 0.8,
    0, 0.77, 0.8,

    0, 0.7, 0.7,
    0, 0.7, 0.7, //13
    0, 0.7, 0.7,

    0.4, 0.6, 0.4,
    0.4, 0.6, 0.4,
    0.4, 0.6, 0.4,

    0.5, 0.6, 0.4,
    0.5, 0.6, 0.4,
    0.5, 0.6, 0.4,    

    1, 0.8, 0.1,
    1, 0.8, 0.1,
    1, 0.8, 0.1,

    1, 0.8, 0.1,
    1, 0.8, 0.1,
    1, 0.8, 0.1,

    0, 0.8, 0.7,
    0, 0.8, 0.7,
    0, 0.8, 0.7,  

    0, 0.9, 0.7, //19
    0, 0.9, 0.7,
    0, 0.9, 0.7,

    0.7, 1, 1,
    0.7, 1, 1,
    0.7, 1, 1,

    0.8, 1, 1,
    0.8, 1, 1,
    0.8, 1, 1,

    0.7, 0.7, 0.7,
    0.7, 0.7, 0.7,
    0.7, 0.7, 0.7,

    0.4, 0.4, 0.4,
    0.4, 0.4, 0.4,
    0.4, 0.4, 0.4,

    0.5, 0.5, 0.5,
    0.5, 0.5, 0.5,
    0.5, 0.5, 0.5,

    0.6, 0.6, 0.6,
    0.6, 0.6, 0.6,
    0.6, 0.6, 0.6,

    0.65, 0.65, 0.65,
    0.65, 0.65, 0.65,
    0.65, 0.65, 0.65,

    0.8, 1, 0.4,
    0.8, 1, 0.4,
    0.8, 1, 0.4,

    0.7, 1, 0.4,
    0.7, 1, 0.4,
    0.7, 1, 0.4,

    0, 0.6, 0.6, 
    0, 0.6, 0.6,
    0, 0.6, 0.6,

    0, 0.7, 0.7, 
    0, 0.7, 0.7,
    0, 0.7, 0.7,

    0, 0.6, 1, 
    0, 0.6, 1,
    0, 0.6, 1,

    0.4, 0.2, 0, 
    0.4, 0.2, 0,
    0.4, 0.2, 0,

    0.4, 0.2, 0, 
    0.4, 0.2, 0,
    0.4, 0.2, 0,

    0.4, 0.2, 0, 
    0.4, 0.2, 0,
    0.4, 0.2, 0,

    0.4, 0.2, 0, 
    0.4, 0.2, 0,
    0.4, 0.2, 0,

    0.4, 0.2, 0, 
    0.4, 0.2, 0,
    0.4, 0.2, 0,

    0.4, 0.2, 0, 
    0.4, 0.2, 0,
    0.4, 0.2, 0,
];
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;
attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;
void main(){
gl_Position = vec4(position, 1);
vColor = color;
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;
varying vec3 vColor;
void main(){
gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, `position`);
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
const colorLocation = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
gl.useProgram(program);
gl.drawArrays(gl.TRIANGLES, 0, 111); 

