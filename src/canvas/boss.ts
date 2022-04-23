import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/boss"

class boss extends canvasAbstract {
	name: string = "boss"
	constructor() {
		super();
	}
	firstRender(): void {
		this.setCanvas();
	}
	againRender(): void {
		super.resetCanvas();
	}

	protected setCanvas(): void {
		[{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(local => {
			const instance = new model(this.canvas, local.x, local.y);
			this.modelColletion.push(instance);
			instance.renderModel();
		})
	}
}

export default new boss()