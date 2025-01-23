const fs = require('fs');
const path = require('path');

module.exports = {
  plugin(schema, documents, config, info) {
    const outputDir = path.dirname(info.outputFile); // Папка, куда сохраняются файлы
    const files = fs.readdirSync(outputDir); // Читаем файлы в папке

    // Отфильтруем только TypeScript файлы, исключая index.ts
    const tsFiles = files.filter(
      (file) => file.endsWith('.ts') && file !== 'index.ts'
    );

    // Создаем содержимое для index.ts
    const indexContent = tsFiles
      .map((file) => `export * from './${file.replace('.ts', '')}';`)
      .join('\n');

    // Путь к index.ts
    const indexPath = path.join(outputDir, 'index.ts');

    // Пишем содержимое в index.ts
    fs.writeFileSync(indexPath, indexContent, 'utf8');

    console.log(`Index file created at: ${indexPath}`);

    return ''; // Плагин не создает отдельный код, так что возвращаем пустую строку
  },
};


// const path = require('path');
// const fs = require('fs');
//
// module.exports = {
//   plugin(schema, documents, config) {
//     const output = documents.map(doc => {
//       const filename = path.basename(doc.location, '.graphql'); // Получаем имя файла без расширения
//       return `export * from './${filename}.interface';\nexport * from './${filename}.service';`;
//     });
//
//     return output.join('\n');
//   },
// };
