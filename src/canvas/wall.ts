import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/wall"

class wall extends canvasAbstract {
	name: string = "wall"
	constructor() {
		super();
	}

	firstRender(): void {
		super.setCanvas(config.wall.number, model, this.name);
		this.creatBossWall();
	}

	againRender(): void {
		super.resetCanvas();
	}

	protected creatBossWall() {
		const pos = [
			{ x: config.canvas.width / 2 - 2 * config.model.width, y: config.canvas.height - config.model.height },
			{ x: config.canvas.width / 2 - 2 * config.model.width, y: config.canvas.height - 2 * config.model.height },
			{ x: config.canvas.width / 2 - 2 * config.model.width, y: config.canvas.height - 3 * config.model.height },
			{ x: config.canvas.width / 2 - config.model.width, y: config.canvas.height - 3 * config.model.height },
			{ x: config.canvas.width / 2, y: config.canvas.height - 3 * config.model.height },
			{ x: config.canvas.width / 2 + config.model.width, y: config.canvas.height - 3 * config.model.height },
			{ x: config.canvas.width / 2 + 2 * config.model.width, y: config.canvas.height - 3 * config.model.height },
			{ x: config.canvas.width / 2 + 2 * config.model.width, y: config.canvas.height - 2 * config.model.height },
			{ x: config.canvas.width / 2 + 2 * config.model.width, y: config.canvas.height - config.model.height },
		]
		pos.forEach(local => {
			const instance = new model(this.canvas, local.x, local.y);
			this.modelColletion.push(instance);
			instance.renderModel();
		})
	}

}

export default new wall()