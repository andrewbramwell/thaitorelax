module.exports = {
    "name": "Thai To Relax",
    "email": "thaitorelaxleeds@gmail.com",
    "phoneForTel": "+447921223513",
    "phoneFormatted": "07921 223513",
    "mobileForTel": "+447936417602",
    "mobileFormatted": "07936 417602",
    "openingHours": "Mon-Sun: 10am-6pm",
    "onlineBooking": "https://thaitorelaxleeds.setmore.com/",
    "address": {
        "lineOne": "Advance Hair Studio",
        "lineTwo": "Carlton Tower",
        "lineThree": "34 St Paul's Street",
        "city": "Leeds",
        "state": "",
        "zip": "LS1 2QB",
        "country": "United Kingdom",
        "mapLink": "https://maps.app.goo.gl/zX8tZxbGTxuzKWxc7"
    },
    "socials": {
        "facebook": "",
        "instagram": "",
        "googleReview": "https://g.page/r/CTFT40-oEVrlEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://thaitorelaxleeds.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://thaitorelaxleeds.co.uk/#business",
            "name": "Thai To Relax",
            "image": "https://thaitorelaxleeds.co.uk/assets/svgs/logo.svg",
            "url": "https://thaitorelaxleeds.co.uk",
            "telephone": "+447921223513",
            "email": "thaitorelaxleeds@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Advance Hair Studio, Carlton Tower, 34 St Paul's Street",
                "addressLocality": "Leeds",
                "postalCode": "LS1 2QB",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/zX8tZxbGTxuzKWxc7"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "18:00"
            },
            "sameAs": [
                "https://g.page/r/CTFT40-oEVrlEBM/review"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://thaitorelaxleeds.co.uk/#website",
            "url": "https://thaitorelaxleeds.co.uk",
            "name": "Thai To Relax",
            "publisher": {
                "@id": "https://thaitorelaxleeds.co.uk/#business"
            }
        }
    }
};
