var Template = function(input) {
    // この関数を実装してください
    this.source = input.source;
    
};

Template.prototype = {
    render: function(variables) {
        // この関数を実装してください
        var content =this.source;
        
        for(var n in variables){ 
        	var reg = new RegExp("{%\\s"+n+"\\s%}");
        	content=content.replace(reg,variables[n]);
        }
        return content;
    }
};

