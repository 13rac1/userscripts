# My UserScripts

> A userscript is a program, usually written in JavaScript, for modifying web pages to augment browsing.

-[Userscript on Wikipedia](https://en.wikipedia.org/wiki/Userscript)

Userscripts require:
* [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) on Chrome
* [GreaseMonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/) on Firefox

## Visited Link Colors

Ever notice how many websites neglect to implement visited link colors?

This Tampermonkey/GreaseMonkey Userscript aims to implement this missing
feature on the Internet. Feel free to open an issue or pull request for
any major website missing it.

*Note: Every line of the script must be evaluated each page load, so only
well known websites should be included.*

Basic Example:
```css
a:visited {
  color: purple;
}
```

## Craigslist Map Marker Contrast

Drastic contrast increase for the Map Markers on Craiglist. Still purple, but new and visited are obviously different now.
