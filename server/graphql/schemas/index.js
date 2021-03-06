const clientSchema = require('./Client.schema');
const userSchema = require('./User.schema');
const observationSchema = require('./Observation.schema');
const observationFileSchema = require('./ObservationFile.schema');

const typeDefs = `
    directive @date(
        defaultFormat: String = "dd/mm/yyyy"
    ) on FIELD_DEFINITION

    scalar Date
    
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${clientSchema}
    ${userSchema}
    ${observationSchema}
    ${observationFileSchema}
`;

module.exports = typeDefs;