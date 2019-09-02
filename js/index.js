const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// FUNCTIONS

const pendItem = (
  target, 
  method, 
  value) => {

    // Validation for type of method
  switch(method) {
    // .append()
    case "append": 
    target.append(value)
    break;

    // .prepend()
    case "prepend":
    target.prepend(value)
    break;

    // Default action
    default:
    break;
  }
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAVIGATION
const nav = document.querySelector('nav');
let navLinks = Array.from(nav.children);

// Grab values from SiteContent and apply to a tag's textContent
for (let i = 0; i <= navLinks.length -1; i++) {
  navLinks[i].textContent = Object.values(siteContent.nav)[i]
}


// SECTION CLASS "cta"

// HEADER ONE
let header = document.querySelector('h1');

// Change the data to desired outcome
siteContent.cta.h1 = "DOM <br> Is <br> Awesome";

// Apply data
header.innerHTML = siteContent.cta.h1;

// IMG TAG
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// BUTTON
const button = document.querySelector('button');

// Setting text
button.innerText = siteContent.cta.button

// MAIN CONTENT
const textContent = document.querySelectorAll('.text-content');
const mainImg = document.querySelector('#middle-img');

// Top Content

// Headers inside Top Content
pendItem(textContent[0].firstElementChild, "append", siteContent["main-content"]["features-h4"]);
pendItem(textContent[1].firstElementChild, "append", siteContent["main-content"]["about-h4"]);

// Paragraphs inside Top Content
pendItem(textContent[0].lastElementChild, "append", siteContent["main-content"]["features-content"]);
pendItem(textContent[1].lastElementChild, "append", siteContent["main-content"]["about-content"]);

// Image
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content

// Headers inside Top Content
pendItem(textContent[2].firstElementChild, "append", siteContent["main-content"]["services-h4"]);
pendItem(textContent[3].firstElementChild, "append", siteContent["main-content"]["product-h4"]);
pendItem(textContent[4].firstElementChild, "append", siteContent["main-content"]["vision-h4"]);

// Paragraphs inside Top Content
pendItem(textContent[2].lastElementChild, "append", siteContent["main-content"]["services-content"]);
pendItem(textContent[3].lastElementChild, "append", siteContent["main-content"]["product-content"]);
pendItem(textContent[4].lastElementChild, "append", siteContent["main-content"]["vision-content"]);

// CONTACT
const contact = document.querySelector('.contact');

// Header
pendItem(contact.children[0], "append", siteContent["contact"]["contact-h4"]);

// Paragraphs
pendItem(contact.children[1], "append", siteContent["contact"]["address"]);
pendItem(contact.children[2], "append", siteContent["contact"]["phone"]);
pendItem(contact.children[3], "append", siteContent["contact"]["email"]);