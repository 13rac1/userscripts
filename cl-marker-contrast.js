// ==UserScript==
// @name         Craigslist Map Marker Contrast
// @version      0.1
// @description  Drastically increase the contrast between new and visited map markers
// @author       13rac1
// @match        https://*.craigslist.org/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.cl-marker-icon {
    background-color: rgba(193,0,229,0.6);
    border: 1px solid rgba(69,0,84,0.6);
}.cl-marker-icon-visited {
    background-color: rgba(220,171,229,0.6);
    border: 1px solid rgba(208,92,229,0.6);
}
`);
