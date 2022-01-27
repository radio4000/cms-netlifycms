import patternPath from '../utils/pattern-path.js'

export default {
	label: 'Slug',
	name: 'slug',
	widget: 'string',
	required: false,
	hint: 'The Slug is the text used to create the URL of this track: https://example.com/<channel_slug>/<track_slug>',
	pattern: patternPath
}
