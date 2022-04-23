import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/bullet"
import tank from "./tank";
import player from "./player";
import audio from "../service/audio";

class bullet extends canvasAbstract {
	name: string = "bullet"
	interval = 0
	stopFlag = false

	constructor() {
		super();
		this.interval = setInterval(() => {
			this.againRender();
		}, config.bullet.speed) as unknown as number
	}

	firstRender(): void {
		this.setCanvas();
	}

	againRender(): void {
		this.resetCanvas();
	}

	protected setCanvas() {
		tank.modelColletion.forEach(tank => {
			if (!this.modelColletion.some(model => model.tank == tank)) {
				const instance = new model(tank, this.canvas, tank.x + config.model.width / 2, tank.y + config.model.height / 2);
				this.modelColletion.push(instance);
				instance.renderModel();
			}
		})
	}

	public playerBullet() {
		this.stopFlag ? "" : audio.fire();
		player.modelColletion.forEach(tank => {
			const instance = new model(tank, this.canvas, tank.x + config.model.width / 2, tank.y + config.model.height / 2);
			this.modelColletion.push(instance);
			instance.renderModel();
		})
	}

	stop() {
		clearInterval(this.interval);
		this.stopFlag = true;
	}
}

export default new bullet()


