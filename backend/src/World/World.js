import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
 
// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let renderer;
let scene;
let loop;
 
class World {
   constructor(container) {
     // Instances of camera, scene, and renderer
     camera = createCamera();
     scene = createScene("blue");
     renderer = createRenderer();
      // Initialize Loop
     loop = new Loop(camera, scene, renderer);
      container.append(renderer.domElement);
      // Light Instance, with optional light helper
     const { light, lightHelper } = createLights("white");
      loop.updatables.push(light);
      scene.add(light);
 
     const resizer = new Resizer(container, camera, renderer);
      resizer.onResize = () => {
      this.render();
     };
 
    }
    render() {
     // Draw a single frame
     renderer.render(scene, camera);
   }
    // Animation handlers
   start() {
     loop.start();
   }
    stop() {
     loop.stop();
   }
 }
  export { World };