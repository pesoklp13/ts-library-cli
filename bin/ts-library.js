#!/usr/bin/env node

const command = require('../dist/lib/bin/ts-library.command');
const pkg = require('../package');

cmd = new command.TsLibraryCommand(pkg);
cmd.execute();