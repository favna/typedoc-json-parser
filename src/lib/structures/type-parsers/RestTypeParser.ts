import type { ProjectParser } from '../ProjectParser';
import { TypeParser } from './TypeParser';

/**
 * Parses data for a rest type.
 * @since 1.0.0
 */
export class RestTypeParser implements TypeParser {
  /**
   * The project parser this parser belongs to.
   * @since 5.0.0
   */
  public readonly project: ProjectParser;

  /**
   * The kind of type this parser is for.
   * @since 1.0.0
   */
  public readonly kind = TypeParser.Kind.Rest;

  /**
   * The type of this rest type.
   * @since 1.0.0
   */
  public readonly type: TypeParser;

  public constructor(data: RestTypeParser.Data, project: ProjectParser) {
    const { type } = data;

    this.type = type;

    this.project = project;
  }

  /**
   * Converts this parser to a JSON compatible format.
   * @since 1.0.0
   * @returns The JSON compatible format of this parser.
   */
  public toJSON(): RestTypeParser.JSON {
    return {
      kind: this.kind,
      type: this.type.toJSON()
    };
  }

  /**
   * Converts this parser to a string.
   * @since 1.0.0
   * @returns The string representation of this parser.
   */
  public toString(): string {
    return RestTypeParser.formatToString(this);
  }

  /**
   * Formats this type parser to a string.
   * @since 4.0.0
   * @param parser The parser to format.
   * @returns The string representation of this parser.
   */
  public static formatToString(parser: RestTypeParser): string {
    return `...${TypeParser.wrap(parser.type, TypeParser.BindingPowers[TypeParser.Kind.Rest])}`;
  }
}

export namespace RestTypeParser {
  export interface Data {
    /**
     * The type of this rest type.
     * @since 5.0.0
     */
    type: TypeParser;
  }

  export interface JSON extends TypeParser.JSON {
    kind: TypeParser.Kind.Rest;

    /**
     * The type of this rest type in a JSON compatible format.
     * @since 1.0.0
     */
    type: TypeParser.JSON;
  }
}
