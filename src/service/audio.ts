export default {
	start() {
		const el = document.querySelector("#start") as HTMLAudioElement;
		el.play();
	},
	fire() {
		const el = document.querySelector("#fire") as HTMLAudioElement;
		el.play();
	},
	blast() {
		const el = document.querySelector("#blast") as HTMLAudioElement;
		el.play();
	},
	end() {
		const el = document.querySelector("#add") as HTMLAudioElement;
		el.play();
	}
}