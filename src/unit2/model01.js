import * as THREE from 'three';

// 创建一个空的几何体顶对象
const geometry = new THREE.BufferGeometry();

// 添加顶点数据

// 类型化数组定义的一组顶点坐标数据
const vertices = new Float32Array([
  0, 0, 0,
  80, 0, 0,
  80, 80, 0,
  0, 80, 0
]);

// BufferAttribute属性缓冲对象表示顶点数据
const attribute = new THREE.BufferAttribute(vertices, 3);

// 设置几何体的顶点位置属性
geometry.attributes.position = attribute;

const normals = new Float32Array([
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
])

geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);

const indexes = new Uint16Array([
  0, 1, 2, 0, 2, 3
]);

geometry.index = new THREE.BufferAttribute(indexes, 1)

// 线材质
const meterial = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
})

const mesh = new THREE.Mesh(geometry, meterial);

export default mesh;