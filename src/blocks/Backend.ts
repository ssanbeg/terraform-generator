import { Block, Argument, Attribute } from '..';

export class Backend extends Block {

  readonly type: string;

  /**
   * Construct backend.
   * Refer to Terraform documentation on what can be put as type & arguments.
   *
   * @param type type
   * @param args arguments
   */
  constructor(type: string, args?: Record<string, any>) {
    super('backend', [type], args);

    this.type = type;
  }

  asArgument(): Argument {
    return new Argument(JSON.stringify(this.type));
  }

  attr(_name: string): Attribute {
    throw new Error('Inaccessible function.');
  }

}
