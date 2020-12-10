// All initializations take place i load event
$(window).on("load", () => {
	//Get elements with GLASS class
	const glass_elements = $(".glass");

	// Go through each glass element
	glass_elements.each((i, ele) => {
		//Get current element
		const $this = $(ele);

		// Get attributes
		const attr_scolor = $this.attr("data-shine-color");
		const attr_opac = $this.attr("data-shine-opacity");
		const attr_trans_dur = $this.attr("data-shine-duration");

		//Change css according to attributes
		$this.css("--shine-color", attr_scolor);
		$this.css("--shine-opacity", attr_opac);
		$this.css("--shine-duration", attr_trans_dur);
	});
});
