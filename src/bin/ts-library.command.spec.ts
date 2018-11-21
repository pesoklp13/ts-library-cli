import SpyInstance = jest.SpyInstance;
import chalk from 'chalk';
import {COMMAND_NAME, IPackageJson, LIBRARY_DIRECTORY, TsLibraryCommand} from './ts-library.command';

describe('TsLibraryCommand', () => {

    const consoleLogSpy: SpyInstance = jest.spyOn(console, 'log');
    const consoleErrorSpy: SpyInstance = jest.spyOn(console, 'error');
    const packageJson: IPackageJson = {version: '1.0.0'};
    const ERROR: number = 1;
    const SUCCESS: number = 0;

    let command: TsLibraryCommand;

    beforeEach(() => {
        command = new TsLibraryCommand(packageJson);
        consoleLogSpy.mockClear();
    });

    test('command should contain libraryName', () => {
        expect(command.execute()).toEqual(ERROR);

        const helpStatement: string = `${COMMAND_NAME} --help`;
        expect(consoleLogSpy.mock.calls).toEqual([
            [`${chalk.cyan(COMMAND_NAME)} ${chalk.blue(LIBRARY_DIRECTORY)}`],
            [`Run ${chalk.cyan(helpStatement)} to see all options.`]
        ]);
        expect(consoleErrorSpy.mock.calls).toEqual([
            ['Please specify the name of library you want to create:']
        ]);
    });

    test('command should display help info', () => {
        process.argv.push('--help');

        expect(command.execute()).toEqual(SUCCESS);

        expect(consoleLogSpy.mock.calls).toEqual([
            [`Specify ${chalk.blue(LIBRARY_DIRECTORY)} to create your own typescript library`]
        ]);
    });
});
