#!/usr/bin/env node

//require('../dist/lib/src/bin/ts-library.command');

const command = require('../dist/lib/bin/ts-library.command');
const pkg = require('../package');

cmd = new command.TsLibraryCommand(pkg);
cmd.execute();