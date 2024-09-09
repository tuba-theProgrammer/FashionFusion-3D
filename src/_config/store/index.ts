import { proxy } from "valtio";

// Define the type for the state object
interface State {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
}

// Create the state object with type annotations
const state = proxy<State>({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./assets/Images/threejs.png",
  fullDecal: "./assets/Images/threejs.png",
});

export default state;
