const translateButton = document.getElementById("translateButton");
translateButton.addEventListener("click", function() {
    const text = document.getElementById("textInput").value;
    const from = document.getElementById("sourceLang").value;
    const to = document.getElementById("targetLang").value;
    translateText(text, from, to);
});

const ttsButton = document.getElementById("ttsButton");
ttsButton.addEventListener("click", function() {
    const text = document.getElementById("translationOutput").innerText;
    playTTS(text);
});
        const langs = {
            "auto": "Detect Language",
            "af": "Afrikaans", "sq": "Albanian", "am": "Amharic", "ar": "Arabic",
            "hy": "Armenian", "az": "Azerbaijani", "eu": "Basque", "be": "Belarusian",
            "bn": "Bengali", "bs": "Bosnian", "bg": "Bulgarian", "ca": "Catalan",
            "ceb": "Cebuano", "ny": "Chichewa", "zh-CN": "Chinese (Simplified)", 
            "zh-TW": "Chinese (Traditional)", "co": "Corsican", "hr": "Croatian",
            "cs": "Czech", "da": "Danish", "nl": "Dutch", "en": "English",
            "eo": "Esperanto", "et": "Estonian", "tl": "Filipino", "fi": "Finnish",
            "fr": "French", "fy": "Frisian", "gl": "Galician", "ka": "Georgian",
            "de": "German", "el": "Greek", "gu": "Gujarati", "ht": "Haitian Creole",
            "ha": "Hausa", "haw": "Hawaiian", "iw": "Hebrew", "hi": "Hindi",
            "hmn": "Hmong", "hu": "Hungarian", "is": "Icelandic", "ig": "Igbo",
            "id": "Indonesian", "ga": "Irish", "it": "Italian", "ja": "Japanese",
            "jw": "Javanese", "kn": "Kannada", "kk": "Kazakh", "km": "Khmer",
            "ko": "Korean", "ku": "Kurdish (Kurmanji)", "ky": "Kyrgyz", "lo": "Lao",
            "la": "Latin", "lv": "Latvian", "lt": "Lithuanian", "lb": "Luxembourgish",
            "mk": "Macedonian", "mg": "Malagasy", "ms": "Malay", "ml": "Malayalam",
            "mt": "Maltese", "mi": "Maori", "mr": "Marathi", "mn": "Mongolian",
            "my": "Myanmar (Burmese)", "ne": "Nepali", "no": "Norwegian", "or": "Odia",
            "ps": "Pashto", "fa": "Persian", "pl": "Polish", "pt": "Portuguese",
            "pa": "Punjabi", "ro": "Romanian", "ru": "Russian", "sm": "Samoan",
            "gd": "Scots Gaelic", "sr": "Serbian", "st": "Sesotho", "sn": "Shona",
            "sd": "Sindhi", "si": "Sinhala", "sk": "Slovak", "sl": "Slovenian",
            "so": "Somali", "es": "Spanish", "su": "Sundanese", "sw": "Swahili",
            "sv": "Swedish", "tg": "Tajik", "ta": "Tamil", "te": "Telugu",
            "th": "Thai", "tr": "Turkish", "uk": "Ukrainian", "ur": "Urdu",
            "ug": "Uyghur", "uz": "Uzbek", "vi": "Vietnamese", "cy": "Welsh",
            "xh": "Xhosa", "yi": "Yiddish", "yo": "Yoruba", "zu": "Zulu"
        };
function fillDropdowns() {
    let from = document.getElementById("sourceLang");
    let to = document.getElementById("targetLang");
    for (let code in langs) {
        let opt1 = document.createElement("option");
        let opt2 = document.createElement("option");
        opt1.value = opt2.value = code;
        opt1.text = opt2.text = langs[code];
        from.appendChild(opt1);
        to.appendChild(opt2);
    }
    from.value = "auto";
    to.value = "en";
}

function translateText() {
    let text = document.getElementById("textInput").value;
    let from = document.getElementById("sourceLang").value;
    let to = document.getElementById("targetLang").value;
    if (!text.trim()) {
        document.getElementById("translationOutput").innerText = "Please enter text to translate.";
        return;
    }
    let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + from + "&tl=" + to + "&dt=t&q=" + encodeURIComponent(text);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        try {
            let data = JSON.parse(xhr.responseText);
            let result = data[0][0][0];
            document.getElementById("translationOutput").innerText = result || "No translation found.";
            playTTS(result);
        } catch (e) {
            document.getElementById("translationOutput").innerText = "Error translating text.";
        }
    };
    xhr.onerror = function () {
        document.getElementById("translationOutput").innerText = "Request error.";
    };
    xhr.send();
}

function playTTS(text) {
    if (!text) {
        alert("Please translate something first.");
        return;
    }
    let utter = new SpeechSynthesisUtterance(text);
    let lang = document.getElementById("targetLang").value;
    utter.lang = lang;
    let voices = speechSynthesis.getVoices();
    utter.voice = voices.find(v => v.lang.startsWith(lang)) || voices[0];
    speechSynthesis.speak(utter);
}

fillDropdowns();