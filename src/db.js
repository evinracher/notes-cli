import fs from "node:fs/promises";

const DB_PATH = new URL("../db.json", import.meta.url).pathname;

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  const dbToString = JSON.stringify(db, null, 2);
  await fs.writeFile(DB_PATH, dbToString);
};

export const insertDB = async (note) => {
  const db = await getDB();
  const { notes } = db;
  notes.push(note); // This should work as well
  // db.notes.push(note);
  await saveDB(db);
  return note;
};
