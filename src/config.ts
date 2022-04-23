import StrawUrl from "./static/images/straw/straw.png"
import WallUrl from "./static/images/wall/wall.gif"
import WaterUrl from "./static/images/water/water.gif"
import BrickWall from "./static/images/wall/steels.gif"
import TankTop from "./static/images/tank/top.gif"
import TankBottom from "./static/images/tank/bottom.gif"
import TankLeft from "./static/images/tank/left.gif"
import TankRight from "./static/images/tank/right.gif"
import bulletUrl from "./static/images/bullet/bullet.jpg"
import bossUrl from "./static/images/boss/boss.png"
import PlayerTop from "./static/images/player/top.gif"
import PlayerBottom from "./static/images/player/bottom.gif"
import PlayerLeft from "./static/images/player/left.gif"
import PlayerRight from "./static/images/player/right.gif"


// import Url from "./static/images/straw/straw.png"
// import StrawUrl from "./static/images/straw/straw.png"

export default {
	canvas: {
		width: 900,
		height: 600,
	},
	images: {
		straw: StrawUrl,
		wall: WallUrl,
		water: WaterUrl,
		brickWall: BrickWall,
		tankTop: TankTop,
		tankBottom: TankBottom,
		tankLeft: TankLeft,
		tankRight: TankRight,
		playerTop: PlayerTop,
		playerBottom: PlayerBottom,
		playerLeft: PlayerLeft,
		playerRight: PlayerRight,
		bullet: bulletUrl,
		boss: bossUrl
	},
	model: {
		width: 30,
		height: 30
	},
	straw: {
		number: 200,
	},
	wall: {
		number: 50,
	},
	water: {
		number: 50,
	},
	brickWall: {
		number: 20,
	},
	tank: {
		number: 20,
		speed: 40
	},
	bullet: {
		speed: 20
	}
}