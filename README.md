# MMM-Regenradar

This is a module for [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module will show a map with the weather data provided by [Morgenwirdes](https://morgenwirdes.de/).

**Note:** It only work for locations in Germany.

## Installation
1. Navigate to your MagicMirror's modules folder, and run the following command: `git clone https://github.com/Linas1234/MMM-Regenradar.git`
2. Add the module and a valid configuration to your `config/config.js` file

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
				     height: "auto",	     // rain radar height (in px or %)
				     plz: "13156",	       // german postcode
				     delay: "70",          // delay of the gif frames 
				     type: "1",            // type modus (0= rain clouds are usually green 1= rain clouds are usually blue)
				     zoomlvl: "4",	       // zoom level (1= whole germany)
				     bar: "0",             // bar modus (0= whithout bar 1= bar is on) 
				     map: "0",	           // map modus (0= white, only city names 1= colored, with details)
				     textcol: "ffffff",    // text color (in hex color code) 
				     bgcol: "00000",	     // background color (in hex color code)
				     updateInterval: 5,    // update interval (in minutes)
			           }
       },
    ]
}
```

## Configuration options

| Option           | Description
|----------------- |-----------
| `width`          | *Required* The rain radar width (in px or %)
| `height`         | *Required* rain radar height (in px or %)
| `plz`            | *Required* Your german postcode of the location you want to display
| `delay`          | *Optional* The delay of the gif frames 
| `type`           | *Optional* The zoom level of the map (1 - 4)<br>*Default:* 1
| `zoomlvl`        | *Optional* The zoom level of the map (1 - 4)<br>*Default:* 1
| `bar`            | *Optional* The zoom level of the map (1 - 4)<br>*Default:* 1
| `map`            | *Optional* The zoom level of the map (1 - 4)<br>*Default:* 1
| `textcol`        | *Optional* The zoom level of the map (1 - 4)<br>*Default:* 1
| `bgcol`          | *Optional* The update interval of the map in minutes<br>*Default:* 10
| `updateInterval` | *Optional* Whether the map image is displayed as monochrome <br>*Default:* false

## Screenshot
