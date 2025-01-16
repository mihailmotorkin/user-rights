import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3280/graphql",
  documents: './src/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    // Общие типы
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
      ]
    },
    // Интерфейсы
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.interface.ts',
        baseTypesPath: 'generated/graphql',
      },
      plugins: [
        "typescript-operations",
      ],
      config: {
        dedupeOperationSuffix: true,
        skipTypename: false,
        namingConvention: {
          enumValues: 'keep',
        },
      },
    },
    // Сервисы
    './src': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.service.ts',
        baseTypesPath: 'generated/graphql',
      },
      plugins: [
        "typescript-operations",
        "typescript-apollo-angular",
      ],
      config: {
        dedupeOperationSuffix: true,
        namingConvention: {
          enumValues: 'keep',
        },
      },
    },
  },
};

export default config;
