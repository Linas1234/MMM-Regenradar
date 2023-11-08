/* Magic Mirror
 * Module: MMM-Regenradar
 *
 * By Linas1234
 * MIT Licensed.
 */
Module.register("MMM-Regenradar", {
    // Default module config.
    defaults: {
        height: "400px",
        width: "auto",
	      plz: "13156",
        delay: "70",
        type: "1",
        zoomlvl: "4",
        bar: "0",
        map: "0",
        textcol: "ffffff",
        bgcol: "00000",
        updateInterval: 5,
        
    },
  start: function() {
	  var self = this;
  
	  setInterval(function() {
		  self.updateDom(); // no speed defined, so it updates instantly.
	  }, this.config.updateInterval*60*1000); 
  },

  getStyles: function() {
    return ["MMM-Regenradar.css"]
  },
    
  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("div"); // main Wrapper that containts the others
    var image = document.createElement("img");
	  var getTimeStamp = new Date();
	 
	  image.classList.add = "radar";
	  image.src = 'https://morgenwirdes.de/api/v3/gif6.php?plz=' + this.config.plz + '&delay=' + this.config.delay + '&type=' + this.config.type + '&zoomlvl=' + this.config.zoomlvl + '&bar=' + this.config.bar + '&map=' + this.config.map + '&textcol=' + this.config.textcol + '&bgcol=' + this.config.bgcol + '?seed=' + getTimeStamp;
		
	  image.style.height = this.config.height;
	  image.style.width = this.config.width;
    
    wrapper.appendChild(image); //request the image to be displayed

    return wrapper;
  },


    /////  Add this function to the modules you want to control with voice //////
/*
  notificationReceived: function(notification, payload) {
    if (notification === 'HIDE_REGENRADAR') {
      this.hide();
    } 
    else if (notification === 'SHOW_REGENRADAR'{
      this.show(1000);
    }
  }, 
*/   
});
