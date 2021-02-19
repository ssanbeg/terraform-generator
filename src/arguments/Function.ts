import { Argument } from '..';
import { Util } from '../Util';

export class Function extends Argument {

  /**
   * Construct function argument.
   *
   * @param name function name
   * @param args function arguments
   */
  constructor(name: string, ...args: any[]) {
    super(Function.constructArgument(name, ...args));
  }

  private static constructArgument(fn: string, ...args: any[]): string {
    if (!fn || !fn.trim()) {
      throw new Error('Function name cannot be empty.');
    }
    if (args.filter(arg => arg == null).length > 0) {
      throw new Error(`Invalid function argument: ${args}`);
    }

    let str = `${fn}(`;
    args.forEach((arg, i) => {
      str += Util.argumentValueToString(arg);
      if (i < args.length - 1) {
        str += ', ';
      }
    });
    str += ')';
    return str;
  }

}

/**
 * Convenient function to construct new function.
 *
 * @param name function name
 * @param args function arguments
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const fn = (name: string, ...args: any[]): Function => new Function(name, ...args);
