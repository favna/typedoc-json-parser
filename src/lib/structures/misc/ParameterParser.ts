import type { JSONOutput } from 'typedoc';
import { ReflectionKind } from '../../types';
import type { ProjectParser } from '../ProjectParser';
import { TypeParser } from '../type-parsers';
import { CommentParser } from './CommentParser';

/**
 * Parses data from a parameter reflection.
 * @since 1.0.0
 */
export class ParameterParser {
  /**
   * The project this parser belongs to.
   * @since 1.0.0
   */
  public readonly project: ProjectParser;

  /**
   * The identifier of this parser.
   * @since 1.0.0
   */
  public readonly id: number;

  /**
   * The name of this parameter.
   * @since 1.0.0
   */
  public readonly name: string;

  /**
   * The comment of this parameter.
   * @since 5.3.0
   */
  public readonly comment: CommentParser;

  /**
   * The type of this parameter.
   * @since 1.0.0
   */
  public readonly type: TypeParser;

  public constructor(data: ParameterParser.Data, project: ProjectParser) {
    const { id, name, comment, type } = data;

    this.id = id;
    this.name = name;
    this.comment = comment;
    this.type = type;

    this.project = project;
  }

  /**
   * Converts this parser to a JSON compatible format.
   * @since 1.0.0
   * @returns The JSON compatible format of this parser.
   */
  public toJSON(): ParameterParser.JSON {
    return {
      id: this.id,
      name: this.name,
      comment: this.comment.toJSON(),
      type: this.type.toJSON()
    };
  }

  /**
   * Generates a new {@link ParameterParser} instance from the given data.
   * @since 1.0.0
   * @param reflection The reflection to generate the parser from.
   * @param project The project this parser belongs to.
   * @returns The generated parser.
   */
  public static generateFromTypeDoc(reflection: JSONOutput.DeclarationReflection, project: ProjectParser): ParameterParser {
    const { kind, kindString = 'Unknown', id, name, comment = { summary: [] }, type } = reflection;

    if (kind !== ReflectionKind.Parameter) {
      throw new Error(`Expected Parameter (${ReflectionKind.Parameter}), but received ${kindString} (${kind})`);
    }

    return new ParameterParser(
      {
        id,
        name,
        comment: CommentParser.generateFromTypeDoc(comment, project),
        type: TypeParser.generateFromTypeDoc(type!, project)
      },
      project
    );
  }

  public static generateFromJSON(json: ParameterParser.JSON, project: ProjectParser): ParameterParser {
    const { id, name, comment, type } = json;

    return new ParameterParser(
      {
        id,
        name,
        comment: CommentParser.generateFromJSON(comment, project),
        type: TypeParser.generateFromJSON(type, project)
      },
      project
    );
  }
}

export namespace ParameterParser {
  export interface Data {
    /**
     * The identifier of this parser.
     * @since 1.0.0
     */
    id: number;

    /**
     * The name of this parameter.
     * @since 1.0.0
     */
    name: string;

    /**
     * The comment of this parameter.
     * @since 5.3.0
     */
    comment: CommentParser;

    /**
     * The type of this parameter.
     * @since 1.0.0
     */
    type: TypeParser;
  }

  export interface JSON {
    /**
     * The identifier of this parser.
     * @since 1.0.0
     */
    id: number;

    /**
     * The name of this parameter.
     * @since 1.0.0
     */
    name: string;

    /**
     * The comment of this parameter.
     * @since 5.3.0
     */
    comment: CommentParser.JSON;

    /**
     * The type of this parameter in a JSON compatible format.
     * @since 1.0.0
     */
    type: TypeParser.JSON;
  }
}
