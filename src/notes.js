import { getDB, saveDB, insertDB } from "./db.js";

export const newNote = async (note, tags = []) => {
  const id = Date.now();
  const newNote = {
    id,
    content: note,
    tags,
  };
  return await insertDB(newNote);
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

export const findNotes = async (query) => {
  const { notes } = await getDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(query.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const notes = await getAllNotes();
  const match = notes.find((note) => note.id === id);

  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = async () => {
  const db = await getDB();
  await saveDB({ ...db, notes: [] });
};