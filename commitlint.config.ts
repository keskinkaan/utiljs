import type { UserConfig } from '@commitlint/types';
import fs from 'node:fs';

/**
 * scopePathObj defines which paths will have their subdirectories added to the list of scopes.
 *
 * The top level path (src) is not included.
 *
 * So with the sample directory structure:
 *  .
 * └── src
 *     ├── checker
 *     │   ├── arr
 *     │   │   └── isArr.ts
 *     │   ├── obj
 *     │   │   └── isObj.ts
 *     │   └── undef
 *     ├── guarder
 *     │   ├── str.ts
 *     │   └── num.ts
 *     └── types
 *         └── TApp.ts
 *
 * An object like this:
 *
 * {
 *  src: ['checker', 'guarder', 'types' ....]
 * }
 *
 * The follwing scopes would be added:
 *
 *  [
 *    'checker--arr',
 *     .........
 *  ]
 *
 * The object specifying the scope paths for different categories.
 */
const scopePathObj = {
	src: ['checker', 'enums', 'guarder', 'logger', 'types']
};

/**
 * Top level paths are sorted and appended to the list of paths as-is.
 */
const pathArr = ['husky', 'vscode', 'eslint', 'prettier'];

/**
 * Retrieves an array of subdirectory names within the specified directory.
 */
function getSubDirs(scopeDirPath: string) {
	const fsArr = fs.readdirSync(scopeDirPath, { withFileTypes: true });
	const fsArrFilter = fsArr.filter((dirent) => dirent.isDirectory());
	const fsArrMap = fsArrFilter.map((dirent) => dirent.name);
	return fsArrMap;
}

/**
 * Scans a given folder for immediate subdirectories and returns a list of scope names.
 */
function getSubDirToScopeNames(pathDir: string, scopeDir: string) {
	let scopeArr: Array<string> = [];
	const getScopeArr = getSubDirs(`${pathDir}/${scopeDir}`);

	if (getScopeArr.length === 0) {
		return [];
	}

	getScopeArr.forEach((scope) => {
		scopeArr = [...scopeArr, `${scopeDir}--${scope}`];
		const getSubScopeArr = getSubDirs(`${pathDir}/${scopeDir}/${scope}`);
		if (getSubScopeArr.length > 0) {
			getSubScopeArr.forEach((subScope) => {
				if (subScope.length < 10)
					scopeArr = [...scopeArr, `${scopeDir}--${scope}---${subScope}`];
			});
		}
	});

	return scopeArr;
}

/**
 * Generates a list of scopes for commitlint validation by scanning specified directories.
 */
function getScopes(
	scopePathObj: Record<string, Array<string>>,
	pathArr: Array<string>
) {
	let scopeArr: Array<string> = [];

	if (typeof scopePathObj === 'object') {
		Object.keys(scopePathObj).forEach((pathDir) => {
			const scopeDirs = scopePathObj[pathDir];

			scopeDirs.forEach((scopeDir) => {
				const scopeArrInScopeDir = getSubDirToScopeNames(pathDir, scopeDir);
				if (Array.isArray(scopeArrInScopeDir)) {
					scopeArr = [...scopeArr, ...scopeArrInScopeDir];
				}
			});
			scopeArr = [...scopeArr, pathDir, ...scopeDirs];
		});
	}

	scopeArr = [...scopeArr.sort(), ...pathArr.sort()];

	return scopeArr;
}

/**
 * Retrieves the commit scopes using the provided scopePathObj and pathArr.
 */
const getCommitScopes = () => {
	return getScopes(scopePathObj, pathArr);
};

