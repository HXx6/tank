import config from "./config"
import './style.scss'
import { promises } from "./service/image";
import straw from "./canvas/straw";
import wall from "./canvas/wall";
import water from "./canvas/water";
import brickwall from "./canvas/brickwall";
import tank from "./canvas/tank";
import bullet from "./canvas/bullet";
import boss from "./canvas/boss";
import player from "./canvas/player";
import audio from "./service/audio";

const app = document.querySelector("#app") as HTMLDivElement;
app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + "px";


export default {
	isPlaying: false,
	interval: 2,
	state: 2,

	start() {
		audio.start();
		app.addEventListener("click", async () => {
			await this.play();
			this.interval = setInterval(() => {
				tank.modelColletion.length == 0 ? this.state = 0 : "";
				player.modelColletion.length == 0 || boss.modelColletion.length == 0 ? this.state = 1 : "";
				if (this.state != 2) this.stop();
			}, 100) as unknown as number;
		});

	},

	async play() {
		if (this.isPlaying == false) {
			this.isPlaying = true
			app.style.backgroundImage = "none";
			await Promise.all(promises);		//先等图片加载完成再去拿图片里面的内容，异步
			straw.firstRender();
			wall.firstRender();
			water.firstRender();
			brickwall.firstRender();
			tank.firstRender();
			bullet.firstRender();
			boss.firstRender();
			player.firstRender();
		}
		else {
			return;
		}
	},

	async stop() {
		clearInterval(this.interval);
		tank.stop();
		player.stop();
		bullet.stop();
		this.endText();
	},

	async endText() {
		const el = document.createElement("canvas");
		el.width = config.canvas.width;
		el.height = config.canvas.height;
		const ctx = el.getContext("2d")!;
		ctx.fillStyle = "red";
		ctx.font = "60px 微软雅黑";
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillText(this.state == 0 ? "恭喜  你赢了1" : "抱歉  你输了！", config.canvas.width / 2, config.canvas.height / 2);
		app.insertAdjacentElement("beforeend", el);
		audio.end();
	}
}