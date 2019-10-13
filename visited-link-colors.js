// ==UserScript==
// @name         Visited Link Colors
// @version      0.1
// @description  Ever notice how many websites neglect to implement visited link colors?
// @author       13rac1
// @copyright    2015
// @license      MIT
// @include      *
// @grant        GM_addStyle
// ==/UserScript==

switch (location.host) {
    case "openuserjs.org":
        GM_addStyle("a:visited {color:#813d0f;}");
        break;
    case "github.com":
        GM_addStyle("a:visited {color:#274a76;}");
        break;
    case "bitbucket.org":
        GM_addStyle("#content a:visited {color:#274a76;}");
        break;
    case "www.youtube.com":
        GM_addStyle("a:visited .title {color:#408 !important;}");
        break;
}
