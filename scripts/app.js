require.config({
    baseUrl: "/scripts/",
    paths: {
        "jquery": "plugins/jquery",
        "modernizr": "plugins/modernizr",
        //"affix": "bootstrap/affix",
        //"alert": "bootstrap/alert",
        //"button": "bootstrap/button",
        "collapse": "bootstrap/collapse",
        "dropdown": "bootstrap/dropdown",
        "modal": "bootstrap/modal",
        //"popover": "bootstrap/popover",
        //"scrollspy": "bootstrap/scrollspy",
        "tab": "bootstrap/tab",
        //"tooltip": "bootstrap/tooltip",
        "transition": "bootstrap/transition",
        "owlcarousel": "plugins/owl.carousel.min",
        "matchHeight": "plugins/jquery.matchHeight.min",
        "magnific": "plugins/jquery.magnific-popup.min",
        "sticky": "plugins/stickyfloat.min",
        "select2": "plugins/select2.min",
        "cookie": "plugins/jquery.cookie",
        "isotope": "plugins/isotope.pkgd.min",
        "cookieModal": "inbound/cookie-modal",
        "cookieStickyFooter": "inbound/cookie-sticky-footer",
        "cookieWelcomeMat": "inbound/cookie-welcome-mat",
        "jqueryValidate": "plugins/jquery.validate.min",
        "jqueryValidateUnobtrusive": "plugins/jquery.validate.unobtrusive.min"
    },
    shim: {
        "jquery": {
            "exports": "$"
        },
        "main": {
            "deps": ["jquery"]
        },
        "collapse": {
            "deps": ["jquery", "transition"]
        },
        "dropdown": {
            "deps": ["jquery"]
        },
        "modal": {
            "deps": ["jquery"]
        },
        "tab": {
            "deps": ["jquery"]
        },
        "transition": {
            "deps": ["jquery"]
        },
        "owlcarousel": {
            "deps": ["jquery"]
        },
        "matchHeight": {
            "deps": ["jquery"]
        },
        "magnific": {
            "deps": ["jquery"]
        },
        "sticky": {
            "deps": ["jquery"]
        },
        "select2": {
            "deps": ["jquery"]
        },
        "cookie": {
            "deps": ["jquery"]
        },
        "isotope": {
            "deps": ["jquery"]
        },
        "cookieModal": {
            "deps": ["jquery"]
        },
        "cookieStickyFooter": {
            "deps": ["jquery"]
        },
        "cookieWelcomeMat": {
            "deps": ["jquery"]
        },
        "jqueryValidate": {
            "deps": ["jquery"]
        },
        "jqueryValidateUnobtrusive": {
            "deps": ["jquery", "jqueryValidate"]
        }
    }
});

// Require main.js
require(["modernizr", "./main.js", "collapse", "dropdown", "tab", "jqueryValidate", "jqueryValidateUnobtrusive"]);
