// All initializations take place i load event
$(window).on("load", function () {
    //Get elements with GLASS class
    var glass_elements = $(".glass");
    // Go through each glass element
    glass_elements.each(function (i, ele) {
        //Get current element
        var $this = $(ele);
        // Get attributes
        var attr_scolor = $this.attr("data-shine-color");
        var attr_opac = $this.attr("data-shine-opacity");
        var attr_trans_dur = $this.attr("data-shine-duration");
        //Change css according to attributes
        $this.css("--shine-color", attr_scolor);
        $this.css("--shine-opacity", attr_opac);
        $this.css("--shine-duration", attr_trans_dur);
    });
});
