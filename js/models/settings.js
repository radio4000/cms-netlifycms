import createdAt from '../fields/channel/createdAt.js'
import description from '../fields/channel/description.js'
import map from '../fields/channel/map.js'
import tags from '../fields/channel/tags.js'
import title from '../fields/channel/title.js'

const settings = {
	label: 'Settings',
	name: 'settings',
	files: [
		{
			label: 'Channel',
			name: 'channel',
			file: 'settings/channel.md',
			slug: '{{title}}',
			editor: {
				preview: false
			},

			/* fields */
			fields: [
				createdAt,
				title,
				description,
				tags,
				map,
			]
		}
	]
}

export default settings
