module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-debugger': 'off',
    'no-constant-condition': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'consistent-return': 2,
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'no-else-return': 1,
    'semi': ['error', 'never'],
    'space-unary-ops': 2,
    'comma-dangle': [
      'error',
      'never'
    ],
    '@typescript-eslint/no-var-requires': [
      'off'
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        'allow': [
          'constructors'
        ]
      }
    ],
    'vue/html-self-closing': [
      'off'
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': {
          'max': 8
        },
        'multiline': {
          'max': 3
        }
      }
    ],
    'vue/no-mutating-props': 'error',
    'vue/require-default-prop': 'off',
    'vue/attributes-order': [
      'warn',
      {
        'order': [
          'CONDITIONALS',
          'EVENTS',
          'DEFINITION',
          'LIST_RENDERING',
          'TWO_WAY_BINDING',
          'RENDER_MODIFIERS',
          'GLOBAL',
          [
            'UNIQUE',
            'SLOT'
          ],
          'CONTENT',
          'OTHER_ATTR',
          'OTHER_DIRECTIVES'
        ],
        'alphabetical': false
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'dot-notation': 'error',
    'no-prototype-builtins': 'off',
    'guard-for-in': 'warn',
    '@typescript-eslint/prefer-enum-initializers': [
      'error'
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        'arrowParameter': true,
        'arrayDestructuring': true,
        'memberVariableDeclaration': true,
        'parameter': true,
        'propertyDeclaration': true,
        'variableDeclaration': true,
        'variableDeclarationIgnoreFunction': true
      }
    ],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        'before': false,
        'after': true,
        'overrides': {
          'arrow': {
            'before': true,
            'after': true
          }
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'variable',
        'format': [
          'camelCase',
          'UPPER_CASE',
          'snake_case',
          'StrictPascalCase'
        ],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'allow'
      },
      {
        'selector': [
          'classMethod',
          'classProperty',
          'parameterProperty'
        ],
        'format': [
          'strictCamelCase'
        ]
      },
      {
        'selector': [
          'class'
        ],
        'format': [
          'StrictPascalCase'
        ]
      },
      {
        'selector': [
          'function'
        ],
        'format': [
          'StrictPascalCase',
          'strictCamelCase'
        ]
      },
      {
        'selector': [
          'typeAlias'
        ],
        'format': [
          'PascalCase'
        ],
        'prefix': [
          'T'
        ]
      },
      {
        'selector': [
          'interface'
        ],
        'format': [
          'PascalCase'
        ],
        'prefix': [
          'I'
        ]
      },
      {
        'selector': [
          'enum',
          'enumMember'
        ],
        'format': [
          'UPPER_CASE'
        ]
      },
      {
        'selector': [
          'objectLiteralProperty',
          'objectLiteralMethod'
        ],
        'format': [
          'camelCase',
          'snake_case',
          'PascalCase'
        ]
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true
    }],
    'vue/multi-word-component-names': [
      'off'
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'never'
    ],
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,
      'ignoreComments': false
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 0,
      'maxBOF': 0
    }],
    'linebreak-style': ['error', 'unix'],
    'vue/html-indent': ['error', 2, {
      "attribute": 2,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'comma-spacing': ['error'],
    'block-spacing': ['error', 'always'],
    'arrow-spacing': ['error'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'no-multi-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "switch-colon-spacing": ["error", {"after": true, "before": false}],
    "template-curly-spacing": ["error", "never"],
    "default-case": ["error"],
    'no-unused-vars': ['error']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
