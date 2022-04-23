import boss from "../canvas/boss";
import brickwall from "../canvas/brickwall";
import wall from "../canvas/wall";
import water from "../canvas/water";
import config from "../config";
class touch {
	isTouchCanvas(x: number, y: number, width = config.model.width, height = config.model.height) {
		return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height;
	}

	isTouchModels(x: number, y: number,
		width = config.model.width, height = config.model.height,
		models = [...wall.modelColletion, ...brickwall.modelColletion, ...water.modelColletion, ...boss.modelColletion]): IModel | undefined {
		return models.find(model => {
			const state = x + width - 1 <= model.x || x + 1 >= model.x + config.model.width || y + height - 1 <= model.y || y + 1 >= model.y + config.model.height
			return !state;
		})
	}

}

export default new touch();

