import config from "../config";
class Position {
	public allPosition: positionInterface[] = [];
	public setPositions(num: number, modelType: string) {
		const positions: positionInterface[] = [];
		for (let i = 0; i < num; i++) {
			while (true) {
				const position = this.position(modelType);
				if (this.allPosition.some(item => position.x == item.x && position.y == item.y)) {
					continue;
				}
				this.allPosition.push(position)
				positions.push(position);
				break;
			}
		}

		return positions;
	}
	protected position(modelType: string): { x: number, y: number } {
		if (modelType == "tank") {
			return {
				x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
				y: Math.abs(Math.floor(Math.random() * 2) * config.model.height)
			};
		}
		return {
			x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
			y: Math.abs(Math.floor(Math.random() * (config.canvas.height / config.model.height) - 5) * config.model.height) + config.model.height * 2
		};
	}
}


export default new Position();