import {Command} from 'commander';
import chalk from "chalk";

const COMMAND_NAME = 'create-ts-library';

export class TsLibraryCommand {

    private libraryName: string = '';

    constructor(private pkg: any){

    }

    public execute(): number {
        const program = this.createProgram();

        console.log(this.libraryName);

        if(!this.libraryName) {
            console.error('Please specify the name of library you want to create:');
            console.log(`${chalk.cyan(program.name())} ${chalk.blue('<library-directory>')}`);
            console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
            return 1;
        }

        return 0;
    }

    private createProgram(): Command {
        return new Command(COMMAND_NAME)
            .version(this.pkg.version)
            .arguments('<library-directory>')
            .action(value => {
                this.libraryName = value;
            })
            .usage(`${chalk.green('<library-directory>')} [options]`)
            .option('--test', 'test option')
            .allowUnknownOption()
            .on('--help', TsLibraryCommand.printHelp)
            .parse(process.argv);
    }

    private static printHelp(){
        console.log('help');
    }
}

/*
export class TsLibraryCommand {

    private libraryName: string = '';

    public static main(): number {
        const command = new TsLibraryCommand();

        const program = new Command(COMMAND_NAME)
            .version(pkg.version)
            .arguments('<library-directory>')
            .action(command.setLibraryName)
            .usage(`${chalk.green('<library-directory>')} [options]`)
            .option('--test', 'test option')
            .allowUnknownOption()
            .on('--help', TsLibraryCommand.printHelp)
            .parse(process.argv);

        if(!command.getLibraryName()) {
            console.error('Please specify the name of library you want to create:');
            console.log(`${chalk.cyan(program.name())} ${chalk.blue('<library-directory>')}`);
            console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
            return 1;
        }

        return 0;
    }

    private static printHelp(){
        console.log('help');
    }

    public setLibraryName(libraryName: string) {
        this.libraryName = libraryName;
    }

    public getLibraryName(): string {
        return this.libraryName;
    }

}

TsLibraryCommand.main();*/
