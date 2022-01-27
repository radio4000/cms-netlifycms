import {Router} from '@vaadin/router'

import PageHome from './pages/home.js'
import PageCms from './pages/cms.js'

customElements.define('page-home', PageHome)
customElements.define('page-cms', PageCms)

export default class AppRouter extends HTMLElement {
	connectedCallback() {
		this.routes = [
			{path: '/', component: 'page-home'},
			{path: '/cms', component: 'page-cms'},
		]
		this.router = new Router(this)
		this.router.setRoutes(this.routes)
	}
}
