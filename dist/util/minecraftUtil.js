"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatCodes = {
    BLACK: '§0',
    DARK_BLUE: '§1',
    DARK_GREEN: '§2',
    DARK_AQUA: '§3',
    DARK_RED: '§4',
    DARK_PURPLE: '§5',
    GOLD: '§6',
    GRAY: '§7',
    DARK_GRAY: '§8',
    BLUE: '§9',
    GREEN: '§a',
    AQUA: '§b',
    RED: '§c',
    LIGHT_PURPLE: '§d',
    YELLOW: '§e',
    WHITE: '§f',
    BOLD: '§l',
    ITALIC: '§o',
    UNDERLINE: '§n',
    STRIKETHROUGH: '§m',
    OBFUSCATED: '§k',
    RESET: '§r',
    get: (c) => ChatCodes[c] || '',
};
function jsonToCodedText(item) {
    let message = '';
    if (typeof item === 'string') {
        return item;
    }
    if (typeof item === 'object') {
        if (Array.isArray(item)) {
            for (const element of item) {
                message += jsonToCodedText(element);
            }
        }
        else {
            const { text, color, extra, bold, italic, underlined, strikethrough, obfuscated, } = item;
            if (color) {
                message += ChatCodes.get(color.toUpperCase());
            }
            if (bold) {
                message += ChatCodes['BOLD'];
            }
            if (italic) {
                message += ChatCodes['ITALIC'];
            }
            if (underlined) {
                message += ChatCodes['UNDERLINE'];
            }
            if (strikethrough) {
                message += ChatCodes['STRIKETHROUGH'];
            }
            if (obfuscated) {
                message += ChatCodes['OBFUSCATED'];
            }
            message += text;
            if (extra) {
                message += jsonToCodedText(extra);
            }
        }
    }
    return message;
}
exports.jsonToCodedText = jsonToCodedText;
function jsonToText(item) {
    return stripCodes(jsonToCodedText(item));
}
exports.jsonToText = jsonToText;
function stripCodes(text) {
    return text.replace(/\u00A7[0-9A-FK-OR]/ig, '');
}
exports.stripCodes = stripCodes;
//# sourceMappingURL=minecraftUtil.js.map