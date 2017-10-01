import mongoose from '../database/db';

const lecturerSchema = mongoose.Schema({
    name: String,
    slug: String,
    academic_title: String,
    departments: [mongoose.Schema({
        position: String,
        department: String
    })],
    contacts: [mongoose.Schema({
        type: String,
        info: String,
        description: String
    })]
});
const Lecturer = mongoose.model('Lecturer', lecturerSchema);

Lecturer.prototype.toQuickreply = function() {
    return {
        content_type: 'text',
        title: this.name,
        payload: `LECTURER_${this.slug}`
    }
};

Lecturer.prototype.getNameWTitle = function() {
    return `${this.academic_title || ''} ${this.name}`.trim();
};

Lecturer.prototype.toDetailMessage = function() {
    let works = this.departments.map(d => `- ${d.position || 'Làm việc'} tại ${d.department}`).join('\n');
    let contacts = this.contacts.sort((a, b) => {
        if (a.type < b.type) return -1;
        else if (a.type > b.type) return 1;
        else return 0;
    }).map(c => {
        let description = c.description ? `(${c.description})`: '';
        return `- ${c.type} ${description}: ${c.info}`;
    }).join("\n");
    return `${this.getNameWTitle()}

Nơi công tác:
${works}

Liên hệ:
${contacts}`
};

export default {
    schema: lecturerSchema,
    model: Lecturer
};