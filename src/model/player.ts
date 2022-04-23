
import bullet from "../canvas/bullet";
import player from "../canvas/player";
// import config from "../config";
import { images, mapkey } from "../service/image";
import touch from "../service/touch";
// import touch from "../service/touch";
// import position from "../service/position";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
	name = "player"
	board = player
	isBind = false
	//增加坦克向下移动的概率
	public direction = "playerTop"
	//在坦克画布上创建坦克对象的时候为这个对象设置定时器，并且动态更新位置集中的坐标
	constructor(canvas: CanvasRenderingContext2D, x: number, y: number) {
		super(canvas, x, y);
	}

	renderModel(): void {
		super.modelToCanvas(images.get(this.direction as mapkey)!);
		if (!this.isBind) {
			this.isBind = true;
			document.body.addEventListener("keydown", this.changeDirection.bind(this));
			document.body.addEventListener("keydown", this.PlayerMove.bind(this));
			document.body.addEventListener("keydown", this.lanuchBullet.bind(this));
		}

	}

	changeDirection(e: KeyboardEvent) {
		switch (e.code) {
			case "ArrowUp":
				this.direction = "playerTop";
				break;
			case "ArrowDown":
				this.direction = "playerBottom";
				break;
			case "ArrowLeft":
				this.direction = "playerLeft";
				break;
			case "ArrowRight":
				this.direction = "playerRight";
				break;
			default: ""
		}

	}

	protected PlayerMove(e: KeyboardEvent) {
		let x = this.x;
		let y = this.y;
		switch (e.code) {
			case "ArrowUp":
				this.y -= 5;
				break;
			case "ArrowDown":
				this.y += 5;
				break;
			case "ArrowLeft":
				this.x -= 5;
				break;
			case "ArrowRight":
				this.x += 5;
				break;
			default: ""
		}if (touch.isTouchCanvas(this.x, this.y) || touch.isTouchModels(this.x, this.y)) {
			this.x = x;
			this.y = y;
		}
	}

	protected lanuchBullet(e: KeyboardEvent) {
		if (e.code == "Space") {
			bullet.playerBullet();
		}
	}




}