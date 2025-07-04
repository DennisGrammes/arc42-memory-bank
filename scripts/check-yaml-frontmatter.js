import fs from "fs";
import { glob } from "glob";
import yaml from "js-yaml";

async function main() {
  let hasError = false;
  const files = await glob("**/*.md", { ignore: ["node_modules/**"] });
  for (const file of files) {
    const text = await fs.promises.readFile(file, "utf8");
    if (text.startsWith("---")) {
      const end = text.indexOf("---", 3);
      if (end !== -1) {
        const yamlContent = text.slice(3, end);
        try {
          yaml.load(yamlContent);
        } catch (e) {
          console.error(`YAML front matter error in ${file}: ${e.message}`);
          hasError = true;
        }
      }
    }
  }
  if (hasError) process.exit(1);
}

await main();
