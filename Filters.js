/// <reference path="jquery.js"/>
app.filter("gender12", function () {
    return function (gender) {
        switch (gender) {
            case "Male":
                return 1;
            case "Female":
                return 2;
            case "Not disclosed":
                return 3;
        }
    }
})