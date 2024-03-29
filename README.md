# MMM-Regenradar

This is a module for [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module will show a map as a gif with the weather data provided by [Morgenwirdes](https://morgenwirdes.de/).

**Note:** It only work for locations in Germany.

## Installation
1. Navigate to your MagicMirror's modules folder, and run the following command: 
   
   `git clone https://github.com/Linas1234/MMM-Regenradar.git`
3. Add the module and a valid configuration to your `config/config.js` file

## Using the module

This is an example configuration for your `config/config.js` file:
```js
var config = {
    modules: [
       {
		module: "MMM-Regenradar",
		position: "top_right",
		config: {
			width: "400px",       // rain radar width (in px or %)
			height: "auto",	      // rain radar height (in px or %)
			plz: "13156",	      // german postcode
			delay: "70",          // delay of the gif frames 
			type: "1",            // type modus (0= rain clouds are usually green 1= rain clouds are usually blue)
			zoomlvl: "4",	      // zoom level (1= whole germany)
			bar: "0",             // bar modus (0= whithout bar 1= bar is on) 
			map: "0",	      // map modus (0= white, only city names 1= colored, with details)
			textcol: "ffffff",    // text color (in hex color code) 
			bgcol: "00000",	      // background color (in hex color code)
			updateInterval: 5,    // update interval (in minutes)
			}
       },
    ]
}
```

## Configuration options

| Option           | Description
|----------------- |-----------
| `width`          | **Required* The rain radar width (in px or %) <br> <br> **Example:** `40%` <br> **Example:** `auto` <br> **Default:** `400px`
| `height`         | **Required* The rain radar height (in px or %) <br> <br> **Example:** `40%` <br> **Example:** `500px` <br> **Default:** `auto`
| `plz`            | **Required* Your german postcode of the location you want to display <br> <br> **Example:** `13156`
| `delay`          | **Optional* The delay of the gif frames <br> <br> **Possible values:** `any milliseconds` <br> **Default:** `70`
| `type`           | **Optional* The type of the color of the clouds  <br>  <br>**green rain cloud:** `0` <br>**blue rain clouds:** `1`
| `zoomlvl`        | **Optional* The zoom level of the map <br> <br> **Possible values:** `boolean`<br>**Default:** `4`
| `bar`            | **Optional* Ther modus of the timebar  <br> <br> **without bar:** `0` <br> **with bar:** `1` <br>**Default:** `0`
| `map`            | **Optional* The type of the map (wich map in the background) <br> <br> **white map with city names:** `0` <br> **colord map with details:** `1` <br>**Default:** `0`
| `textcol`        | **Optional* The text color <br> <br> **Possible values:** `any hex code color` <br> **Default:** `ffffff` (white)
| `bgcol`          | **Optional* The background color <br> <br> **Possible values:** `any hex code color` <br> **Default:** `00000` (black)
| `updateInterval` | **Optional* The update interval of the map in minutes <br> <br> **Default:** `5`

## Screenshot

zoomlvl: `4`

![zoomlvl 4](https://user-images.githubusercontent.com/65075231/126204187-ef23927a-9b58-4e48-baff-5b95495a442a.JPG)




whole germany (zoomlvl: `1`): 

![zoomlvl 1](https://user-images.githubusercontent.com/65075231/126203831-7fe144e3-9bf1-4c4f-8e0a-6c7ea29ded66.JPG)
 

