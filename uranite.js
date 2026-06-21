
/*
Language: Uranite
Author: hxAri (hxari)
Description: Uranite - Website: https://github.com/uranite-lang/uranite
*/

function uranite(hljs) {
    const KEYWORDS = {
        keyword:
            'public private protect function class struct interface trait enum extends implements ' +
            'raises raise except try finally final Readonly match switch case async await ' +
            'return package import from use as delete new instanceof subclassof lambda unit ' +
            'backed property Meta Callable if elif else for while break continue yield pass ' +
            'defer export extern type const mut ref own move addressof unsafe virtual override ' +
            'abstract static native and or not is in where self parent asm volatile',
        type:
            'I8 I16 I32 I64 U8 U16 U32 U64 F32 F64 Int UInt Float Double String Boolean Char Byte Bytes Long Integer Void NoneType Object',
        literal:
            'True False None'
    };
    const STRING = {
        className: 'string',
        variants: [
            { begin: /"""/, end: /"""/ },
            { begin: /'''/, end: /'''/ },
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE
        ]
    };
    const NUMBER = {
        className: 'number',
        variants: [
            { begin: /\b0[xX][0-9a-fA-F_]+\b/ },
            { begin: /\b0[bB][01_]+\b/ },
            { begin: /\b0[oO][0-7_]+\b/ },
            { begin: /\b\d[0-9_]*\.\d[0-9_]*([eE][+-]?\d+)?\b/ },
            { begin: /\b\d[0-9_]*\b/ }
        ],
        relevance: 0
    };
    const BLOCK_LINE_COMMENT = {
        className: 'comment',
        begin: /#\{/,
        end: /\}#/,
        contains: [
            {
                className: 'doctag',
                begin: /@[a-zA-Z]+/
            }
        ]
    };
    const LINE_LINE_COMMENT = {
        className: 'comment',
        begin: /#/,
        end: /$/,
        contains: [
            {
                className: 'doctag',
                begin: /@[a-zA-Z]+/
            }
        ]
    };
    
    return {
        name: 'Uranite',
        aliases: ['ae', 'uranite'],
        keywords: KEYWORDS,
        contains: [
            BLOCK_LINE_COMMENT,
            LINE_LINE_COMMENT,
            STRING,
            NUMBER,
            {
                className: 'function',
                beginKeywords: 'function lambda',
                end: /[:{]/,
                excludeEnd: true,
                contains: [
                    hljs.UNDERSCORE_TITLE_MODE,
                    {
                        className: 'params',
                        begin: /\(/,
                        end: /\)/,
                        keywords: KEYWORDS,
                        contains: [
                            STRING,
                            NUMBER,
                            LINE_COMMENT
                        ]
                    }
                ]
            },
            {
                className: 'class',
                beginKeywords: 'class interface struct enum',
                end: /[:;{]/,
                contains: [
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            }
        ]
    };
}


export {
    uranite
}
