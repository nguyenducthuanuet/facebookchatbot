import models from '../models/models';
import lecturers from './data/lecturers.json';
const Lecturer = models.Lecturer;

function seedLecturers(req, res) {
    let promises = lecturers.map(l => Lecturer.create(l));
    Promise.all(promises).then(() => res.send("Done"));
}

function run(req, res) {
    seedLecturers(req, res);
}

export default {
    seedLecturers: seedLecturers,
    run: run
}