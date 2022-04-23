
import tank from "../canvas/tank";
import config from "../config";
import { images, mapkey } from "../service/image";
import touch from "../service/touch";
// import position from "../service/position";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
	name = "tank"
	board = tank

	public directions = ["tankTop", "tankBottom", "tankLeft", "tankRight", "tankBottom", "tankBottom"]
	//增加坦克向下移动的概率
	public direction = this.directions[Math.floor(Math.random() * 6)]
	//在坦克画布上创建坦克对象的时候为这个对象设置定时器，并且动态更新位置集中的坐标
	constructor(canvas: CanvasRenderingContext2D, x: number, y: number) {
		super(canvas, x, y);
		setInterval(() => {
			//删除原有坐标
			// position.allPosition.splice(position.allPosition.indexOf({ x: this.x, y: this.y }), 1);
			this.move();


			//添加动作后的坐标
			// position.allPosition.push({ x: this.x, y: this.y });
		}, config.tank.speed);
	}

	renderModel(): void {
		super.modelToCanvas(images.get(this.direction as mapkey)!);
	}
	//坦克移动的独有的函数
	protected move() {
		let x = this.x;
		let y = this.y;
		switch (this.direction) {
			case "tankTop":
				this.y--;
				break;
			case "tankBottom":
				this.y++;
				break;
			case "tankLeft":
				this.x--;
				break;
			case "tankRight":
				this.x++;
				break;
			default: ""
		}
		if (touch.isTouchCanvas(this.x, this.y) || touch.isTouchModels(this.x, this.y)) {
			this.x = x;
			this.y = y;
			this.direction = this.directions[Math.floor(Math.random() * 6)]
		}
	}
	// 对坦克的移动进行碰撞检测

}