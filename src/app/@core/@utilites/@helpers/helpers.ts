export class Helpers {
  public static stringToArray(str: string): string[] {
    return str.replace(/(\r\n|\n|\r)/gm, '').split(',');
  }
}
