import type { ProjectParser } from '../ProjectParser';
import type { ReferenceTypeParser } from './ReferenceTypeParser';
import { TypeParser } from './TypeParser';

/**
 * Parses data for a query type.
 * @since 1.0.0
 */
export class QueryTypeParser implements TypeParser {
  /**
   * The project parser this parser belongs to.
   * @since 5.0.0
   */
  public readonly project: ProjectParser;

  /**
   * The kind of type this parser is for.
   * @since 1.0.0
   */
  public readonly kind = TypeParser.Kind.Query;

  /**
   * The query of this query type.
   * @since 1.0.0
   */
  public readonly query: ReferenceTypeParser;

  public constructor(data: QueryTypeParser.Data, project: ProjectParser) {
    const { query } = data;

    this.query = query;

    this.project = project;
  }

  /**
   * Converts this parser to a JSON compatible format.
   * @since 1.0.0
   * @returns The JSON compatible format of this parser.
   */
  public toJSON(): QueryTypeParser.JSON {
    return {
      kind: this.kind,
      query: this.query.toJSON()
    };
  }

  /**
   * Converts this parser to a string.
   * @since 1.0.0
   * @returns The string representation of this parser.
   */
  public toString(): string {
    return QueryTypeParser.formatToString(this);
  }

  /**
   * Formats this type parser to a string.
   * @since 4.0.0
   * @param parser The parser to format.
   * @returns The string representation of this parser.
   */
  public static formatToString(parser: QueryTypeParser): string {
    return `typeof ${parser.query.toString()}`;
  }
}

export namespace QueryTypeParser {
  export interface Data {
    /**
     * The query of this query type.
     * @since 5.0.0
     */
    query: ReferenceTypeParser;
  }

  export interface JSON extends TypeParser.JSON {
    kind: TypeParser.Kind.Query;

    /**
     * The query of this query type in a JSON compatible format.
     * @since 1.0.0
     */
    query: ReferenceTypeParser.JSON;
  }
}
