// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    StandardMaterial,
    Texture,
    Color3
  } from "@babylonjs/core";
  
  
 function createBox(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 1, height: 1 },
    scene
  );
  box.position.x = -1;
  box.position.y = .5;
  box.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/crate.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  box.material = texture;
  return box;
}

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  function createBox2(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 1, height: 1 },
    scene
  );
  box.position.x = 0;
  box.position.y = .5;
  box.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/crate.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  box.material = texture;
  return box;
}
 function createBox3(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 1, height: 1},
    scene
  );
  box.position.x = 0;
  box.position.y = 1.5;
  box.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/crate.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  box.material = texture;
  return box;
}
  
  function createGround(scene: Scene) {
    let ground = MeshBuilder.CreateGround(
      "ground",
      { width: 6, height: 6 },
      scene,
    );
    var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/grass.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  ground.material = texture;
    return ground;
  }
  
  function createArcRotateCamera(scene: Scene) {
    let camAlpha = -Math.PI / 2,
      camBeta = Math.PI / 2.5,
      camDist = 10,
      camTarget = new Vector3(0, 0, 0);
    let camera = new ArcRotateCamera(
      "camera1",
      camAlpha,
      camBeta,
      camDist,
      camTarget,
      scene,
    );
    camera.attachControl(true);
    return camera;
  }
  
  export default function createStartScene(engine: Engine) {
    interface SceneData {
      scene: Scene;
      cylinder?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      box?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    
    that.light = createLight(that.scene);
    that.box = createBox(that.scene);
    that.box = createBox2(that.scene);
    that.box = createBox3(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    return that;
  }
