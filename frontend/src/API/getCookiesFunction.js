// FROM https://tutorialebooks.com/code-snippets/js-cookie-example-2/



export default function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name === cookiePair[0].trim()) {
            // Decode the cookie value and return

            return JSON.parse(decodeURIComponent(cookiePair[1]));//.split(':')[1].split('"')[1]
        }
    }

    // Return null if not found
    return JSON.parse(1);
}