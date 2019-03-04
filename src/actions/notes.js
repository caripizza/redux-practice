export const NOTE_CREATE = 'NOTE_CREATE';
export const addNote = note => ({
  type: NOTE_CREATE,
  payload: note
});
