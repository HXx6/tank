import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/brickWall"

class brickWall extends canvasAbstract {
	name: string = "birckWall"
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

export default new brickWall()