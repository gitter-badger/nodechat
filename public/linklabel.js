/*
*Created by Toroo on 2/11/2015
*/
define(function(){
	var _linklabel_ = "<span toroo-class='linkLabel'></span>";
	linkLabel = function LinkLabel(caption){
		var own = this;
        own._view = jQuery(_linklabel_);
        own._view.html(caption);
        own.setText = function(caption){ 
            own._view.html(caption)
        }
        jQuery(own._view).on("click", function(){
            jQuery(own).trigger("clickLink");
        })
    }
    return linkLabel;
});