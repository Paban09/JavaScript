        //array

        // types of declaring array 
        // var data=new Array();
        // var data=Array();
        var data=[];
        data[0]=10;
        data[1]=20;
        data[2]=30;

        data['name']="Paban";
        data['city']='Dhaka';
        data['country']="Bangladesh";

        // document.write(data[2]);
        // document.write(data['city']);

        //for in loop
        for(var i in data){
            document.write(i+" "+data[i]+"<br/>");
        }

        //for each
        data.forEach(function(val,key){
            document.write(`${key},${val},<br/>`);
        });

        // numeric, associative, multi-dimantional array 

        var value=["Paban","Dhaka","Bangladesh"];
        document.write("No of index "+value.length);


        document.write("<br/>");
        document.write("<br/>");
        document.write("<br/>");
        
        

        var paragraphElement=document.getElementsByTagName('p');

        // to target or select the cotent of opening and closing tag we use innerHTML

        for (var key in paragraphElement){
            document.write(paragraphElement[key].innerHTML+"<br/>"); 
        }


        document.write("<br/>");
        document.write("<br/>");
        document.write("<br/>");

        for (var key=0;key<paragraphElement.length;key++){
            document.write(paragraphElement[key].innerHTML+"<br/>"); 
        }

        document.write("<br/>");
        document.write("<br/>");
        document.write("<br/>");

        // function is a block of code which execute a certain task which is reuseable but can't do anything by it's own without calling
        //function part- calling, defination
        //function type- built in, user defined

        function demo(){
            document.write("Hello Bangladesh");
        }

        demo();
        document.write("<br/>");


        function call(firstName,lastname){
            var fullname = firstName+" "+lastname;
            document.write(fullname);
            document.write("<br/>");
        }

        call("Masud","Rana");
        call("Rifat","Ahmed");

        
        //evet 
        var btnElement=document.getElementById('btn');
        btnElement.onclick=function(){
           var fNameValue = document.getElementById('firstName').value;
           var lNameValue = document.getElementById('lastName').value;
           var fullName=fNameValue+" "+lNameValue;
           

           document.getElementById('fullName').value=fullName;
        };
