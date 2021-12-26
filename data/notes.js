import {Note} from '../classes';
import {noteCategories} from '../constants';

export default [
    new Note(
        'Shopping list',
        '',
        noteCategories.TASK,
        ''
    ),

    new Note(
        'The theory of evolution',
        '',
        noteCategories.RANDOM_THOUGHT,
        'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021'
    ),

    new Note(
        'New future',
        '',
        noteCategories.IDEA,
        ''
    ),

    new Note(
        'William Gaddis',
        '',
        noteCategories.TASK,
        ''
    ),

    new Note(
        'Books',
        '',
        noteCategories.TASK,
        '',
        1
    ),

    new Note(
        'Some idea',
        '',
        noteCategories.IDEA,
        ''
    ),

    new Note(
        'New project',
        '',
        noteCategories.RANDOM_THOUGHT,
        '',
        1
    ),
];
