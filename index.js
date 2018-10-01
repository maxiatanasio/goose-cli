#!/usr/bin/env node

const program = require('commander');

const {create} = require('./actions/project');

program
    .version('0.0.1')
    .description('goose cli project administrator');

program
    .command('new <projectName>')
    .alias('n')
    .description('Create a new project')
    .action(create);

program.parse(process.argv);