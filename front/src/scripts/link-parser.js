

function getLinkList(originLinkData) {
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const regex = new RegExp(expression);
    const result = [];
    originLinkData.forEach(url => {
        if (url.match(regex)) {
            result.push(("success: " + url))
        } else {
            result.push(("fail: " + url))
        }
    });
    return result
}

var check = [
    'http://www.foufos.gr',
    'https://www.foufos.gr',
    'http://foufos.gr',
    'http://www.foufos.gr/kino',
    'http://werer.gr',
    'www.foufos.gr',
    'www.mp3.com',
    'www.t.co',
    'http://t.co',
    'http://www.t.co',
    'https://www.t.co',
    'www.aa.com',
    'http://aa.com',
    'http://www.aa.com',
    'https://www.aa.com',
    'www.foufos',
    'www.foufos-.gr',
    'www.-foufos.gr',
    'foufos.gr',
    'http://www.foufos',
    'http://foufos',
    'www.mp3#.com',
    'aaaa',
];


console.log(getLinkList(check));