
import config from "../config";
import audio from "../service/audio";
// import { images } from "../service/image";
export default abstract class modelAbstract {
	//在模型里面传递画布实例对象
	abstract board: ICanvas
	abstract name: string;
	// 把自己通过画笔画到画布上，同时不同的类型在渲染的时候可能会有不同的动作
	abstract renderModel(): void;
	constructor(public canvas: CanvasRenderingContext2D, public x: number, public y: number) {
		// this.render();
	}
	// 把自己通过画笔画到画布上
	protected modelToCanvas(img: HTMLImageElement) {
		this.canvas.drawImage(img, this.x, this.y, config.model.width, config.model.height);
	}


	//把自己从自己的画布中移除
	protected removeModel() {
		this.board.modelColletion = this.board.modelColletion.filter(model => model != this);
	}


	//在移除的同时会增加一个爆炸效果
	protected Blast() {
		audio.blast();
		[...Array(9).fill("").keys()].reduce((promise, index) => {
			return promise.then(() => {
				//后面的爆炸效果的then要等到这个爆炸效果完成解决后才会放到微任务队列，因为then的状态就是确定的fuilled
				//而不是一起放到微任务队列里面
				return new Promise(resolve => {
					setTimeout(() => {
						if (index < 8) {
							let img = document.createElement("img");
							img.src = `/src/static/images/blasts/blast${index}.gif`;
							img.onload = () => {
								this.canvas.drawImage(img, this.x, this.y, config.model.width, config.model.height);
								resolve();
							}
						} else {
							setTimeout(() => {
								this.canvas.clearRect(this.x, this.y, config.model.width, config.model.height);
								resolve();
							}, 200);
						}
					}, 100);
				})
			})
		}, Promise.resolve());
	}


}