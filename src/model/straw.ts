import straw from "../canvas/straw";
import { images } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
	name = "straw"
	board = straw

	renderModel(): void {
		super.modelToCanvas(images.get("straw")!);
	}
}