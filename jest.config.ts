import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: ['json', 'text', 'lcov', 'clover'],
	moduleFileExtensions: ['js', 'ts', 'json'],
	setupFilesAfterEnv: ['jest-extended/all'],
	reporters: ['default'],
	// testRegex: '/src/.*\\.(test|spec).(ts|tsx)$',
	// testPathIgnorePatterns: ['/node_modules/', '/packages/*/dist/'],
	transform: {
		'^.+\\.ts?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.json',
				isolatedModules: true,
				diagnostics: true
			}
		]
	},
	preset: 'ts-jest',
	testEnvironment: 'JSDom',
	roots: ['<rootDir>']
};

export default config;
