import title from '../fields/tracks/title.js'
import slug from '../fields/tracks/slug.js'
import description from '../fields/tracks/description.js'
import tags from '../fields/tracks/tags.js'
import youtubeUrl from '../fields/tracks/youtubeUrl.js'
import discogsUrl from '../fields/tracks/discogsUrl.js'
import createdAt from '../fields/tracks/createdAt.js'

const tracks	 = {
	name: 'tracks',
	label: 'Tracks',
	label_singular: 'Track',
	folder: 'tracks',
	media_folder: '',
	path: '{{slug}}/index',
	create: true,
	slug: '{{title}}',
	editor: {
		preview: false
	},

	/* filtering */
  sortable_fields: ['title', 'slug', 'created_at', 'updated_at', 'tags'],

	/* fields */
	fields: [
		createdAt,
		slug,
		title,
		description,
		tags,
		youtubeUrl,
		discogsUrl,
	]
}

export default tracks
