import wall from "../canvas/wall";
import { images } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
	name = "wall"
	board = wall

	renderModel(): void {
		super.modelToCanvas(images.get("wall")!);
	}
}