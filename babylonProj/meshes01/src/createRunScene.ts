import { Vector3, Quaternion } from "@babylonjs/core";

import { SceneData } from "./interfaces";

// rotate box
let boxAngle: number = 0.3;
let boxSpeed: number = 0.01;
let octahedronAngle: number = 0.5;
let octahedronSpeed: number = 0.02;

export default function createRunScene(runScene: SceneData) {
  runScene.scene.onAfterRenderObservable.add(() => {
    // rotate oct
    const axis: Vector3 = new Vector3(0, 0, 1).normalize();
    const quat: Quaternion = Quaternion.RotationAxis(
      axis,
      octahedronAngle * 2 * Math.PI
    );
    runScene.octahedron!.rotationQuaternion = quat;
    octahedronAngle += octahedronSpeed;
    octahedronAngle %= 1;
    })
}