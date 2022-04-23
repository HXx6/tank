import boss from "../canvas/boss";
import brickwall from "../canvas/brickwall";
import bullet from "../canvas/bullet";
import player from "../canvas/player";
import tank from "../canvas/tank";
import wall from "../canvas/wall";
import water from "../canvas/water";
import config from "../config";
import { images } from "../service/image";
import touch from "../service/touch";
import modelAbstract from "./modelAbstract";
export default class extends modelAbstract implements IModel {
	board = bullet
	name = "bullet"
	constructor(public tank: IModel, canvas: CanvasRenderingContext2D, x: number, y: number, public direction: string = tank.direction!) {
		super(canvas, x, y);
		//在定时的时候可能在画布上的元素消除了，但是其本身还是存在，还是会移动，所以需要添加一个定时器
		//在碰撞检测完毕后来停止其移动
		let id = setInterval(() => {
			if (this.move() || bullet.stopFlag) {
				clearInterval(id);
			}
		}, config.bullet.speed);
	}

	renderModel(): void {
		this.modelToCanvas(images.get("bullet")!);
	}
	protected move(): true | void {
		switch (this.direction) {
			case "tankTop":
				this.y--;
				break;
			case "playerTop":
				this.y -= 2;
				break;
			case "tankBottom":
				this.y++;
				break;
			case "playerBottom":
				this.y += 2;
				break;
			case "tankLeft":
				this.x--;
				break;
			case "playerLeft":
				this.x -= 2;
				break;
			case "tankRight":
				this.x++;
				break;
			case "playerRight":
				this.x += 2;
				break;
			default: ""
		}
		const collition: IModel | undefined = touch.isTouchModels(this.x, this.y, config.model.width / 10, config.model.height / 10, [...wall.modelColletion, ...water.modelColletion, ...boss.modelColletion, ...tank.modelColletion, ...player.modelColletion]);
		const obstacles: IModel | undefined = touch.isTouchModels(this.x, this.y, config.model.width / 10, config.model.height / 10, [...brickwall.modelColletion]);
		// console.log(collition);

		if (touch.isTouchCanvas(this.x, this.y, config.model.width / 10, config.model.height / 10)) {
			this.removeModel();
			this.board.firstRender();
			return true;
		} else if (collition) {
			if (this.tank.name != collition.name) {
				this.removeModel();
				this.board.firstRender();
				this.removeModel.call(collition);
				this.Blast.call(collition);
				collition.board.againRender();
				return true;
			}
		} else if (obstacles) {
			this.removeModel();
			this.board.firstRender();
			return true;
		}
	}



	protected modelToCanvas(img: HTMLImageElement) {
		this.canvas.drawImage(img, this.x, this.y, config.model.width / 10, config.model.height / 10);
	}
}