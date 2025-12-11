import fs from "node:fs/promises";

const writeFile = async () => {
    const newFilePath = new URL("demo.js", import.meta.url).pathname;
    await fs.writeFile(newFilePath, `console.log("Running from file...")`);
}

writeFile();