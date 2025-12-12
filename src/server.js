import fs from "node:fs/promises";
import http from "node:http";
import open from "open";

/**
 * Interpolates an HTML template with the provided data.
 * Placeholders in the form {{ key }} are replaced with values from `data`.
 *
 * @param {string} html - HTML template string containing {{ placeholders }}.
 * @param {object} data - Key-value map used to replace placeholders.
 * @returns {string} HTML with placeholders replaced by data values
 */
const interpolate = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
    return data[placeholder] || "";
  });
};

const formatNotes = (notes) => {
  return notes
    .map((note) => {
      return `
      <div class="note">
        <p>${note.content}</p>
        <div class="tags">
          ${note.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    `;
    })
    .join("\n");
};

const createServer = (notes) => {
  const createdServer = http.createServer(async (_, response) => {
    const HTML_PATH = new URL("./template.html", import.meta.url).pathname;
    const template = await fs.readFile(HTML_PATH, "utf-8");

    const formattedNotes = formatNotes(notes);

    const page = interpolate(template, { notes: formattedNotes });

    response.writeHead(200, { "content-type": "text/html" });
    response.end(page);
  });

  return createdServer;
};

export const start = (notes, port) => {
  const server = createServer(notes);
  server.listen(port, () => {
    console.log("Listening on port ", port);
  });
  open(`http://localhost:${port}`);
};
