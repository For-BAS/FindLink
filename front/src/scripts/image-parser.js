import Tesseract from "tesseract.js";

async function get_text_from_image(image) {
    const { data: { text } } = await Tesseract.recognize(image, 'eng', {
        logger: m => console.log(m),
    });
    console.log(text);
    return text;
}

var a = await get_text_from_image('https://tesseract.projectnaptha.com/img/eng_bw.png')

console.log(a)
