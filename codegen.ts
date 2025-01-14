import type { CodegenConfig } from '@graphql-codegen/cli';

const basePath = 'src/app/components/works/';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3280/graphql",
  documents: `${basePath}**/*.graphql`,
  ignoreNoDocuments: true,
  generates: {
    // Общие типы
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
      ]
    },
    // Интерфейсы
    [`${basePath}*.interface.ts`]: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.interface.ts',
        baseTypesPath: '../../../../generated/graphql.ts',
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
    [`${basePath}*.service.ts`]: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.service.ts',
        baseTypesPath: '../../../../generated/graphql.ts',
      },
      plugins: [
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
