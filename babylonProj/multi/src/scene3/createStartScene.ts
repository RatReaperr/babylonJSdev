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
    Texture,
    StandardMaterial,
    Color3
  } from "@babylonjs/core";
  
  
  function createSphere(scene: Scene) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 0.7, segments: 32 },
      scene
    );
    sphere.position.x = -2;
    sphere.position.y = 3;
    sphere.position.z = 1;
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/fire.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    sphere.material = texture;

    return sphere;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
 function createBox(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 2, height: 1 },
    scene
  );
  box.position.x = 0;
  box.position.y = .5;
  box.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/floor.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  box.material = texture;
  return box;
}
function createBox2(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 1, height: 1.6 },
    scene
  );
  box.position.x = -1;
  box.position.y = .6;
  box.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/floor.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  box.material = texture;
  return box;
}
function createBox3(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 1, height: 1.6 },
    scene
  );
  box.position.x = 1;
  box.position.y = .6;
  box.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/floor.png", scene);
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
  texture.ambientTexture = new Texture("./assets/lavatile.jpg", scene);
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
      torus?: Mesh;
      light?: Light;
      sphere?: Mesh;
      box?: Mesh;
      ground?: Mesh;
      camera?: Camera;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    
    that.light = createLight(that.scene);
    that.sphere = createSphere(that.scene);
    that.box = createBox(that.scene);
    that.box = createBox2(that.scene);
    that.box = createBox3(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    return that;
  }
