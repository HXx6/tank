import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/player"

class player extends canvasAbstract {
	name: string = "player"
	interval = 0
	//在创建坦克画布的时候启动重绘坦克画布的定时器
	constructor() {
		super();
		this.interval = setInterval(() => {
			this.againRender();
		}, 16) as unknown as number;
	}

	firstRender(): void {
		this.setCanvas();
	}

	againRender(): void {
		super.resetCanvas();
	}

	protected setCanvas(): void {
		[{ x: config.canvas.width / 2 - 4 * config.model.width, y: config.canvas.height - config.model.height }].forEach(local => {
			const instance = new model(this.canvas, local.x, local.y);
			this.modelColletion.push(instance);
			instance.renderModel();
		})
	}

	stop() {
		clearInterval(this.interval);
	}
}


export default new player()