export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'hotfix',
				'feat',
				'fix',
				'chore',
				'style',
				'refactor',
				'doc',
				'wip',
				'test',
				'revert',
			],
		],
		'subject-case': [2, 'always', 'lower-case'],
	},
	ignores: [(message) => message.includes('chore(release):')],
}