const config: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: 'conventional-changelog-conventionalcommits',
	rules: {
		'type-enum': () => [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		],
		'type-case': () => [2, 'always', 'lower-case'],
		'type-empty': () => [2, 'never'],
		'type-max-length': () => [2, 'always', 140],
		'scope-enum': () => [2, 'always', getCommitScopes()],
		'scope-case': () => [2, 'always', 'lower-case'],
		'subject-max-length': () => [2, 'always', 140],
		'subject-min-length': () => [2, 'always', 4],
		'subject-empty': () => [2, 'never'],
		'subject-case': () => [2, 'always', 'lower-case'],
		'body-empty': () => [0, 'always'],
		'body-case': () => [2, 'always', 'sentence-case'],
		'body-min-length': () => [0, 'always', 4],
		'body-max-line-length': () => [2, 'always', 140],
		'header-max-length': () => [2, 'always', 140],
		'header-case': () => [2, 'always', 'lower-case'],
		'header-min-length': () => [2, 'always', 4]
	},
	ignores: [(commit: string) => commit === ''],
	defaultIgnores: true,
	// ⭐ Use \u001b[34m "pnpm commit"\u001b[0m for interactive prompt. ⭐
	helpUrl: `

	Commit messages must follow conventional commit format: 
	
	🔗 \u001b[4mhttps://www.conventionalcommits.org/en/v1.0.0/#summary\u001b[0m

	<type>[optional scope]: <subject>

	[optional body]

	[optional footer(s)]

	------------------------------------- 💎 Example ----------------------------------------------
	
  \u001b[32mfix(types): fix type to TUser.ts

	This fixes the wrong type a 'userName'

	BREAKING CHANGE
	Before this fix type wasn't enabled at all, behavior changes from <number> to <string>

	Closes ISU-6186 userName error\u001b[0m

	-----------------------------------------------------------------------------------------------

	⚠️ \u001b[31m To bypass pre-commit hooks run 'git commit --no-verify'\u001b[0m ⚠️
	`,
	prompt: {
		settings: {
			enableMultipleScopes: true,
			scopeEnumSeparator: ','
		},
		messages: {
			skip: ':skip',
			max: 'upper %d chars',
			min: '%d chars at least',
			emptyWarning: 'can not be empty',
			upperLimitWarning: 'over limit',
			lowerLimitWarning: 'below limit'
		},
		questions: {
			type: {
				description: 'Select the type of change that you`re committing',
				enum: {
					build: {
						description:
							'🛠  Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
						title: 'Builds'
					},
					chore: {
						description:
							'♻️  Other changes that don`t modify src or test files',
						title: 'Chores'
					},
					ci: {
						description:
							'⚙️  Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
						title: 'Continuous Integrations'
					},
					docs: {
						description: '📖 Documentation only changes',
						title: 'Documentation'
					},
					feat: {
						description: '✨ A new feature',
						title: 'Features'
					},
					fix: {
						description: '🐛 A bug fix',
						title: 'Bug Fixes'
					},
					perf: {
						description: '🚀 A code change that improves performance',
						title: 'Performance Improvements'
					},
					refactor: {
						description:
							'📦 A code change that neither fixes a bug nor adds a feature',
						title: 'Code Refactoring'
					},
					revert: {
						description: '🗑  Reverts a previous commit',
						title: 'Reverts'
					},
					style: {
						description:
							'💎 Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
						title: 'Styles'
					},
					test: {
						description: '🚨 Adding missing tests or correcting existing tests',
						title: 'Tests'
					}
				}
			},
			scope: {
				description:
					'What is the scope of this change (e.g. template or file name)'
			},
			subject: {
				description: 'Write a short, imperative tense description of the change'
			},
			body: {
				description: 'Provide a longer description of the change'
			},
			isBreaking: {
				description: 'Are there any breaking changes?'
			},
			breakingBody: {
				description:
					'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
			},
			breaking: {
				description: 'Describe the breaking changes'
			},
			isIssueAffected: {
				description: 'Does this change affect any open issues?'
			},
			issuesBody: {
				description:
					'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
			},
			issues: {
				description: 'Add issue references (e.g. "fix #123", "re #123".)'
			}
		}
	}
};

module.exports = config;
