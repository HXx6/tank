import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/straw"

class straw extends canvasAbstract {
	name: string = "straw"
	constructor() {
		super();
	}
	firstRender(): void {
		super.setCanvas(config.straw.number, model, this.name);
	}
	againRender(): void {
		super.resetCanvas();
	}
}

export default new straw()