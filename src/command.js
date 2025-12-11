import { hideBin } from "yargs/helpers";
import yargs from "yargs";
import {newNote, getAllNotes, findNotes, removeNote, removeAllNotes} from "./notes.js";
import { listNotes } from "./utils.js";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "create a new note",
    (yargs) => {
      return yargs.positional("note", {
        describe: "The content of the note you want to create",
        type: "string",
      });
    },
    async (argv) => {
      const tags = argv.tags ? argv.tags.split(',') : []
      const note = await newNote(argv.note, tags);
      console.log("New note added. ID: ", note.id);
    }
  )
  .option("tags", {
    alias: "t",
    type: "string",
    description: "tags to add to the note",
  })
  .command(
    "all",
    "get all notes",
    () => {},
    async (_) => {
      const notes = await getAllNotes();
      listNotes(notes)
    }
  )
  .command(
    "find <query>",
    "get matching notes",
    (yargs) => {
      return yargs.positional("query", {
        describe:
          "The search term to filter notes by, will be applied to note.content",
        type: "string",
      });
    },
    async (argv) => {
      const matches = await findNotes(argv.query);
      listNotes(matches);
    }
  )
  .command(
    "remove <id>",
    "remove a note by id",
    (yargs) => {
      return yargs.positional("id", {
        type: "number",
        description: "The id of the note you want to remove",
      });
    },
    async (argv) => {
      const id = await removeNote(argv.id);
      console.log(id);
    }
  )
  .command(
    "web [port]",
    "launch website to see notes",
    (yargs) => {
      return yargs.positional("port", {
        describe: "port to bind on",
        default: 5000,
        type: "number",
      });
    },
    async (argv) => {}
  )
  .command(
    "clean",
    "remove all notes",
    () => {},
    async (argv) => {
      await removeAllNotes();
      console.log("All notes have been removed!");
    }
  )
  .demandCommand(1)
  .parse();
