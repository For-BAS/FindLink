import Tesseract from "tesseract.js";


let get_text_from_image = async (image) => {
    const {data: {text}} = await Tesseract.recognize(image, 'eng', {
        logger: m => console.log(m),
    });
    console.log(text);
    return text;
}

export default get_text_from_image