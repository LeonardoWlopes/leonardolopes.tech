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
				'revert',
				'test',
			],
		],
		'subject-case': [2, 'always', 'lower-case'],
	},
}
