import config from "../config";

export type mapkey = keyof typeof config.images       //这里有点没搞懂，就是把配置文件里面的图片的属性名转化为属性值的类型
export const images = new Map<mapkey, HTMLImageElement>();

export const promises = Object.entries(config.images).map(([key, value]) => {
	return new Promise(resolve => {
		const img = document.createElement("img");
		img.src = value;
		img.onload = () => {
			images.set(key as mapkey, img);
			resolve(img);
		}
	}) as Promise<HTMLImageElement>
})