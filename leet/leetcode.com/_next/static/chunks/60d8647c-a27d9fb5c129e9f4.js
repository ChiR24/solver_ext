"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1972], {
        1226: function(e, t, n) {
            n.d(t, {
                dV: function() {
                    return W
                }
            });
            var r = n(78120),
                o = n(59119),
                i = n(47421),
                a = n(49892),
                s = n(45383);

            function l(e) {
                var t = e.Pos;

                function n(e, t, n) {
                    if (t.line === n.line && t.ch >= n.ch - 1) {
                        var r = e.getLine(t.line).charCodeAt(t.ch);
                        55296 <= r && r <= 55551 && (n.ch += 1)
                    }
                    return {
                        start: t,
                        end: n
                    }
                }
                var r = [{
                        keys: "<Left>",
                        type: "keyToKey",
                        toKeys: "h"
                    }, {
                        keys: "<Right>",
                        type: "keyToKey",
                        toKeys: "l"
                    }, {
                        keys: "<Up>",
                        type: "keyToKey",
                        toKeys: "k"
                    }, {
                        keys: "<Down>",
                        type: "keyToKey",
                        toKeys: "j"
                    }, {
                        keys: "g<Up>",
                        type: "keyToKey",
                        toKeys: "gk"
                    }, {
                        keys: "g<Down>",
                        type: "keyToKey",
                        toKeys: "gj"
                    }, {
                        keys: "<Space>",
                        type: "keyToKey",
                        toKeys: "l"
                    }, {
                        keys: "<BS>",
                        type: "keyToKey",
                        toKeys: "h"
                    }, {
                        keys: "<Del>",
                        type: "keyToKey",
                        toKeys: "x"
                    }, {
                        keys: "<C-Space>",
                        type: "keyToKey",
                        toKeys: "W"
                    }, {
                        keys: "<C-BS>",
                        type: "keyToKey",
                        toKeys: "B"
                    }, {
                        keys: "<S-Space>",
                        type: "keyToKey",
                        toKeys: "w"
                    }, {
                        keys: "<S-BS>",
                        type: "keyToKey",
                        toKeys: "b"
                    }, {
                        keys: "<C-n>",
                        type: "keyToKey",
                        toKeys: "j"
                    }, {
                        keys: "<C-p>",
                        type: "keyToKey",
                        toKeys: "k"
                    }, {
                        keys: "<C-[>",
                        type: "keyToKey",
                        toKeys: "<Esc>"
                    }, {
                        keys: "<C-c>",
                        type: "keyToKey",
                        toKeys: "<Esc>"
                    }, {
                        keys: "<C-[>",
                        type: "keyToKey",
                        toKeys: "<Esc>",
                        context: "insert"
                    }, {
                        keys: "<C-c>",
                        type: "keyToKey",
                        toKeys: "<Esc>",
                        context: "insert"
                    }, {
                        keys: "<C-Esc>",
                        type: "keyToKey",
                        toKeys: "<Esc>"
                    }, {
                        keys: "<C-Esc>",
                        type: "keyToKey",
                        toKeys: "<Esc>",
                        context: "insert"
                    }, {
                        keys: "s",
                        type: "keyToKey",
                        toKeys: "cl",
                        context: "normal"
                    }, {
                        keys: "s",
                        type: "keyToKey",
                        toKeys: "c",
                        context: "visual"
                    }, {
                        keys: "S",
                        type: "keyToKey",
                        toKeys: "cc",
                        context: "normal"
                    }, {
                        keys: "S",
                        type: "keyToKey",
                        toKeys: "VdO",
                        context: "visual"
                    }, {
                        keys: "<Home>",
                        type: "keyToKey",
                        toKeys: "0"
                    }, {
                        keys: "<End>",
                        type: "keyToKey",
                        toKeys: "$"
                    }, {
                        keys: "<PageUp>",
                        type: "keyToKey",
                        toKeys: "<C-b>"
                    }, {
                        keys: "<PageDown>",
                        type: "keyToKey",
                        toKeys: "<C-f>"
                    }, {
                        keys: "<CR>",
                        type: "keyToKey",
                        toKeys: "j^",
                        context: "normal"
                    }, {
                        keys: "<Ins>",
                        type: "keyToKey",
                        toKeys: "i",
                        context: "normal"
                    }, {
                        keys: "<Ins>",
                        type: "action",
                        action: "toggleOverwrite",
                        context: "insert"
                    }, {
                        keys: "H",
                        type: "motion",
                        motion: "moveToTopLine",
                        motionArgs: {
                            linewise: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "M",
                        type: "motion",
                        motion: "moveToMiddleLine",
                        motionArgs: {
                            linewise: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "L",
                        type: "motion",
                        motion: "moveToBottomLine",
                        motionArgs: {
                            linewise: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "h",
                        type: "motion",
                        motion: "moveByCharacters",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "l",
                        type: "motion",
                        motion: "moveByCharacters",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "j",
                        type: "motion",
                        motion: "moveByLines",
                        motionArgs: {
                            forward: !0,
                            linewise: !0
                        }
                    }, {
                        keys: "k",
                        type: "motion",
                        motion: "moveByLines",
                        motionArgs: {
                            forward: !1,
                            linewise: !0
                        }
                    }, {
                        keys: "gj",
                        type: "motion",
                        motion: "moveByDisplayLines",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "gk",
                        type: "motion",
                        motion: "moveByDisplayLines",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "w",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !0,
                            wordEnd: !1
                        }
                    }, {
                        keys: "W",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !0,
                            wordEnd: !1,
                            bigWord: !0
                        }
                    }, {
                        keys: "e",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !0,
                            wordEnd: !0,
                            inclusive: !0
                        }
                    }, {
                        keys: "E",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !0,
                            wordEnd: !0,
                            bigWord: !0,
                            inclusive: !0
                        }
                    }, {
                        keys: "b",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !1,
                            wordEnd: !1
                        }
                    }, {
                        keys: "B",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !1,
                            wordEnd: !1,
                            bigWord: !0
                        }
                    }, {
                        keys: "ge",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !1,
                            wordEnd: !0,
                            inclusive: !0
                        }
                    }, {
                        keys: "gE",
                        type: "motion",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !1,
                            wordEnd: !0,
                            bigWord: !0,
                            inclusive: !0
                        }
                    }, {
                        keys: "{",
                        type: "motion",
                        motion: "moveByParagraph",
                        motionArgs: {
                            forward: !1,
                            toJumplist: !0
                        }
                    }, {
                        keys: "}",
                        type: "motion",
                        motion: "moveByParagraph",
                        motionArgs: {
                            forward: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "(",
                        type: "motion",
                        motion: "moveBySentence",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: ")",
                        type: "motion",
                        motion: "moveBySentence",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "<C-f>",
                        type: "motion",
                        motion: "moveByPage",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "<C-b>",
                        type: "motion",
                        motion: "moveByPage",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "<C-d>",
                        type: "motion",
                        motion: "moveByScroll",
                        motionArgs: {
                            forward: !0,
                            explicitRepeat: !0
                        }
                    }, {
                        keys: "<C-u>",
                        type: "motion",
                        motion: "moveByScroll",
                        motionArgs: {
                            forward: !1,
                            explicitRepeat: !0
                        }
                    }, {
                        keys: "gg",
                        type: "motion",
                        motion: "moveToLineOrEdgeOfDocument",
                        motionArgs: {
                            forward: !1,
                            explicitRepeat: !0,
                            linewise: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "G",
                        type: "motion",
                        motion: "moveToLineOrEdgeOfDocument",
                        motionArgs: {
                            forward: !0,
                            explicitRepeat: !0,
                            linewise: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "g$",
                        type: "motion",
                        motion: "moveToEndOfDisplayLine"
                    }, {
                        keys: "g^",
                        type: "motion",
                        motion: "moveToStartOfDisplayLine"
                    }, {
                        keys: "g0",
                        type: "motion",
                        motion: "moveToStartOfDisplayLine"
                    }, {
                        keys: "0",
                        type: "motion",
                        motion: "moveToStartOfLine"
                    }, {
                        keys: "^",
                        type: "motion",
                        motion: "moveToFirstNonWhiteSpaceCharacter"
                    }, {
                        keys: "+",
                        type: "motion",
                        motion: "moveByLines",
                        motionArgs: {
                            forward: !0,
                            toFirstChar: !0
                        }
                    }, {
                        keys: "-",
                        type: "motion",
                        motion: "moveByLines",
                        motionArgs: {
                            forward: !1,
                            toFirstChar: !0
                        }
                    }, {
                        keys: "_",
                        type: "motion",
                        motion: "moveByLines",
                        motionArgs: {
                            forward: !0,
                            toFirstChar: !0,
                            repeatOffset: -1
                        }
                    }, {
                        keys: "$",
                        type: "motion",
                        motion: "moveToEol",
                        motionArgs: {
                            inclusive: !0
                        }
                    }, {
                        keys: "%",
                        type: "motion",
                        motion: "moveToMatchedSymbol",
                        motionArgs: {
                            inclusive: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "f<character>",
                        type: "motion",
                        motion: "moveToCharacter",
                        motionArgs: {
                            forward: !0,
                            inclusive: !0
                        }
                    }, {
                        keys: "F<character>",
                        type: "motion",
                        motion: "moveToCharacter",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "t<character>",
                        type: "motion",
                        motion: "moveTillCharacter",
                        motionArgs: {
                            forward: !0,
                            inclusive: !0
                        }
                    }, {
                        keys: "T<character>",
                        type: "motion",
                        motion: "moveTillCharacter",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: ";",
                        type: "motion",
                        motion: "repeatLastCharacterSearch",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: ",",
                        type: "motion",
                        motion: "repeatLastCharacterSearch",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "'<register>",
                        type: "motion",
                        motion: "goToMark",
                        motionArgs: {
                            toJumplist: !0,
                            linewise: !0
                        }
                    }, {
                        keys: "`<register>",
                        type: "motion",
                        motion: "goToMark",
                        motionArgs: {
                            toJumplist: !0
                        }
                    }, {
                        keys: "]`",
                        type: "motion",
                        motion: "jumpToMark",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "[`",
                        type: "motion",
                        motion: "jumpToMark",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "]'",
                        type: "motion",
                        motion: "jumpToMark",
                        motionArgs: {
                            forward: !0,
                            linewise: !0
                        }
                    }, {
                        keys: "['",
                        type: "motion",
                        motion: "jumpToMark",
                        motionArgs: {
                            forward: !1,
                            linewise: !0
                        }
                    }, {
                        keys: "]p",
                        type: "action",
                        action: "paste",
                        isEdit: !0,
                        actionArgs: {
                            after: !0,
                            isEdit: !0,
                            matchIndent: !0
                        }
                    }, {
                        keys: "[p",
                        type: "action",
                        action: "paste",
                        isEdit: !0,
                        actionArgs: {
                            after: !1,
                            isEdit: !0,
                            matchIndent: !0
                        }
                    }, {
                        keys: "]<character>",
                        type: "motion",
                        motion: "moveToSymbol",
                        motionArgs: {
                            forward: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "[<character>",
                        type: "motion",
                        motion: "moveToSymbol",
                        motionArgs: {
                            forward: !1,
                            toJumplist: !0
                        }
                    }, {
                        keys: "|",
                        type: "motion",
                        motion: "moveToColumn"
                    }, {
                        keys: "o",
                        type: "motion",
                        motion: "moveToOtherHighlightedEnd",
                        context: "visual"
                    }, {
                        keys: "O",
                        type: "motion",
                        motion: "moveToOtherHighlightedEnd",
                        motionArgs: {
                            sameLine: !0
                        },
                        context: "visual"
                    }, {
                        keys: "d",
                        type: "operator",
                        operator: "delete"
                    }, {
                        keys: "y",
                        type: "operator",
                        operator: "yank"
                    }, {
                        keys: "c",
                        type: "operator",
                        operator: "change"
                    }, {
                        keys: "=",
                        type: "operator",
                        operator: "indentAuto"
                    }, {
                        keys: ">",
                        type: "operator",
                        operator: "indent",
                        operatorArgs: {
                            indentRight: !0
                        }
                    }, {
                        keys: "<",
                        type: "operator",
                        operator: "indent",
                        operatorArgs: {
                            indentRight: !1
                        }
                    }, {
                        keys: "g~",
                        type: "operator",
                        operator: "changeCase"
                    }, {
                        keys: "gu",
                        type: "operator",
                        operator: "changeCase",
                        operatorArgs: {
                            toLower: !0
                        },
                        isEdit: !0
                    }, {
                        keys: "gU",
                        type: "operator",
                        operator: "changeCase",
                        operatorArgs: {
                            toLower: !1
                        },
                        isEdit: !0
                    }, {
                        keys: "n",
                        type: "motion",
                        motion: "findNext",
                        motionArgs: {
                            forward: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "N",
                        type: "motion",
                        motion: "findNext",
                        motionArgs: {
                            forward: !1,
                            toJumplist: !0
                        }
                    }, {
                        keys: "gn",
                        type: "motion",
                        motion: "findAndSelectNextInclusive",
                        motionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "gN",
                        type: "motion",
                        motion: "findAndSelectNextInclusive",
                        motionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "gq",
                        type: "operator",
                        operator: "hardWrap"
                    }, {
                        keys: "gw",
                        type: "operator",
                        operator: "hardWrap",
                        operatorArgs: {
                            keepCursor: !0
                        }
                    }, {
                        keys: "x",
                        type: "operatorMotion",
                        operator: "delete",
                        motion: "moveByCharacters",
                        motionArgs: {
                            forward: !0
                        },
                        operatorMotionArgs: {
                            visualLine: !1
                        }
                    }, {
                        keys: "X",
                        type: "operatorMotion",
                        operator: "delete",
                        motion: "moveByCharacters",
                        motionArgs: {
                            forward: !1
                        },
                        operatorMotionArgs: {
                            visualLine: !0
                        }
                    }, {
                        keys: "D",
                        type: "operatorMotion",
                        operator: "delete",
                        motion: "moveToEol",
                        motionArgs: {
                            inclusive: !0
                        },
                        context: "normal"
                    }, {
                        keys: "D",
                        type: "operator",
                        operator: "delete",
                        operatorArgs: {
                            linewise: !0
                        },
                        context: "visual"
                    }, {
                        keys: "Y",
                        type: "operatorMotion",
                        operator: "yank",
                        motion: "expandToLine",
                        motionArgs: {
                            linewise: !0
                        },
                        context: "normal"
                    }, {
                        keys: "Y",
                        type: "operator",
                        operator: "yank",
                        operatorArgs: {
                            linewise: !0
                        },
                        context: "visual"
                    }, {
                        keys: "C",
                        type: "operatorMotion",
                        operator: "change",
                        motion: "moveToEol",
                        motionArgs: {
                            inclusive: !0
                        },
                        context: "normal"
                    }, {
                        keys: "C",
                        type: "operator",
                        operator: "change",
                        operatorArgs: {
                            linewise: !0
                        },
                        context: "visual"
                    }, {
                        keys: "~",
                        type: "operatorMotion",
                        operator: "changeCase",
                        motion: "moveByCharacters",
                        motionArgs: {
                            forward: !0
                        },
                        operatorArgs: {
                            shouldMoveCursor: !0
                        },
                        context: "normal"
                    }, {
                        keys: "~",
                        type: "operator",
                        operator: "changeCase",
                        context: "visual"
                    }, {
                        keys: "<C-u>",
                        type: "operatorMotion",
                        operator: "delete",
                        motion: "moveToStartOfLine",
                        context: "insert"
                    }, {
                        keys: "<C-w>",
                        type: "operatorMotion",
                        operator: "delete",
                        motion: "moveByWords",
                        motionArgs: {
                            forward: !1,
                            wordEnd: !1
                        },
                        context: "insert"
                    }, {
                        keys: "<C-w>",
                        type: "idle",
                        context: "normal"
                    }, {
                        keys: "<C-i>",
                        type: "action",
                        action: "jumpListWalk",
                        actionArgs: {
                            forward: !0
                        }
                    }, {
                        keys: "<C-o>",
                        type: "action",
                        action: "jumpListWalk",
                        actionArgs: {
                            forward: !1
                        }
                    }, {
                        keys: "<C-e>",
                        type: "action",
                        action: "scroll",
                        actionArgs: {
                            forward: !0,
                            linewise: !0
                        }
                    }, {
                        keys: "<C-y>",
                        type: "action",
                        action: "scroll",
                        actionArgs: {
                            forward: !1,
                            linewise: !0
                        }
                    }, {
                        keys: "a",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "charAfter"
                        },
                        context: "normal"
                    }, {
                        keys: "A",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "eol"
                        },
                        context: "normal"
                    }, {
                        keys: "A",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "endOfSelectedArea"
                        },
                        context: "visual"
                    }, {
                        keys: "i",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "inplace"
                        },
                        context: "normal"
                    }, {
                        keys: "gi",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "lastEdit"
                        },
                        context: "normal"
                    }, {
                        keys: "I",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "firstNonBlank"
                        },
                        context: "normal"
                    }, {
                        keys: "gI",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "bol"
                        },
                        context: "normal"
                    }, {
                        keys: "I",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            insertAt: "startOfSelectedArea"
                        },
                        context: "visual"
                    }, {
                        keys: "o",
                        type: "action",
                        action: "newLineAndEnterInsertMode",
                        isEdit: !0,
                        interlaceInsertRepeat: !0,
                        actionArgs: {
                            after: !0
                        },
                        context: "normal"
                    }, {
                        keys: "O",
                        type: "action",
                        action: "newLineAndEnterInsertMode",
                        isEdit: !0,
                        interlaceInsertRepeat: !0,
                        actionArgs: {
                            after: !1
                        },
                        context: "normal"
                    }, {
                        keys: "v",
                        type: "action",
                        action: "toggleVisualMode"
                    }, {
                        keys: "V",
                        type: "action",
                        action: "toggleVisualMode",
                        actionArgs: {
                            linewise: !0
                        }
                    }, {
                        keys: "<C-v>",
                        type: "action",
                        action: "toggleVisualMode",
                        actionArgs: {
                            blockwise: !0
                        }
                    }, {
                        keys: "<C-q>",
                        type: "action",
                        action: "toggleVisualMode",
                        actionArgs: {
                            blockwise: !0
                        }
                    }, {
                        keys: "gv",
                        type: "action",
                        action: "reselectLastSelection"
                    }, {
                        keys: "J",
                        type: "action",
                        action: "joinLines",
                        isEdit: !0
                    }, {
                        keys: "gJ",
                        type: "action",
                        action: "joinLines",
                        actionArgs: {
                            keepSpaces: !0
                        },
                        isEdit: !0
                    }, {
                        keys: "p",
                        type: "action",
                        action: "paste",
                        isEdit: !0,
                        actionArgs: {
                            after: !0,
                            isEdit: !0
                        }
                    }, {
                        keys: "P",
                        type: "action",
                        action: "paste",
                        isEdit: !0,
                        actionArgs: {
                            after: !1,
                            isEdit: !0
                        }
                    }, {
                        keys: "r<character>",
                        type: "action",
                        action: "replace",
                        isEdit: !0
                    }, {
                        keys: "@<register>",
                        type: "action",
                        action: "replayMacro"
                    }, {
                        keys: "q<register>",
                        type: "action",
                        action: "enterMacroRecordMode"
                    }, {
                        keys: "R",
                        type: "action",
                        action: "enterInsertMode",
                        isEdit: !0,
                        actionArgs: {
                            replace: !0
                        },
                        context: "normal"
                    }, {
                        keys: "R",
                        type: "operator",
                        operator: "change",
                        operatorArgs: {
                            linewise: !0,
                            fullLine: !0
                        },
                        context: "visual",
                        exitVisualBlock: !0
                    }, {
                        keys: "u",
                        type: "action",
                        action: "undo",
                        context: "normal"
                    }, {
                        keys: "u",
                        type: "operator",
                        operator: "changeCase",
                        operatorArgs: {
                            toLower: !0
                        },
                        context: "visual",
                        isEdit: !0
                    }, {
                        keys: "U",
                        type: "operator",
                        operator: "changeCase",
                        operatorArgs: {
                            toLower: !1
                        },
                        context: "visual",
                        isEdit: !0
                    }, {
                        keys: "<C-r>",
                        type: "action",
                        action: "redo"
                    }, {
                        keys: "m<register>",
                        type: "action",
                        action: "setMark"
                    }, {
                        keys: '"<register>',
                        type: "action",
                        action: "setRegister"
                    }, {
                        keys: "<C-r><register>",
                        type: "action",
                        action: "insertRegister",
                        context: "insert",
                        isEdit: !0
                    }, {
                        keys: "<C-o>",
                        type: "action",
                        action: "oneNormalCommand",
                        context: "insert"
                    }, {
                        keys: "zz",
                        type: "action",
                        action: "scrollToCursor",
                        actionArgs: {
                            position: "center"
                        }
                    }, {
                        keys: "z.",
                        type: "action",
                        action: "scrollToCursor",
                        actionArgs: {
                            position: "center"
                        },
                        motion: "moveToFirstNonWhiteSpaceCharacter"
                    }, {
                        keys: "zt",
                        type: "action",
                        action: "scrollToCursor",
                        actionArgs: {
                            position: "top"
                        }
                    }, {
                        keys: "z<CR>",
                        type: "action",
                        action: "scrollToCursor",
                        actionArgs: {
                            position: "top"
                        },
                        motion: "moveToFirstNonWhiteSpaceCharacter"
                    }, {
                        keys: "zb",
                        type: "action",
                        action: "scrollToCursor",
                        actionArgs: {
                            position: "bottom"
                        }
                    }, {
                        keys: "z-",
                        type: "action",
                        action: "scrollToCursor",
                        actionArgs: {
                            position: "bottom"
                        },
                        motion: "moveToFirstNonWhiteSpaceCharacter"
                    }, {
                        keys: ".",
                        type: "action",
                        action: "repeatLastEdit"
                    }, {
                        keys: "<C-a>",
                        type: "action",
                        action: "incrementNumberToken",
                        isEdit: !0,
                        actionArgs: {
                            increase: !0,
                            backtrack: !1
                        }
                    }, {
                        keys: "<C-x>",
                        type: "action",
                        action: "incrementNumberToken",
                        isEdit: !0,
                        actionArgs: {
                            increase: !1,
                            backtrack: !1
                        }
                    }, {
                        keys: "<C-t>",
                        type: "action",
                        action: "indent",
                        actionArgs: {
                            indentRight: !0
                        },
                        context: "insert"
                    }, {
                        keys: "<C-d>",
                        type: "action",
                        action: "indent",
                        actionArgs: {
                            indentRight: !1
                        },
                        context: "insert"
                    }, {
                        keys: "a<register>",
                        type: "motion",
                        motion: "textObjectManipulation"
                    }, {
                        keys: "i<register>",
                        type: "motion",
                        motion: "textObjectManipulation",
                        motionArgs: {
                            textObjectInner: !0
                        }
                    }, {
                        keys: "/",
                        type: "search",
                        searchArgs: {
                            forward: !0,
                            querySrc: "prompt",
                            toJumplist: !0
                        }
                    }, {
                        keys: "?",
                        type: "search",
                        searchArgs: {
                            forward: !1,
                            querySrc: "prompt",
                            toJumplist: !0
                        }
                    }, {
                        keys: "*",
                        type: "search",
                        searchArgs: {
                            forward: !0,
                            querySrc: "wordUnderCursor",
                            wholeWordOnly: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "#",
                        type: "search",
                        searchArgs: {
                            forward: !1,
                            querySrc: "wordUnderCursor",
                            wholeWordOnly: !0,
                            toJumplist: !0
                        }
                    }, {
                        keys: "g*",
                        type: "search",
                        searchArgs: {
                            forward: !0,
                            querySrc: "wordUnderCursor",
                            toJumplist: !0
                        }
                    }, {
                        keys: "g#",
                        type: "search",
                        searchArgs: {
                            forward: !1,
                            querySrc: "wordUnderCursor",
                            toJumplist: !0
                        }
                    }, {
                        keys: ":",
                        type: "ex"
                    }],
                    o = r.length,
                    i = [{
                        name: "colorscheme",
                        shortName: "colo"
                    }, {
                        name: "map"
                    }, {
                        name: "imap",
                        shortName: "im"
                    }, {
                        name: "nmap",
                        shortName: "nm"
                    }, {
                        name: "vmap",
                        shortName: "vm"
                    }, {
                        name: "omap",
                        shortName: "om"
                    }, {
                        name: "noremap",
                        shortName: "no"
                    }, {
                        name: "nnoremap",
                        shortName: "nn"
                    }, {
                        name: "vnoremap",
                        shortName: "vn"
                    }, {
                        name: "inoremap",
                        shortName: "ino"
                    }, {
                        name: "onoremap",
                        shortName: "ono"
                    }, {
                        name: "unmap"
                    }, {
                        name: "mapclear",
                        shortName: "mapc"
                    }, {
                        name: "nmapclear",
                        shortName: "nmapc"
                    }, {
                        name: "vmapclear",
                        shortName: "vmapc"
                    }, {
                        name: "imapclear",
                        shortName: "imapc"
                    }, {
                        name: "omapclear",
                        shortName: "omapc"
                    }, {
                        name: "write",
                        shortName: "w"
                    }, {
                        name: "undo",
                        shortName: "u"
                    }, {
                        name: "redo",
                        shortName: "red"
                    }, {
                        name: "set",
                        shortName: "se"
                    }, {
                        name: "setlocal",
                        shortName: "setl"
                    }, {
                        name: "setglobal",
                        shortName: "setg"
                    }, {
                        name: "sort",
                        shortName: "sor"
                    }, {
                        name: "substitute",
                        shortName: "s",
                        possiblyAsync: !0
                    }, {
                        name: "startinsert",
                        shortName: "start"
                    }, {
                        name: "nohlsearch",
                        shortName: "noh"
                    }, {
                        name: "yank",
                        shortName: "y"
                    }, {
                        name: "delmarks",
                        shortName: "delm"
                    }, {
                        name: "registers",
                        shortName: "reg",
                        excludeFromCommandHistory: !0
                    }, {
                        name: "vglobal",
                        shortName: "v"
                    }, {
                        name: "delete",
                        shortName: "d"
                    }, {
                        name: "join",
                        shortName: "j"
                    }, {
                        name: "normal",
                        shortName: "norm"
                    }, {
                        name: "global",
                        shortName: "g"
                    }],
                    a = W("");

                function s(e) {
                    var t = e.state.vim;
                    return t.onPasteFn || (t.onPasteFn = function() {
                        t.insertMode || (e.setCursor(re(e.getCursor(), 0, 1)), ee.enterInsertMode(e, {}, t))
                    }), t.onPasteFn
                }
                var l, c = /[\d]/,
                    u = [e.isWordChar, function(t) {
                        return t && !e.isWordChar(t) && !/\s/.test(t)
                    }],
                    h = [function(e) {
                        return /\S/.test(e)
                    }],
                    d = ["<", ">"],
                    m = ["-", '"', ".", ":", "_", "/", "+"],
                    p = /^\w$/;
                try {
                    l = new RegExp("^[\\p{Lu}]$", "u")
                } catch (pt) {
                    l = /^[A-Z]$/
                }

                function f(e, t) {
                    return t >= e.firstLine() && t <= e.lastLine()
                }

                function g(e) {
                    return /^[a-z]$/.test(e)
                }

                function v(e) {
                    return l.test(e)
                }

                function y(e) {
                    return /^\s*$/.test(e)
                }

                function C(e) {
                    return -1 != ".?!".indexOf(e)
                }

                function k(e, t) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n] == e) return !0;
                    return !1
                }
                var w = {};

                function x(e, t, n, r, o) {
                    if (void 0 === t && !o) throw Error("defaultValue is required unless callback is provided");
                    if (n || (n = "string"), w[e] = {
                            type: n,
                            defaultValue: t,
                            callback: o
                        }, r)
                        for (var i = 0; i < r.length; i++) w[r[i]] = w[e];
                    t && S(e, t)
                }

                function S(e, t, n, r) {
                    var o = w[e],
                        i = (r = r || {}).scope;
                    if (!o) return new Error("Unknown option: " + e);
                    if ("boolean" == o.type) {
                        if (t && !0 !== t) return new Error("Invalid argument: " + e + "=" + t);
                        !1 !== t && (t = !0)
                    }
                    o.callback ? ("local" !== i && o.callback(t, void 0), "global" !== i && n && o.callback(t, n)) : ("local" !== i && (o.value = "boolean" == o.type ? !!t : t), "global" !== i && n && (n.state.vim.options[e] = {
                        value: t
                    }))
                }

                function M(e, t, n) {
                    var r = w[e],
                        o = (n = n || {}).scope;
                    if (!r) return new Error("Unknown option: " + e);
                    if (r.callback) {
                        let e = t && r.callback(void 0, t);
                        return "global" !== o && void 0 !== e ? e : "local" !== o ? r.callback() : void 0
                    }
                    return ("global" !== o && t && t.state.vim.options[e] || "local" !== o && r || {}).value
                }
                x("filetype", void 0, "string", ["ft"], (function(e, t) {
                    if (void 0 !== t) {
                        if (void 0 === e) {
                            let e = t.getOption("mode");
                            return "null" == e ? "" : e
                        } {
                            let n = "" == e ? "null" : e;
                            t.setOption("mode", n)
                        }
                    }
                })), x("textwidth", 80, "number", ["tw"], (function(e, t) {
                    if (void 0 !== t) {
                        if (void 0 === e) return t.getOption("textwidth");
                        var n = Math.round(e);
                        n > 1 && t.setOption("textwidth", n)
                    }
                }));
                var L, b, A = function() {
                        var e = 100,
                            t = -1,
                            n = 0,
                            r = 0,
                            o = new Array(e);

                        function i(i, a) {
                            (t += a) > n ? t = n : t < r && (t = r);
                            var s = o[(e + t) % e];
                            if (s && !s.find()) {
                                var l, c = a > 0 ? 1 : -1,
                                    u = i.getCursor();
                                do {
                                    if ((s = o[(e + (t += c)) % e]) && (l = s.find()) && !se(u, l)) break
                                } while (t < n && t > r)
                            }
                            return s
                        }
                        return {
                            cachedCursor: void 0,
                            add: function(i, a, s) {
                                var l = o[t % e];

                                function c(n) {
                                    var r = ++t % e,
                                        a = o[r];
                                    a && a.clear(), o[r] = i.setBookmark(n)
                                }
                                if (l) {
                                    var u = l.find();
                                    u && !se(u, a) && c(a)
                                } else c(a);
                                c(s), n = t, (r = t - e + 1) < 0 && (r = 0)
                            },
                            find: function(e, n) {
                                var r = t,
                                    o = i(e, n);
                                return t = r, o && o.find()
                            },
                            move: i
                        }
                    },
                    E = function(e) {
                        return e ? {
                            changes: e.changes,
                            expectCursorActivityForChange: e.expectCursorActivityForChange
                        } : {
                            changes: [],
                            expectCursorActivityForChange: !1
                        }
                    };
                class O {
                    constructor() {
                        this.latestRegister = void 0, this.isPlaying = !1, this.isRecording = !1, this.replaySearchQueries = [], this.onRecordingDone = void 0, this.lastInsertModeChanges = E()
                    }
                    exitMacroRecordMode() {
                        var e = L.macroModeState;
                        e.onRecordingDone && e.onRecordingDone(), e.onRecordingDone = void 0, e.isRecording = !1
                    }
                    enterMacroRecordMode(e, t) {
                        var n = L.registerController.getRegister(t);
                        if (n) {
                            if (n.clear(), this.latestRegister = t, e.openDialog) {
                                var r = Ve("span", {
                                    class: "cm-vim-message"
                                }, "recording @" + t);
                                this.onRecordingDone = e.openDialog(r, null, {
                                    bottom: !0
                                })
                            }
                            this.isRecording = !0
                        }
                    }
                }

                function T(e) {
                    return e.state.vim || (e.state.vim = {
                        inputState: new $,
                        lastEditInputState: void 0,
                        lastEditActionCommand: void 0,
                        lastHPos: -1,
                        lastHSPos: -1,
                        lastMotion: null,
                        marks: {},
                        insertMode: !1,
                        insertModeReturn: !1,
                        insertModeRepeat: void 0,
                        visualMode: !1,
                        visualLine: !1,
                        visualBlock: !1,
                        lastSelection: null,
                        lastPastedText: null,
                        sel: {},
                        options: {},
                        expectLiteralNext: !1
                    }), e.state.vim
                }

                function R() {
                    for (var e in L = {
                            searchQuery: null,
                            searchIsReversed: !1,
                            lastSubstituteReplacePart: void 0,
                            jumpList: A(),
                            macroModeState: new O,
                            lastCharacterSearch: {
                                increment: 0,
                                forward: !0,
                                selectedCharacter: ""
                            },
                            registerController: new J({}),
                            searchHistoryController: new z,
                            exCommandHistoryController: new z
                        }, w) {
                        var t = w[e];
                        t.value = t.defaultValue
                    }
                }
                var B, I = {
                        enterVimMode: function(t) {
                            t.setOption("disableInput", !0), t.setOption("showCursorWhenSelecting", !1), e.signal(t, "vim-mode-change", {
                                mode: "normal"
                            }), t.on("cursorActivity", at), T(t), e.on(t.getInputField(), "paste", s(t))
                        },
                        leaveVimMode: function(t) {
                            t.setOption("disableInput", !1), t.off("cursorActivity", at), e.off(t.getInputField(), "paste", s(t)), t.state.vim = null, qe && clearTimeout(qe)
                        },
                        buildKeyMap: function() {},
                        getRegisterController: function() {
                            return L.registerController
                        },
                        resetVimGlobalState_: R,
                        getVimGlobalState_: function() {
                            return L
                        },
                        maybeInitVimState_: T,
                        suppressErrorLogging: !1,
                        InsertModeKey: lt,
                        map: function(e, t, n) {
                            tt.map(e, t, n)
                        },
                        unmap: function(e, t) {
                            return tt.unmap(e, t)
                        },
                        noremap: function(e, t, n) {
                            tt.map(e, t, n, !0)
                        },
                        mapclear: function(e) {
                            var t = r.length,
                                n = o,
                                i = r.slice(0, t - n);
                            if (r = r.slice(t - n), e)
                                for (var a = i.length - 1; a >= 0; a--) {
                                    var s = i[a];
                                    if (e !== s.context)
                                        if (s.context) this._mapCommand(s);
                                        else {
                                            var l = ["normal", "insert", "visual"];
                                            for (var c in l)
                                                if (l[c] !== e) {
                                                    var u = Object.assign({}, s);
                                                    u.context = l[c], this._mapCommand(u)
                                                }
                                        }
                                }
                        },
                        langmap: V,
                        vimKeyFromEvent: _,
                        setOption: S,
                        getOption: M,
                        defineOption: x,
                        defineEx: function(e, t, n) {
                            if (t) {
                                if (0 !== e.indexOf(t)) throw new Error('(Vim.defineEx) "' + t + '" is not a prefix of "' + e + '", command not registered')
                            } else t = e;
                            et[e] = n, tt.commandMap_[t] = {
                                name: e,
                                shortName: t,
                                type: "api"
                            }
                        },
                        handleKey: function(e, t, n) {
                            var r = this.findKey(e, t, n);
                            if ("function" === typeof r) return r()
                        },
                        multiSelectHandleKey: function(e, t, n) {
                            var r = T(e),
                                o = e,
                                i = !1,
                                a = (r = I.maybeInitVimState_(o)).visualBlock || r.wasInVisualBlock,
                                s = o.isInMultiSelectMode();
                            r.wasInVisualBlock && !s ? r.wasInVisualBlock = !1 : s && r.visualBlock && (r.wasInVisualBlock = !0);
                            if ("<Esc>" != t || r.insertMode || r.visualMode || !s || "<Esc>" != r.status)
                                if (a || !s || o.inVirtualSelectionMode) i = I.handleKey(o, t, n);
                                else {
                                    var l = mt(r),
                                        c = r.inputState.changeQueueList || [];
                                    o.operation((function() {
                                        o.curOp && (o.curOp.isVimOp = !0);
                                        var e = 0;
                                        o.forEachSelection((function() {
                                            o.state.vim.inputState.changeQueue = c[e];
                                            var r = o.getCursor("head"),
                                                a = o.getCursor("anchor"),
                                                s = le(r, a) ? 0 : -1,
                                                u = le(r, a) ? -1 : 0;
                                            r = re(r, 0, s), a = re(a, 0, u), o.state.vim.sel.head = r, o.state.vim.sel.anchor = a, i = I.handleKey(o, t, n), o.virtualSelection && (c[e] = o.state.vim.inputState.changeQueue, o.state.vim = mt(l)), e++
                                        })), o.curOp ? .cursorActivity && !i && (o.curOp.cursorActivity = !1), o.state.vim = r, r.inputState.changeQueueList = c, r.inputState.changeQueue = null
                                    }), !0)
                                }
                            else U(o);
                            !i || r.visualMode || r.insert || r.visualMode == o.somethingSelected() || st(o, r);
                            return i
                        },
                        findKey: function(e, t, n) {
                            var o, i = T(e),
                                a = e;

                            function s() {
                                var e = L.macroModeState;
                                if (e.isRecording) {
                                    if ("q" == t) return e.exitMacroRecordMode(), U(a), !0;
                                    "mapping" != n && function(e, t) {
                                        if (e.isPlaying) return;
                                        var n = e.latestRegister,
                                            r = L.registerController.getRegister(n);
                                        r && r.pushText(t)
                                    }(e, t)
                                }
                            }

                            function l() {
                                if ("<Esc>" == t) {
                                    if (i.visualMode) ke(a);
                                    else {
                                        if (!i.insertMode) return;
                                        nt(a)
                                    }
                                    return U(a), !0
                                }
                            }
                            return o = i.insertMode ? function() {
                                if (l()) return !0;
                                i.inputState.keyBuffer.push(t);
                                var e = i.inputState.keyBuffer.join(""),
                                    n = 1 == t.length,
                                    o = X.matchCommand(e, r, i.inputState, "insert"),
                                    s = i.inputState.changeQueue;
                                if ("none" == o.type) return U(a), !1;
                                if ("partial" == o.type) {
                                    if (o.expectLiteralNext && (i.expectLiteralNext = !0), b && window.clearTimeout(b), b = n && window.setTimeout((function() {
                                            i.insertMode && i.inputState.keyBuffer.length && U(a)
                                        }), M("insertModeEscKeysTimeout")), n) {
                                        var c = a.listSelections();
                                        s && s.removed.length == c.length || (s = i.inputState.changeQueue = new q), s.inserted += t;
                                        for (var u = 0; u < c.length; u++) {
                                            var h = ce(c[u].anchor, c[u].head),
                                                d = ue(c[u].anchor, c[u].head),
                                                m = a.getRange(h, a.state.overwrite ? re(d, 0, 1) : d);
                                            s.removed[u] = (s.removed[u] || "") + m
                                        }
                                    }
                                    return !n
                                }
                                if (i.expectLiteralNext = !1, b && window.clearTimeout(b), o.command && s) {
                                    for (c = a.listSelections(), u = 0; u < c.length; u++) {
                                        var p = c[u].head;
                                        a.replaceRange(s.removed[u] || "", re(p, 0, -s.inserted.length), p, "+input")
                                    }
                                    L.macroModeState.lastInsertModeChanges.changes.pop()
                                }
                                return o.command || U(a), o.command
                            }() : function() {
                                if (s() || l()) return !0;
                                i.inputState.keyBuffer.push(t);
                                var e = i.inputState.keyBuffer.join("");
                                if (/^[1-9]\d*$/.test(e)) return !0;
                                var n = /^(\d*)(.*)$/.exec(e);
                                if (!n) return U(a), !1;
                                var o = i.visualMode ? "visual" : "normal",
                                    c = n[2] || n[1];
                                i.inputState.operatorShortcut && i.inputState.operatorShortcut.slice(-1) == c && (c = i.inputState.operatorShortcut);
                                var u = X.matchCommand(c, r, i.inputState, o);
                                return "none" == u.type ? (U(a), !1) : "partial" == u.type ? (u.expectLiteralNext && (i.expectLiteralNext = !0), !0) : "clear" == u.type ? (U(a), !0) : (i.expectLiteralNext = !1, i.inputState.keyBuffer.length = 0, (n = /^(\d*)(.*)$/.exec(e)) && n[1] && "0" != n[1] && i.inputState.pushRepeatDigit(n[1]), u.command)
                            }(), !1 === o ? i.insertMode || 1 !== t.length ? void 0 : function() {
                                return !0
                            } : !0 === o ? function() {
                                return !0
                            } : function() {
                                return a.operation((function() {
                                    a.curOp.isVimOp = !0;
                                    try {
                                        "keyToKey" == o.type ? P(a, o.toKeys, o) : X.processCommand(a, i, o)
                                    } catch (e) {
                                        throw a.state.vim = void 0, T(a), I.suppressErrorLogging || console.log(e), e
                                    }
                                    return !0
                                }))
                            }
                        },
                        handleEx: function(e, t) {
                            tt.processCommand(e, t)
                        },
                        defineMotion: function(e, t) {
                            G[e] = t
                        },
                        defineAction: function(e, t) {
                            ee[e] = t
                        },
                        defineOperator: function(e, t) {
                            Y[e] = t
                        },
                        mapCommand: function(e, t, n, r, o) {
                            var i = {
                                keys: e,
                                type: t
                            };
                            for (var a in i[t] = n, i[t + "Args"] = r, o) i[a] = o[a];
                            rt(i)
                        },
                        _mapCommand: rt,
                        defineRegister: function(e, t) {
                            var n = L.registerController.registers;
                            if (!e || 1 != e.length) throw Error("Register name must be 1 character");
                            if (n[e]) throw Error("Register already defined " + e);
                            n[e] = t, m.push(e)
                        },
                        exitVisualMode: ke,
                        exitInsertMode: nt
                    },
                    N = [],
                    K = !1;

                function D(e) {
                    if ("<" == e[0]) {
                        var t = e.toLowerCase().slice(1, -1),
                            n = t.split("-");
                        if ("lt" == (t = n.pop() || "")) e = "<";
                        else if ("space" == t) e = " ";
                        else if ("cr" == t) e = "\n";
                        else if (j[t]) {
                            var r = B.value,
                                o = {
                                    key: j[t],
                                    target: {
                                        value: r,
                                        selectionEnd: r.length,
                                        selectionStart: r.length
                                    }
                                };
                            return B.onKeyDown && B.onKeyDown(o, B.value, a), void(B && B.onKeyUp && B.onKeyUp(o, B.value, a))
                        }
                    }
                    if ("\n" == e) {
                        var i = B;
                        B = null, i.onClose && i.onClose(i.value)
                    } else B.value = (B.value || "") + e;

                    function a(e) {
                        "string" == typeof e ? B.value = e : B = null
                    }
                }

                function P(e, t, n) {
                    var r = K;
                    if (n) {
                        if (-1 != N.indexOf(n)) return;
                        N.push(n), K = 0 != n.noremap
                    }
                    try {
                        for (var o, i = T(e), a = /<(?:[CSMA]-)*\w+>|./gi; o = a.exec(t);) {
                            var s = o[0],
                                l = i.insertMode;
                            if (B) D(s);
                            else if (!I.handleKey(e, s, "mapping") && l && i.insertMode) {
                                if ("<" == s[0]) {
                                    var c = s.toLowerCase().slice(1, -1),
                                        u = c.split("-");
                                    if ("lt" == (c = u.pop() || "")) s = "<";
                                    else if ("space" == c) s = " ";
                                    else if ("cr" == c) s = "\n";
                                    else {
                                        if (j.hasOwnProperty(c)) {
                                            ht(e, s = j[c]);
                                            continue
                                        }
                                        s = s[0], a.lastIndex = o.index + 1
                                    }
                                }
                                e.replaceSelection(s)
                            }
                        }
                    } finally {
                        if (N.pop(), K = !!N.length && r, !N.length && B) {
                            var h = B;
                            B = null, $e(e, h)
                        }
                    }
                }
                var H = {
                        Return: "CR",
                        Backspace: "BS",
                        Delete: "Del",
                        Escape: "Esc",
                        Insert: "Ins",
                        ArrowLeft: "Left",
                        ArrowRight: "Right",
                        ArrowUp: "Up",
                        ArrowDown: "Down",
                        Enter: "CR",
                        " ": "Space"
                    },
                    F = {
                        Shift: 1,
                        Alt: 1,
                        Command: 1,
                        Control: 1,
                        CapsLock: 1,
                        AltGraph: 1,
                        Dead: 1,
                        Unidentified: 1
                    },
                    j = {};

                function _(t, n) {
                    var r = t.key;
                    if (!F[r]) {
                        r.length > 1 && "n" == r[0] && (r = r.replace("Numpad", "")), r = H[r] || r;
                        var o = "";
                        if (t.ctrlKey && (o += "C-"), t.altKey && (o += "A-"), t.metaKey && (o += "M-"), e.isMac && t.altKey && !t.metaKey && !t.ctrlKey && (o = o.slice(2)), (o || r.length > 1) && t.shiftKey && (o += "S-"), n && !n.expectLiteralNext && 1 == r.length)
                            if (a.keymap && r in a.keymap) 0 == a.remapCtrl && o || (r = a.keymap[r]);
                            else if (r.charCodeAt(0) > 255) {
                            var i = t.code ? .slice(-1) || "";
                            t.shiftKey || (i = i.toLowerCase()), i && (r = i)
                        }
                        return (o += r).length > 1 && (o = "<" + o + ">"), o
                    }
                }

                function V(e, t) {
                    a.string !== e && (a = W(e)), a.remapCtrl = t
                }

                function W(e) {
                    let t = {};
                    if (!e) return {
                        keymap: t,
                        string: ""
                    };

                    function n(e) {
                        return e.split(/\\?(.)/).filter(Boolean)
                    }
                    return e.split(/((?:[^\\,]|\\.)+),/).map((e => {
                        if (!e) return;
                        const r = e.split(/((?:[^\\;]|\\.)+);/);
                        if (3 == r.length) {
                            const e = n(r[1]),
                                o = n(r[2]);
                            if (e.length !== o.length) return;
                            for (let n = 0; n < e.length; ++n) t[e[n]] = o[n]
                        } else if (1 == r.length) {
                            const r = n(e);
                            if (r.length % 2 !== 0) return;
                            for (let e = 0; e < r.length; e += 2) t[r[e]] = r[e + 1]
                        }
                    })), {
                        keymap: t,
                        string: e
                    }
                }
                "Left|Right|Up|Down|End|Home".split("|").concat(Object.keys(H)).forEach((function(e) {
                    j[(H[e] || "").toLowerCase()] = j[e.toLowerCase()] = e
                })), x("langmap", void 0, "string", ["lmap"], (function(e, t) {
                    if (void 0 === e) return a.string;
                    V(e)
                }));
                class $ {
                    constructor() {
                        this.prefixRepeat = [], this.motionRepeat = [], this.operator = null, this.operatorArgs = null, this.motion = null, this.motionArgs = null, this.keyBuffer = [], this.registerName = null, this.changeQueue = null
                    }
                    pushRepeatDigit(e) {
                        this.operator ? this.motionRepeat = this.motionRepeat.concat(e) : this.prefixRepeat = this.prefixRepeat.concat(e)
                    }
                    getRepeat() {
                        var e = 0;
                        return (this.prefixRepeat.length > 0 || this.motionRepeat.length > 0) && (e = 1, this.prefixRepeat.length > 0 && (e *= parseInt(this.prefixRepeat.join(""), 10)), this.motionRepeat.length > 0 && (e *= parseInt(this.motionRepeat.join(""), 10))), e
                    }
                }

                function U(t, n) {
                    t.state.vim.inputState = new $, t.state.vim.expectLiteralNext = !1, e.signal(t, "vim-command-done", n)
                }

                function q() {
                    this.removed = [], this.inserted = ""
                }
                class Q {
                    constructor(e, t, n) {
                        this.clear(), this.keyBuffer = [e || ""], this.insertModeChanges = [], this.searchQueries = [], this.linewise = !!t, this.blockwise = !!n
                    }
                    setText(e, t, n) {
                        this.keyBuffer = [e || ""], this.linewise = !!t, this.blockwise = !!n
                    }
                    pushText(e, t) {
                        t && (this.linewise || this.keyBuffer.push("\n"), this.linewise = !0), this.keyBuffer.push(e)
                    }
                    pushInsertModeChanges(e) {
                        this.insertModeChanges.push(E(e))
                    }
                    pushSearchQuery(e) {
                        this.searchQueries.push(e)
                    }
                    clear() {
                        this.keyBuffer = [], this.insertModeChanges = [], this.searchQueries = [], this.linewise = !1
                    }
                    toString() {
                        return this.keyBuffer.join("")
                    }
                }
                class J {
                    constructor(e) {
                        this.registers = e, this.unnamedRegister = e['"'] = new Q, e["."] = new Q, e[":"] = new Q, e["/"] = new Q, e["+"] = new Q
                    }
                    pushText(e, t, n, r, o) {
                        if ("_" !== e) {
                            r && "\n" !== n.charAt(n.length - 1) && (n += "\n");
                            var i = this.isValidRegister(e) ? this.getRegister(e) : null;
                            if (i) {
                                v(e) ? i.pushText(n, r) : i.setText(n, r, o), "+" === e && navigator.clipboard.writeText(n), this.unnamedRegister.setText(i.toString(), r)
                            } else {
                                switch (t) {
                                    case "yank":
                                        this.registers[0] = new Q(n, r, o);
                                        break;
                                    case "delete":
                                    case "change":
                                        -1 == n.indexOf("\n") ? this.registers["-"] = new Q(n, r) : (this.shiftNumericRegisters_(), this.registers[1] = new Q(n, r))
                                }
                                this.unnamedRegister.setText(n, r, o)
                            }
                        }
                    }
                    getRegister(e) {
                        return this.isValidRegister(e) ? (e = e.toLowerCase(), this.registers[e] || (this.registers[e] = new Q), this.registers[e]) : this.unnamedRegister
                    }
                    isValidRegister(e) {
                        return e && (k(e, m) || p.test(e))
                    }
                    shiftNumericRegisters_() {
                        for (var e = 9; e >= 2; e--) this.registers[e] = this.getRegister("" + (e - 1))
                    }
                }
                class z {
                    constructor() {
                        this.historyBuffer = [], this.iterator = 0, this.initialPrefix = null
                    }
                    nextMatch(e, t) {
                        var n = this.historyBuffer,
                            r = t ? -1 : 1;
                        null === this.initialPrefix && (this.initialPrefix = e);
                        for (var o = this.iterator + r; t ? o >= 0 : o < n.length; o += r)
                            for (var i = n[o], a = 0; a <= i.length; a++)
                                if (this.initialPrefix == i.substring(0, a)) return this.iterator = o, i;
                        return o >= n.length ? (this.iterator = n.length, this.initialPrefix) : o < 0 ? e : void 0
                    }
                    pushInput(e) {
                        var t = this.historyBuffer.indexOf(e);
                        t > -1 && this.historyBuffer.splice(t, 1), e.length && this.historyBuffer.push(e)
                    }
                    reset() {
                        this.initialPrefix = null, this.iterator = this.historyBuffer.length
                    }
                }
                var X = {
                        matchCommand: function(e, t, n, r) {
                            var i, a = function(e, t, n, r) {
                                r.operator && (n = "operatorPending");
                                for (var i, a = [], s = [], l = K ? t.length - o : 0; l < t.length; l++) {
                                    var c = t[l];
                                    "insert" == n && "insert" != c.context || c.context && c.context != n || r.operator && "action" == c.type || !(i = oe(e, c.keys)) || ("partial" == i && a.push(c), "full" == i && s.push(c))
                                }
                                return {
                                    partial: a.length && a,
                                    full: s.length && s
                                }
                            }(e, t, r, n);
                            if (!a.full && !a.partial) return {
                                type: "none"
                            };
                            if (!a.full && a.partial) return {
                                type: "partial",
                                expectLiteralNext: 1 == a.partial.length && "<character>" == a.partial[0].keys.slice(-11)
                            };
                            for (var s = 0; s < a.full.length; s++) {
                                var l = a.full[s];
                                i || (i = l)
                            }
                            if ("<character>" == i.keys.slice(-11) || "<register>" == i.keys.slice(-10)) {
                                var c = function(e) {
                                    var t = /^.*(<[^>]+>)$/.exec(e),
                                        n = t ? t[1] : e.slice(-1);
                                    if (n.length > 1) switch (n) {
                                        case "<CR>":
                                        case "<S-CR>":
                                            n = "\n";
                                            break;
                                        case "<Space>":
                                        case "<S-Space>":
                                            n = " ";
                                            break;
                                        default:
                                            n = ""
                                    }
                                    return n
                                }(e);
                                if (!c || c.length > 1) return {
                                    type: "clear"
                                };
                                n.selectedCharacter = c
                            }
                            return {
                                type: "full",
                                command: i
                            }
                        },
                        processCommand: function(e, t, n) {
                            switch (t.inputState.repeatOverride = n.repeatOverride, n.type) {
                                case "motion":
                                    this.processMotion(e, t, n);
                                    break;
                                case "operator":
                                    this.processOperator(e, t, n);
                                    break;
                                case "operatorMotion":
                                    this.processOperatorMotion(e, t, n);
                                    break;
                                case "action":
                                    this.processAction(e, t, n);
                                    break;
                                case "search":
                                    this.processSearch(e, t, n);
                                    break;
                                case "ex":
                                case "keyToEx":
                                    this.processEx(e, t, n)
                            }
                        },
                        processMotion: function(e, t, n) {
                            t.inputState.motion = n.motion, t.inputState.motionArgs = ne(n.motionArgs), this.evalInput(e, t)
                        },
                        processOperator: function(e, t, n) {
                            var r = t.inputState;
                            if (r.operator) {
                                if (r.operator == n.operator) return r.motion = "expandToLine", r.motionArgs = {
                                    linewise: !0,
                                    repeat: 1
                                }, void this.evalInput(e, t);
                                U(e)
                            }
                            r.operator = n.operator, r.operatorArgs = ne(n.operatorArgs), n.keys.length > 1 && (r.operatorShortcut = n.keys), n.exitVisualBlock && (t.visualBlock = !1, ye(e)), t.visualMode && this.evalInput(e, t)
                        },
                        processOperatorMotion: function(e, t, n) {
                            var r = t.visualMode,
                                o = ne(n.operatorMotionArgs);
                            o && r && o.visualLine && (t.visualLine = !0), this.processOperator(e, t, n), r || this.processMotion(e, t, n)
                        },
                        processAction: function(e, t, n) {
                            var r = t.inputState,
                                o = r.getRepeat(),
                                i = !!o,
                                a = ne(n.actionArgs) || {
                                    repeat: 1
                                };
                            r.selectedCharacter && (a.selectedCharacter = r.selectedCharacter), n.operator && this.processOperator(e, t, n), n.motion && this.processMotion(e, t, n), (n.motion || n.operator) && this.evalInput(e, t), a.repeat = o || 1, a.repeatIsExplicit = i, a.registerName = r.registerName, U(e), t.lastMotion = null, n.isEdit && this.recordLastEdit(t, r, n), ee[n.action](e, a, t)
                        },
                        processSearch: function(t, n, r) {
                            if (t.getSearchCursor) {
                                var o = r.searchArgs.forward,
                                    i = r.searchArgs.wholeWordOnly;
                                De(t).setReversed(!o);
                                var a = o ? "/" : "?",
                                    s = De(t).getQuery(),
                                    l = t.getScrollInfo();
                                switch (r.searchArgs.querySrc) {
                                    case "prompt":
                                        var c = L.macroModeState;
                                        if (c.isPlaying) {
                                            d(c.replaySearchQueries.shift(), !0, !1)
                                        } else $e(t, {
                                            onClose: function(e) {
                                                t.scrollTo(l.left, l.top), d(e, !0, !0);
                                                var n = L.macroModeState;
                                                n.isRecording && function(e, t) {
                                                    if (!e.isPlaying) {
                                                        var n = e.latestRegister,
                                                            r = L.registerController.getRegister(n);
                                                        r && r.pushSearchQuery && r.pushSearchQuery(t)
                                                    }
                                                }(n, e)
                                            },
                                            prefix: a,
                                            desc: "(JavaScript regexp)",
                                            onKeyUp: function(e, n, r) {
                                                var i, a, s, c = _(e);
                                                "<Up>" == c || "<Down>" == c ? (i = "<Up>" == c, a = e.target ? e.target.selectionEnd : 0, r(n = L.searchHistoryController.nextMatch(n, i) || ""), a && e.target && (e.target.selectionEnd = e.target.selectionStart = Math.min(a, e.target.value.length))) : c && "<Left>" != c && "<Right>" != c && L.searchHistoryController.reset();
                                                try {
                                                    s = Ue(t, n, !0, !0)
                                                } catch (e) {}
                                                s ? t.scrollIntoView(Je(t, !o, s), 30) : (ze(t), t.scrollTo(l.left, l.top))
                                            },
                                            onKeyDown: function(n, r, o) {
                                                var i = _(n);
                                                "<Esc>" == i || "<C-c>" == i || "<C-[>" == i || "<BS>" == i && "" == r ? (L.searchHistoryController.pushInput(r), L.searchHistoryController.reset(), Ue(t, s), ze(t), t.scrollTo(l.left, l.top), e.e_stop(n), U(t), o(), t.focus()) : "<Up>" == i || "<Down>" == i ? e.e_stop(n) : "<C-u>" == i && (e.e_stop(n), o(""))
                                            }
                                        });
                                        break;
                                    case "wordUnderCursor":
                                        var u = xe(t, {
                                                noSymbol: !0
                                            }),
                                            h = !0;
                                        if (u || (u = xe(t, {
                                                noSymbol: !1
                                            }), h = !1), !u) return We(t, "No word under cursor"), void U(t);
                                        let n = t.getLine(u.start.line).substring(u.start.ch, u.end.ch);
                                        n = h && i ? "\\b" + n + "\\b" : n.replace(/([.?*+$\[\]\/\\(){}|\-])/g, "\\$1"), L.jumpList.cachedCursor = t.getCursor(), t.setCursor(u.start), d(n, !0, !1)
                                }
                            }

                            function d(e, o, i) {
                                L.searchHistoryController.pushInput(e), L.searchHistoryController.reset();
                                try {
                                    Ue(t, e, o, i)
                                } catch (a) {
                                    return We(t, "Invalid regex: " + e), void U(t)
                                }
                                X.processMotion(t, n, {
                                    keys: "",
                                    type: "motion",
                                    motion: "findNext",
                                    motionArgs: {
                                        forward: !0,
                                        toJumplist: r.searchArgs.toJumplist
                                    }
                                })
                            }
                        },
                        processEx: function(t, n, r) {
                            function o(e) {
                                L.exCommandHistoryController.pushInput(e), L.exCommandHistoryController.reset(), tt.processCommand(t, e), t.state.vim && U(t)
                            }

                            function i(n, r, o) {
                                var i, a, s = _(n);
                                ("<Esc>" == s || "<C-c>" == s || "<C-[>" == s || "<BS>" == s && "" == r) && (L.exCommandHistoryController.pushInput(r), L.exCommandHistoryController.reset(), e.e_stop(n), U(t), o(), t.focus()), "<Up>" == s || "<Down>" == s ? (e.e_stop(n), i = "<Up>" == s, a = n.target ? n.target.selectionEnd : 0, o(r = L.exCommandHistoryController.nextMatch(r, i) || ""), a && n.target && (n.target.selectionEnd = n.target.selectionStart = Math.min(a, n.target.value.length))) : "<C-u>" == s ? (e.e_stop(n), o("")) : s && "<Left>" != s && "<Right>" != s && L.exCommandHistoryController.reset()
                            }
                            "keyToEx" == r.type ? tt.processCommand(t, r.exArgs.input) : n.visualMode ? $e(t, {
                                onClose: o,
                                prefix: ":",
                                value: "'<,'>",
                                onKeyDown: i,
                                selectValueOnOpen: !1
                            }) : $e(t, {
                                onClose: o,
                                prefix: ":",
                                onKeyDown: i
                            })
                        },
                        evalInput: function(e, r) {
                            var o, i, a, s = r.inputState,
                                l = s.motion,
                                c = s.motionArgs || {
                                    repeat: 1
                                },
                                u = s.operator,
                                h = s.operatorArgs || {},
                                d = s.registerName,
                                m = r.sel,
                                p = ae(r.visualMode ? te(e, m.head) : e.getCursor("head")),
                                f = ae(r.visualMode ? te(e, m.anchor) : e.getCursor("anchor")),
                                g = ae(p),
                                v = ae(f);
                            if (u && this.recordLastEdit(r, s), (a = void 0 !== s.repeatOverride ? s.repeatOverride : s.getRepeat()) > 0 && c.explicitRepeat ? c.repeatIsExplicit = !0 : (c.noRepeat || !c.explicitRepeat && 0 === a) && (a = 1, c.repeatIsExplicit = !1), s.selectedCharacter && (c.selectedCharacter = h.selectedCharacter = s.selectedCharacter), c.repeat = a, U(e), l) {
                                var C = G[l](e, p, c, r, s);
                                if (r.lastMotion = G[l], !C) return;
                                if (c.toJumplist) {
                                    var k = L.jumpList,
                                        w = k.cachedCursor;
                                    w ? (Se(e, w, C), delete k.cachedCursor) : Se(e, p, C)
                                }
                                C instanceof Array ? (i = C[0], o = C[1]) : o = C, o || (o = ae(p)), r.visualMode ? (r.visualBlock && o.ch === 1 / 0 || (o = te(e, o, g)), i && (i = te(e, i)), i = i || v, m.anchor = i, m.head = o, ye(e), Te(e, r, "<", le(i, o) ? i : o), Te(e, r, ">", le(i, o) ? o : i)) : u || (o = te(e, o, g), e.setCursor(o.line, o.ch))
                            }
                            if (u) {
                                if (h.lastSel) {
                                    i = v;
                                    var x = h.lastSel,
                                        S = Math.abs(x.head.line - x.anchor.line),
                                        M = Math.abs(x.head.ch - x.anchor.ch);
                                    o = x.visualLine ? new t(v.line + S, v.ch) : x.visualBlock ? new t(v.line + S, v.ch + M) : x.head.line == x.anchor.line ? new t(v.line, v.ch + M) : new t(v.line + S, v.ch), r.visualMode = !0, r.visualLine = x.visualLine, r.visualBlock = x.visualBlock, m = r.sel = {
                                        anchor: i,
                                        head: o
                                    }, ye(e)
                                } else r.visualMode && (h.lastSel = {
                                    anchor: ae(m.anchor),
                                    head: ae(m.head),
                                    visualBlock: r.visualBlock,
                                    visualLine: r.visualLine
                                });
                                var b, A, E, O, T;
                                if (r.visualMode) {
                                    if (b = ce(m.head, m.anchor), A = ue(m.head, m.anchor), E = r.visualLine || h.linewise, O = r.visualBlock ? "block" : E ? "line" : "char", T = Ce(e, {
                                            anchor: (N = n(e, b, A)).start,
                                            head: N.end
                                        }, O), E) {
                                        var R = T.ranges;
                                        if ("block" == O)
                                            for (var B = 0; B < R.length; B++) R[B].head.ch = de(e, R[B].head.line);
                                        else "line" == O && (R[0].head = new t(R[0].head.line + 1, 0))
                                    }
                                } else {
                                    if (b = ae(i || v), le(A = ae(o || g), b)) {
                                        var I = b;
                                        b = A, A = I
                                    }(E = c.linewise || h.linewise) ? function(e, t, n) {
                                        t.ch = 0, n.ch = 0, n.line++
                                    }(0, b, A) : c.forward && function(e, t, n) {
                                        var r = e.getRange(t, n);
                                        if (/\n\s*$/.test(r)) {
                                            var o = r.split("\n");
                                            o.pop();
                                            for (var i = o.pop(); o.length > 0 && i && y(i); i = o.pop()) n.line--, n.ch = 0;
                                            i ? (n.line--, n.ch = de(e, n.line)) : n.ch = 0
                                        }
                                    }(e, b, A), O = "char";
                                    var N, K = !c.inclusive || E;
                                    T = Ce(e, {
                                        anchor: (N = n(e, b, A)).start,
                                        head: N.end
                                    }, O, K)
                                }
                                e.setSelections(T.ranges, T.primary), r.lastMotion = null, h.repeat = a, h.registerName = d, h.linewise = E;
                                var D = Y[u](e, h, T.ranges, v, o);
                                r.visualMode && ke(e, null != D), D && e.setCursor(D)
                            }
                        },
                        recordLastEdit: function(e, t, n) {
                            var r = L.macroModeState;
                            r.isPlaying || (e.lastEditInputState = t, e.lastEditActionCommand = n, r.lastInsertModeChanges.changes = [], r.lastInsertModeChanges.expectCursorActivityForChange = !1, r.lastInsertModeChanges.visualBlock = e.visualBlock ? e.sel.head.line - e.sel.anchor.line : 0)
                        }
                    },
                    G = {
                        moveToTopLine: function(e, n, r) {
                            var o = Ge(e).top + r.repeat - 1;
                            return new t(o, we(e.getLine(o)))
                        },
                        moveToMiddleLine: function(e) {
                            var n = Ge(e),
                                r = Math.floor(.5 * (n.top + n.bottom));
                            return new t(r, we(e.getLine(r)))
                        },
                        moveToBottomLine: function(e, n, r) {
                            var o = Ge(e).bottom - r.repeat + 1;
                            return new t(o, we(e.getLine(o)))
                        },
                        expandToLine: function(e, n, r) {
                            return new t(n.line + r.repeat - 1, 1 / 0)
                        },
                        findNext: function(e, t, n) {
                            var r = De(e),
                                o = r.getQuery();
                            if (o) {
                                var i = !n.forward;
                                return i = r.isReversed() ? !i : i, Qe(e, o), Je(e, i, o, n.repeat)
                            }
                        },
                        findAndSelectNextInclusive: function(n, r, o, i, a) {
                            var s = De(n),
                                l = s.getQuery();
                            if (l) {
                                var c = !o.forward,
                                    u = function(e, n, r, o, i) {
                                        return e.operation((function() {
                                            void 0 === o && (o = 1);
                                            var a = e.getCursor(),
                                                s = e.getSearchCursor(r, a),
                                                l = s.find(!n);
                                            !i.visualMode && l && se(s.from(), a) && s.find(!n);
                                            for (var c = 0; c < o; c++)
                                                if (!(l = s.find(n)) && !(s = e.getSearchCursor(r, n ? new t(e.lastLine()) : new t(e.firstLine(), 0))).find(n)) return;
                                            return [s.from(), s.to()]
                                        }))
                                    }(n, c = s.isReversed() ? !c : c, l, o.repeat, i);
                                if (u) {
                                    if (a.operator) return u;
                                    var h = u[0],
                                        d = new t(u[1].line, u[1].ch - 1);
                                    if (i.visualMode) {
                                        (i.visualLine || i.visualBlock) && (i.visualLine = !1, i.visualBlock = !1, e.signal(n, "vim-mode-change", {
                                            mode: "visual",
                                            subMode: ""
                                        }));
                                        var m = i.sel.anchor;
                                        if (m) return s.isReversed() ? o.forward ? [m, h] : [m, d] : o.forward ? [m, d] : [m, h]
                                    } else i.visualMode = !0, i.visualLine = !1, i.visualBlock = !1, e.signal(n, "vim-mode-change", {
                                        mode: "visual",
                                        subMode: ""
                                    });
                                    return c ? [d, h] : [h, d]
                                }
                            }
                        },
                        goToMark: function(e, t, n, r) {
                            var o = Ze(e, r, n.selectedCharacter || "");
                            return o ? n.linewise ? {
                                line: o.line,
                                ch: we(e.getLine(o.line))
                            } : o : null
                        },
                        moveToOtherHighlightedEnd: function(e, n, r, o) {
                            if (o.visualBlock && r.sameLine) {
                                var i = o.sel;
                                return [te(e, new t(i.anchor.line, i.head.ch)), te(e, new t(i.head.line, i.anchor.ch))]
                            }
                            return [o.sel.head, o.sel.anchor]
                        },
                        jumpToMark: function(e, n, r, o) {
                            for (var i = n, a = 0; a < r.repeat; a++) {
                                var s = i;
                                for (var l in o.marks)
                                    if (g(l)) {
                                        var c = o.marks[l].find();
                                        if (!(r.forward ? le(c, s) : le(s, c)) && (!r.linewise || c.line != s.line)) {
                                            var u = se(s, i),
                                                h = r.forward ? he(s, c, i) : he(i, c, s);
                                            (u || h) && (i = c)
                                        }
                                    }
                            }
                            return r.linewise && (i = new t(i.line, we(e.getLine(i.line)))), i
                        },
                        moveByCharacters: function(e, n, r) {
                            var o = n,
                                i = r.repeat,
                                a = r.forward ? o.ch + i : o.ch - i;
                            return new t(o.line, a)
                        },
                        moveByLines: function(e, n, r, o) {
                            var i = n,
                                a = i.ch;
                            switch (o.lastMotion) {
                                case this.moveByLines:
                                case this.moveByDisplayLines:
                                case this.moveByScroll:
                                case this.moveToColumn:
                                case this.moveToEol:
                                    a = o.lastHPos;
                                    break;
                                default:
                                    o.lastHPos = a
                            }
                            var s = r.repeat + (r.repeatOffset || 0),
                                l = r.forward ? i.line + s : i.line - s,
                                c = e.firstLine(),
                                u = e.lastLine(),
                                h = e.findPosV(i, r.forward ? s : -s, "line", o.lastHSPos);
                            return (r.forward ? h.line > l : h.line < l) && (l = h.line, a = h.ch), l < c && i.line == c ? this.moveToStartOfLine(e, n, r, o) : l > u && i.line == u ? Ee(e, n, r, o, !0) : (r.toFirstChar && (a = we(e.getLine(l)), o.lastHPos = a), o.lastHSPos = e.charCoords(new t(l, a), "div").left, new t(l, a))
                        },
                        moveByDisplayLines: function(e, n, r, o) {
                            var i = n;
                            switch (o.lastMotion) {
                                case this.moveByDisplayLines:
                                case this.moveByScroll:
                                case this.moveByLines:
                                case this.moveToColumn:
                                case this.moveToEol:
                                    break;
                                default:
                                    o.lastHSPos = e.charCoords(i, "div").left
                            }
                            var a = r.repeat,
                                s = e.findPosV(i, r.forward ? a : -a, "line", o.lastHSPos);
                            if (s.hitSide)
                                if (r.forward) {
                                    var l = {
                                        top: e.charCoords(s, "div").top + 8,
                                        left: o.lastHSPos
                                    };
                                    s = e.coordsChar(l, "div")
                                } else {
                                    var c = e.charCoords(new t(e.firstLine(), 0), "div");
                                    c.left = o.lastHSPos, s = e.coordsChar(c, "div")
                                }
                            return o.lastHPos = s.ch, s
                        },
                        moveByPage: function(e, t, n) {
                            var r = t,
                                o = n.repeat;
                            return e.findPosV(r, n.forward ? o : -o, "page")
                        },
                        moveByParagraph: function(e, t, n) {
                            var r = n.forward ? 1 : -1;
                            return Be(e, t, n.repeat, r).start
                        },
                        moveBySentence: function(e, n, r) {
                            var o = r.forward ? 1 : -1;
                            return function(e, n, r, o) {
                                function i(e, t) {
                                    if (t.pos + t.dir < 0 || t.pos + t.dir >= t.line.length) {
                                        if (t.ln += t.dir, !f(e, t.ln)) return t.line = null, t.ln = null, void(t.pos = null);
                                        t.line = e.getLine(t.ln), t.pos = t.dir > 0 ? 0 : t.line.length - 1
                                    } else t.pos += t.dir
                                }

                                function a(e, t, n, r) {
                                    var o = "" === (c = e.getLine(t)),
                                        a = {
                                            line: c,
                                            ln: t,
                                            pos: n,
                                            dir: r
                                        },
                                        s = {
                                            ln: a.ln,
                                            pos: a.pos
                                        },
                                        l = "" === a.line;
                                    for (i(e, a); null !== a.line;) {
                                        if (s.ln = a.ln, s.pos = a.pos, "" === a.line && !l) return {
                                            ln: a.ln,
                                            pos: a.pos
                                        };
                                        if (o && "" !== a.line && !y(a.line[a.pos])) return {
                                            ln: a.ln,
                                            pos: a.pos
                                        };
                                        !C(a.line[a.pos]) || o || a.pos !== a.line.length - 1 && !y(a.line[a.pos + 1]) || (o = !0), i(e, a)
                                    }
                                    var c = e.getLine(s.ln);
                                    s.pos = 0;
                                    for (var u = c.length - 1; u >= 0; --u)
                                        if (!y(c[u])) {
                                            s.pos = u;
                                            break
                                        }
                                    return s
                                }

                                function s(e, t, n, r) {
                                    var o = {
                                            line: l = e.getLine(t),
                                            ln: t,
                                            pos: n,
                                            dir: r
                                        },
                                        a = {
                                            ln: o.ln,
                                            pos: null
                                        },
                                        s = "" === o.line;
                                    for (i(e, o); null !== o.line;) {
                                        if ("" === o.line && !s) return null !== a.pos ? a : {
                                            ln: o.ln,
                                            pos: o.pos
                                        };
                                        if (C(o.line[o.pos]) && null !== a.pos && (o.ln !== a.ln || o.pos + 1 !== a.pos)) return a;
                                        "" === o.line || y(o.line[o.pos]) || (s = !1, a = {
                                            ln: o.ln,
                                            pos: o.pos
                                        }), i(e, o)
                                    }
                                    var l = e.getLine(a.ln);
                                    a.pos = 0;
                                    for (var c = 0; c < l.length; ++c)
                                        if (!y(l[c])) {
                                            a.pos = c;
                                            break
                                        }
                                    return a
                                }
                                var l = {
                                    ln: n.line,
                                    pos: n.ch
                                };
                                for (; r > 0;) l = o < 0 ? s(e, l.ln, l.pos, o) : a(e, l.ln, l.pos, o), r--;
                                return new t(l.ln, l.pos)
                            }(e, n, r.repeat, o)
                        },
                        moveByScroll: function(e, t, n, r) {
                            var o, i = e.getScrollInfo(),
                                a = n.repeat;
                            a || (a = i.clientHeight / (2 * e.defaultTextHeight()));
                            var s = e.charCoords(t, "local");
                            if (n.repeat = a, !(o = G.moveByDisplayLines(e, t, n, r))) return null;
                            var l = e.charCoords(o, "local");
                            return e.scrollTo(null, i.top + l.top - s.top), o
                        },
                        moveByWords: function(e, n, r) {
                            return function(e, n, r, o, i, a) {
                                var s = ae(n),
                                    l = [];
                                (o && !i || !o && i) && r++;
                                for (var c = !(o && i), u = 0; u < r; u++) {
                                    var h = Ae(e, n, o, a, c);
                                    if (!h) {
                                        var d = de(e, e.lastLine());
                                        l.push(o ? {
                                            line: e.lastLine(),
                                            from: d,
                                            to: d
                                        } : {
                                            line: 0,
                                            from: 0,
                                            to: 0
                                        });
                                        break
                                    }
                                    l.push(h), n = new t(h.line, o ? h.to - 1 : h.from)
                                }
                                var m = l.length != r,
                                    p = l[0],
                                    f = l.pop();
                                return o && !i ? (m || p.from == s.ch && p.line == s.line || (f = l.pop()), f && new t(f.line, f.from)) : o && i ? f && new t(f.line, f.to - 1) : !o && i ? (m || p.to == s.ch && p.line == s.line || (f = l.pop()), f && new t(f.line, f.to)) : f && new t(f.line, f.from)
                            }(e, n, r.repeat, !!r.forward, !!r.wordEnd, !!r.bigWord)
                        },
                        moveTillCharacter: function(e, t, n) {
                            var r = Oe(e, n.repeat, n.forward, n.selectedCharacter, t),
                                o = n.forward ? -1 : 1;
                            return Me(o, n), r ? (r.ch += o, r) : null
                        },
                        moveToCharacter: function(e, t, n) {
                            var r = n.repeat;
                            return Me(0, n), Oe(e, r, n.forward, n.selectedCharacter, t) || t
                        },
                        moveToSymbol: function(e, n, r) {
                            var o = r.repeat;
                            return r.selectedCharacter && function(e, n, r, o) {
                                var i = ae(e.getCursor()),
                                    a = r ? 1 : -1,
                                    s = r ? e.lineCount() : -1,
                                    l = i.ch,
                                    c = i.line,
                                    u = e.getLine(c),
                                    h = {
                                        lineText: u,
                                        nextCh: u.charAt(l),
                                        lastCh: null,
                                        index: l,
                                        symb: o,
                                        reverseSymb: (r ? {
                                            ")": "(",
                                            "}": "{"
                                        } : {
                                            "(": ")",
                                            "{": "}"
                                        })[o],
                                        forward: r,
                                        depth: 0,
                                        curMoveThrough: !1
                                    },
                                    d = Le[o];
                                if (!d) return i;
                                var m = be[d].init,
                                    p = be[d].isComplete;
                                m && m(h);
                                for (; c !== s && n;) {
                                    if (h.index += a, h.nextCh = h.lineText.charAt(h.index), !h.nextCh) {
                                        if (c += a, h.lineText = e.getLine(c) || "", a > 0) h.index = 0;
                                        else {
                                            var f = h.lineText.length;
                                            h.index = f > 0 ? f - 1 : 0
                                        }
                                        h.nextCh = h.lineText.charAt(h.index)
                                    }
                                    p(h) && (i.line = c, i.ch = h.index, n--)
                                }
                                if (h.nextCh || h.curMoveThrough) return new t(c, h.index);
                                return i
                            }(e, o, r.forward, r.selectedCharacter) || n
                        },
                        moveToColumn: function(e, n, r, o) {
                            var i = r.repeat;
                            return o.lastHPos = i - 1, o.lastHSPos = e.charCoords(n, "div").left,
                                function(e, n) {
                                    var r = e.getCursor().line;
                                    return te(e, new t(r, n - 1))
                                }(e, i)
                        },
                        moveToEol: function(e, t, n, r) {
                            return Ee(e, t, n, r, !1)
                        },
                        moveToFirstNonWhiteSpaceCharacter: function(e, n) {
                            var r = n;
                            return new t(r.line, we(e.getLine(r.line)))
                        },
                        moveToMatchedSymbol: function(e, n) {
                            for (var r, o = n, i = o.line, a = o.ch, s = e.getLine(i); a < s.length; a++)
                                if ((r = s.charAt(a)) && -1 != "()[]{}".indexOf(r)) {
                                    var l = e.getTokenTypeAt(new t(i, a + 1));
                                    if ("string" !== l && "comment" !== l) break
                                }
                            if (a < s.length) {
                                var c = "<" === r || ">" === r ? /[(){}[\]<>]/ : /[(){}[\]]/;
                                return e.findMatchingBracket(new t(i, a), {
                                    bracketRegex: c
                                }).to
                            }
                            return o
                        },
                        moveToStartOfLine: function(e, n) {
                            return new t(n.line, 0)
                        },
                        moveToLineOrEdgeOfDocument: function(e, n, r) {
                            var o = r.forward ? e.lastLine() : e.firstLine();
                            return r.repeatIsExplicit && (o = r.repeat - e.getOption("firstLineNumber")), new t(o, we(e.getLine(o)))
                        },
                        moveToStartOfDisplayLine: function(e) {
                            return e.execCommand("goLineLeft"), e.getCursor()
                        },
                        moveToEndOfDisplayLine: function(e) {
                            e.execCommand("goLineRight");
                            var t = e.getCursor();
                            return "before" == t.sticky && t.ch--, t
                        },
                        textObjectManipulation: function(n, r, o, i) {
                            var a = o.selectedCharacter || "";
                            "b" == a ? a = "(" : "B" == a && (a = "{");
                            var s, l, c = !o.textObjectInner;
                            if ({
                                    "(": ")",
                                    ")": "(",
                                    "{": "}",
                                    "}": "{",
                                    "[": "]",
                                    "]": "[",
                                    "<": ">",
                                    ">": "<"
                                }[a]) {
                                if (l = !0, !(s = Ne(n, r, a, c))) {
                                    var u = n.getSearchCursor(new RegExp("\\" + a, "g"), r);
                                    u.find() && (s = Ne(n, u.from(), a, c))
                                }
                            } else if ({
                                    "'": !0,
                                    '"': !0,
                                    "`": !0
                                }[a]) l = !0, s = function(e, n, r, o) {
                                var i, a, s, l, c = ae(n),
                                    u = e.getLine(c.line).split(""),
                                    h = u.indexOf(r);
                                if (c.ch < h) c.ch = h;
                                else if (h < c.ch && u[c.ch] == r) {
                                    var d = /string/.test(e.getTokenTypeAt(re(n, 0, 1))),
                                        m = /string/.test(e.getTokenTypeAt(n));
                                    d && !m || (a = c.ch, --c.ch)
                                }
                                if (u[c.ch] != r || a)
                                    for (s = c.ch; s > -1 && !i; s--) u[s] == r && (i = s + 1);
                                else i = c.ch + 1;
                                if (i && !a)
                                    for (s = i, l = u.length; s < l && !a; s++) u[s] == r && (a = s);
                                if (!i || !a) return {
                                    start: c,
                                    end: c
                                };
                                o && (--i, ++a);
                                return {
                                    start: new t(c.line, i),
                                    end: new t(c.line, a)
                                }
                            }(n, r, a, c);
                            else if ("W" === a || "w" === a)
                                for (var h = o.repeat || 1; h-- > 0;) {
                                    var d = xe(n, {
                                        inclusive: c,
                                        innerWord: !c,
                                        bigWord: "W" === a,
                                        noSymbol: "W" === a,
                                        multiline: !0
                                    }, s && s.end);
                                    d && (s || (s = d), s.end = d.end)
                                } else if ("p" === a)
                                    if (s = Be(n, r, o.repeat, 0, c), o.linewise = !0, i.visualMode) i.visualLine || (i.visualLine = !0);
                                    else {
                                        var m = i.inputState.operatorArgs;
                                        m && (m.linewise = !0), s.end.line--
                                    }
                            else if ("t" === a) s = function(t, n, r) {
                                var o = n;
                                if (!e.findMatchingTag || !e.findEnclosingTag) return {
                                    start: o,
                                    end: o
                                };
                                var i = e.findMatchingTag(t, n) || e.findEnclosingTag(t, n);
                                if (!i || !i.open || !i.close) return {
                                    start: o,
                                    end: o
                                };
                                if (r) return {
                                    start: i.open.from,
                                    end: i.close.to
                                };
                                return {
                                    start: i.open.to,
                                    end: i.close.from
                                }
                            }(n, r, c);
                            else if ("s" === a) {
                                var p = n.getLine(r.line);
                                r.ch > 0 && C(p[r.ch]) && (r.ch -= 1);
                                var f = Ie(n, r, o.repeat, 1, c),
                                    g = Ie(n, r, o.repeat, -1, c);
                                y(n.getLine(g.line)[g.ch]) && y(n.getLine(f.line)[f.ch - 1]) && (g = {
                                    line: g.line,
                                    ch: g.ch + 1
                                }), s = {
                                    start: g,
                                    end: f
                                }
                            }
                            return s ? n.state.vim.visualMode ? function(e, n, r, o) {
                                var i, a = e.state.vim.sel,
                                    s = o ? n : a.head,
                                    l = o ? n : a.anchor;
                                le(r, n) && (i = r, r = n, n = i);
                                le(s, l) ? (s = ce(n, s), l = ue(l, r)) : (l = ce(n, l), -1 == (s = re(s = ue(s, r), 0, -1)).ch && s.line != e.firstLine() && (s = new t(s.line - 1, de(e, s.line - 1))));
                                return [l, s]
                            }(n, s.start, s.end, l) : [s.start, s.end] : null
                        },
                        repeatLastCharacterSearch: function(e, t, n) {
                            var r = L.lastCharacterSearch,
                                o = n.repeat,
                                i = n.forward === r.forward,
                                a = (r.increment ? 1 : 0) * (i ? -1 : 1);
                            e.moveH(-a, "char"), n.inclusive = !!i;
                            var s = Oe(e, o, i, r.selectedCharacter);
                            return s ? (s.ch += a, s) : (e.moveH(a, "char"), t)
                        }
                    };

                function Z(e, t) {
                    for (var n = [], r = 0; r < t; r++) n.push(e);
                    return n
                }
                var Y = {
                    change: function(e, n, r) {
                        var o, i, a = e.state.vim,
                            s = r[0].anchor,
                            l = r[0].head;
                        if (a.visualMode)
                            if (n.fullLine) l.ch = Number.MAX_VALUE, l.line--, e.setSelection(s, l), i = e.getSelection(), e.replaceSelection(""), o = s;
                            else {
                                i = e.getSelection();
                                var c = Z("", r.length);
                                e.replaceSelections(c), o = ce(r[0].head, r[0].anchor)
                            }
                        else {
                            i = e.getRange(s, l);
                            var u = a.lastEditInputState;
                            if ("moveByWords" == u ? .motion && !y(i)) {
                                var h = /\s+$/.exec(i);
                                h && u.motionArgs && u.motionArgs.forward && (l = re(l, 0, -h[0].length), i = i.slice(0, -h[0].length))
                            }
                            n.linewise && (s = new t(s.line, we(e.getLine(s.line))), l.line > s.line && (l = new t(l.line - 1, Number.MAX_VALUE))), e.replaceRange("", s, l), o = s
                        }
                        L.registerController.pushText(n.registerName, "change", i, n.linewise, r.length > 1), ee.enterInsertMode(e, {
                            head: o
                        }, e.state.vim)
                    },
                    delete: function(e, n, r) {
                        var o, i, a = e.state.vim;
                        if (a.visualBlock) {
                            i = e.getSelection();
                            var s = Z("", r.length);
                            e.replaceSelections(s), o = ce(r[0].head, r[0].anchor)
                        } else {
                            var l = r[0].anchor,
                                c = r[0].head;
                            n.linewise && c.line != e.firstLine() && l.line == e.lastLine() && l.line == c.line - 1 && (l.line == e.firstLine() ? l.ch = 0 : l = new t(l.line - 1, de(e, l.line - 1))), i = e.getRange(l, c), e.replaceRange("", l, c), o = l, n.linewise && (o = G.moveToFirstNonWhiteSpaceCharacter(e, l))
                        }
                        return L.registerController.pushText(n.registerName, "delete", i, n.linewise, a.visualBlock), te(e, o)
                    },
                    indent: function(e, t, n) {
                        var r = e.state.vim,
                            o = r.visualMode ? t.repeat || 0 : 1;
                        if (e.indentMore)
                            for (var i = 0; i < o; i++) t.indentRight ? e.indentMore() : e.indentLess();
                        else {
                            var a = n[0].anchor.line,
                                s = r.visualBlock ? n[n.length - 1].anchor.line : n[0].head.line;
                            t.linewise && s--;
                            for (var l = a; l <= s; l++)
                                for (i = 0; i < o; i++) e.indentLine(l, t.indentRight)
                        }
                        return G.moveToFirstNonWhiteSpaceCharacter(e, n[0].anchor)
                    },
                    indentAuto: function(e, t, n) {
                        return e.execCommand("indentAuto"), G.moveToFirstNonWhiteSpaceCharacter(e, n[0].anchor)
                    },
                    hardWrap: function(e, n, r, o) {
                        if (e.hardWrap) {
                            var i = r[0].anchor.line,
                                a = r[0].head.line;
                            n.linewise && a--;
                            var s = e.hardWrap({
                                from: i,
                                to: a
                            });
                            return s > i && n.linewise && s--, n.keepCursor ? o : new t(s, 0)
                        }
                    },
                    changeCase: function(e, t, n, r, o) {
                        for (var i = e.getSelections(), a = [], s = t.toLower, l = 0; l < i.length; l++) {
                            var c = i[l],
                                u = "";
                            if (!0 === s) u = c.toLowerCase();
                            else if (!1 === s) u = c.toUpperCase();
                            else
                                for (var h = 0; h < c.length; h++) {
                                    var d = c.charAt(h);
                                    u += v(d) ? d.toLowerCase() : d.toUpperCase()
                                }
                            a.push(u)
                        }
                        return e.replaceSelections(a), t.shouldMoveCursor ? o : !e.state.vim.visualMode && t.linewise && n[0].anchor.line + 1 == n[0].head.line ? G.moveToFirstNonWhiteSpaceCharacter(e, r) : t.linewise ? r : ce(n[0].anchor, n[0].head)
                    },
                    yank: function(e, t, n, r) {
                        var o = e.state.vim,
                            i = e.getSelection(),
                            a = o.visualMode ? ce(o.sel.anchor, o.sel.head, n[0].head, n[0].anchor) : r;
                        return L.registerController.pushText(t.registerName, "yank", i, t.linewise, o.visualBlock), a
                    }
                };
                var ee = {
                    jumpListWalk: function(e, t, n) {
                        if (!n.visualMode) {
                            var r = t.repeat || 1,
                                o = t.forward,
                                i = L.jumpList.move(e, o ? r : -r),
                                a = i ? i.find() : void 0;
                            a = a || e.getCursor(), e.setCursor(a)
                        }
                    },
                    scroll: function(e, t, n) {
                        if (!n.visualMode) {
                            var r = t.repeat || 1,
                                o = e.defaultTextHeight(),
                                i = e.getScrollInfo().top,
                                a = o * r,
                                s = t.forward ? i + a : i - a,
                                l = ae(e.getCursor()),
                                c = e.charCoords(l, "local");
                            if (t.forward) s > c.top ? (l.line += (s - c.top) / o, l.line = Math.ceil(l.line), e.setCursor(l), c = e.charCoords(l, "local"), e.scrollTo(null, c.top)) : e.scrollTo(null, s);
                            else {
                                var u = s + e.getScrollInfo().clientHeight;
                                u < c.bottom ? (l.line -= (c.bottom - u) / o, l.line = Math.floor(l.line), e.setCursor(l), c = e.charCoords(l, "local"), e.scrollTo(null, c.bottom - e.getScrollInfo().clientHeight)) : e.scrollTo(null, s)
                            }
                        }
                    },
                    scrollToCursor: function(e, n) {
                        var r = e.getCursor().line,
                            o = e.charCoords(new t(r, 0), "local"),
                            i = e.getScrollInfo().clientHeight,
                            a = o.top;
                        switch (n.position) {
                            case "center":
                                a = o.bottom - i / 2;
                                break;
                            case "bottom":
                                var s = new t(r, e.getLine(r).length - 1);
                                a = a - i + (e.charCoords(s, "local").bottom - a)
                        }
                        e.scrollTo(null, a)
                    },
                    replayMacro: function(e, t, n) {
                        var r = t.selectedCharacter || "",
                            o = t.repeat || 1,
                            i = L.macroModeState;
                        for ("@" == r ? r = i.latestRegister : i.latestRegister = r; o--;) ot(e, n, i, r)
                    },
                    enterMacroRecordMode: function(e, t) {
                        var n = L.macroModeState,
                            r = t.selectedCharacter;
                        L.registerController.isValidRegister(r) && n.enterMacroRecordMode(e, r)
                    },
                    toggleOverwrite: function(t) {
                        t.state.overwrite ? (t.toggleOverwrite(!1), t.setOption("keyMap", "vim-insert"), e.signal(t, "vim-mode-change", {
                            mode: "insert"
                        })) : (t.toggleOverwrite(!0), t.setOption("keyMap", "vim-replace"), e.signal(t, "vim-mode-change", {
                            mode: "replace"
                        }))
                    },
                    enterInsertMode: function(r, o, i) {
                        if (!r.getOption("readOnly")) {
                            i.insertMode = !0, i.insertModeRepeat = o && o.repeat || 1;
                            var a = o ? o.insertAt : null,
                                s = i.sel,
                                l = o.head || r.getCursor("head"),
                                c = r.listSelections().length;
                            if ("eol" == a) l = new t(l.line, de(r, l.line));
                            else if ("bol" == a) l = new t(l.line, 0);
                            else if ("charAfter" == a) {
                                l = n(r, l, re(l, 0, 1)).end
                            } else if ("firstNonBlank" == a) {
                                l = n(r, l, G.moveToFirstNonWhiteSpaceCharacter(r, l)).end
                            } else if ("startOfSelectedArea" == a) {
                                if (!i.visualMode) return;
                                i.visualBlock ? (l = new t(Math.min(s.head.line, s.anchor.line), Math.min(s.head.ch, s.anchor.ch)), c = Math.abs(s.head.line - s.anchor.line) + 1) : l = s.head.line < s.anchor.line ? s.head : new t(s.anchor.line, 0)
                            } else if ("endOfSelectedArea" == a) {
                                if (!i.visualMode) return;
                                i.visualBlock ? (l = new t(Math.min(s.head.line, s.anchor.line), Math.max(s.head.ch, s.anchor.ch) + 1), c = Math.abs(s.head.line - s.anchor.line) + 1) : l = s.head.line >= s.anchor.line ? re(s.head, 0, 1) : new t(s.anchor.line, 0)
                            } else if ("inplace" == a) {
                                if (i.visualMode) return
                            } else "lastEdit" == a && (l = Ye(r) || l);
                            r.setOption("disableInput", !1), o && o.replace ? (r.toggleOverwrite(!0), r.setOption("keyMap", "vim-replace"), e.signal(r, "vim-mode-change", {
                                mode: "replace"
                            })) : (r.toggleOverwrite(!1), r.setOption("keyMap", "vim-insert"), e.signal(r, "vim-mode-change", {
                                mode: "insert"
                            })), L.macroModeState.isPlaying || (r.on("change", it), i.insertEnd && i.insertEnd.clear(), i.insertEnd = r.setBookmark(l, {
                                insertLeft: !0
                            }), e.on(r.getInputField(), "keydown", ct)), i.visualMode && ke(r), ge(r, l, c)
                        }
                    },
                    toggleVisualMode: function(r, o, i) {
                        var a, s = o.repeat,
                            l = r.getCursor();
                        if (i.visualMode) i.visualLine != !!o.linewise || i.visualBlock != !!o.blockwise ? (i.visualLine = !!o.linewise, i.visualBlock = !!o.blockwise, e.signal(r, "vim-mode-change", {
                            mode: "visual",
                            subMode: i.visualLine ? "linewise" : i.visualBlock ? "blockwise" : ""
                        }), ye(r)) : ke(r);
                        else {
                            i.visualMode = !0, i.visualLine = !!o.linewise, i.visualBlock = !!o.blockwise;
                            var c = n(r, l, a = te(r, new t(l.line, l.ch + s - 1)));
                            i.sel = {
                                anchor: c.start,
                                head: c.end
                            }, e.signal(r, "vim-mode-change", {
                                mode: "visual",
                                subMode: i.visualLine ? "linewise" : i.visualBlock ? "blockwise" : ""
                            }), ye(r), Te(r, i, "<", ce(l, a)), Te(r, i, ">", ue(l, a))
                        }
                    },
                    reselectLastSelection: function(t, n, r) {
                        var o = r.lastSelection;
                        if (r.visualMode && ve(t, r), o) {
                            var i = o.anchorMark.find(),
                                a = o.headMark.find();
                            if (!i || !a) return;
                            r.sel = {
                                anchor: i,
                                head: a
                            }, r.visualMode = !0, r.visualLine = o.visualLine, r.visualBlock = o.visualBlock, ye(t), Te(t, r, "<", ce(i, a)), Te(t, r, ">", ue(i, a)), e.signal(t, "vim-mode-change", {
                                mode: "visual",
                                subMode: r.visualLine ? "linewise" : r.visualBlock ? "blockwise" : ""
                            })
                        }
                    },
                    joinLines: function(e, n, r) {
                        var o, i;
                        if (r.visualMode) {
                            if (o = e.getCursor("anchor"), le(i = e.getCursor("head"), o)) {
                                var a = i;
                                i = o, o = a
                            }
                            i.ch = de(e, i.line) - 1
                        } else {
                            var s = Math.max(n.repeat, 2);
                            o = e.getCursor(), i = te(e, new t(o.line + s - 1, 1 / 0))
                        }
                        for (var l = 0, c = o.line; c < i.line; c++) {
                            l = de(e, o.line);
                            var u = "",
                                h = 0;
                            if (!n.keepSpaces) {
                                var d = e.getLine(o.line + 1); - 1 == (h = d.search(/\S/)) ? h = d.length : u = " "
                            }
                            e.replaceRange(u, new t(o.line, l), new t(o.line + 1, h))
                        }
                        var m = te(e, new t(o.line, l));
                        r.visualMode && ke(e, !1), e.setCursor(m)
                    },
                    newLineAndEnterInsertMode: function(n, r, o) {
                        o.insertMode = !0;
                        var i = ae(n.getCursor());
                        i.line !== n.firstLine() || r.after ? (i.line = r.after ? i.line : i.line - 1, i.ch = de(n, i.line), n.setCursor(i), (e.commands.newlineAndIndentContinueComment || e.commands.newlineAndIndent)(n)) : (n.replaceRange("\n", new t(n.firstLine(), 0)), n.setCursor(n.firstLine(), 0));
                        this.enterInsertMode(n, {
                            repeat: r.repeat
                        }, o)
                    },
                    paste: function(e, t, n) {
                        var r = L.registerController.getRegister(t.registerName);
                        if ("+" === t.registerName) navigator.clipboard.readText().then((o => {
                            this.continuePaste(e, t, n, o, r)
                        }));
                        else {
                            var o = r.toString();
                            this.continuePaste(e, t, n, o, r)
                        }
                    },
                    continuePaste: function(e, n, r, o, i) {
                        var a = ae(e.getCursor());
                        if (o) {
                            if (n.matchIndent) {
                                var s = e.getOption("tabSize"),
                                    l = function(e) {
                                        var t = e.split("\t").length - 1,
                                            n = e.split(" ").length - 1;
                                        return t * s + 1 * n
                                    },
                                    c = e.getLine(e.getCursor().line),
                                    u = l(c.match(/^\s*/)[0]),
                                    h = o.replace(/\n$/, ""),
                                    d = o !== h,
                                    m = l(o.match(/^\s*/)[0]);
                                o = h.replace(/^\s*/gm, (function(t) {
                                    var n = u + (l(t) - m);
                                    if (n < 0) return "";
                                    if (e.getOption("indentWithTabs")) {
                                        var r = Math.floor(n / s);
                                        return Array(r + 1).join("\t")
                                    }
                                    return Array(n + 1).join(" ")
                                }));
                                o += d ? "\n" : ""
                            }
                            if (n.repeat > 1) o = Array(n.repeat + 1).join(o);
                            var p, f = i.linewise,
                                g = i.blockwise;
                            if (g) {
                                o = o.split("\n"), f && o.pop();
                                for (var v = 0; v < o.length; v++) o[v] = "" == o[v] ? " " : o[v];
                                a.ch += n.after ? 1 : 0, a.ch = Math.min(de(e, a.line), a.ch)
                            } else f ? r.visualMode ? o = r.visualLine ? o.slice(0, -1) : "\n" + o.slice(0, o.length - 1) + "\n" : n.after ? (o = "\n" + o.slice(0, o.length - 1), a.ch = de(e, a.line)) : a.ch = 0 : a.ch += n.after ? 1 : 0;
                            if (r.visualMode) {
                                var y;
                                r.lastPastedText = o;
                                var C = function(e, n) {
                                        var r = n.lastSelection,
                                            o = function() {
                                                var t = e.listSelections(),
                                                    n = t[0],
                                                    r = t[t.length - 1];
                                                return [le(n.anchor, n.head) ? n.anchor : n.head, le(r.anchor, r.head) ? r.head : r.anchor]
                                            },
                                            i = function() {
                                                var n = e.getCursor(),
                                                    o = e.getCursor(),
                                                    i = r.visualBlock;
                                                if (i) {
                                                    var a = i.width,
                                                        s = i.height;
                                                    o = new t(n.line + s, n.ch + a);
                                                    for (var l = [], c = n.line; c < o.line; c++) {
                                                        var u = {
                                                            anchor: new t(c, n.ch),
                                                            head: new t(c, o.ch)
                                                        };
                                                        l.push(u)
                                                    }
                                                    e.setSelections(l)
                                                } else {
                                                    var h = r.anchorMark.find(),
                                                        d = r.headMark.find(),
                                                        m = d.line - h.line,
                                                        p = d.ch - h.ch;
                                                    o = {
                                                        line: o.line + m,
                                                        ch: m ? o.ch : p + o.ch
                                                    }, r.visualLine && (n = new t(n.line, 0), o = new t(o.line, de(e, o.line))), e.setSelection(n, o)
                                                }
                                                return [n, o]
                                            };
                                        return n.visualMode ? o() : i()
                                    }(e, r),
                                    k = C[0],
                                    w = C[1],
                                    x = e.getSelection(),
                                    S = e.listSelections(),
                                    M = new Array(S.length).join("1").split("1");
                                r.lastSelection && (y = r.lastSelection.headMark.find()), L.registerController.unnamedRegister.setText(x), g ? (e.replaceSelections(M), w = new t(k.line + o.length - 1, k.ch), e.setCursor(k), fe(e, w), e.replaceSelections(o), p = k) : r.visualBlock ? (e.replaceSelections(M), e.setCursor(k), e.replaceRange(o, k, k), p = k) : (e.replaceRange(o, k, w), p = e.posFromIndex(e.indexFromPos(k) + o.length - 1)), y && (r.lastSelection.headMark = e.setBookmark(y)), f && (p.ch = 0)
                            } else if (g) {
                                e.setCursor(a);
                                for (v = 0; v < o.length; v++) {
                                    (b = a.line + v) > e.lastLine() && e.replaceRange("\n", new t(b, 0)), de(e, b) < a.ch && pe(e, b, a.ch)
                                }
                                e.setCursor(a), fe(e, new t(a.line + o.length - 1, a.ch)), e.replaceSelections(o), p = a
                            } else if (e.replaceRange(o, a), f) {
                                var b = n.after ? a.line + 1 : a.line;
                                p = new t(b, we(e.getLine(b)))
                            } else p = ae(a), /\n/.test(o) || (p.ch += o.length - (n.after ? 1 : 0));
                            r.visualMode && ke(e, !1), e.setCursor(p)
                        }
                    },
                    undo: function(t, n) {
                        t.operation((function() {
                            ie(t, e.commands.undo, n.repeat)(), t.setCursor(te(t, t.getCursor("start")))
                        }))
                    },
                    redo: function(t, n) {
                        ie(t, e.commands.redo, n.repeat)()
                    },
                    setRegister: function(e, t, n) {
                        n.inputState.registerName = t.selectedCharacter
                    },
                    insertRegister: function(e, t, n) {
                        var r = t.selectedCharacter,
                            o = L.registerController.getRegister(r),
                            i = o && o.toString();
                        i && e.replaceSelection(i)
                    },
                    oneNormalCommand: function(t, n, r) {
                        nt(t, !0), r.insertModeReturn = !0, e.on(t, "vim-command-done", (function n() {
                            r.visualMode || (r.insertModeReturn && (r.insertModeReturn = !1, r.insertMode || ee.enterInsertMode(t, {}, r)), e.off(t, "vim-command-done", n))
                        }))
                    },
                    setMark: function(e, t, n) {
                        var r = t.selectedCharacter;
                        r && Te(e, n, r, e.getCursor())
                    },
                    replace: function(r, o, i) {
                        var a, s, l = o.selectedCharacter || "",
                            c = r.getCursor(),
                            u = r.listSelections();
                        if (i.visualMode) c = r.getCursor("start"), s = r.getCursor("end");
                        else {
                            var h = r.getLine(c.line);
                            (a = c.ch + o.repeat) > h.length && (a = h.length), s = new t(c.line, a)
                        }
                        var d = n(r, c, s);
                        if (c = d.start, s = d.end, "\n" == l) i.visualMode || r.replaceRange("", c, s), (e.commands.newlineAndIndentContinueComment || e.commands.newlineAndIndent)(r);
                        else {
                            var m = r.getRange(c, s);
                            if (m = (m = m.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l)).replace(/[^\n]/g, l), i.visualBlock) {
                                var p = new Array(r.getOption("tabSize") + 1).join(" "),
                                    f = (m = (m = r.getSelection()).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l)).replace(/\t/g, p).replace(/[^\n]/g, l).split("\n");
                                r.replaceSelections(f)
                            } else r.replaceRange(m, c, s);
                            i.visualMode ? (c = le(u[0].anchor, u[0].head) ? u[0].anchor : u[0].head, r.setCursor(c), ke(r, !1)) : r.setCursor(re(s, 0, -1))
                        }
                    },
                    incrementNumberToken: function(e, n) {
                        for (var r, o, i, a, s = e.getCursor(), l = e.getLine(s.line), c = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi; null !== (r = c.exec(l)) && (i = (o = r.index) + r[0].length, !(s.ch < i)););
                        if ((n.backtrack || !(i <= s.ch)) && r) {
                            var u = r[2] || r[4],
                                h = r[3] || r[5],
                                d = n.increase ? 1 : -1,
                                m = {
                                    "0b": 2,
                                    0: 8,
                                    "": 10,
                                    "0x": 16
                                }[u.toLowerCase()];
                            a = (parseInt(r[1] + h, m) + d * n.repeat).toString(m);
                            var p = u ? new Array(h.length - a.length + 1 + r[1].length).join("0") : "";
                            a = "-" === a.charAt(0) ? "-" + u + p + a.substr(1) : u + p + a;
                            var f = new t(s.line, o),
                                g = new t(s.line, i);
                            e.replaceRange(a, f, g), e.setCursor(new t(s.line, o + a.length - 1))
                        }
                    },
                    repeatLastEdit: function(e, t, n) {
                        var r = n.lastEditInputState;
                        if (r) {
                            var o = t.repeat;
                            o && t.repeatIsExplicit ? r.repeatOverride = o : o = r.repeatOverride || o, ut(e, n, o, !1)
                        }
                    },
                    indent: function(e, t) {
                        e.indentLine(e.getCursor().line, t.indentRight)
                    },
                    exitInsertMode: function(e, t) {
                        nt(e)
                    }
                };

                function te(e, n, r) {
                    var o = e.state.vim,
                        i = o.insertMode || o.visualMode,
                        a = Math.min(Math.max(e.firstLine(), n.line), e.lastLine()),
                        s = e.getLine(a),
                        l = s.length - 1 + Number(!!i),
                        c = Math.min(Math.max(0, n.ch), l),
                        u = s.charCodeAt(c);
                    if (56320 <= u && u <= 57343) {
                        var h = 1;
                        r && r.line == a && r.ch > c && (h = -1), (c += h) > l && (c -= 2)
                    }
                    return new t(a, c)
                }

                function ne(e) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }

                function re(e, n, r) {
                    return "object" === typeof n && (r = n.ch, n = n.line), new t(e.line + n, e.ch + r)
                }

                function oe(e, t) {
                    const n = "<character>" == t.slice(-11),
                        r = "<register>" == t.slice(-10);
                    if (n || r) {
                        var o = t.length - (n ? 11 : 10),
                            i = e.slice(0, o),
                            a = t.slice(0, o);
                        return i == a && e.length > o ? "full" : 0 == a.indexOf(i) && "partial"
                    }
                    return e == t ? "full" : 0 == t.indexOf(e) && "partial"
                }

                function ie(e, t, n) {
                    return function() {
                        for (var r = 0; r < n; r++) t(e)
                    }
                }

                function ae(e) {
                    return new t(e.line, e.ch)
                }

                function se(e, t) {
                    return e.ch == t.ch && e.line == t.line
                }

                function le(e, t) {
                    return e.line < t.line || e.line == t.line && e.ch < t.ch
                }

                function ce(e, t) {
                    return arguments.length > 2 && (t = ce.apply(void 0, Array.prototype.slice.call(arguments, 1))), le(e, t) ? e : t
                }

                function ue(e, t) {
                    return arguments.length > 2 && (t = ue.apply(void 0, Array.prototype.slice.call(arguments, 1))), le(e, t) ? t : e
                }

                function he(e, t, n) {
                    var r = le(e, t),
                        o = le(t, n);
                    return r && o
                }

                function de(e, t) {
                    return e.getLine(t).length
                }

                function me(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }

                function pe(e, n, r) {
                    var o = de(e, n),
                        i = new Array(r - o + 1).join(" ");
                    e.setCursor(new t(n, o)), e.replaceRange(i, e.getCursor())
                }

                function fe(e, n) {
                    var r = [],
                        o = e.listSelections(),
                        i = ae(e.clipPos(n)),
                        a = !se(n, i),
                        s = function(e, t, n) {
                            for (var r = 0; r < e.length; r++) {
                                var o = "head" != n && se(e[r].anchor, t),
                                    i = "anchor" != n && se(e[r].head, t);
                                if (o || i) return r
                            }
                            return -1
                        }(o, e.getCursor("head")),
                        l = se(o[s].head, o[s].anchor),
                        c = o.length - 1,
                        u = c - s > s ? c : 0,
                        h = o[u].anchor,
                        d = Math.min(h.line, i.line),
                        m = Math.max(h.line, i.line),
                        p = h.ch,
                        f = i.ch,
                        g = o[u].head.ch - p,
                        v = f - p;
                    g > 0 && v <= 0 ? (p++, a || f--) : g < 0 && v >= 0 ? (p--, l || f++) : g < 0 && -1 == v && (p--, f++);
                    for (var y = d; y <= m; y++) {
                        var C = {
                            anchor: new t(y, p),
                            head: new t(y, f)
                        };
                        r.push(C)
                    }
                    return e.setSelections(r), n.ch = f, h.ch = p, h
                }

                function ge(e, t, n) {
                    for (var r = [], o = 0; o < n; o++) {
                        var i = re(t, o, 0);
                        r.push({
                            anchor: i,
                            head: i
                        })
                    }
                    e.setSelections(r, 0)
                }

                function ve(e, t) {
                    var n = t.sel.anchor,
                        r = t.sel.head;
                    t.lastPastedText && (r = e.posFromIndex(e.indexFromPos(n) + t.lastPastedText.length), t.lastPastedText = null), t.lastSelection = {
                        anchorMark: e.setBookmark(n),
                        headMark: e.setBookmark(r),
                        anchor: ae(n),
                        head: ae(r),
                        visualMode: t.visualMode,
                        visualLine: t.visualLine,
                        visualBlock: t.visualBlock
                    }
                }

                function ye(e, t, n) {
                    var r = e.state.vim;
                    t = t || r.sel, n || (n = r.visualLine ? "line" : r.visualBlock ? "block" : "char");
                    var o = Ce(e, t, n);
                    e.setSelections(o.ranges, o.primary)
                }

                function Ce(e, n, r, o) {
                    var i = ae(n.head),
                        a = ae(n.anchor);
                    if ("char" == r) {
                        var s = o || le(n.head, n.anchor) ? 0 : 1,
                            l = le(n.head, n.anchor) ? 1 : 0;
                        return i = re(n.head, 0, s), {
                            ranges: [{
                                anchor: a = re(n.anchor, 0, l),
                                head: i
                            }],
                            primary: 0
                        }
                    }
                    if ("line" == r) {
                        if (le(n.head, n.anchor)) i.ch = 0, a.ch = de(e, a.line);
                        else {
                            a.ch = 0;
                            var c = e.lastLine();
                            i.line > c && (i.line = c), i.ch = de(e, i.line)
                        }
                        return {
                            ranges: [{
                                anchor: a,
                                head: i
                            }],
                            primary: 0
                        }
                    }
                    if ("block" == r) {
                        var u = Math.min(a.line, i.line),
                            h = a.ch,
                            d = Math.max(a.line, i.line),
                            m = i.ch;
                        h < m ? m += 1 : h += 1;
                        for (var p = d - u + 1, f = i.line == u ? 0 : p - 1, g = [], v = 0; v < p; v++) g.push({
                            anchor: new t(u + v, h),
                            head: new t(u + v, m)
                        });
                        return {
                            ranges: g,
                            primary: f
                        }
                    }
                    throw "never happens"
                }

                function ke(t, n) {
                    var r = t.state.vim;
                    !1 !== n && t.setCursor(te(t, r.sel.head)), ve(t, r), r.visualMode = !1, r.visualLine = !1, r.visualBlock = !1, r.insertMode || e.signal(t, "vim-mode-change", {
                        mode: "normal"
                    })
                }

                function we(e) {
                    if (!e) return 0;
                    var t = e.search(/\S/);
                    return -1 == t ? e.length : t
                }

                function xe(e, {
                    inclusive: n,
                    innerWord: r,
                    bigWord: o,
                    noSymbol: i,
                    multiline: a
                }, s) {
                    var l, c = s || function(e) {
                            var t = e.getCursor("head");
                            return 1 == e.getSelection().length && (t = ce(t, e.getCursor("anchor"))), t
                        }(e),
                        d = e.getLine(c.line),
                        m = d,
                        p = c.line,
                        f = p,
                        g = c.ch,
                        v = i ? u[0] : h[0];
                    if (r && /\s/.test(d.charAt(g))) v = function(e) {
                        return /\s/.test(e)
                    };
                    else {
                        for (; !v(d.charAt(g));)
                            if (++g >= d.length) {
                                if (!a) return null;
                                g--, l = Ae(e, c, !0, o, !0);
                                break
                            }
                        o ? v = h[0] : (v = u[0])(d.charAt(g)) || (v = u[1])
                    }
                    for (var y = g, C = g; v(d.charAt(C)) && C >= 0;) C--;
                    if (C++, l) y = l.to, f = l.line, (m = e.getLine(f)) || 0 != y || y++;
                    else
                        for (; v(d.charAt(y)) && y < d.length;) y++;
                    if (n) {
                        var k = y,
                            w = c.ch <= C && /\s/.test(d.charAt(c.ch));
                        if (!w)
                            for (;
                                /\s/.test(m.charAt(y)) && y < m.length;) y++;
                        if (k == y || w) {
                            for (var x = C;
                                /\s/.test(d.charAt(C - 1)) && C > 0;) C--;
                            C || w || (C = x)
                        }
                    }
                    return {
                        start: new t(p, C),
                        end: new t(f, y)
                    }
                }

                function Se(e, t, n) {
                    se(t, n) || L.jumpList.add(e, t, n)
                }

                function Me(e, t) {
                    L.lastCharacterSearch.increment = e, L.lastCharacterSearch.forward = t.forward, L.lastCharacterSearch.selectedCharacter = t.selectedCharacter
                }
                var Le = {
                        "(": "bracket",
                        ")": "bracket",
                        "{": "bracket",
                        "}": "bracket",
                        "[": "section",
                        "]": "section",
                        "*": "comment",
                        "/": "comment",
                        m: "method",
                        M: "method",
                        "#": "preprocess"
                    },
                    be = {
                        bracket: {
                            isComplete: function(e) {
                                if (e.nextCh === e.symb) {
                                    if (e.depth++, e.depth >= 1) return !0
                                } else e.nextCh === e.reverseSymb && e.depth--;
                                return !1
                            }
                        },
                        section: {
                            init: function(e) {
                                e.curMoveThrough = !0, e.symb = (e.forward ? "]" : "[") === e.symb ? "{" : "}"
                            },
                            isComplete: function(e) {
                                return 0 === e.index && e.nextCh === e.symb
                            }
                        },
                        comment: {
                            isComplete: function(e) {
                                var t = "*" === e.lastCh && "/" === e.nextCh;
                                return e.lastCh = e.nextCh, t
                            }
                        },
                        method: {
                            init: function(e) {
                                e.symb = "m" === e.symb ? "{" : "}", e.reverseSymb = "{" === e.symb ? "}" : "{"
                            },
                            isComplete: function(e) {
                                return e.nextCh === e.symb
                            }
                        },
                        preprocess: {
                            init: function(e) {
                                e.index = 0
                            },
                            isComplete: function(e) {
                                if ("#" === e.nextCh) {
                                    var t = e.lineText.match(/^#(\w+)/)[1];
                                    if ("endif" === t) {
                                        if (e.forward && 0 === e.depth) return !0;
                                        e.depth++
                                    } else if ("if" === t) {
                                        if (!e.forward && 0 === e.depth) return !0;
                                        e.depth--
                                    }
                                    if ("else" === t && 0 === e.depth) return !0
                                }
                                return !1
                            }
                        }
                    };

                function Ae(e, t, n, r, o) {
                    var i = t.line,
                        a = t.ch,
                        s = e.getLine(i),
                        l = n ? 1 : -1,
                        c = r ? h : u;
                    if (o && "" == s) {
                        if (i += l, s = e.getLine(i), !f(e, i)) return null;
                        a = n ? 0 : s.length
                    }
                    for (;;) {
                        if (o && "" == s) return {
                            from: 0,
                            to: 0,
                            line: i
                        };
                        for (var d = l > 0 ? s.length : -1, m = d, p = d; a != d;) {
                            for (var g = !1, v = 0; v < c.length && !g; ++v)
                                if (c[v](s.charAt(a))) {
                                    for (m = a; a != d && c[v](s.charAt(a));) a += l;
                                    if (g = m != (p = a), m == t.ch && i == t.line && p == m + l) continue;
                                    return {
                                        from: Math.min(m, p + 1),
                                        to: Math.max(m, p),
                                        line: i
                                    }
                                }
                            g || (a += l)
                        }
                        if (!f(e, i += l)) return null;
                        s = e.getLine(i), a = l > 0 ? 0 : s.length
                    }
                }

                function Ee(e, n, r, o, i) {
                    var a = new t(n.line + r.repeat - 1, 1 / 0),
                        s = e.clipPos(a);
                    return s.ch--, i || (o.lastHPos = 1 / 0, o.lastHSPos = e.charCoords(s, "div").left), a
                }

                function Oe(e, n, r, o, i) {
                    if (o) {
                        for (var a, s = i || e.getCursor(), l = s.ch, c = 0; c < n; c++) {
                            if (-1 == (a = Re(l, e.getLine(s.line), o, r, !0))) return;
                            l = a
                        }
                        return void 0 != a ? new t(e.getCursor().line, a) : void 0
                    }
                }

                function Te(e, t, n, r) {
                    (k(n, d) || p.test(n)) && (t.marks[n] && t.marks[n].clear(), t.marks[n] = e.setBookmark(r))
                }

                function Re(e, t, n, r, o) {
                    var i;
                    return r ? -1 == (i = t.indexOf(n, e + 1)) || o || (i -= 1) : -1 == (i = t.lastIndexOf(n, e - 1)) || o || (i += 1), i
                }

                function Be(e, n, r, o, i) {
                    var a, s = n.line,
                        l = e.firstLine(),
                        c = e.lastLine(),
                        u = s;

                    function h(t) {
                        return !e.getLine(t)
                    }

                    function d(e, t, n) {
                        return n ? h(e) != h(e + t) : !h(e) && h(e + t)
                    }
                    if (o) {
                        for (; l <= u && u <= c && r > 0;) d(u, o) && r--, u += o;
                        return {
                            start: new t(u, 0),
                            end: n
                        }
                    }
                    var m = e.state.vim;
                    if (m.visualLine && d(s, 1, !0)) {
                        var p = m.sel.anchor;
                        d(p.line, -1, !0) && (i && p.line == s || (s += 1))
                    }
                    var f = h(s);
                    for (u = s; u <= c && r; u++) d(u, 1, !0) && (i && h(u) == f || r--);
                    for (a = new t(u, 0), u > c && !f ? f = !0 : i = !1, u = s; u > l && (i && h(u) != f && u != s || !d(u, -1, !0)); u--);
                    return {
                        start: new t(u, 0),
                        end: a
                    }
                }

                function Ie(e, n, r, o, i) {
                    function a(e) {
                        e.pos + e.dir < 0 || e.pos + e.dir >= e.line.length ? e.line = null : e.pos += e.dir
                    }

                    function s(e, t, n, r) {
                        var o = {
                            line: e.getLine(t),
                            ln: t,
                            pos: n,
                            dir: r
                        };
                        if ("" === o.line) return {
                            ln: o.ln,
                            pos: o.pos
                        };
                        var s = o.pos;
                        for (a(o); null !== o.line;) {
                            if (s = o.pos, C(o.line[o.pos])) {
                                if (i) {
                                    for (a(o); null !== o.line && y(o.line[o.pos]);) s = o.pos, a(o);
                                    return {
                                        ln: o.ln,
                                        pos: s + 1
                                    }
                                }
                                return {
                                    ln: o.ln,
                                    pos: o.pos + 1
                                }
                            }
                            a(o)
                        }
                        return {
                            ln: o.ln,
                            pos: s + 1
                        }
                    }

                    function l(e, t, n, r) {
                        var o = e.getLine(t),
                            s = {
                                line: o,
                                ln: t,
                                pos: n,
                                dir: r
                            };
                        if ("" === s.line) return {
                            ln: s.ln,
                            pos: s.pos
                        };
                        var l = s.pos;
                        for (a(s); null !== s.line;) {
                            if (y(s.line[s.pos]) || C(s.line[s.pos])) {
                                if (C(s.line[s.pos])) return i && y(s.line[s.pos + 1]) ? {
                                    ln: s.ln,
                                    pos: s.pos + 1
                                } : {
                                    ln: s.ln,
                                    pos: l
                                }
                            } else l = s.pos;
                            a(s)
                        }
                        return s.line = o, i && y(s.line[s.pos]) ? {
                            ln: s.ln,
                            pos: s.pos
                        } : {
                            ln: s.ln,
                            pos: l
                        }
                    }
                    for (var c = {
                            ln: n.line,
                            pos: n.ch
                        }; r > 0;) c = o < 0 ? l(e, c.ln, c.pos, o) : s(e, c.ln, c.pos, o), r--;
                    return new t(c.ln, c.pos)
                }

                function Ne(e, n, r, o) {
                    var i = n,
                        a = {
                            "(": /[()]/,
                            ")": /[()]/,
                            "[": /[[\]]/,
                            "]": /[[\]]/,
                            "{": /[{}]/,
                            "}": /[{}]/,
                            "<": /[<>]/,
                            ">": /[<>]/
                        }[r],
                        s = {
                            "(": "(",
                            ")": "(",
                            "[": "[",
                            "]": "[",
                            "{": "{",
                            "}": "{",
                            "<": "<",
                            ">": "<"
                        }[r],
                        l = e.getLine(i.line).charAt(i.ch) === s ? 1 : 0,
                        c = e.scanForBracket(new t(i.line, i.ch + l), -1, void 0, {
                            bracketRegex: a
                        }),
                        u = e.scanForBracket(new t(i.line, i.ch + l), 1, void 0, {
                            bracketRegex: a
                        });
                    if (!c || !u) return null;
                    var h = c.pos,
                        d = u.pos;
                    if (h.line == d.line && h.ch > d.ch || h.line > d.line) {
                        var m = h;
                        h = d, d = m
                    }
                    return o ? d.ch += 1 : h.ch += 1, {
                        start: h,
                        end: d
                    }
                }
                x("pcre", !0, "boolean");
                class Ke {
                    getQuery() {
                        return L.query
                    }
                    setQuery(e) {
                        L.query = e
                    }
                    getOverlay() {
                        return this.searchOverlay
                    }
                    setOverlay(e) {
                        this.searchOverlay = e
                    }
                    isReversed() {
                        return L.isReversed
                    }
                    setReversed(e) {
                        L.isReversed = e
                    }
                    getScrollbarAnnotate() {
                        return this.annotate
                    }
                    setScrollbarAnnotate(e) {
                        this.annotate = e
                    }
                }

                function De(e) {
                    var t = e.state.vim;
                    return t.searchState_ || (t.searchState_ = new Ke)
                }

                function Pe(e, t) {
                    var n = He(e, t) || [];
                    if (!n.length) return [];
                    var r = [];
                    if (0 === n[0]) {
                        for (var o = 0; o < n.length; o++) "number" == typeof n[o] && r.push(e.substring(n[o] + 1, n[o + 1]));
                        return r
                    }
                }

                function He(e, t) {
                    t || (t = "/");
                    for (var n = !1, r = [], o = 0; o < e.length; o++) {
                        var i = e.charAt(o);
                        n || i != t || r.push(o), n = !n && "\\" == i
                    }
                    return r
                }
                var Fe = {
                    "\\n": "\n",
                    "\\r": "\r",
                    "\\t": "\t"
                };
                var je = {
                    "\\/": "/",
                    "\\\\": "\\",
                    "\\n": "\n",
                    "\\r": "\r",
                    "\\t": "\t",
                    "\\&": "&"
                };

                function _e(e, t, n) {
                    if (L.registerController.getRegister("/").setText(e), e instanceof RegExp) return e;
                    var r, o, i = He(e, "/");
                    i.length ? (r = e.substring(0, i[0]), o = -1 != e.substring(i[0]).indexOf("i")) : r = e;
                    return r ? (M("pcre") || (r = function(e) {
                        for (var t = !1, n = [], r = -1; r < e.length; r++) {
                            var o = e.charAt(r) || "",
                                i = e.charAt(r + 1) || "",
                                a = i && -1 != "|(){".indexOf(i);
                            t ? ("\\" === o && a || n.push(o), t = !1) : "\\" === o ? (t = !0, i && -1 != "}".indexOf(i) && (a = !0), a && "\\" !== i || n.push(o)) : (n.push(o), a && "\\" !== i && n.push("\\"))
                        }
                        return n.join("")
                    }(r)), n && (t = /^[^A-Z]*$/.test(r)), new RegExp(r, t || o ? "im" : "m")) : null
                }

                function Ve(e) {
                    "string" === typeof e && (e = document.createElement(e));
                    for (var t, n = 1; n < arguments.length; n++)
                        if (t = arguments[n])
                            if ("object" !== typeof t && (t = document.createTextNode(t)), t.nodeType) e.appendChild(t);
                            else
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && ("$" === r[0] ? e.style[r.slice(1)] = t[r] : e.setAttribute(r, t[r]));
                    return e
                }

                function We(e, t) {
                    var n = Ve("div", {
                        $color: "red",
                        $whiteSpace: "pre",
                        class: "cm-vim-message"
                    }, t);
                    e.openNotification ? e.openNotification(n, {
                        bottom: !0,
                        duration: 5e3
                    }) : alert(n.innerText)
                }

                function $e(e, t) {
                    if (N.length) return t.value || (t.value = ""), void(B = t);
                    var n, r, o = (n = t.prefix, r = t.desc, Ve("div", {
                        $display: "flex"
                    }, Ve("span", {
                        $fontFamily: "monospace",
                        $whiteSpace: "pre",
                        $flex: 1
                    }, n, Ve("input", {
                        type: "text",
                        autocorrect: "off",
                        autocapitalize: "off",
                        spellcheck: "false",
                        $width: "100%"
                    })), r && Ve("span", {
                        $color: "#888"
                    }, r)));
                    if (e.openDialog) e.openDialog(o, t.onClose, {
                        onKeyDown: t.onKeyDown,
                        onKeyUp: t.onKeyUp,
                        bottom: !0,
                        selectValueOnOpen: !1,
                        value: t.value
                    });
                    else {
                        var i = "";
                        "string" != typeof t.prefix && t.prefix && (i += t.prefix.textContent), t.desc && (i += " " + t.desc), t.onClose(prompt(i, ""))
                    }
                }

                function Ue(e, t, n, r) {
                    if (t) {
                        var o = De(e),
                            i = _e(t, !!n, !!r);
                        if (i) return Qe(e, i),
                            function(e, t) {
                                if (e instanceof RegExp && t instanceof RegExp) {
                                    for (var n = ["global", "multiline", "ignoreCase", "source"], r = 0; r < n.length; r++) {
                                        var o = n[r];
                                        if (e[o] !== t[o]) return !1
                                    }
                                    return !0
                                }
                                return !1
                            }(i, o.getQuery()) || o.setQuery(i), i
                    }
                }
                var qe = 0;

                function Qe(e, t) {
                    clearTimeout(qe), De(e).highlightTimeout = qe, qe = setTimeout((function() {
                        if (e.state.vim) {
                            var n = De(e);
                            n.highlightTimeout = null;
                            var r = n.getOverlay();
                            r && t == r.query || (r && e.removeOverlay(r), r = function(e) {
                                if ("^" == e.source.charAt(0)) var t = !0;
                                return {
                                    token: function(n) {
                                        if (!t || n.sol()) {
                                            var r = n.match(e, !1);
                                            if (r) return 0 == r[0].length ? (n.next(), "searching") : n.sol() || (n.backUp(1), e.exec(n.next() + r[0])) ? (n.match(e), "searching") : (n.next(), null);
                                            for (; !n.eol() && (n.next(), !n.match(e, !1)););
                                        } else n.skipToEnd()
                                    },
                                    query: e
                                }
                            }(t), e.addOverlay(r), e.showMatchesOnScrollbar && (n.getScrollbarAnnotate() && n.getScrollbarAnnotate().clear(), n.setScrollbarAnnotate(e.showMatchesOnScrollbar(t))), n.setOverlay(r))
                        }
                    }), 50)
                }

                function Je(e, n, r, o) {
                    return e.operation((function() {
                        void 0 === o && (o = 1);
                        for (var i = e.getCursor(), a = e.getSearchCursor(r, i), s = 0; s < o; s++) {
                            var l = a.find(n);
                            if (0 == s && l && se(a.from(), i)) {
                                var c = n ? a.from() : a.to();
                                (l = a.find(n)) && !l[0] && se(a.from(), c) && e.getLine(c.line).length == c.ch && (l = a.find(n))
                            }
                            if (!l && !(a = e.getSearchCursor(r, n ? new t(e.lastLine()) : new t(e.firstLine(), 0))).find(n)) return
                        }
                        return a.from()
                    }))
                }

                function ze(e) {
                    var t = De(e);
                    t.highlightTimeout && (clearTimeout(t.highlightTimeout), t.highlightTimeout = null), e.removeOverlay(De(e).getOverlay()), t.setOverlay(null), t.getScrollbarAnnotate() && (t.getScrollbarAnnotate().clear(), t.setScrollbarAnnotate(null))
                }

                function Xe(e, t, n) {
                    return "number" != typeof e && (e = e.line), t instanceof Array ? k(e, t) : "number" == typeof n ? e >= t && e <= n : e == t
                }

                function Ge(e) {
                    var t = e.getScrollInfo(),
                        n = e.coordsChar({
                            left: 0,
                            top: 6 + t.top
                        }, "local"),
                        r = t.clientHeight - 10 + t.top,
                        o = e.coordsChar({
                            left: 0,
                            top: r
                        }, "local");
                    return {
                        top: n.line,
                        bottom: o.line
                    }
                }

                function Ze(e, n, r) {
                    if ("'" == r || "`" == r) return L.jumpList.find(e, -1) || new t(0, 0);
                    if ("." == r) return Ye(e);
                    var o = n.marks[r];
                    return o && o.find()
                }

                function Ye(e) {
                    if (e.getLastEditEnd) return e.getLastEditEnd();
                    for (var t = e.doc.history.done, n = t.length; n--;)
                        if (t[n].changes) return ae(t[n].changes[0].to)
                }
                var et = {
                        colorscheme: function(e, t) {
                            !t.args || t.args.length < 1 ? We(e, e.getOption("theme")) : e.setOption("theme", t.args[0])
                        },
                        map: function(e, t, n, r) {
                            var o = t.args;
                            !o || o.length < 2 ? e && We(e, "Invalid mapping: " + t.input) : tt.map(o[0], o[1], n, r)
                        },
                        imap: function(e, t) {
                            this.map(e, t, "insert")
                        },
                        nmap: function(e, t) {
                            this.map(e, t, "normal")
                        },
                        vmap: function(e, t) {
                            this.map(e, t, "visual")
                        },
                        omap: function(e, t) {
                            this.map(e, t, "operatorPending")
                        },
                        noremap: function(e, t) {
                            this.map(e, t, void 0, !0)
                        },
                        inoremap: function(e, t) {
                            this.map(e, t, "insert", !0)
                        },
                        nnoremap: function(e, t) {
                            this.map(e, t, "normal", !0)
                        },
                        vnoremap: function(e, t) {
                            this.map(e, t, "visual", !0)
                        },
                        onoremap: function(e, t) {
                            this.map(e, t, "operatorPending", !0)
                        },
                        unmap: function(e, t, n) {
                            var r = t.args;
                            (!r || r.length < 1 || !tt.unmap(r[0], n)) && e && We(e, "No such mapping: " + t.input)
                        },
                        mapclear: function(e, t) {
                            I.mapclear()
                        },
                        imapclear: function(e, t) {
                            I.mapclear("insert")
                        },
                        nmapclear: function(e, t) {
                            I.mapclear("normal")
                        },
                        vmapclear: function(e, t) {
                            I.mapclear("visual")
                        },
                        omapclear: function(e, t) {
                            I.mapclear("operatorPending")
                        },
                        move: function(e, t) {
                            X.processCommand(e, e.state.vim, {
                                keys: "",
                                type: "motion",
                                motion: "moveToLineOrEdgeOfDocument",
                                motionArgs: {
                                    forward: !1,
                                    explicitRepeat: !0,
                                    linewise: !0
                                },
                                repeatOverride: t.line + 1
                            })
                        },
                        set: function(e, t) {
                            var n = t.args,
                                r = t.setCfg || {};
                            if (!n || n.length < 1) e && We(e, "Invalid mapping: " + t.input);
                            else {
                                var o = n[0].split("="),
                                    i = o.shift() || "",
                                    a = o.length > 0 ? o.join("=") : void 0,
                                    s = !1,
                                    l = !1;
                                if ("?" == i.charAt(i.length - 1)) {
                                    if (a) throw Error("Trailing characters: " + t.argString);
                                    i = i.substring(0, i.length - 1), s = !0
                                } else "!" == i.charAt(i.length - 1) && (i = i.substring(0, i.length - 1), l = !0);
                                void 0 === a && "no" == i.substring(0, 2) && (i = i.substring(2), a = !1);
                                var c = w[i] && "boolean" == w[i].type;
                                if (c && (l ? a = !M(i, e, r) : void 0 == a && (a = !0)), !c && void 0 === a || s) {
                                    var u = M(i, e, r);
                                    u instanceof Error ? We(e, u.message) : We(e, !0 === u || !1 === u ? " " + (u ? "" : "no") + i : "  " + i + "=" + u)
                                } else {
                                    var h = S(i, a, e, r);
                                    h instanceof Error && We(e, h.message)
                                }
                            }
                        },
                        setlocal: function(e, t) {
                            t.setCfg = {
                                scope: "local"
                            }, this.set(e, t)
                        },
                        setglobal: function(e, t) {
                            t.setCfg = {
                                scope: "global"
                            }, this.set(e, t)
                        },
                        registers: function(e, t) {
                            var n = t.args,
                                r = L.registerController.registers,
                                o = "----------Registers----------\n\n";
                            if (n)
                                for (var i = n.join(""), a = 0; a < i.length; a++) {
                                    s = i.charAt(a);
                                    if (L.registerController.isValidRegister(s)) o += '"' + s + "    " + (r[s] || new Q).toString() + "\n"
                                } else
                                    for (var s in r) {
                                        var l = r[s].toString();
                                        l.length && (o += '"' + s + "    " + l + "\n")
                                    }
                            We(e, o)
                        },
                        sort: function(n, r) {
                            var o, i, a, s, l;
                            var c = function() {
                                if (r.argString) {
                                    var t = new e.StringStream(r.argString);
                                    if (t.eat("!") && (o = !0), t.eol()) return;
                                    if (!t.eatSpace()) return "Invalid arguments";
                                    var n = t.match(/([dinuox]+)?\s*(\/.+\/)?\s*/);
                                    if (!n || !t.eol()) return "Invalid arguments";
                                    if (n[1]) {
                                        i = -1 != n[1].indexOf("i"), a = -1 != n[1].indexOf("u");
                                        var c = -1 != n[1].indexOf("d") || -1 != n[1].indexOf("n"),
                                            u = -1 != n[1].indexOf("x"),
                                            h = -1 != n[1].indexOf("o");
                                        if (Number(c) + Number(u) + Number(h) > 1) return "Invalid arguments";
                                        s = (c ? "decimal" : u && "hex") || h && "octal"
                                    }
                                    n[2] && (l = new RegExp(n[2].substr(1, n[2].length - 2), i ? "i" : ""))
                                }
                            }();
                            if (c) We(n, c + ": " + r.argString);
                            else {
                                var u = r.line || n.firstLine(),
                                    h = r.lineEnd || r.line || n.lastLine();
                                if (u != h) {
                                    var d = new t(u, 0),
                                        m = new t(h, de(n, h)),
                                        p = n.getRange(d, m).split("\n"),
                                        f = "decimal" == s ? /(-?)([\d]+)/ : "hex" == s ? /(-?)(?:0x)?([0-9a-f]+)/i : "octal" == s ? /([0-7]+)/ : null,
                                        g = "decimal" == s ? 10 : "hex" == s ? 16 : "octal" == s ? 8 : void 0,
                                        v = [],
                                        y = [];
                                    if (s || l)
                                        for (var C = 0; C < p.length; C++) {
                                            var k = l ? p[C].match(l) : null;
                                            k && "" != k[0] ? v.push(k) : f && f.exec(p[C]) ? v.push(p[C]) : y.push(p[C])
                                        } else y = p;
                                    if (v.sort(l ? function(e, t) {
                                            var n;
                                            return o && (n = e, e = t, t = n), i && (e[0] = e[0].toLowerCase(), t[0] = t[0].toLowerCase()), e[0] < t[0] ? -1 : 1
                                        } : S), l)
                                        for (C = 0; C < v.length; C++) v[C] = v[C].input;
                                    else s || y.sort(S);
                                    if (p = o ? v.concat(y) : y.concat(v), a) {
                                        var w, x = p;
                                        p = [];
                                        for (C = 0; C < x.length; C++) x[C] != w && p.push(x[C]), w = x[C]
                                    }
                                    n.replaceRange(p.join("\n"), d, m)
                                }
                            }

                            function S(e, t) {
                                var n;
                                o && (n = e, e = t, t = n);
                                i && (e = e.toLowerCase(), t = t.toLowerCase());
                                var r = f && f.exec(e),
                                    a = f && f.exec(t);
                                return r && a ? parseInt((r[1] + r[2]).toLowerCase(), g) - parseInt((a[1] + a[2]).toLowerCase(), g) : e < t ? -1 : 1
                            }
                        },
                        vglobal: function(e, t) {
                            this.global(e, t)
                        },
                        normal: function(e, t) {
                            var n = t.argString;
                            if (n && "!" == n[0] && (n = n.slice(1), K = !0), n = n.trimStart()) {
                                var r = t.line;
                                if ("number" == typeof r)
                                    for (var o = isNaN(t.lineEnd) ? r : t.lineEnd, i = r; i <= o; i++) e.setCursor(i, 0), P(e, t.argString.trimStart()), e.state.vim.insertMode && nt(e, !0);
                                else P(e, t.argString.trimStart()), e.state.vim.insertMode && nt(e, !0)
                            } else We(e, "Argument is required.")
                        },
                        global: function(e, t) {
                            var n = t.argString;
                            if (n) {
                                var r = "v" === t.commandName[0];
                                "!" === n[0] && "g" === t.commandName[0] && (r = !0, n = n.slice(1));
                                var o = void 0 !== t.line ? t.line : e.firstLine(),
                                    i = t.lineEnd || t.line || e.lastLine(),
                                    a = function(e) {
                                        return Pe(e, "/")
                                    }(n),
                                    s = n,
                                    l = "";
                                if (a && a.length && (s = a[0], l = a.slice(1, a.length).join("/")), s) try {
                                    Ue(e, s, !0, !0)
                                } catch (f) {
                                    return void We(e, "Invalid regex: " + s)
                                }
                                for (var c = De(e).getQuery(), u = [], h = o; h <= i; h++) {
                                    var d = e.getLine(h);
                                    c.test(d) !== r && u.push(l ? e.getLineHandle(h) : d)
                                }
                                if (l) {
                                    var m = 0,
                                        p = function() {
                                            if (m < u.length) {
                                                var t = u[m++],
                                                    n = e.getLineNumber(t);
                                                if (null == n) return void p();
                                                var r = n + 1 + l;
                                                tt.processCommand(e, r, {
                                                    callback: p
                                                })
                                            } else e.releaseLineHandles && e.releaseLineHandles()
                                        };
                                    p()
                                } else We(e, u.join("\n"))
                            } else We(e, "Regular Expression missing from global")
                        },
                        substitute: function(n, r) {
                            if (!n.getSearchCursor) throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.");
                            var o, i, a, s = r.argString,
                                l = s ? Pe(s, s[0]) : [],
                                u = "",
                                h = "",
                                d = !1,
                                m = !1;
                            if (l && l.length) u = l[0], M("pcre") && "" !== u && (u = new RegExp(u).source), void 0 !== (h = l[1]) && (h = M("pcre") ? function(t) {
                                for (var n = new e.StringStream(t), r = []; !n.eol();) {
                                    for (; n.peek() && "\\" != n.peek();) r.push(n.next());
                                    var o = !1;
                                    for (var i in je)
                                        if (n.match(i, !0)) {
                                            o = !0, r.push(je[i]);
                                            break
                                        }
                                    o || r.push(n.next())
                                }
                                return r.join("")
                            }(h.replace(/([^\\])&/g, "$1$$&")) : function(e) {
                                for (var t, n = !1, r = [], o = -1; o < e.length; o++) {
                                    var i = e.charAt(o) || "",
                                        a = e.charAt(o + 1) || "";
                                    Fe[i + a] ? (r.push(Fe[i + a]), o++) : n ? (r.push(i), n = !1) : "\\" === i ? (n = !0, t = a, c.test(t) || "$" === a ? r.push("$") : "/" !== a && "\\" !== a && r.push("\\")) : ("$" === i && r.push("$"), r.push(i), "/" === a && r.push("\\"))
                                }
                                return r.join("")
                            }(h), L.lastSubstituteReplacePart = h), o = l[2] ? l[2].split(" ") : [];
                            else if (s && s.length) return void We(n, "Substitutions should be of the form :s/pattern/replace/");
                            if (o && (i = o[0], a = parseInt(o[1]), i && (-1 != i.indexOf("c") && (d = !0), -1 != i.indexOf("g") && (m = !0), u = M("pcre") ? u + "/" + i : u.replace(/\//g, "\\/") + "/" + i)), u) try {
                                Ue(n, u, !0, !0)
                            } catch (C) {
                                return void We(n, "Invalid regex: " + u)
                            }
                            if (void 0 !== (h = h || L.lastSubstituteReplacePart)) {
                                var p = De(n).getQuery(),
                                    f = void 0 !== r.line ? r.line : n.getCursor().line,
                                    g = r.lineEnd || f;
                                f == n.firstLine() && g == n.lastLine() && (g = 1 / 0), a && (g = (f = g) + a - 1);
                                var v = te(n, new t(f, 0)),
                                    y = n.getSearchCursor(p, v);
                                ! function(t, n, r, o, i, a, s, l, c) {
                                    t.state.vim.exMode = !0;
                                    var u, h, d, m = !1;

                                    function p() {
                                        t.operation((function() {
                                            for (; !m;) f(), v();
                                            y()
                                        }))
                                    }

                                    function f() {
                                        var e = t.getRange(a.from(), a.to()).replace(s, l),
                                            n = a.to().line;
                                        a.replace(e), h = a.to().line, i += h - n, d = h < n
                                    }

                                    function g() {
                                        var e = u && ae(a.to()),
                                            t = a.findNext();
                                        return t && !t[0] && e && se(a.from(), e) && (t = a.findNext()), t
                                    }

                                    function v() {
                                        for (; g() && Xe(a.from(), o, i);)
                                            if (r || a.from().line != h || d) return t.scrollIntoView(a.from(), 30), t.setSelection(a.from(), a.to()), u = a.from(), void(m = !1);
                                        m = !0
                                    }

                                    function y(e) {
                                        if (e && e(), t.focus(), u) {
                                            t.setCursor(u);
                                            var n = t.state.vim;
                                            n.exMode = !1, n.lastHPos = n.lastHSPos = u.ch
                                        }
                                        c && c()
                                    }

                                    function C(n, r, o) {
                                        switch (e.e_stop(n), _(n)) {
                                            case "y":
                                                f(), v();
                                                break;
                                            case "n":
                                                v();
                                                break;
                                            case "a":
                                                var i = c;
                                                c = void 0, t.operation(p), c = i;
                                                break;
                                            case "l":
                                                f();
                                            case "q":
                                            case "<Esc>":
                                            case "<C-c>":
                                            case "<C-[>":
                                                y(o)
                                        }
                                        return m && y(o), !0
                                    }
                                    if (v(), m) return void We(t, "No matches for " + s.source);
                                    if (!n) return p(), void(c && c());
                                    $e(t, {
                                        prefix: Ve("span", "replace with ", Ve("strong", l), " (y/n/a/q/l)"),
                                        onKeyDown: C
                                    })
                                }(n, d, m, f, g, y, p, h, r.callback)
                            } else We(n, "No previous substitute regular expression")
                        },
                        startinsert: function(e, t) {
                            P(e, "!" == t.argString ? "A" : "i", {})
                        },
                        redo: e.commands.redo,
                        undo: e.commands.undo,
                        write: function(t) {
                            e.commands.save ? e.commands.save(t) : t.save && t.save()
                        },
                        nohlsearch: function(e) {
                            ze(e)
                        },
                        yank: function(e) {
                            var t = ae(e.getCursor()).line,
                                n = e.getLine(t);
                            L.registerController.pushText("0", "yank", n, !0, !0)
                        },
                        delete: function(e, n) {
                            var r = n.selectionLine,
                                o = isNaN(n.selectionLineEnd) ? r : n.selectionLineEnd;
                            Y.delete(e, {
                                linewise: !0
                            }, [{
                                anchor: new t(r, 0),
                                head: new t(o + 1, 0)
                            }])
                        },
                        join: function(e, n) {
                            var r = n.selectionLine,
                                o = isNaN(n.selectionLineEnd) ? r : n.selectionLineEnd;
                            e.setCursor(new t(r, 0)), ee.joinLines(e, {
                                repeat: o - r
                            }, e.state.vim)
                        },
                        delmarks: function(t, n) {
                            if (n.argString && me(n.argString))
                                for (var r = t.state.vim, o = new e.StringStream(me(n.argString)); !o.eol();) {
                                    o.eatSpace();
                                    var i = o.pos;
                                    if (!o.match(/[a-zA-Z]/, !1)) return void We(t, "Invalid argument: " + n.argString.substring(i));
                                    var a = o.next();
                                    if (o.match("-", !0)) {
                                        if (!o.match(/[a-zA-Z]/, !1)) return void We(t, "Invalid argument: " + n.argString.substring(i));
                                        var s = a,
                                            l = o.next();
                                        if (!s || !l || g(s) != g(l)) return void We(t, "Invalid argument: " + s + "-");
                                        var c = s.charCodeAt(0),
                                            u = l.charCodeAt(0);
                                        if (c >= u) return void We(t, "Invalid argument: " + n.argString.substring(i));
                                        for (var h = 0; h <= u - c; h++) {
                                            var d = String.fromCharCode(c + h);
                                            delete r.marks[d]
                                        }
                                    } else a && delete r.marks[a]
                                } else We(t, "Argument required")
                        }
                    },
                    tt = new class {
                        constructor() {
                            this.commandMap_, this.buildCommandMap_()
                        }
                        processCommand(e, t, n) {
                            var r = this;
                            e.operation((function() {
                                e.curOp.isVimOp = !0, r._processCommand(e, t, n)
                            }))
                        }
                        _processCommand(t, n, r) {
                            var o = t.state.vim,
                                i = L.registerController.getRegister(":"),
                                a = i.toString(),
                                s = new e.StringStream(n);
                            i.setText(n);
                            var l, c, u = r || {};
                            u.input = n;
                            try {
                                this.parseInput_(t, s, u)
                            } catch (h) {
                                throw We(t, h + ""), h
                            }
                            if (o.visualMode && ke(t), u.commandName) {
                                if (l = this.matchCommand_(u.commandName)) {
                                    if (c = l.name, l.excludeFromCommandHistory && i.setText(a), this.parseCommandArgs_(s, u, l), "exToKey" == l.type) return void P(t, l.toKeys, l);
                                    if ("exToEx" == l.type) return void this.processCommand(t, l.toInput)
                                }
                            } else void 0 !== u.line && (c = "move");
                            if (c) try {
                                et[c](t, u), l && l.possiblyAsync || !u.callback || u.callback()
                            } catch (h) {
                                throw We(t, h + ""), h
                            } else We(t, 'Not an editor command ":' + n + '"')
                        }
                        parseInput_(e, t, n) {
                            t.eatWhile(":"), t.eat("%") ? (n.line = e.firstLine(), n.lineEnd = e.lastLine()) : (n.line = this.parseLineSpec_(e, t), void 0 !== n.line && t.eat(",") && (n.lineEnd = this.parseLineSpec_(e, t))), void 0 == n.line ? e.state.vim.visualMode ? (n.selectionLine = Ze(e, e.state.vim, "<") ? .line, n.selectionLineEnd = Ze(e, e.state.vim, ">") ? .line) : n.selectionLine = e.getCursor().line : (n.selectionLine = n.line, n.selectionLineEnd = n.lineEnd);
                            var r = t.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
                            return n.commandName = r ? r[1] : t.match(/.*/)[0], n
                        }
                        parseLineSpec_(e, t) {
                            var n = t.match(/^(\d+)/);
                            if (n) return parseInt(n[1], 10) - 1;
                            switch (t.next()) {
                                case ".":
                                    return this.parseLineSpecOffset_(t, e.getCursor().line);
                                case "$":
                                    return this.parseLineSpecOffset_(t, e.lastLine());
                                case "'":
                                    var r = t.next(),
                                        o = Ze(e, e.state.vim, r);
                                    if (!o) throw new Error("Mark not set");
                                    return this.parseLineSpecOffset_(t, o.line);
                                case "-":
                                case "+":
                                    return t.backUp(1), this.parseLineSpecOffset_(t, e.getCursor().line);
                                default:
                                    return void t.backUp(1)
                            }
                        }
                        parseLineSpecOffset_(e, t) {
                            var n = e.match(/^([+-])?(\d+)/);
                            if (n) {
                                var r = parseInt(n[2], 10);
                                "-" == n[1] ? t -= r : t += r
                            }
                            return t
                        }
                        parseCommandArgs_(e, t, n) {
                            if (!e.eol()) {
                                t.argString = e.match(/.*/)[0];
                                var r = n.argDelimiter || /\s+/,
                                    o = me(t.argString).split(r);
                                o.length && o[0] && (t.args = o)
                            }
                        }
                        matchCommand_(e) {
                            for (var t = e.length; t > 0; t--) {
                                var n = e.substring(0, t);
                                if (this.commandMap_[n]) {
                                    var r = this.commandMap_[n];
                                    if (0 === r.name.indexOf(e)) return r
                                }
                            }
                            return null
                        }
                        buildCommandMap_() {
                            this.commandMap_ = {};
                            for (var e = 0; e < i.length; e++) {
                                var t = i[e],
                                    n = t.shortName || t.name;
                                this.commandMap_[n] = t
                            }
                        }
                        map(e, t, n, o) {
                            if (":" != e && ":" == e.charAt(0)) {
                                if (n) throw Error("Mode not supported for ex mappings");
                                var i = e.substring(1);
                                ":" != t && ":" == t.charAt(0) ? this.commandMap_[i] = {
                                    name: i,
                                    type: "exToEx",
                                    toInput: t.substring(1),
                                    user: !0
                                } : this.commandMap_[i] = {
                                    name: i,
                                    type: "exToKey",
                                    toKeys: t,
                                    user: !0
                                }
                            } else {
                                var a = {
                                    keys: e,
                                    type: "keyToKey",
                                    toKeys: t,
                                    noremap: !!o
                                };
                                n && (a.context = n), r.unshift(a)
                            }
                        }
                        unmap(e, t) {
                            if (":" != e && ":" == e.charAt(0)) {
                                if (t) throw Error("Mode not supported for ex mappings");
                                var n = e.substring(1);
                                if (this.commandMap_[n] && this.commandMap_[n].user) return delete this.commandMap_[n], !0
                            } else
                                for (var o = e, i = 0; i < r.length; i++)
                                    if (o == r[i].keys && r[i].context === t) return r.splice(i, 1), !0
                        }
                    };

                function nt(t, n) {
                    var r = t.state.vim,
                        o = L.macroModeState,
                        i = L.registerController.getRegister("."),
                        a = o.isPlaying,
                        s = o.lastInsertModeChanges;
                    a || (t.off("change", it), r.insertEnd && r.insertEnd.clear(), r.insertEnd = void 0, e.off(t.getInputField(), "keydown", ct)), !a && r.insertModeRepeat > 1 && (ut(t, r, r.insertModeRepeat - 1, !0), r.lastEditInputState.repeatOverride = r.insertModeRepeat), delete r.insertModeRepeat, r.insertMode = !1, n || t.setCursor(t.getCursor().line, t.getCursor().ch - 1), t.setOption("keyMap", "vim"), t.setOption("disableInput", !0), t.toggleOverwrite(!1), i.setText(s.changes.join("")), e.signal(t, "vim-mode-change", {
                        mode: "normal"
                    }), o.isRecording && function(e) {
                        if (e.isPlaying) return;
                        var t = e.latestRegister,
                            n = L.registerController.getRegister(t);
                        n && n.pushInsertModeChanges && n.pushInsertModeChanges(e.lastInsertModeChanges)
                    }(o)
                }

                function rt(e) {
                    r.unshift(e)
                }

                function ot(e, t, n, r) {
                    var o = L.registerController.getRegister(r);
                    if (":" == r) return o.keyBuffer[0] && tt.processCommand(e, o.keyBuffer[0]), void(n.isPlaying = !1);
                    var i = o.keyBuffer,
                        a = 0;
                    n.isPlaying = !0, n.replaySearchQueries = o.searchQueries.slice(0);
                    for (var s = 0; s < i.length; s++)
                        for (var l, c, u = i[s], h = /<(?:[CSMA]-)*\w+>|./gi; l = h.exec(u);)
                            if (c = l[0], I.handleKey(e, c, "macro"), t.insertMode) {
                                var d = o.insertModeChanges[a++].changes;
                                L.macroModeState.lastInsertModeChanges.changes = d, dt(e, d, 1), nt(e)
                            }
                    n.isPlaying = !1
                }

                function it(e, t) {
                    var n = L.macroModeState,
                        r = n.lastInsertModeChanges;
                    if (!n.isPlaying)
                        for (var o = e.state.vim; t;) {
                            if (r.expectCursorActivityForChange = !0, r.ignoreCount > 1) r.ignoreCount--;
                            else if ("+input" == t.origin || "paste" == t.origin || void 0 === t.origin) {
                                var i = e.listSelections().length;
                                i > 1 && (r.ignoreCount = i);
                                var a = t.text.join("\n");
                                if (r.maybeReset && (r.changes = [], r.maybeReset = !1), a)
                                    if (e.state.overwrite && !/\n/.test(a)) r.changes.push([a]);
                                    else {
                                        if (a.length > 1) {
                                            var s = o && o.insertEnd && o.insertEnd.find(),
                                                l = e.getCursor();
                                            if (s && s.line == l.line) {
                                                var c = s.ch - l.ch;
                                                c > 0 && c < a.length && (r.changes.push([a, c]), a = "")
                                            }
                                        }
                                        a && r.changes.push(a)
                                    }
                            }
                            t = t.next
                        }
                }

                function at(e) {
                    var t = e.state.vim;
                    if (t.insertMode) {
                        var n = L.macroModeState;
                        if (n.isPlaying) return;
                        var r = n.lastInsertModeChanges;
                        r.expectCursorActivityForChange ? r.expectCursorActivityForChange = !1 : (r.maybeReset = !0, t.insertEnd && t.insertEnd.clear(), t.insertEnd = e.setBookmark(e.getCursor(), {
                            insertLeft: !0
                        }))
                    } else e.curOp ? .isVimOp || st(e, t)
                }

                function st(t, n) {
                    var r = t.getCursor("anchor"),
                        o = t.getCursor("head");
                    if (n.visualMode && !t.somethingSelected() ? ke(t, !1) : n.visualMode || n.insertMode || !t.somethingSelected() || (n.visualMode = !0, n.visualLine = !1, e.signal(t, "vim-mode-change", {
                            mode: "visual"
                        })), n.visualMode) {
                        var i = le(o, r) ? 0 : -1,
                            a = le(o, r) ? -1 : 0;
                        o = re(o, 0, i), r = re(r, 0, a), n.sel = {
                            anchor: r,
                            head: o
                        }, Te(t, n, "<", ce(o, r)), Te(t, n, ">", ue(o, r))
                    } else n.insertMode || (n.lastHPos = t.getCursor().ch)
                }

                function lt(e, t) {
                    this.keyName = e, this.key = t.key, this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.metaKey = t.metaKey, this.shiftKey = t.shiftKey
                }

                function ct(t) {
                    var n = L.macroModeState.lastInsertModeChanges,
                        r = e.keyName ? e.keyName(t) : t.key;
                    r && (-1 == r.indexOf("Delete") && -1 == r.indexOf("Backspace") || (n.maybeReset && (n.changes = [], n.maybeReset = !1), n.changes.push(new lt(r, t))))
                }

                function ut(e, t, n, r) {
                    var o = L.macroModeState;
                    o.isPlaying = !0;
                    var i = t.lastEditActionCommand,
                        a = t.inputState;

                    function s() {
                        i ? X.processAction(e, t, i) : X.evalInput(e, t)
                    }

                    function l(n) {
                        if (o.lastInsertModeChanges.changes.length > 0) {
                            n = t.lastEditActionCommand ? n : 1;
                            var r = o.lastInsertModeChanges;
                            dt(e, r.changes, n)
                        }
                    }
                    if (t.inputState = t.lastEditInputState, i && i.interlaceInsertRepeat)
                        for (var c = 0; c < n; c++) s(), l(1);
                    else r || s(), l(n);
                    t.inputState = a, t.insertMode && !r && nt(e), o.isPlaying = !1
                }

                function ht(t, n) {
                    e.lookupKey(n, "vim-insert", (function(n) {
                        return "string" == typeof n ? e.commands[n](t) : n(t), !0
                    }))
                }

                function dt(e, t, n) {
                    var r = e.getCursor("head"),
                        o = L.macroModeState.lastInsertModeChanges.visualBlock;
                    o && (ge(e, r, o + 1), n = e.listSelections().length, e.setCursor(r));
                    for (var i = 0; i < n; i++) {
                        o && e.setCursor(re(r, i, 0));
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            if (s instanceof lt) ht(e, s.keyName);
                            else if ("string" == typeof s) e.replaceSelection(s);
                            else {
                                var l = e.getCursor(),
                                    c = re(l, 0, s[0].length - (s[1] || 0));
                                e.replaceRange(s[0], l, s[1] ? l : c), e.setCursor(c)
                            }
                        }
                    }
                    o && e.setCursor(re(r, 0, 1))
                }

                function mt(e) {
                    var t = new e.constructor;
                    return Object.keys(e).forEach((function(n) {
                        if ("insertEnd" != n) {
                            var r = e[n];
                            Array.isArray(r) ? r = r.slice() : r && "object" == typeof r && r.constructor != Object && (r = mt(r)), t[n] = r
                        }
                    })), e.sel && (t.sel = {
                        head: e.sel.head && ae(e.sel.head),
                        anchor: e.sel.anchor && ae(e.sel.anchor)
                    }), t
                }
                return x("insertModeEscKeysTimeout", 200, "number"), R(), I
            }

            function c(e, t) {
                var n = t.ch,
                    r = t.line + 1;
                r < 1 && (r = 1, n = 0), r > e.lines && (r = e.lines, n = Number.MAX_VALUE);
                var o = e.line(r);
                return Math.min(o.from + Math.max(0, n), o.to)
            }

            function u(e, t) {
                let n = e.lineAt(t);
                return {
                    line: n.number - 1,
                    ch: t - n.from
                }
            }
            class h {
                constructor(e, t) {
                    this.line = e, this.ch = t
                }
            }

            function d(e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1);
                else {
                    var r = e._handlers || (e._handlers = {});
                    r[t] = (r[t] || []).concat(n)
                }
            }

            function m(e, t, n) {
                if (e.removeEventListener) e.removeEventListener(t, n, !1);
                else {
                    var r = e._handlers,
                        o = r && r[t];
                    if (o) {
                        var i = o.indexOf(n);
                        i > -1 && (r[t] = o.slice(0, i).concat(o.slice(i + 1)))
                    }
                }
            }

            function p(e, t, ...n) {
                var r, o = null === (r = e._handlers) || void 0 === r ? void 0 : r[t];
                if (o)
                    for (var i = 0; i < o.length; ++i) o[i](...n)
            }

            function f(e, ...t) {
                if (e)
                    for (var n = 0; n < e.length; ++n) e[n](...t)
            }
            let g;
            try {
                g = new RegExp("[\\w\\p{Alphabetic}\\p{Number}_]", "u")
            } catch ($) {
                g = /[\w]/
            }

            function v(e, t) {
                var n = e.cm6;
                if (!n.state.readOnly) {
                    var r = "input.type.compose";
                    if (e.curOp && (e.curOp.lastChange || (r = "input.type.compose.start")), t.annotations) try {
                        t.annotations.some((function(e) {
                            "input" == e.value && (e.value = r)
                        }))
                    } catch (o) {
                        console.error(o)
                    } else t.userEvent = r;
                    return n.dispatch(t)
                }
            }

            function y(e, t) {
                var n;
                e.curOp && (e.curOp.$changeStart = void 0), (t ? s.Yw : s.KX)(e.cm6);
                let r = null === (n = e.curOp) || void 0 === n ? void 0 : n.$changeStart;
                null != r && e.cm6.dispatch({
                    selection: {
                        anchor: r
                    }
                })
            }
            var C = {};
            class k {
                constructor(e) {
                    this.state = {}, this.marks = Object.create(null), this.$mid = 0, this.options = {}, this._handlers = {}, this.$lastChangeEndOffset = 0, this.virtualSelection = null, this.cm6 = e, this.onChange = this.onChange.bind(this), this.onSelectionChange = this.onSelectionChange.bind(this)
                }
                openDialog(e, t, n) {
                    return function(e, t, n, r) {
                        r || (r = {});
                        x(e, void 0);
                        var o = w(e, t, r.bottom),
                            i = !1;

                        function a(t) {
                            if ("string" == typeof t) s.value = t;
                            else {
                                if (i) return;
                                i = !0, M(e, o), e.state.dialog || e.focus(), r.onClose && r.onClose(o)
                            }
                        }
                        S(e, o);
                        var s = o.getElementsByTagName("input")[0];
                        s && (r.value && (s.value = r.value, !1 !== r.selectValueOnOpen && s.select()), r.onInput && k.on(s, "input", (function(e) {
                            r.onInput(e, s.value, a)
                        })), r.onKeyUp && k.on(s, "keyup", (function(e) {
                            r.onKeyUp(e, s.value, a)
                        })), k.on(s, "keydown", (function(e) {
                            r && r.onKeyDown && r.onKeyDown(e, s.value, a) || (13 == e.keyCode && n(s.value), (27 == e.keyCode || !1 !== r.closeOnEnter && 13 == e.keyCode) && (s.blur(), k.e_stop(e), a()))
                        })), !1 !== r.closeOnBlur && k.on(s, "blur", (function() {
                            setTimeout((function() {
                                document.activeElement !== s && a()
                            }))
                        })), s.focus());
                        return a
                    }(this, e, t, n)
                }
                openNotification(e, t) {
                    return function(e, t, n) {
                        x(e, s);
                        var r, o = w(e, t, n && n.bottom),
                            i = !1,
                            a = n && "undefined" !== typeof n.duration ? n.duration : 5e3;

                        function s() {
                            i || (i = !0, clearTimeout(r), o.remove(), M(e, o))
                        }
                        o.onclick = function(e) {
                            e.preventDefault(), s()
                        }, S(e, o), a && (r = setTimeout(s, a));
                        return s
                    }(this, e, t)
                }
                on(e, t) {
                    d(this, e, t)
                }
                off(e, t) {
                    m(this, e, t)
                }
                signal(e, t, n) {
                    p(this, e, t, n)
                }
                indexFromPos(e) {
                    return c(this.cm6.state.doc, e)
                }
                posFromIndex(e) {
                    return u(this.cm6.state.doc, e)
                }
                foldCode(e) {
                    let t = this.cm6,
                        n = t.state.selection.ranges,
                        i = c(this.cm6.state.doc, e),
                        a = r.jT.create([r.jT.range(i, i)], 0).ranges;
                    t.state.selection.ranges = a, (0, o.wf)(t), t.state.selection.ranges = n
                }
                firstLine() {
                    return 0
                }
                lastLine() {
                    return this.cm6.state.doc.lines - 1
                }
                lineCount() {
                    return this.cm6.state.doc.lines
                }
                setCursor(e, t) {
                    "object" === typeof e && (t = e.ch, e = e.line);
                    var n = c(this.cm6.state.doc, {
                        line: e,
                        ch: t || 0
                    });
                    this.cm6.dispatch({
                        selection: {
                            anchor: n
                        }
                    }, {
                        scrollIntoView: !this.curOp
                    }), this.curOp && !this.curOp.isVimOp && this.onBeforeEndOperation()
                }
                getCursor(e) {
                    var t = this.cm6.state.selection.main,
                        n = "head" != e && e ? "anchor" == e ? t.anchor : "start" == e ? t.from : "end" == e ? t.to : null : t.head;
                    if (null == n) throw new Error("Invalid cursor type");
                    return this.posFromIndex(n)
                }
                listSelections() {
                    var e = this.cm6.state.doc;
                    return this.cm6.state.selection.ranges.map((t => ({
                        anchor: u(e, t.anchor),
                        head: u(e, t.head)
                    })))
                }
                setSelections(e, t) {
                    var n = this.cm6.state.doc,
                        o = e.map((e => {
                            var t = c(n, e.head),
                                o = c(n, e.anchor);
                            return t == o ? r.jT.cursor(t, 1) : r.jT.range(o, t)
                        }));
                    this.cm6.dispatch({
                        selection: r.jT.create(o, t)
                    })
                }
                setSelection(e, t, n) {
                    this.setSelections([{
                        anchor: e,
                        head: t
                    }], 0), n && "*mouse" == n.origin && this.onBeforeEndOperation()
                }
                getLine(e) {
                    var t = this.cm6.state.doc;
                    return e < 0 || e >= t.lines ? "" : this.cm6.state.doc.line(e + 1).text
                }
                getLineHandle(e) {
                    return this.$lineHandleChanges || (this.$lineHandleChanges = []), {
                        row: e,
                        index: this.indexFromPos(new h(e, 0))
                    }
                }
                getLineNumber(e) {
                    var t = this.$lineHandleChanges;
                    if (!t) return null;
                    for (var n = e.index, o = 0; o < t.length; o++)
                        if (null == (n = t[o].changes.mapPos(n, 1, r.gc.TrackAfter))) return null;
                    var i = this.posFromIndex(n);
                    return 0 == i.ch ? i.line : null
                }
                releaseLineHandles() {
                    this.$lineHandleChanges = void 0
                }
                getRange(e, t) {
                    var n = this.cm6.state.doc;
                    return this.cm6.state.sliceDoc(c(n, e), c(n, t))
                }
                replaceRange(e, t, n, r) {
                    n || (n = t);
                    var o = this.cm6.state.doc;
                    v(this, {
                        changes: {
                            from: c(o, t),
                            to: c(o, n),
                            insert: e
                        }
                    })
                }
                replaceSelection(e) {
                    v(this, this.cm6.state.replaceSelection(e))
                }
                replaceSelections(e) {
                    v(this, {
                        changes: this.cm6.state.selection.ranges.map(((t, n) => ({
                            from: t.from,
                            to: t.to,
                            insert: e[n] || ""
                        })))
                    })
                }
                getSelection() {
                    return this.getSelections().join("\n")
                }
                getSelections() {
                    var e = this.cm6;
                    return e.state.selection.ranges.map((t => e.state.sliceDoc(t.from, t.to)))
                }
                somethingSelected() {
                    return this.cm6.state.selection.ranges.some((e => !e.empty))
                }
                getInputField() {
                    return this.cm6.contentDOM
                }
                clipPos(e) {
                    var t = this.cm6.state.doc,
                        n = e.ch,
                        r = e.line + 1;
                    r < 1 && (r = 1, n = 0), r > t.lines && (r = t.lines, n = Number.MAX_VALUE);
                    var o = t.line(r);
                    return n = Math.min(Math.max(0, n), o.to - o.from), new h(r - 1, n)
                }
                getValue() {
                    return this.cm6.state.doc.toString()
                }
                setValue(e) {
                    var t = this.cm6;
                    return t.dispatch({
                        changes: {
                            from: 0,
                            to: t.state.doc.length,
                            insert: e
                        },
                        selection: r.jT.range(0, 0)
                    })
                }
                focus() {
                    return this.cm6.focus()
                }
                blur() {
                    return this.cm6.contentDOM.blur()
                }
                defaultTextHeight() {
                    return this.cm6.defaultLineHeight
                }
                findMatchingBracket(e, t) {
                    var n = this.cm6.state,
                        r = c(n.doc, e),
                        i = (0, o.Um)(n, r + 1, -1);
                    return i && i.end || (i = (0, o.Um)(n, r, 1)) && i.end ? {
                        to: u(n.doc, i.end.from)
                    } : {
                        to: void 0
                    }
                }
                scanForBracket(e, t, n, r) {
                    return function(e, t, n, r, o) {
                        for (var i = o && o.maxScanLineLength || 1e4, a = o && o.maxScanLines || 1e3, s = [], l = function(e) {
                                return e && e.bracketRegex || /[(){}[\]]/
                            }(o), c = n > 0 ? Math.min(t.line + a, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - a), u = t.line; u != c; u += n) {
                            var d = e.getLine(u);
                            if (d) {
                                var m = n > 0 ? 0 : d.length - 1,
                                    p = n > 0 ? d.length : -1;
                                if (!(d.length > i))
                                    for (u == t.line && (m = t.ch - (n < 0 ? 1 : 0)); m != p; m += n) {
                                        var f = d.charAt(m);
                                        if (l.test(f)) {
                                            var g = L[f];
                                            if (g && ">" == g.charAt(1) == n > 0) s.push(f);
                                            else {
                                                if (!s.length) return {
                                                    pos: new h(u, m),
                                                    ch: f
                                                };
                                                s.pop()
                                            }
                                        }
                                    }
                            }
                        }
                        return u - n != (n > 0 ? e.lastLine() : e.firstLine()) && null
                    }(this, e, t, 0, r)
                }
                indentLine(e, t) {
                    t ? this.indentMore() : this.indentLess()
                }
                indentMore() {
                    (0, s.at)(this.cm6)
                }
                indentLess() {
                    (0, s.xi)(this.cm6)
                }
                execCommand(e) {
                    if ("indentAuto" == e) k.commands.indentAuto(this);
                    else if ("goLineLeft" == e)(0, s.Kd)(this.cm6);
                    else if ("goLineRight" == e) {
                        (0, s.Bx)(this.cm6);
                        let e = this.cm6.state,
                            t = e.selection.main.head;
                        t < e.doc.length && "\n" !== e.sliceDoc(t, t + 1) && (0, s.kU)(this.cm6)
                    } else console.log(e + " is not implemented")
                }
                setBookmark(e, t) {
                    var n = (null === t || void 0 === t ? void 0 : t.insertLeft) ? 1 : -1,
                        r = this.indexFromPos(e);
                    return new A(this, r, n)
                }
                addOverlay({
                    query: e
                }) {
                    let t = new a.Jb({
                        regexp: !0,
                        search: e.source,
                        caseSensitive: !/i/.test(e.flags)
                    });
                    if (t.valid) {
                        t.forVim = !0, this.cm6Query = t;
                        let e = a.ql.of(t);
                        return this.cm6.dispatch({
                            effects: e
                        }), t
                    }
                }
                removeOverlay(e) {
                    if (!this.cm6Query) return;
                    this.cm6Query.forVim = !1;
                    let t = a.ql.of(this.cm6Query);
                    this.cm6.dispatch({
                        effects: t
                    })
                }
                getSearchCursor(e, t) {
                    var n = this,
                        r = null,
                        o = null;
                    void 0 == t.ch && (t.ch = Number.MAX_VALUE);
                    var i = c(n.cm6.state.doc, t),
                        s = e.source.replace(/(\\.|{(?:\d+(?:,\d*)?|,\d+)})|[{}]/g, (function(e, t) {
                            return t || "\\" + e
                        }));

                    function l(t, n = 0, r = t.length) {
                        return new a.Zg(t, s, {
                            ignoreCase: e.ignoreCase
                        }, n, r)
                    }
                    return {
                        findNext: function() {
                            return this.find(!1)
                        },
                        findPrevious: function() {
                            return this.find(!0)
                        },
                        find: function(e) {
                            var t = n.cm6.state.doc;
                            if (e) {
                                let e = r ? r.from == r.to ? r.to - 1 : r.from : i;
                                r = function(e, t) {
                                    var r = n.cm6.state.doc;
                                    for (let n = 1;; n++) {
                                        let o = Math.max(e, t - 1e4 * n),
                                            i = l(r, o, t),
                                            a = null;
                                        for (; !i.next().done;) a = i.value;
                                        if (a && (o == e || a.from > o + 10)) return a;
                                        if (o == e) return null
                                    }
                                }(0, e)
                            } else {
                                let e = r ? r.from == r.to ? r.to + 1 : r.to : i;
                                r = function(e) {
                                    var t = n.cm6.state.doc;
                                    if (e > t.length) return null;
                                    let r = l(t, e).next();
                                    return r.done ? null : r.value
                                }(e)
                            }
                            return o = r && {
                                from: u(t, r.from),
                                to: u(t, r.to),
                                match: r.match
                            }, r && r.match
                        },
                        from: function() {
                            return null === o || void 0 === o ? void 0 : o.from
                        },
                        to: function() {
                            return null === o || void 0 === o ? void 0 : o.to
                        },
                        replace: function(e) {
                            r && (v(n, {
                                changes: {
                                    from: r.from,
                                    to: r.to,
                                    insert: e
                                }
                            }), r.to = r.from + e.length, o && (o.to = u(n.cm6.state.doc, r.to)))
                        }
                    }
                }
                findPosV(e, t, n, o) {
                    let {
                        cm6: i
                    } = this;
                    const a = i.state.doc;
                    let s = "page" == n ? i.dom.clientHeight : 0;
                    const l = c(a, e);
                    let h = r.jT.cursor(l, 1, void 0, o),
                        d = Math.round(Math.abs(t));
                    for (let r = 0; r < d; r++) "page" == n ? h = i.moveVertically(h, t > 0, s) : "line" == n && (h = i.moveVertically(h, t > 0));
                    let m = u(a, h.head);
                    return (t < 0 && 0 == h.head && 0 != o && 0 == e.line && 0 != e.ch || t > 0 && h.head == a.length && m.ch != o && e.line == m.line) && (m.hitSide = !0), m
                }
                charCoords(e, t) {
                    var n = this.cm6.contentDOM.getBoundingClientRect(),
                        r = c(this.cm6.state.doc, e),
                        o = this.cm6.coordsAtPos(r),
                        i = -n.top;
                    return {
                        left: ((null === o || void 0 === o ? void 0 : o.left) || 0) - n.left,
                        top: ((null === o || void 0 === o ? void 0 : o.top) || 0) + i,
                        bottom: ((null === o || void 0 === o ? void 0 : o.bottom) || 0) + i
                    }
                }
                coordsChar(e, t) {
                    var n = this.cm6.contentDOM.getBoundingClientRect(),
                        r = this.cm6.posAtCoords({
                            x: e.left + n.left,
                            y: e.top + n.top
                        }) || 0;
                    return u(this.cm6.state.doc, r)
                }
                getScrollInfo() {
                    var e = this.cm6.scrollDOM;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight,
                        width: e.scrollWidth,
                        clientHeight: e.clientHeight,
                        clientWidth: e.clientWidth
                    }
                }
                scrollTo(e, t) {
                    null != e && (this.cm6.scrollDOM.scrollLeft = e), null != t && (this.cm6.scrollDOM.scrollTop = t)
                }
                scrollIntoView(e, t) {
                    if (e) {
                        var n = this.indexFromPos(e);
                        this.cm6.dispatch({
                            effects: i.tk.scrollIntoView(n)
                        })
                    } else this.cm6.dispatch({
                        scrollIntoView: !0,
                        userEvent: "scroll"
                    })
                }
                getWrapperElement() {
                    return this.cm6.dom
                }
                getMode() {
                    return {
                        name: this.getOption("mode")
                    }
                }
                setSize(e, t) {
                    this.cm6.dom.style.width = e + 4 + "px", this.cm6.dom.style.height = t + "px", this.refresh()
                }
                refresh() {
                    this.cm6.measure()
                }
                destroy() {
                    this.removeOverlay()
                }
                getLastEditEnd() {
                    return this.posFromIndex(this.$lastChangeEndOffset)
                }
                onChange(e) {
                    this.$lineHandleChanges && this.$lineHandleChanges.push(e);
                    for (let n in this.marks) {
                        this.marks[n].update(e.changes)
                    }
                    this.virtualSelection && (this.virtualSelection.ranges = this.virtualSelection.ranges.map((t => t.map(e.changes))));
                    var t = this.curOp = this.curOp || {};
                    e.changes.iterChanges(((e, n, r, o, i) => {
                        (null == t.$changeStart || t.$changeStart > r) && (t.$changeStart = r), this.$lastChangeEndOffset = o;
                        var a = {
                            text: i.toJSON()
                        };
                        t.lastChange ? t.lastChange.next = t.lastChange = a : t.lastChange = t.change = a
                    }), !0), t.changeHandlers || (t.changeHandlers = this._handlers.change && this._handlers.change.slice())
                }
                onSelectionChange() {
                    var e = this.curOp = this.curOp || {};
                    e.cursorActivityHandlers || (e.cursorActivityHandlers = this._handlers.cursorActivity && this._handlers.cursorActivity.slice()), this.curOp.cursorActivity = !0
                }
                operation(e, t) {
                    this.curOp || (this.curOp = {
                        $d: 0
                    }), this.curOp.$d++;
                    try {
                        var n = e()
                    } finally {
                        this.curOp && (this.curOp.$d--, this.curOp.$d || this.onBeforeEndOperation())
                    }
                    return n
                }
                onBeforeEndOperation() {
                    var e = this.curOp,
                        t = !1;
                    e && (e.change && f(e.changeHandlers, this, e.change), e && e.cursorActivity && (f(e.cursorActivityHandlers, this, null), e.isVimOp && (t = !0)), this.curOp = null), t && this.scrollIntoView()
                }
                moveH(e, t) {
                    if ("char" == t) {
                        var n = this.getCursor();
                        this.setCursor(n.line, n.ch + e)
                    }
                }
                setOption(e, t) {
                    switch (e) {
                        case "keyMap":
                            this.state.keyMap = t;
                            break;
                        case "textwidth":
                            this.state.textwidth = t
                    }
                }
                getOption(e) {
                    switch (e) {
                        case "firstLineNumber":
                            return 1;
                        case "tabSize":
                            return this.cm6.state.tabSize || 4;
                        case "readOnly":
                            return this.cm6.state.readOnly;
                        case "indentWithTabs":
                            return "\t" == this.cm6.state.facet(o.c);
                        case "indentUnit":
                            return this.cm6.state.facet(o.c).length || 2;
                        case "textwidth":
                            return this.state.textwidth;
                        case "keyMap":
                            return this.state.keyMap || "vim"
                    }
                }
                toggleOverwrite(e) {
                    this.state.overwrite = e
                }
                getTokenTypeAt(e) {
                    var t, n = this.indexFromPos(e),
                        r = (0, o.l)(this.cm6.state, n),
                        i = null === r || void 0 === r ? void 0 : r.resolve(n),
                        a = (null === (t = null === i || void 0 === i ? void 0 : i.type) || void 0 === t ? void 0 : t.name) || "";
                    return /comment/i.test(a) ? "comment" : /string/i.test(a) ? "string" : ""
                }
                overWriteSelection(e) {
                    var t = this.cm6.state.doc,
                        n = this.cm6.state.selection,
                        o = n.ranges.map((e => {
                            if (e.empty) {
                                var n = e.to < t.length ? t.sliceString(e.from, e.to + 1) : "";
                                if (n && !/\n/.test(n)) return r.jT.range(e.from, e.to + 1)
                            }
                            return e
                        }));
                    this.cm6.dispatch({
                        selection: r.jT.create(o, n.mainIndex)
                    }), this.replaceSelection(e)
                }
                isInMultiSelectMode() {
                    return this.cm6.state.selection.ranges.length > 1
                }
                virtualSelectionMode() {
                    return !!this.virtualSelection
                }
                forEachSelection(e) {
                    var t = this.cm6.state.selection;
                    this.virtualSelection = r.jT.create(t.ranges, t.mainIndex);
                    for (var n = 0; n < this.virtualSelection.ranges.length; n++) {
                        var o = this.virtualSelection.ranges[n];
                        o && (this.cm6.dispatch({
                            selection: r.jT.create([o])
                        }), e(), this.virtualSelection.ranges[n] = this.cm6.state.selection.ranges[0])
                    }
                    this.cm6.dispatch({
                        selection: this.virtualSelection
                    }), this.virtualSelection = null
                }
                hardWrap(e) {
                    return function(e, t) {
                        var n, r = t.column || e.getOption("textwidth") || 80,
                            o = 0 != t.allowMerge,
                            i = Math.min(t.from, t.to),
                            a = Math.max(t.from, t.to);
                        for (; i <= a;) {
                            var s = e.getLine(i);
                            if (s.length > r) {
                                if (u = f(s, r, 5)) {
                                    var l = null === (n = /^\s*/.exec(s)) || void 0 === n ? void 0 : n[0];
                                    e.replaceRange("\n" + l, new h(i, u.start), new h(i, u.end))
                                }
                                a++
                            } else if (o && /\S/.test(s) && i != a) {
                                var c = e.getLine(i + 1);
                                if (c && /\S/.test(c)) {
                                    var u, d = s.replace(/\s+$/, ""),
                                        m = c.replace(/^\s+/, ""),
                                        p = d + " " + m;
                                    (u = f(p, r, 5)) && u.start > d.length || p.length < r ? (e.replaceRange(" ", new h(i, d.length), new h(i + 1, c.length - m.length)), i--, a--) : d.length < s.length && e.replaceRange("", new h(i, d.length), new h(i, s.length))
                                }
                            }
                            i++
                        }
                        return i;

                        function f(e, t, n) {
                            if (!(e.length < t)) {
                                var r = e.slice(0, t),
                                    o = e.slice(t),
                                    i = /^(?:(\s+)|(\S+)(\s+))/.exec(o),
                                    a = /(?:(\s+)|(\s+)(\S+))$/.exec(r),
                                    s = 0,
                                    l = 0;
                                return a && !a[2] && (s = t - a[1].length, l = t), i && !i[2] && (s || (s = t), l = t + i[1].length), s ? {
                                    start: s,
                                    end: l
                                } : a && a[2] && a.index > n ? {
                                    start: a.index,
                                    end: a.index + a[2].length
                                } : i && i[2] ? {
                                    start: s = t + i[2].length,
                                    end: s + i[3].length
                                } : void 0
                            }
                        }
                    }(this, e)
                }
            }

            function w(e, t, n) {
                var r = document.createElement("div");
                return r.appendChild(t), r
            }

            function x(e, t) {
                e.state.currentNotificationClose && e.state.currentNotificationClose(), e.state.currentNotificationClose = t
            }

            function S(e, t) {
                var n = e.state.dialog;
                e.state.dialog = t, t && n !== t && (n && n.contains(document.activeElement) && e.focus(), n && n.parentElement ? n.parentElement.replaceChild(t, n) : n && n.remove(), k.signal(e, "dialog"))
            }

            function M(e, t) {
                e.state.dialog == t && (e.state.dialog = null, k.signal(e, "dialog"))
            }
            k.isMac = "undefined" != typeof navigator && /Mac/.test(navigator.platform), k.Pos = h, k.StringStream = o.gY, k.commands = {
                cursorCharLeft: function(e) {
                    (0, s.lv)(e.cm6)
                },
                redo: function(e) {
                    y(e, !1)
                },
                undo: function(e) {
                    y(e, !0)
                },
                newlineAndIndent: function(e) {
                    (0, s.xx)({
                        state: e.cm6.state,
                        dispatch: t => v(e, t)
                    })
                },
                indentAuto: function(e) {
                    (0, s.wA)(e.cm6)
                },
                newlineAndIndentContinueComment: void 0,
                save: void 0
            }, k.isWordChar = function(e) {
                return g.test(e)
            }, k.keys = C, k.addClass = function(e, t) {}, k.rmClass = function(e, t) {}, k.e_preventDefault = function(e) {
                e.preventDefault()
            }, k.e_stop = function(e) {
                var t, n;
                null === (t = null === e || void 0 === e ? void 0 : e.stopPropagation) || void 0 === t || t.call(e), null === (n = null === e || void 0 === e ? void 0 : e.preventDefault) || void 0 === n || n.call(e)
            }, k.lookupKey = function(e, t, n) {
                var r = k.keys[e];
                r && n(r)
            }, k.on = d, k.off = m, k.signal = p, k.findMatchingTag = function(e, t) {}, k.findEnclosingTag = function(e, t) {
                var n, r, i = e.cm6.state,
                    a = e.indexFromPos(t);
                if (a < i.doc.length) {
                    "<" == i.sliceDoc(a, a + 1) && a++
                }
                var s = (0, o.l)(i, a),
                    l = (null === s || void 0 === s ? void 0 : s.resolve(a)) || null;
                for (; l;) {
                    if ("OpenTag" == (null === (n = l.firstChild) || void 0 === n ? void 0 : n.type.name) && "CloseTag" == (null === (r = l.lastChild) || void 0 === r ? void 0 : r.type.name)) return {
                        open: b(i.doc, l.firstChild),
                        close: b(i.doc, l.lastChild)
                    };
                    l = l.parent
                }
            }, k.keyName = void 0;
            var L = {
                "(": ")>",
                ")": "(<",
                "[": "]>",
                "]": "[<",
                "{": "}>",
                "}": "{<",
                "<": ">>",
                ">": "<<"
            };

            function b(e, t) {
                return {
                    from: u(e, t.from),
                    to: u(e, t.to)
                }
            }
            class A {
                constructor(e, t, n) {
                    this.cm = e, this.id = e.$mid++, this.offset = t, this.assoc = n, e.marks[this.id] = this
                }
                clear() {
                    delete this.cm.marks[this.id]
                }
                find() {
                    return null == this.offset ? null : this.cm.posFromIndex(this.offset)
                }
                update(e) {
                    null != this.offset && (this.offset = e.mapPos(this.offset, this.assoc, r.gc.TrackDel))
                }
            }
            let E = i.HM || function() {
                let e = {
                    cursorBlinkRate: 1200
                };
                return function() {
                    return e
                }
            }();
            class O {
                constructor(e, t, n, r, o, i, a, s, l, c) {
                    this.left = e, this.top = t, this.height = n, this.fontFamily = r, this.fontSize = o, this.fontWeight = i, this.color = a, this.className = s, this.letter = l, this.partial = c
                }
                draw() {
                    let e = document.createElement("div");
                    return e.className = this.className, this.adjust(e), e
                }
                adjust(e) {
                    e.style.left = this.left + "px", e.style.top = this.top + "px", e.style.height = this.height + "px", e.style.lineHeight = this.height + "px", e.style.fontFamily = this.fontFamily, e.style.fontSize = this.fontSize, e.style.fontWeight = this.fontWeight, e.style.color = this.partial ? "transparent" : this.color, e.className = this.className, e.textContent = this.letter
                }
                eq(e) {
                    return this.left == e.left && this.top == e.top && this.height == e.height && this.fontFamily == e.fontFamily && this.fontSize == e.fontSize && this.fontWeight == e.fontWeight && this.color == e.color && this.className == e.className && this.letter == e.letter
                }
            }
            class T {
                constructor(e, t) {
                    this.view = e, this.rangePieces = [], this.cursors = [], this.cm = t, this.measureReq = {
                        read: this.readPos.bind(this),
                        write: this.drawSel.bind(this)
                    }, this.cursorLayer = e.scrollDOM.appendChild(document.createElement("div")), this.cursorLayer.className = "cm-cursorLayer cm-vimCursorLayer", this.cursorLayer.setAttribute("aria-hidden", "true"), e.requestMeasure(this.measureReq), this.setBlinkRate()
                }
                setBlinkRate() {
                    let e = E(this.cm.cm6.state).cursorBlinkRate;
                    this.cursorLayer.style.animationDuration = e + "ms"
                }
                update(e) {
                    (e.selectionSet || e.geometryChanged || e.viewportChanged) && (this.view.requestMeasure(this.measureReq), this.cursorLayer.style.animationName = "cm-blink" == this.cursorLayer.style.animationName ? "cm-blink2" : "cm-blink"),
                    function(e) {
                        return E(e.startState) != E(e.state)
                    }(e) && this.setBlinkRate()
                }
                scheduleRedraw() {
                    this.view.requestMeasure(this.measureReq)
                }
                readPos() {
                    let {
                        state: e
                    } = this.view, t = [];
                    for (let n of e.selection.ranges) {
                        let r = n == e.selection.main,
                            o = I(this.cm, this.view, n, r);
                        o && t.push(o)
                    }
                    return {
                        cursors: t
                    }
                }
                drawSel({
                    cursors: e
                }) {
                    if (e.length != this.cursors.length || e.some(((e, t) => !e.eq(this.cursors[t])))) {
                        let t = this.cursorLayer.children;
                        if (t.length !== e.length) {
                            this.cursorLayer.textContent = "";
                            for (const t of e) this.cursorLayer.appendChild(t.draw())
                        } else e.forEach(((e, n) => e.adjust(t[n])));
                        this.cursors = e
                    }
                }
                destroy() {
                    this.cursorLayer.remove()
                }
            }
            const R = {
                    ".cm-vimMode .cm-line": {
                        "& ::selection": {
                            backgroundColor: "transparent !important"
                        },
                        "&::selection": {
                            backgroundColor: "transparent !important"
                        },
                        caretColor: "transparent !important"
                    },
                    ".cm-fat-cursor": {
                        position: "absolute",
                        background: "#ff9696",
                        border: "none",
                        whiteSpace: "pre"
                    },
                    "&:not(.cm-focused) .cm-fat-cursor": {
                        background: "none",
                        outline: "solid 1px #ff9696",
                        color: "transparent !important"
                    }
                },
                B = r.Wl.highest(i.tk.theme(R));

            function I(e, t, n, r) {
                var o, a;
                let s = n.head,
                    l = !1,
                    c = 1,
                    u = e.state.vim;
                if (u && (!u.insertMode || e.state.overwrite)) {
                    if (l = !0, u.visualBlock && !r) return null;
                    n.anchor < n.head && s--, e.state.overwrite ? c = .2 : u.status && (c = .5)
                }
                if (l) {
                    let e = s < t.state.doc.length && t.state.sliceDoc(s, s + 1);
                    e && /[\uDC00-\uDFFF]/.test(e) && s > 1 && (s--, e = t.state.sliceDoc(s, s + 1));
                    let n = t.coordsAtPos(s, 1);
                    if (!n) return null;
                    let l = function(e) {
                            let t = e.scrollDOM.getBoundingClientRect();
                            return {
                                left: (e.textDirection == i.Nm.LTR ? t.left : t.right - e.scrollDOM.clientWidth) - e.scrollDOM.scrollLeft,
                                top: t.top - e.scrollDOM.scrollTop
                            }
                        }(t),
                        u = t.domAtPos(s),
                        d = u ? u.node : t.contentDOM;
                    for (; u && u.node instanceof HTMLElement;) d = u.node, u = {
                        node: u.node.childNodes[u.offset],
                        offset: 0
                    };
                    if (!(d instanceof HTMLElement)) {
                        if (!d.parentNode) return null;
                        d = d.parentNode
                    }
                    let m = getComputedStyle(d),
                        p = n.left,
                        f = null === (a = (o = t).coordsForChar) || void 0 === a ? void 0 : a.call(o, s);
                    if (f && (p = f.left), e && "\n" != e && "\r" != e)
                        if ("\t" == e) {
                            e = "\xa0";
                            var h = t.coordsAtPos(s + 1, -1);
                            h && (p = h.left - (h.left - n.left) / parseInt(m.tabSize))
                        } else /[\uD800-\uDBFF]/.test(e) && s < t.state.doc.length - 1 && (e += t.state.sliceDoc(s + 1, s + 2));
                    else e = "\xa0";
                    let g = n.bottom - n.top;
                    return new O(p - l.left, n.top - l.top + g * (1 - c), g * c, m.fontFamily, m.fontSize, m.fontWeight, m.color, r ? "cm-fat-cursor cm-cursor-primary" : "cm-fat-cursor cm-cursor-secondary", e, 1 != c)
                }
                return null
            }
            var N = "undefined" != typeof navigator && /linux/i.test(navigator.platform) && / Gecko\/\d+/.exec(navigator.userAgent);
            const K = l(k),
                D = i.tk.baseTheme({
                    ".cm-vimMode .cm-cursorLayer:not(.cm-vimCursorLayer)": {
                        display: "none"
                    },
                    ".cm-vim-panel": {
                        padding: "0px 10px",
                        fontFamily: "monospace",
                        minHeight: "1.3em"
                    },
                    ".cm-vim-panel input": {
                        border: "none",
                        outline: "none",
                        backgroundColor: "inherit"
                    },
                    "&light .cm-searchMatch": {
                        backgroundColor: "#ffff0054"
                    },
                    "&dark .cm-searchMatch": {
                        backgroundColor: "#00ffff8a"
                    }
                }),
                P = i.lg.fromClass(class {
                    constructor(e) {
                        this.status = "", this.query = null, this.decorations = i.p.none, this.waitForCopy = !1, this.lastKeydown = "", this.useNextTextInput = !1, this.compositionText = "", this.view = e;
                        const t = this.cm = new k(e);
                        K.enterVimMode(this.cm), this.view.cm = this.cm, this.cm.state.vimPlugin = this, this.blockCursor = new T(e, t), this.updateClass(), this.cm.on("vim-command-done", (() => {
                            t.state.vim && (t.state.vim.status = ""), this.blockCursor.scheduleRedraw(), this.updateStatus()
                        })), this.cm.on("vim-mode-change", (e => {
                            t.state.vim && (t.state.vim.mode = e.mode, e.subMode && (t.state.vim.mode += " block"), t.state.vim.status = "", this.blockCursor.scheduleRedraw(), this.updateClass(), this.updateStatus())
                        })), this.cm.on("dialog", (() => {
                            this.cm.state.statusbar ? this.updateStatus() : e.dispatch({
                                effects: F.of(!!this.cm.state.dialog)
                            })
                        })), this.dom = document.createElement("span"), this.dom.style.cssText = "position: absolute; right: 10px; top: 1px", this.statusButton = document.createElement("span"), this.statusButton.onclick = e => {
                            K.handleKey(this.cm, "<Esc>", "user"), this.cm.focus()
                        }, this.statusButton.style.cssText = "cursor: pointer"
                    }
                    update(e) {
                        var t;
                        if ((e.viewportChanged || e.docChanged) && this.query && this.highlight(this.query), e.docChanged && this.cm.onChange(e), e.selectionSet && this.cm.onSelectionChange(), e.viewportChanged, this.cm.curOp && !this.cm.curOp.isVimOp && this.cm.onBeforeEndOperation(), e.transactions)
                            for (let n of e.transactions)
                                for (let e of n.effects)
                                    if (e.is(a.ql)) {
                                        if (null === (t = e.value) || void 0 === t ? void 0 : t.forVim) {
                                            let t = e.value.create();
                                            this.highlight(t)
                                        } else this.highlight(null)
                                    }
                        this.blockCursor.update(e)
                    }
                    updateClass() {
                        const e = this.cm.state;
                        !e.vim || e.vim.insertMode && !e.overwrite ? this.view.scrollDOM.classList.remove("cm-vimMode") : this.view.scrollDOM.classList.add("cm-vimMode")
                    }
                    updateStatus() {
                        let e = this.cm.state.statusbar,
                            t = this.cm.state.vim;
                        if (!e || !t) return;
                        let n = this.cm.state.dialog;
                        if (n) n.parentElement != e && (e.textContent = "", e.appendChild(n));
                        else {
                            e.textContent = "";
                            var r = (t.mode || "normal").toUpperCase();
                            t.insertModeReturn && (r += "(C-O)"), this.statusButton.textContent = `--${r}--`, e.appendChild(this.statusButton)
                        }
                        this.dom.textContent = t.status, e.appendChild(this.dom)
                    }
                    destroy() {
                        K.leaveVimMode(this.cm), this.updateClass(), this.blockCursor.destroy(), delete this.view.cm
                    }
                    highlight(e) {
                        if (this.query = e, !e) return this.decorations = i.p.none;
                        let {
                            view: t
                        } = this, n = new r.f_;
                        for (let r = 0, o = t.visibleRanges, i = o.length; r < i; r++) {
                            let {
                                from: a,
                                to: s
                            } = o[r];
                            for (; r < i - 1 && s > o[r + 1].from - 500;) s = o[++r].to;
                            e.highlight(t.state, a, s, ((e, t) => {
                                n.add(e, t, H)
                            }))
                        }
                        return this.decorations = n.finish()
                    }
                    handleKey(e, t) {
                        const n = this.cm;
                        let r = n.state.vim;
                        if (!r) return;
                        const o = K.vimKeyFromEvent(e, r);
                        if (k.signal(this.cm, "inputEvent", {
                                type: "handleKey",
                                key: o
                            }), !o) return;
                        if ("<Esc>" == o && !r.insertMode && !r.visualMode && this.query) {
                            const e = r.searchState_;
                            e && (n.removeOverlay(e.getOverlay()), e.setOverlay(null))
                        }
                        if ("<C-c>" === o && !k.isMac && n.somethingSelected()) return this.waitForCopy = !0, !0;
                        r.status = (r.status || "") + o;
                        let i = K.multiSelectHandleKey(n, o, "user");
                        return r = K.maybeInitVimState_(n), !i && r.insertMode && n.state.overwrite && (e.key && 1 == e.key.length && !/\n/.test(e.key) ? (i = !0, n.overWriteSelection(e.key)) : "Backspace" == e.key && (i = !0, k.commands.cursorCharLeft(n))), i && (k.signal(this.cm, "vim-keypress", o), e.preventDefault(), e.stopPropagation(), this.blockCursor.scheduleRedraw()), this.updateStatus(), !!i
                    }
                }, {
                    eventHandlers: {
                        copy: function(e, t) {
                            this.waitForCopy && (this.waitForCopy = !1, Promise.resolve().then((() => {
                                var e = this.cm,
                                    t = e.state.vim;
                                t && (t.insertMode ? e.setSelection(e.getCursor(), e.getCursor()) : e.operation((() => {
                                    e.curOp && (e.curOp.isVimOp = !0), K.handleKey(e, "<Esc>", "user")
                                })))
                            })))
                        },
                        compositionstart: function(e, t) {
                            this.useNextTextInput = !0, k.signal(this.cm, "inputEvent", e)
                        },
                        compositionupdate: function(e, t) {
                            k.signal(this.cm, "inputEvent", e)
                        },
                        compositionend: function(e, t) {
                            k.signal(this.cm, "inputEvent", e)
                        },
                        keypress: function(e, t) {
                            k.signal(this.cm, "inputEvent", e), "Dead" == this.lastKeydown && this.handleKey(e, t)
                        },
                        keydown: function(e, t) {
                            k.signal(this.cm, "inputEvent", e), this.lastKeydown = e.key, "Unidentified" == this.lastKeydown || "Process" == this.lastKeydown || "Dead" == this.lastKeydown ? this.useNextTextInput = !0 : (this.useNextTextInput = !1, this.handleKey(e, t))
                        }
                    },
                    provide: () => [i.tk.inputHandler.of(((e, t, n, r) => {
                        var o, i, a = function(e) {
                            return e.cm || null
                        }(e);
                        if (!a) return !1;
                        var s = null === (o = a.state) || void 0 === o ? void 0 : o.vim,
                            l = a.state.vimPlugin;
                        if (s && !s.insertMode && !(null === (i = a.curOp) || void 0 === i ? void 0 : i.isVimOp)) {
                            if ("\0\0" === r) return !0;
                            if (k.signal(a, "inputEvent", {
                                    type: "text",
                                    text: r,
                                    from: t,
                                    to: n
                                }), 1 == r.length && l.useNextTextInput) {
                                if (s.expectLiteralNext && e.composing) return l.compositionText = r, !1;
                                if (l.compositionText) {
                                    var c = l.compositionText;
                                    l.compositionText = "";
                                    var u = e.state.selection.main.head;
                                    if (c === e.state.sliceDoc(u - c.length, u)) {
                                        var h = a.getCursor();
                                        a.replaceRange("", a.posFromIndex(u - c.length), h)
                                    }
                                }
                                return l.handleKey({
                                        key: r,
                                        preventDefault: () => {},
                                        stopPropagation: () => {}
                                    }),
                                    function(e) {
                                        var t = e.scrollDOM.parentElement;
                                        if (!t) return;
                                        if (N) return e.contentDOM.textContent = "\0\0", void e.contentDOM.dispatchEvent(new CustomEvent("compositionend"));
                                        var n = e.scrollDOM.nextSibling,
                                            r = window.getSelection(),
                                            o = r && {
                                                anchorNode: r.anchorNode,
                                                anchorOffset: r.anchorOffset,
                                                focusNode: r.focusNode,
                                                focusOffset: r.focusOffset
                                            };
                                        e.scrollDOM.remove(), t.insertBefore(e.scrollDOM, n);
                                        try {
                                            o && r && (r.setPosition(o.anchorNode, o.anchorOffset), o.focusNode && r.extend(o.focusNode, o.focusOffset))
                                        } catch (i) {
                                            console.error(i)
                                        }
                                        e.focus(), e.contentDOM.dispatchEvent(new CustomEvent("compositionend"))
                                    }(e), !0
                            }
                        }
                        return !1
                    }))],
                    decorations: e => e.decorations
                });
            const H = i.p.mark({
                    class: "cm-searchMatch"
                }),
                F = r.Py.define(),
                j = r.QQ.define({
                    create: () => !1,
                    update(e, t) {
                        for (let n of t.effects) n.is(F) && (e = n.value);
                        return e
                    },
                    provide: e => i.mH.from(e, (e => e ? _ : null))
                });

            function _(e) {
                let t = document.createElement("div");
                t.className = "cm-vim-panel";
                let n = e.cm;
                return n.state.dialog && t.appendChild(n.state.dialog), {
                    top: !1,
                    dom: t
                }
            }

            function V(e) {
                let t = document.createElement("div");
                t.className = "cm-vim-panel";
                let n = e.cm;
                return n.state.statusbar = t, n.state.vimPlugin.updateStatus(), {
                    dom: t
                }
            }

            function W(e = {}) {
                return [D, P, B, e.status ? i.mH.of(V) : j]
            }
        }
    }
]);