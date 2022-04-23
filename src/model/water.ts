import water from "../canvas/water";
import { images } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
	name = "water"
	board = water

	renderModel(): void {
		super.modelToCanvas(images.get("water")!);
	}
}