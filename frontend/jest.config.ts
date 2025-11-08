import type { Config } from 'jest';
import { createEsmPreset } from 'jest-preset-angular/presets/index.js';

const esmPreset = createEsmPreset();

export default {
    ...esmPreset,
    moduleNameMapper: {
        ...esmPreset.moduleNameMapper,
        '^rxjs': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
    },
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
        '^.+\\.(ts|js|html|svg)$': [
            'jest-preset-angular',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
                stringifyContentPathRegex: '\\.(html|svg)$',
                useESM: true,
            },
        ],
    },
} satisfies Config;
