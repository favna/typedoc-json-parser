import type { ProjectParser } from '../ProjectParser';
import { TypeParser } from './TypeParser';

/**
 * Parses data for a template literal type.
 * @since 1.0.0
 */
export class TemplateLiteralTypeParser implements TypeParser {
  /**
   * The project parser this parser belongs to.
   * @since 5.0.0
   */
  public readonly project: ProjectParser;

  /**
   * The kind of type this parser is for.
   * @since 1.0.0
   */
  public readonly kind = TypeParser.Kind.TemplateLiteral;

  /**
   * The head of this template literal type.
   * @since 1.0.0
   */
  public readonly head: string;

  /**
   * The tail of this template literal type.
   * @since 1.0.0
   */
  public readonly tail: TemplateLiteralTypeParser.Tail[];

  public constructor(data: TemplateLiteralTypeParser.Data, project: ProjectParser) {
    const { head, tail } = data;

    this.head = head;
    this.tail = tail;

    this.project = project;
  }

  /**
   * Converts this parser to a JSON compatible format.
   * @since 1.0.0
   * @returns The JSON compatible format of this parser.
   */
  public toJSON(): TemplateLiteralTypeParser.JSON {
    return {
      kind: this.kind,
      head: this.head,
      tail: this.tail.map((tail) => ({ type: tail.type.toJSON(), text: tail.text }))
    };
  }

  /**
   * Converts this parser to a string.
   * @since 1.0.0
   * @returns The string representation of this parser.
   */
  public toString(): string {
    return TemplateLiteralTypeParser.formatToString(this);
  }

  /**
   * Formats this type parser to a string.
   * @since 4.0.0
   * @param parser The parser to format.
   * @returns The string representation of this parser.
   */
  public static formatToString(parser: TemplateLiteralTypeParser): string {
    return `\`${parser.head}${parser.tail.map((tail) => `\${${tail.type.toString()}}${tail.text}`).join('')}\``;
  }
}

export namespace TemplateLiteralTypeParser {
  export interface Data {
    /**
     * The head of this template literal type.
     * @since 5.0.0
     */
    head: string;

    /**
     * The tail of this template literal type.
     * @since 5.0.0
     */
    tail: Tail[];
  }

  export interface JSON extends TypeParser.JSON {
    kind: TypeParser.Kind.TemplateLiteral;

    /**
     * The head of this template literal type.
     * @since 1.0.0
     */
    head: string;

    /**
     * The tail of this template literal type.
     * @since 1.0.0
     */
    tail: Tail.JSON[];
  }

  export interface Tail {
    /**
     * The type of this template literal tail type.
     * @since 1.0.0
     */
    type: TypeParser;

    /**
     * The text of this template literal tail type.
     * @since 1.0.0
     */
    text: string;
  }

  export namespace Tail {
    export interface JSON {
      /**
       * The type of this template literal tail type in a JSON compatible format.
       * @since 1.0.0
       */
      type: TypeParser.JSON;

      /**
       * The text of this template literal tail type.
       * @since 1.0.0
       */
      text: string;
    }
  }
}
