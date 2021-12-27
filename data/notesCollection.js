import {DataStorage} from '../classes';
import startDataNotes from './startDataNotes.js';

const notesCollection = new DataStorage(startDataNotes);

export default notesCollection;
