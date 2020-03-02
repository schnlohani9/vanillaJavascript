// Creating a Cookie
// https://sabe.io/classes/javascript/cookies

<!DOCTYPE html>
    <html>
        <head>
            <title>Creating a Cookie</title>
        </head>
        <body>
            <script>
                function createCookie(key, value) {
                    let cookie = escape(key) + "=" + escape(value) + ";";
                    document.cookie = cookie;
                    console.log(cookie);
                    console.log("Creating new cookie with key: " + key + " value: " + value);
                }
                createCookie("sport", "basketball");
                createCookie("icecream", "vanilla");
            </script>
        </body>
    </html>

// Setting an Expiration date on Cookies
function createCookie(key, value, date) {
    let expiration = new Date(date).toUTCString();
    let cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + value + " expiration: " + expiration);
}
createCookie("sport", "basketball", Date.UTC(2017, 8, 1));
createCookie("icecream", "vanilla", Date.UTC(2017, 8, 1))

// Reading Cookies
function readCookie(name) {
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}

function createCookie(key, value, date) {
    let expiration = new Date(date).toUTCString();
    console.log(expiration);
    let cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("New cookie with key: " + key + " value: " + value + " expiration: " + expiration);
 }

 function readCookie(name) {
     let key = name + "=";
     let cookies = document.cookie.split(';');
     for (let i = 0; i < cookies.length; i++) {
         let cookie = cookies[i];
         while (cookie.charAt(0) === ' ') {
             cookie = cookie.substring(1, cookie.length);
         }
         if (cookie.indexOf(key) === 0) {
             return cookie.substring(key.length, cookie.length);
         }
     }
     return null;
 }

 createCookie("sport", "basketball", Date.UTC(2017, 8, 1));
 createCookie("icecream", "vanilla", Date.UTC(2017, 8, 1));

 console.log(readCookie("icecream"));

// Deleting Cookies


 function deleteCookie(name) {
    createCookie(name, "", -1);