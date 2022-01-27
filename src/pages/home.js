export default class PageHome extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		const $player = document.createElement('radio4000-player')
		this.append($player)
		window.customElements.whenDefined('radio4000-player').then(() => {
			this.handlePlayerLoaded()
		})
	}
	async handlePlayerLoaded() {
		this.player = this.querySelector('radio4000-player').getVueInstance()
		console.log(this.player)
		this.channel = {}
		this.tracks = []
		this.loadPlaylist()
	}
	loadPlaylist = () => {
		const playlist = {
			title: this.channel.title,
			image: this.channel.image,
			tracks: this.tracks,
		}
		this.player.updatePlaylist(playlist)
	}
}
