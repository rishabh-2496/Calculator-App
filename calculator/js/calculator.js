
var tmp_expression = "";

function getValue(obj){

     if (obj.value != "=" && obj.value != "AC" && obj.value != "clear"){
        
        var button_value = obj.value;
        tmp_expression += button_value
        document.getElementById('output').value = tmp_expression;
        
     } else if (obj.value == "=") {
       
        tmp_expression = eval(tmp_expression);
        document.getElementById('output').value = tmp_expression;
        
     } else if(obj.value == "AC") {
           
         tmp_expression = ""
         document.getElementById('output').value = tmp_expression;
                
    } else if (obj.value == "clear"){;
             tmp_expression = tmp_expression.toString().substr(0,tmp_expression.length - 1);
            document.getElementById('output').value = tmp_expression;
        
        
    }
    
    
}



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    