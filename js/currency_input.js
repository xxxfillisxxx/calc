(function($) {
    $.fn.currencyInput = function() {
        this.each(function() {
            let wrapper = $("<div class='currency-input'/>");
            $(this).wrap(wrapper);
            $(this).change(function() {
                let min = parseFloat($(this).attr("min"));
                let max = parseFloat($(this).attr("max"));
                let value = this.value.replace(',','.');
                value = parseFloat(value) || 0;
                if (value < min) {
                    value = min;
                } else if (value > max) {
                    value = max;
                }
                if (this.type !== 'number') {
                    $(this).val(value.toFixed(2).replace('.',','));
                } else {
                    $(this).val(value.toFixed(2));
                }
            });
        });
    };
})(jQuery);
