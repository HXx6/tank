import boss from "../canvas/boss";
import { images } from "../service/image";
import modelAbstract from "./modelAbstract";
export default class extends modelAbstract implements IModel {
	board = boss
	name = "boss"
	renderModel(): void {
		super.modelToCanvas(images.get("boss")!);
	}
}