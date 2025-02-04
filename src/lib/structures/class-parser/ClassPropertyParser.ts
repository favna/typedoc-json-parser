import type { JSONOutput } from 'typedoc';
import { ReflectionKind } from '../../types';
import { CommentParser, SourceParser } from '../misc';
import { Parser } from '../Parser';
import type { ProjectParser } from '../ProjectParser';
import { TypeParser } from '../type-parsers';
import { ClassParser } from './ClassParser';

/**
 * Parses data from a class property reflection.
 * @since 1.0.0
 */
export class ClassPropertyParser extends Parser {
  /**
   * The comment parser of this property.
   * @since 1.0.0
   */
  public readonly comment: CommentParser;

  /**
   * The id of the parent class parser.
   * @since 4.0.0
   */
  public readonly parentId: number;

  /**
   * The accessibility of this property.
   * @since 1.0.0
   */
  public readonly accessibility: ClassParser.Accessibility;

  /**
   * Whether this property is abstract.
   * @since 1.0.0
   */
  public readonly abstract: boolean;

  /**
   * Whether this property is static.
   * @since 1.0.0
   */
  public readonly static: boolean;

  /**
   * Whether this property is readonly.
   * @since 1.0.0
   */
  public readonly readonly: boolean;

  /**
   * Whether this property is optional.
   * @since 1.0.0
   */
  public readonly optional: boolean;

  /**
   * The type parser of this property.
   * @since 1.0.0
   */
  public readonly type: TypeParser | null;

  public constructor(data: ClassPropertyParser.Data, project: ProjectParser) {
    super(data, project);

    const { comment, parentId, accessibility, abstract, static: _static, readonly, optional, type } = data;

    this.comment = comment;
    this.parentId = parentId;
    this.accessibility = accessibility;
    this.abstract = abstract;
    this.static = _static;
    this.readonly = readonly;
    this.optional = optional;
    this.type = type;
  }

  /**
   * The parent class parser.
   * @since 4.0.0
   */
  public get parent(): ClassParser {
    return this.project.find(this.parentId) as ClassParser;
  }

  /**
   * Converts this parser to a JSON compatible format.
   * @since 1.0.0
   * @returns The JSON compatible format of this parser.
   */
  public toJSON(): ClassPropertyParser.JSON {
    return {
      ...super.toJSON(),
      comment: this.comment.toJSON(),
      parentId: this.parentId,
      accessibility: this.accessibility,
      abstract: this.abstract,
      static: this.static,
      readonly: this.readonly,
      optional: this.optional,
      type: this.type ? this.type.toJSON() : null
    };
  }

  /**
   * Generates a new {@link ClassPropertyParser} instance from the given data.
   * @since 1.0.0
   * @param reflection The reflection to generate the parser from.
   * @param project The project this parser belongs to.
   * @returns The generated parser.
   */
  public static generateFromTypeDoc(reflection: JSONOutput.DeclarationReflection, parentId: number, project: ProjectParser): ClassPropertyParser {
    const { kind, kindString = 'Unknown', id, name, comment = { summary: [] }, sources = [], type, flags, getSignature } = reflection;

    if (kind !== ReflectionKind.Property && kind !== ReflectionKind.Accessor) {
      throw new Error(
        `Expected Property (${ReflectionKind.Property}) or Accessor (${ReflectionKind.Accessor}), but received ${kindString} (${kind})`
      );
    }

    if (kind === ReflectionKind.Accessor) {
      if (getSignature === undefined) throw new Error(`Expected Accessor (${ReflectionKind.Accessor}) with a getter, but there was none`);

      const { id, name, comment = { summary: [] }, type, flags } = getSignature;

      return new ClassPropertyParser(
        {
          id,
          name,
          comment: CommentParser.generateFromTypeDoc(comment, project),
          source: sources.length ? SourceParser.generateFromTypeDoc(sources[0], project) : null,
          parentId,
          accessibility: flags.isPrivate
            ? ClassParser.Accessibility.Private
            : flags.isProtected
            ? ClassParser.Accessibility.Protected
            : ClassParser.Accessibility.Public,
          abstract: Boolean(flags.isAbstract),
          static: Boolean(flags.isStatic),
          readonly: Boolean(flags.isReadonly),
          optional: Boolean(flags.isOptional),
          type: type ? TypeParser.generateFromTypeDoc(type, project) : null
        },
        project
      );
    }

    return new ClassPropertyParser(
      {
        id,
        name,
        comment: CommentParser.generateFromTypeDoc(comment, project),
        source: sources.length ? SourceParser.generateFromTypeDoc(sources[0], project) : null,
        parentId,
        accessibility: flags.isPrivate
          ? ClassParser.Accessibility.Private
          : flags.isProtected
          ? ClassParser.Accessibility.Protected
          : ClassParser.Accessibility.Public,
        abstract: Boolean(flags.isAbstract),
        static: Boolean(flags.isStatic),
        readonly: Boolean(flags.isReadonly),
        optional: Boolean(flags.isOptional),
        type: type ? TypeParser.generateFromTypeDoc(type, project) : null
      },
      project
    );
  }

  public static generateFromJSON(json: ClassPropertyParser.JSON, project: ProjectParser): ClassPropertyParser {
    const { id, name, comment, source, parentId, accessibility, abstract, static: _static, readonly, optional, type } = json;

    return new ClassPropertyParser(
      {
        id,
        name,
        comment: CommentParser.generateFromJSON(comment, project),
        source: source ? SourceParser.generateFromJSON(source, project) : null,
        parentId,
        accessibility,
        abstract,
        static: _static,
        readonly,
        optional,
        type: type ? TypeParser.generateFromJSON(type, project) : null
      },
      project
    );
  }
}

export namespace ClassPropertyParser {
  export interface Data extends Parser.Data {
    /**
     * The comment parser of this property.
     * @since 1.0.0
     */
    comment: CommentParser;

    /**
     * The id of the parent class parser.
     * @since 4.0.0
     */
    parentId: number;

    /**
     * The accessibility of this property.
     * @since 1.0.0
     */
    accessibility: ClassParser.Accessibility;

    /**
     * Whether this property is abstract.
     * @since 1.0.0
     */
    abstract: boolean;

    /**
     * Whether this property is static.
     * @since 1.0.0
     */
    static: boolean;

    /**
     * Whether this property is readonly.
     * @since 1.0.0
     */
    readonly: boolean;

    /**
     * Whether this property is optional.
     * @since 1.0.0
     */
    optional: boolean;

    /**
     * The type parser of this property.
     * @since 1.0.0
     */
    type: TypeParser | null;
  }

  export interface JSON extends Parser.JSON {
    /**
     * The comment parser of this property.
     * @since 1.0.0
     */
    comment: CommentParser.JSON;

    /**
     * The id of the parent class parser.
     * @since 4.0.0
     */
    parentId: number;

    /**
     * The accessibility of this property.
     * @since 1.0.0
     */
    accessibility: ClassParser.Accessibility;

    /**
     * Whether this property is abstract.
     * @since 1.0.0
     */
    abstract: boolean;

    /**
     * Whether this property is static.
     * @since 1.0.0
     */
    static: boolean;

    /**
     * Whether this property is readonly.
     * @since 1.0.0
     */
    readonly: boolean;

    /**
     * Whether this property is optional.
     * @since 1.0.0
     */
    optional: boolean;

    /**
     * The type parser of this property in a JSON compatible format.
     * @since 1.0.0
     */
    type: TypeParser.JSON | null;
  }
}
