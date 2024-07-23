import { readdir, stat, readFile, writeFile } from "fs/promises";
import path from "path";

const dirInput = "input";
const dirOutput = "ouput";

async function readDirectory(directory) {
  try {
    const files = await readdir(directory);
    return files; //.slice(2); // Equivalente a array_slice($folders, 2) en PHP
  } catch (error) {
    console.error(`Error al leer el directorio ${directory}:`, error);
    return [];
  }
}

async function readFileContent(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    console.error(`Error al leer el archivo ${filePath}:`, error);
    return "";
  }
}

async function main() {
  let print = await readFileContent(dirOutput);

  while (true) {
    const bundle = [];
    const folders = await readDirectory(dirInput);

    for (const folder of folders) {
      const folderPath = path.join(dirInput, folder);
      const folderStats = await stat(folderPath);

      if (folderStats.isDirectory()) {
        const files = await readDirectory(folderPath);

        for (const file of files) {
          const filePath = path.join(folderPath, file);
          const fileStats = await stat(filePath);

          if (fileStats.isFile()) {
            bundle.push(
              `\n/* ----- ${folder.toUpperCase()} -- ${file.toUpperCase()} ----- */\n`
            );
            const fileContent = await readFileContent(filePath);
            bundle.push(fileContent.trim());
          }
        }
      }
    }

    const bundleContent = bundle.join("\n");
    if (print !== bundleContent) {
      console.log("actualizado", Date.now());
      print = bundleContent;
      await writeFile(dirOutput, bundleContent);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Equivalente a sleep(1) en PHP
    }
  }
}

main().catch(console.error);
