import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/water"

class water extends canvasAbstract {
	name: string = "water"
	constructor() {
		super();
	}
	firstRender(): void {
		super.setCanvas(config.water.number, model, this.name);
	}
	againRender(): void {
		super.resetCanvas();
	}
}

export default new water()