/**
 * Created by simvolice on 31.07.2017 17:35
 */
const Xray = require('x-ray');
const iconv = require('iconv-lite');
const x = Xray();





x('http://localhost:63342/ac-kkt.su/services/kompressory-gx-ga-gr/index.html?_ijt=kuhk4mv6vgk8golkqs0beebifa', {

    items: x('.item', [{
        title: '.title a',
        description: '.description p',
        img: '.image img@src',
        url: '.title a@href'
    }])
})(function(err, obj) {


    console.log("\x1b[42m",err);







    console.log("\x1b[42m", obj);

});