import collections from './collections.js'

export default {
	config: {
		load_config_file: false,
		display_url: window.location.origin,

		/* publish_mode: 'editorial_workflow', */
		backend: {
			name: 'github',
			repo: 'user-09876/radio',
			branch: 'main',
			auth_scope: 'repo',
			/* open_authoring: true, */
			use_graphql: true
		},

		media_folder: 'media/uploads',
		public_folder: 'media/uploads',

		collections
	}
}
