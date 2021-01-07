module.exports = {
    client: {
        addTypename: true,
        includes: ["src/**/*.ts", "src/**/*.tsx"],
        name: 'admin-ui',
        service: {
            localSchemaFile: "schema.graphql",
            name: "boilerplate"
        }
    }
}