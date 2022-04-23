/// <reference types="vite/client" />

interface positionInterface {
	x: number,
	y: number
}

// interface CanvasConstructor {
// 	new(app: HTMLDivElement, el: HTMLCanvasElement, canvas: CanvasRenderingContext2D): ICanvas
// }
// interface Icanvas {
// 	app: HTMLDivElement,
// 	el: HTMLCanvasElement,
// 	canvas: CanvasRenderingContext2D,
// }

interface ModelConstructor {
	new(canvas: CanvasRenderingContext2D, x: number, y: number): IModel
}
interface BulletModelConstructor {
	new(tank: IModel, canvas: CanvasRenderingContext2D, x: number, y: number): IModel
}

interface IModel {
	x: number,
	y: number,
	renderModel(): void,
	board: ICanvas,
	// removeModel(): void,
	tank?: IModel,
	direction?: string,
	name?: string
}

interface ICanvas {
	canvas: CanvasRenderingContext2D
	// removeModel(model: IModel): void
	modelColletion: IModel[],
	firstRender(): void,
	againRender(): void,
	stop?(): void
}