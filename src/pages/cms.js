export default class PageHome extends HTMLElement {
	connectedCallback() {
		this.createRootElement()
		import('../cms/index.js').then(({
			CMS,
			options
		}) => {
			CMS.init(options)
		})
	}
	/* https://www.netlifycms.org/docs/beta-features/#custom-mount-element */
	createRootElement() {
		const $root = document.createElement('div')
		$root.id = 'nc-root'
		this.append($root)
	}
}
