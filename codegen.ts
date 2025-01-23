import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3280/graphql',
  documents: './src/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    // Base TypeScript types
    'src/generated/graphql.ts': {
      plugins: ["typescript", "typescript-operations", "typed-document-node"]
    },
    // Interfaces
    './src': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.interface.ts',
        baseTypesPath: 'generated/graphql',
      },
      plugins: ["typescript-operations"],
    },
    // Services
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.service.ts',
        baseTypesPath: 'generated/graphql',
      },
      plugins: ["typescript-apollo-angular"],
      config: {
        importOperationTypesFrom: 'Types',
      }
    },
    // Custom plugin
    './src/**': {
      plugins:  ['./src/codegen-plugins/my-plugin.js'],
    }
  },
};

export default config;
