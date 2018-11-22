export interface INodeExecutor {
    execute(): void;
}

export abstract class NodeExecutor implements INodeExecutor {

    private readonly command: string;
    private arguments: string[] = [];

    protected constructor(command: string) {
        this.command = command;
    }

    public execute() : void {
        this.executeInternally(this.command, this.arguments);
    }

    protected executeInternally(cmd: string, args: string[]): void {

        return;
    }

    public withArguments(args: string[]): INodeExecutor {
        this.arguments = args;

        return this;
    }

}

export class NPMExecutor extends NodeExecutor {

    private static NPM: string = 'npm';

    constructor() {
        super(NPMExecutor.NPM);
    }

    protected executeInternally(cmd: string, args: string[]): void {
        super.executeInternally(cmd, args);
    }
}

export class YarnExecutor extends NodeExecutor {

    private static YARN: string = 'yarn';

    constructor() {
        super(YarnExecutor.YARN);
    }

    protected executeInternally(cmd: string, args: string[]): void {
        super.executeInternally(cmd, args);
    }
}
