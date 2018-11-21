import chalk from 'chalk';
import {Command} from 'commander';

const COMMAND_NAME: string = 'create-ts-library';
const LIBRARY_DIRECTORY: string = '<library-directory>';

interface IPackageJson {
    version: string;
}

export class TsLibraryCommand {

    private libraryName: string = '';
    private pkg: IPackageJson;

    constructor(pkg: IPackageJson) {
        this.pkg = pkg;
    }

    private static printHelp(): void {
        console.log('help'); // tslint:disable-line no-console
    }

    public execute(): number {
        const program: Command = this.createProgram();

        if (!this.libraryName) {
            console.error('Please specify the name of library you want to create:');
            console.log(`${chalk.cyan(program.name())} ${chalk.blue(LIBRARY_DIRECTORY)}`); // tslint:disable-line no-console
            const helpStatement: string = `${program.name()} --help`;
            console.log(`Run ${chalk.cyan(helpStatement)} to see all options.`); // tslint:disable-line no-console

            return 1;
        }

        return 0;
    }

    private createProgram(): Command {
        return new Command(COMMAND_NAME)
            .version(this.pkg.version)
            .arguments(LIBRARY_DIRECTORY)
            .action((value: string) => {
                this.libraryName = value;
            })
            .usage(`${chalk.green(LIBRARY_DIRECTORY)} [options]`)
            .option('--test', 'test option')
            .allowUnknownOption()
            .on('--help', TsLibraryCommand.printHelp)
            .parse(process.argv);
    }
}
