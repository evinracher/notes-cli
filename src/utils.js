export const listNotes = (notes) => {
  notes.forEach(note => {
    console.log('\n')
    console.log('id: ', note.id)
    console.log('tags: ', note.tags),
    console.log('note: ', note.content)
  })
  console.log('\n');
}