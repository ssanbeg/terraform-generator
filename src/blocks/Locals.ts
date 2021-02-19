import { Block, Argument, Attribute } from '..';

export class Locals extends Block {

  /**
   * Construct locals.
   * Refer to Terraform documentation on what can be put as arguments.
   *
   * @param args arguments
   */
  constructor(args?: Record<string, any>) {
    super('locals', [], args);
  }

  asArgument(): Argument {
    throw new Error('Inaccessible function.');
  }

  attr(_name: string): Attribute {
    throw new Error('Inaccessible function.');
  }

  arg(name: string): Argument {
    return new Argument(`local.${name}`);
  }

}
