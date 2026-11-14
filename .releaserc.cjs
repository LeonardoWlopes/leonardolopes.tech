module.exports = {
	branches: ['master'],
	// Tags carry the "v" prefix (v1.8.0 and earlier); changing it would make
	// semantic-release miss the last release and start over at 1.0.0.
	tagFormat: 'v${version}',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
		['@semantic-release/npm', { npmPublish: false }],
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'CHANGELOG.md'],
				message:
					'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
			},
		],
		[
			'@semantic-release/github',
			{ successComment: false, failComment: false },
		],
	],
}
