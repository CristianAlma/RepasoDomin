const { Model } = require('objection');

class Region extends Model {
    static get tableName() {
        return 'regiones';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'apellido', 'cargo', 'correo', 'direccion'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength: 1 },
                cargo: { type: 'string', minLength: 1 },
                correo: { type: 'string', minLength: 1 },
                direccion: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                age: { type: 'integer' }
            }
        };
    }

    static async getRegiones() {
        return await Region.query();
    }

    static async insert(data) {
        return await Region.query().insert(data);
    }

    static async update(data, id) {
        return await Region.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Region.query().deleteById(id);
    }
}

module.exports = Region;
