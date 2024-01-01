const convertSymbol = (color: number) => {
    switch (color) {
        case 42:
            return ". ";
        case 84:
            return "∴";
        case 126:
            return "⁙";
        case 168:
            return "::";
        case 210:
            return "||";
        case 252:
            return "■";
        default:
            return " ";
    }
};

//

const ConvertToConstant = (color: number) => {
    if (color > 210) return 252;
    else if (color > 168) return 210;
    else if (color > 126) return 168;
    else if (color > 84) return 126;
    else if (color > 42) return 84;
    else if (color > 20) return 42;
    else return 0;
};

const ConvertLookableColor = (color: number) => {
    if (color > 210) return 255;
    else if (color > 168) return 180;
    else if (color > 126) return 250;
    else if (color > 84) return 180;
    else if (color > 42) return 100;
    else if (color > 1) return 120;
    else return 0;
};

const generateRatio = (width: number) => {
    let ratio = 20;

    if (width > 3000) {
        ratio = 40;
    } else if (width > 2000) {
        ratio = 35;
    } else if (width > 1500) {
        ratio = 30;
    } else if (width > 1000) {
        ratio = 20;
    } else if (width > 300) {
        ratio = 17;
    }

    return ratio;
};

const generateScale = (width: number) => {
    let x = 0;
    let y = 0;

    if (width > 3000) {
        x = 0.0004;
        y = 0.0006;
    } else if (width > 1900) {
        x = 0.0006;
        y = 0.0008;
    } else if (width > 1500) {
        x = 0.0008;
        y = 0.001;
    } else if (width > 1000) {
        x = 0.0012;
        y = 0.001;
    } else if (width > 300) {
        x = 0.002;
        y = 0.002;
    }

    return { x, y };
};

export { convertSymbol, ConvertToConstant, ConvertLookableColor, generateRatio, generateScale };
