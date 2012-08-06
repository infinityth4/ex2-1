var Template = function(input) {
    // この関数を実装してください
    this.source = input.source;
    
};

Template.prototype = {
    render: function(variables) {
        // この関数を実装してください
        var content =this.source;
        function htmlEscape(s){
    	s=s.replace(/&/g,'&amp;');
		s=s.replace(/>/g,'&gt;');
		s=s.replace(/</g,'&lt;');
		s=s.replace(/\"/,'&quot;');
		s=s.replace(/\s/,'&nbsp;');
		return s;
	}
	
        for(var n in variables){ 
        	var reg = new RegExp("{%\\s"+n+"\\s%}");
        	content=content.replace(reg,htmlEscape(variables[n]));
        }
        return content;
    }
};

