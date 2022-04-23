import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/tank"

class tank extends canvasAbstract {
	name: string = "tank"
	interval = 0
	//在创建坦克画布的时候启动重绘坦克画布的定时器
	constructor() {
		super();
		this.interval = setInterval(() => {
			this.againRender();
		}, config.tank.speed) as unknown as number;
	}

	firstRender(): void {
		super.setCanvas(config.tank.number, model, this.name);
	}

	againRender(): void {
		super.resetCanvas();
	}

	public stop() {
		clearInterval(this.interval);
	}
}

export default new tank()