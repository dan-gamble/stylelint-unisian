module.exports = {
  'plugins': [
    'stylelint-order'
  ],
  'rules': {
    'order/order': [
      'custom-properties',
      {
        'type': 'at-rule',
        'name': 'include'
      },
      'declarations',
      {
        'type': 'at-rule',
        'name': 'supports',
        'hasBlock': true
      },
      {
        'type': 'at-rule',
        'name': 'media',
        'hasBlock': true
      },
      'rules'
    ],
    'order/properties-order': [
      {
        'emptyLineBefore': 'always',
        'properties': [
          'content',
          'counter-increment',
          'counter-reset',
          'quotes'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'align-content',
          'align-items',
          'align-self',
          'flex',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-grow',
          'flex-shrink',
          'flex-wrap',
          'justify-content',
          'order'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'grid',
          'grid-area',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-auto-rows',
          'grid-column',
          'grid-column-end',
          'grid-column-gap',
          'grid-column-start',
          'grid-gap',
          'grid-row',
          'grid-row-end',
          'grid-row-gap',
          'grid-row-start',
          'grid-template',
          'grid-template-areas',
          'grid-template-columns',
          'grid-template-rows'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'box-sizing',
          'display',
          'max-width',
          'max-height',
          'min-width',
          'min-height',
          'width',
          'height',
          'clear',
          'float',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'table-layout'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'font-family',
          'font-size',
          'font-style',
          'font-weight',
          'letter-spacing',
          'list-style',
          'list-style-image',
          'list-style-position',
          'list-style-type',
          'line-height',
          'text-align',
          'text-decoration',
          'text-indent',
          'text-overflow',
          'text-rendering',
          'text-transform',
          'work-break',
          'work-wrap'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'appearance',
          'backface-visibility',
          'background',
          'background-attachment',
          'background-blend-mode',
          'background-clip',
          'background-color',
          'background-image',
          'background-origin',
          'background-position',
          'background-repeat',
          'background-size',
          'border',
          'border-color',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'box-shadow',
          'clip',
          'color',
          'cursor',
          'fill',
          'filter',
          'mask',
          'mix-blend-mode',
          'object-fit',
          'object-position',
          'opacity',
          'outline',
          'overflow',
          'overflow-x',
          'overflow-y',
          'visibility',
          'will-change'
        ]
      },
      {
        'emptyLineBefore': 'always',
        'properties': [
          'animation',
          'animation-delay',
          'animation-direction',
          'animation-duration',
          'animation-fill-mode',
          'animation-iteration-count',
          'animation-name',
          'animation-play-state',
          'animation-timing-function',
          'perspective',
          'transform',
          'transform-origin',
          'transform-style',
          'transition',
          'transition-delay',
          'transition-duration',
          'transition-property',
          'transition-timing-function'
        ]
      }
    ],

    // At rule
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',

    // Block
    'block-no-empty': true,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    // Color
    'color-no-invalid-hex': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': [
      'never',
      {
        'ignore': [
          'inside-function'
        ]
      }
    ],

    // Comment
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',

    // Declaration
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'ignore': [
          'consecutive-duplicates-with-different-values'
        ]
      }
    ],
    'declaration-no-important': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 3,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',

    // Font
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',

    // Function
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // Media
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // General
    'indentation': 2,
    'length-zero-no-unit': [true, {
      ignore: 'custom-properties'
    }],
    'max-empty-lines': [1, {
      ignore: ['comments']
    }],
    'max-nesting-depth': [
      3,
      {
        'ignore': [
          'blockless-at-rules'
        ],
        'ignoreAtRules': [
          'media'
        ]
      }
    ],
    'no-duplicate-selectors': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',

    // Keyframe
    'keyframe-declaration-no-important': true,

    // Number
    'number-max-precision': 5,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // Property
    'property-case': 'lower',

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '^[a-z]([a-z0-9]){1,3}-[A-Z0-9][a-zA-Z0-9]+(_[A-Z][a-zA-Z0-9]+)?(-[a-z0-9]([a-zA-Z0-9-]+)?([a-z0-9]+)?)?$',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-max-class': 2,
    'selector-max-combinators': 1,
    'selector-max-empty-lines': 1,
    'selector-max-id': 0,
    'selector-max-specificity': ['0,3,0', {
      ignoreSelectors: ['@media']
    }],
    'selector-max-type': [0, {
      ignoreTypes: ['svg']
    }],
    'selector-max-universal': 0,
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',

    // Shorthand
    'shorthand-property-no-redundant-values': true,

    // String
    'string-no-newline': true,
    'string-quotes': 'single',

    // Value
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
  },
}
