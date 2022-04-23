import brickwall from "../canvas/brickwall";
import { images } from "../service/image";
import modelAbstract from "./modelAbstract";
export default class extends modelAbstract implements IModel {
	board = brickwall

	name = "brickWall"
	renderModel(): void {
		super.modelToCanvas(images.get("brickWall")!);
	}
}