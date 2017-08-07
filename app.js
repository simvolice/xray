/**
 * Created by simvolice on 31.07.2017 17:35
 */
const Xray = require('x-ray');
const x = Xray();




x('http://ac-kkt.su/services/kompressory-gx-ga-gr/', {

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