import chalk from 'chalk';
import {Command} from 'commander';

export const COMMAND_NAME: string = 'create-ts-library';
export const LIBRARY_DIRECTORY: string = '<library-directory>';
const INNER_EXCEPTION: string = 'Disabled process.exit';

export interface IPackageJson {
    version: string;
}

export class TsLibraryCommand {

    private libraryName: string = '';
    private pkg: IPackageJson;

    constructor(pkg: IPackageJson) {
        this.pkg = pkg;
    }

    private static printHelp(): void {
        TsLibraryCommand.log(`Specify ${chalk.blue(LIBRARY_DIRECTORY)} to create your own typescript library`);
        throw new Error(INNER_EXCEPTION);
    }

    private static log(input: string): void {
        console.log(input); // tslint:disable-line no-console
    }

    public execute(): number {
        let program: Command;
        try {
           program = this.createProgram();
        } catch (error) {
            if (error.message && error.message === INNER_EXCEPTION) {
                return 0;
            }

            throw error;
        }

        if (!this.libraryName) {
            console.error('Please specify the name of library you want to create:');
            TsLibraryCommand.log(`${chalk.cyan(program.name())} ${chalk.blue(LIBRARY_DIRECTORY)}`);
            const helpStatement: string = `${program.name()} --help`;
            TsLibraryCommand.log(`Run ${chalk.cyan(helpStatement)} to see all options.`);

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
