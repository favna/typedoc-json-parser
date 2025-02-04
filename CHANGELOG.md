# Changelog

All notable changes to this project will be documented in this file.

# [6.0.2](https://github.com/RealShadowNova/typedoc-json-parser/compare/v6.0.1...v6.0.2) - (2022-10-22)

## 🐛 Bug Fixes

- **bin:** Warn instead of error on unsupported versions ([bb0b075](https://github.com/RealShadowNova/typedoc-json-parser/commit/bb0b075e2f1d6ae413da1f5a26615c762f3a8046))

## 📝 Documentation

- **readme:** Add migrating section ([14294a9](https://github.com/RealShadowNova/typedoc-json-parser/commit/14294a971f11ea6274ab5fd9bb6f272e5a9994c6))

# [6.0.1](https://github.com/RealShadowNova/typedoc-json-parser/compare/v6.0.0...v6.0.1) - (2022-10-18)

## 🐛 Bug Fixes

- **search:** Query splitting ([11da4f4](https://github.com/RealShadowNova/typedoc-json-parser/commit/11da4f44af7d16e82a45972c4b2fecbf453fd23a))
- **deps:** Update dependency typedoc to ^0.23.16 (#80) ([e824f4b](https://github.com/RealShadowNova/typedoc-json-parser/commit/e824f4bc453f959bf5d546b1645bf974f64c5835))

# [6.0.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v5.2.0...v6.0.0) - (2022-10-14)

## 🏠 Refactor

- **EnumPropertyParser:** Rename to `EnumMemberParser` (#74) ([e4072c4](https://github.com/RealShadowNova/typedoc-json-parser/commit/e4072c4d4b9eadf8e1cac3f034a59156b8d554af))

  ### 💥 Breaking Changes:

  - `EnumPropertyParser` has been renamed to `EnumMemberParser`
  - `EnumMemberParser#properties` has been renamed to `EnumMemberParser#members`

- **ConstantParser:** Rename to `VariableParser` (#73) ([0eb62ae](https://github.com/RealShadowNova/typedoc-json-parser/commit/0eb62aede90be3fe540081a7f787ec01da4bedc3))

  ### 💥 Breaking Changes:

  - `ConstantParser` has been renamed to `VariableParser`
  - All instances of `constant(s)` have been changed to `variable(s)`


## 🚀 Features

- **bin:** Add `migrate` option (#76) ([34520dd](https://github.com/RealShadowNova/typedoc-json-parser/commit/34520dd5104c6d780f43b05d3999ccc5bf7b755b))
- **ClassParser:** Add `typeParameters` property (#77) ([76997f0](https://github.com/RealShadowNova/typedoc-json-parser/commit/76997f06927d5ec2860473753ddc61a5681127f9))
- **Parser:** Remove `comment` property (#72) ([09666a1](https://github.com/RealShadowNova/typedoc-json-parser/commit/09666a12068c8d04dc39c8979f201a5ac01a7f89))

  ### 💥 Breaking Changes:

  - `Parser#comment` has been removed.
  - `ClassMethodParser#comment` has been removed.
  - `InterfaceMethodParser#comment` has been removed.

- **ParameterParser:** Add `comment` property (#71) ([04076c4](https://github.com/RealShadowNova/typedoc-json-parser/commit/04076c4779c58cc15b533741b86fad771383019f))

# [5.2.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v5.1.0...v5.2.0) - (2022-10-03)

## 🐛 Bug Fixes

- **ProjectParser:** Add bold `[WARNING]` prefix to version mismatch warnings ([ab6998d](https://github.com/RealShadowNova/typedoc-json-parser/commit/ab6998d56a758e664f442f63485d6c04497847ac))

## 🚀 Features

- **ProjectParser:** Add static `version` property ([d88c4a0](https://github.com/RealShadowNova/typedoc-json-parser/commit/d88c4a059a5845f2ff537911335631a9e15c213a))

# [5.1.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v5.0.1...v5.1.0) - (2022-10-03)

## 🚀 Features

- **ProjectParser:** Warn when incoming and current `typeDocJsonParserVersion` mismatch ([807cc8e](https://github.com/RealShadowNova/typedoc-json-parser/commit/807cc8e72f724e26ad83b6028b40e0be8b76053c))

# [5.0.1](https://github.com/RealShadowNova/typedoc-json-parser/compare/v5.0.0...v5.0.1) - (2022-10-02)

## 🐛 Bug Fixes

- **deps:** Update all non-major dependencies (#65) ([1c6f77a](https://github.com/RealShadowNova/typedoc-json-parser/commit/1c6f77ab74fde74460ce74ed3b135f1a5f26a556))

# [5.0.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v4.0.0...v5.0.0) - (2022-09-19)

## 🏠 Refactor

- **formatToString:** Switch to method from property ([4d52f65](https://github.com/RealShadowNova/typedoc-json-parser/commit/4d52f65e9ea7eeb487a4ede65f03ba5a01de8c10))

## 🚀 Features

- **TypeParser:** Add `project` property (#61) ([c5afe84](https://github.com/RealShadowNova/typedoc-json-parser/commit/c5afe840fcaad99be1711a74aafed444a78d9bcb))

  ### 💥 Breaking Changes

  - The constructor of `ArrayTypeParser` now takes 2 parameters of `ArrayTypeParser.Data` and `ProjectParser`
  - The constructor of `ConditionalTypeParser` now takes 2 parameters of `ConditionalTypeParser.Data` and `ProjectParser`
  - The constructor of `IndexedAccessTypeParser` now takes 2 parameters of `IndexedAccessTypeParser.Data` and `ProjectParser`
  - The constructor of `InferredTypeParser` now takes 2 parameters of `InferredTypeParser.Data` and `ProjectParser`
  - The constructor of `IntersectionTypeParser` now takes 2 parameters of `IntersectionTypeParser.Data` and `ProjectParser`
  - The constructor of `IntrinsicTypeParser` now takes 2 parameters of `IntrinsicTypeParser.Data` and `ProjectParser`
  - The constructor of `LiteralTypeParser` now takes 2 parameters of `LiteralTypeParser.Data` and `ProjectParser`
  - The constructor of `MappedTypeParser` now takes 2 parameters of `MappedTypeParser.Data` and `ProjectParser`
  - The constructor of `NamedTupleMemberTypeParser` now takes 2 parameters of `NamedTupleMemberTypeParser.Data` and `ProjectParser`
  - The constructor of `OptionalTypeParser` now takes 2 parameters of `OptionalTypeParser.Data` and `ProjectParser`
  - The constructor of `PredicateTypeParser` now takes 2 parameters of `PredicateTypeParser.Data` and `ProjectParser`
  - The constructor of `QueryTypeParser` now takes 2 parameters of `QueryTypeParser.Data` and `ProjectParser`
  - The constructor of `ReferenceTypeParser` now takes 2 parameters of `ReferenceTypeParser.Data` and `ProjectParser`
  - The constructor of `ReflectionTypeParser` now takes 2 parameters of `ReflectionTypeParser.Data` and `ProjectParser`
  - The constructor of `RestTypeParser` now takes 2 parameters of `RestTypeParser.Data` and `ProjectParser`
  - The constructor of `TemplateLiteralTypeParser` now takes 2 parameters of `TemplateLiteralTypeParser.Data` and `ProjectParser`
  - The constructor of `TupleTypeParser` now takes 2 parameters of `TupleTypeParser.Data` and `ProjectParser`
  - The constructor of `TypeOperatorTypeParser` now takes 2 parameters of `TypeOperatorTypeParser.Data` and `ProjectParser`
  - The constructor of `UnionTypeParser` now takes 2 parameters of `UnionTypeParser.Data` and `ProjectParser`
  - The constructor of `UnknownTypeParser` now takes 2 parameters of `UnknownTypeParser.Data` and `ProjectParser`

# [4.0.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v3.2.0...v4.0.0) - (2022-09-16)

## 🚀 Features

- **ClassConstructorParser:** Add `toString` method (#57) ([3f3d08c](https://github.com/RealShadowNova/typedoc-json-parser/commit/3f3d08cd4cfdfe15d0b1ae324b2047559e9426d0))
- **interface-parser:** Add `parent` getter (#55) ([6b96fed](https://github.com/RealShadowNova/typedoc-json-parser/commit/6b96fed2481bd20c951b9f1618ab219e013b5e58))

  ### 💥 Breaking Changes

  - `InterfaceMethodParser.generateFromTypeDoc()` now takes 3 parameters instead of 2.
  - `InterfacePropertyParser.generateFromTypeDoc()` now takes 3 parameters instead of 2.

- **class-parser:** Add `parent` getter (#53) ([0ad08e0](https://github.com/RealShadowNova/typedoc-json-parser/commit/0ad08e027a7ac5539d91595bdd0c879cdc7a1489))

  ### 💥 Breaking Changes

  - `ClassConstructorParser.generateFromTypeDoc()` now takes 3 parameters instead of 2.
  - `ClassMethodParser.generateFromTypeDoc()` now takes 3 parameters instead of 2.
  - `ClassPropertyParser.generateFromTypeDoc()` now takes 3 parameters instead of 2.

- **EnumPropertyParser:** Add `toString` method (#56) ([defeb42](https://github.com/RealShadowNova/typedoc-json-parser/commit/defeb422b81387a50f009ccfc986317127298232))
- **enum-parser:** Add `parent` getter (#54) ([6a91232](https://github.com/RealShadowNova/typedoc-json-parser/commit/6a91232ae08eae6e5214586ad2b40aeda3b5310b))

  ### 💥 Breaking Changes

  - `EnumPropertyParser.generateFromTypeDoc()` now takes 3 parameters instead of 2.

- **type-parsers:** Add static `formatToString` method (#48) ([9a567e6](https://github.com/RealShadowNova/typedoc-json-parser/commit/9a567e6a5d03005f93eb47e3c327382b7b5ed58e))

## 🧪 Testing

- Switch to `vitest` (#58) ([afae533](https://github.com/RealShadowNova/typedoc-json-parser/commit/afae5331673c03a40e8347e188a76ea157960618))

# [3.2.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v3.1.0...v3.2.0) - (2022-09-09)

## 🐛 Bug Fixes

- **deps:** Update dependency typedoc to ^0.23.14 (#43) ([1c5330b](https://github.com/RealShadowNova/typedoc-json-parser/commit/1c5330b4859ae1dc41b5ccc49262af8a6c695d2f))

## 🚀 Features

- **ProjectParser:** Add `changelog` property (#46) ([c7b0ea3](https://github.com/RealShadowNova/typedoc-json-parser/commit/c7b0ea38461c8e1ee36d335b91fcf7629d8656bf))

# [3.1.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v3.0.0...v3.1.0) - (2022-09-03)

## 🚀 Features

- **InterfaceParser:** Add `methods` property (#40) ([325581c](https://github.com/RealShadowNova/typedoc-json-parser/commit/325581cd5f98f31c15b189959f5c9cc4bda0d707))

# [3.0.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.3.2...v3.0.0) - (2022-09-02)

## 🏠 Refactor

- **CommentParser:** Format `inline-tag` (#35) ([ad9ee31](https://github.com/RealShadowNova/typedoc-json-parser/commit/ad9ee3112b18957454019ed1c0dd2b0ba3cce504))

  ### 💥 Breaking Changes

  - `CommentParser#description` now formats `inline-tag`
  - `CommentParser#blockTags` now formats `inline-tag`

## 🐛 Bug Fixes

- **deps:** Update dependency typedoc to ^0.23.11 (#31) ([e8c8223](https://github.com/RealShadowNova/typedoc-json-parser/commit/e8c82230f7e053595fd991f4ce7fd29ddaf7242b))

## 🚀 Features

- **ProjectParser:** Add `readme` property (#38) ([09c8957](https://github.com/RealShadowNova/typedoc-json-parser/commit/09c895774b9503563155929cc4fc131af600667f))

  ### 💥 Breaking Changes

  - The constructor of `ProjectParser` now only accepts a single parameter of `ProjectParser.Options`

- **ProjectParser:** Add `find` method (#36) ([adc3fd2](https://github.com/RealShadowNova/typedoc-json-parser/commit/adc3fd2e0a00cf98491f397bddecaeb34f3d63dc))
- **ProjectParser:** Add `search` method (#39) ([3d87c32](https://github.com/RealShadowNova/typedoc-json-parser/commit/3d87c32c13a8e23caaf7a22ea6c063b3a3f5c735))
- **SourceParser:** Add `url` property (#34) ([af2a828](https://github.com/RealShadowNova/typedoc-json-parser/commit/af2a82847c9972ca59f6269a4885d053aaa4e07b))

# [2.3.2](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.3.1...v2.3.2) - (2022-08-01)

## 🐛 Bug Fixes

- **ProjectParser:** Set `version` when parsing `typedoc` output ([cbaf62a](https://github.com/RealShadowNova/typedoc-json-parser/commit/cbaf62ae24695989eb59e9fdf32861187100f22a))

# [2.3.1](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.3.0...v2.3.1) - (2022-07-31)

## 🐛 Bug Fixes

- **deps:** Add `tslib` ([10ad4bb](https://github.com/RealShadowNova/typedoc-json-parser/commit/10ad4bb8101ed2b2aa05cac5ff5d2c02d52cf593))
- **deps:** Update `typedoc` to `0.23.10` ([e17b77e](https://github.com/RealShadowNova/typedoc-json-parser/commit/e17b77ee2f5e0d099bb994c99072dd03da00abc0))

# [2.3.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.2.1...v2.3.0) - (2022-07-31)

## 🚀 Features

- **SignatureParser:** Add the `comment` property ([868db5c](https://github.com/RealShadowNova/typedoc-json-parser/commit/868db5c4ad3c61daac5be622b77e4770e2ec9446))

# [2.2.1](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.2.0...v2.2.1) - (2022-07-30)

## 🐛 Bug Fixes

- **ProjectParser:** Use `data.version` if `version` is not passed ([e8aaf5c](https://github.com/RealShadowNova/typedoc-json-parser/commit/e8aaf5cd8e9e9d7c7ce2db079475a12ff326cf17))

# [2.2.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.1.0...v2.2.0) - (2022-07-30)

## 🚀 Features

- **ProjectParser:** Add `version` property ([edddca7](https://github.com/RealShadowNova/typedoc-json-parser/commit/edddca78ad590e6ce9023f5ba655689b66c6b694))

# [2.1.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.0.2...v2.1.0) - (2022-07-30)

## 🚀 Features

- **ProjectParser:** Add `typeDocJsonParserVersion` property ([901d9ec](https://github.com/RealShadowNova/typedoc-json-parser/commit/901d9ecf73f4626c8596a6d906e86b3cb764674c))

# [2.0.2](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.0.1...v2.0.2) - (2022-07-27)

## 🐛 Bug Fixes

- **class-parser:** Export `ClassConstructorParser` ([9dd6dfd](https://github.com/RealShadowNova/typedoc-json-parser/commit/9dd6dfd8f9e1d356c73586af496e9c61179564ac))

## 📝 Documentation

- **ProjectParser:** Strip off external `{@link }` ref ([ef624b7](https://github.com/RealShadowNova/typedoc-json-parser/commit/ef624b7c74619e313394244d11a0ba537705d0e8))

# [2.0.1](https://github.com/RealShadowNova/typedoc-json-parser/compare/v2.0.0...v2.0.1) - (2022-07-27)

## 🐛 Bug Fixes

- **deps:** Update dependency `typedoc` to `0.23.9` ([a8f8307](https://github.com/RealShadowNova/typedoc-json-parser/commit/a8f830795a8afd96c4f563532a9aed5cd7d62044))

# [2.0.0](https://github.com/RealShadowNova/typedoc-json-parser/compare/v1.0.0...v2.0.0) - (2022-07-27)

## 🚀 Features

- **deps:** Update dependency `typedoc` to `0.23.8` (#19) ([63d2b6f](https://github.com/RealShadowNova/typedoc-json-parser/commit/63d2b6fe71067cc36070722b93dc4235fd1c3713))

  ### 💥 Breaking Changes

  - Updated dependency `typedoc` to `0.23.8`
  - `CommentParser#tags` has been removed along with `#tags` in related interfaces. Use `#blockTags` and `#modifierTags` instead.
  - `CommentParser#extendedDescription` has been removed and merged with `#description` along with related interfaces.

# [1.0.0](https://github.com/RealShadowNova/typedoc-json-parser/tree/v1.0.0) - (2022-06-09)

## 🚀 Features

- Implement `typedoc-json-parser` (#2) ([c51d73f](https://github.com/RealShadowNova/typedoc-json-parser/commit/c51d73f75b99e2369afc29d42e827dbbddc98d00))
