import initialRender from "./core/initialRender";
import listener from "./core/listener";

class Shop {
  init() {
    console.log("Shop App Start");
    initialRender();
    listener();
  }
}

export default Shop;
