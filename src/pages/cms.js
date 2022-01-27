import CMS from 'netlify-cms-app'
import options from '../cms/options.js'

export default class PageHome extends HTMLElement {
	connectedCallback() {
		/* initialize cms with our configuration options */
		window.initCMS(options)
		console.log('init cms', options)
	}
}
