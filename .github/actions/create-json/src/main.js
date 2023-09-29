const core = require('@actions/core');

const fields = core.getInput('fields');

console.log(fields);