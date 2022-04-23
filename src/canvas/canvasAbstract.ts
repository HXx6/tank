import config from "../config";
// import modelAbstract from "../model/modelAbstract";
import position from "../service/position";
// import { images } from "../service/image";



export default abstract class canvasAbstract {
	// 在每次创建一个画布对象的时候创建一个这个画布上的集合
	public modelColletion: IModel[] = [];
	//第一次渲染，会创建画布上面的模型
	abstract firstRender(): void
	//移动的时候基于模型来渲染
	abstract againRender(): void
	//用来区分不同画布的名字
	abstract name: string


	//画布类的构造函数
	constructor(
		protected app: HTMLDivElement = document.querySelector("#app") as HTMLDivElement,
		protected el: HTMLCanvasElement = document.createElement("canvas"),
		public canvas = el.getContext("2d")!,
	) {
		this.createCanvas();
	}

	//在页面中初始化画布
	protected createCanvas() {
		this.el.width = config.canvas.width;
		this.el.height = config.canvas.height;
		this.app.insertAdjacentElement("beforeend", this.el);
	}

	//初始化画布模型
	protected setCanvas(num: number, model: ModelConstructor, modelType: string) {
		position.setPositions(num, modelType).forEach(local => {
			const instance = new model(this.canvas, local.x, local.y);
			this.modelColletion.push(instance);
			instance.renderModel();
		})
	}

	//再次渲染画布模型
	protected resetCanvas() {
		this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height);
		this.modelColletion.forEach(item => item.renderModel());
	}




}