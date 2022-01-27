export default class PageHome extends HTMLElement {
	connectedCallback() {
		this.render()
	}
	render = () => {
		const $player = document.createElement('radio4000-player')
		this.append($player)
	}
}
