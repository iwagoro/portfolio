import Sketch from "react-p5";
import { SimplexNoise } from "three/examples/jsm/Addons.js";
import { convertSymbol, ConvertToConstant, ConvertLookableColor, generateRatio, generateScale } from "./AsciiUtil";

const Ascii = ({ flag }: { flag: number }) => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const simplexNoise = new SimplexNoise();

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    };

    const draw = (p5: any) => {
        p5.background(15, 19, 26);
        asciiArt(p5);
    };

    const asciiArt = (p5: any) => {
        const ratio = generateRatio(width);
        for (let x = 0; x < width; x += ratio) {
            for (let y = 0; y < height; y += ratio) {
                const time = p5.millis() * 0.0005;
                const scale = generateScale(width);
                let color = 0;
                let color2 = 0;

                if (flag === 0) {
                    color = simplexNoise.noise(x * scale.x + time * 0.3, y * scale.y + time * 0.3) * 255;
                    color2 = ((simplexNoise.noise(-x * scale.x + time * 0.8, -y * scale.y + time * 0.8) * (Math.sin(time * 1.5) + 1)) / 2) * 255;
                    color = (color + color2) / 2 + 30;
                } else if (flag === 1) {
                    color = p5.noise(x * scale.x * 2 + time * 0.3, y * scale.y * 3 + time * 0.3) * ((Math.cos(time) + 1) / 2) * 255;
                    color2 = p5.noise(-x * scale.x + time * 0.8, -y * scale.y + time * 0.8) * ((Math.sin(time) + 1) / 2) * 255;
                    color = color;
                    color = ((Math.sin(color * 0.1) + 0.3) / 2) * 255 - 50;
                } else if (flag === 2) {
                    color = ((simplexNoise.noise(x * scale.x * 3 + time * 0.3, y * scale.y * 3 + time * 0.3) * (Math.sin(time * 3) + 1)) / 2) * 255;
                    color2 = ((simplexNoise.noise(-x * scale.x * 0.5 + time * 0.8, -y * scale.y * 0.5 + time * 0.8) * (Math.sin(time * 1.5) + 1)) / 2) * 255;
                    color = color + color2 - 30;
                } else if (flag === 3) {
                }

                if (color >= 0) {
                    color = ConvertToConstant(color);
                    const char = convertSymbol(color);
                    color = ConvertLookableColor(color);
                    let r = 0;
                    let g = 0;
                    let b = 0;
                    if (flag === 0) {
                        r = color;
                        g = color;
                        b = color;
                    } else if (flag === 1) {
                        r = color;
                        g = color / 2;
                        b = 0;
                    } else if (flag === 2) {
                        r = 0;
                        g = 0;
                        b = color;
                    }
                    p5.fill(r, g, b);
                    p5.textSize(ratio);
                    p5.text(char, x, y);
                }
            }
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default Ascii;
