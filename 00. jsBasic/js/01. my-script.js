
        var firstName="Masud";
        var lastName="Rana";

        document.write("Full name is : "+firstName+" "+lastName);

        document.write('<br/>');

        var x=10;
        var y=20;
        var z=30;
        var a="true";

        //arithmatic opertaor
        document.write(x+y); //30
        document.write('<br/>');
        document.write(x-y);//-10
        document.write('<br/>');
        document.write(x*y);//200
        document.write('<br/>');
        document.write(x/y);//0.5
        document.write('<br/>');
        document.write(x%y);//10
        document.write('<br/>');

       

        //arithmatic unary opertaor (++,-- is unary operator)
        document.write(x);
        document.write("<br/>");
        document.write(x++);
        document.write("<br/>");
        document.write(x);
        document.write("<br/>");


        //assignment operator
        document.write(x+=y);
        document.write("<br/>");
        document.write(x-=y);
        document.write("<br/>");
        document.write(x*=y);
        document.write("<br/>");
        document.write(x/=y);
        document.write("<br/>");
        document.write(x%=y);
        document.write("<br/>");


        //conditional operator
        document.write(x>y);
        document.write("<br/>");
        document.write(x>=y);
        document.write("<br/>");
        document.write(x<y);
        document.write("<br/>");
        document.write(x==y);
        document.write("<br/>");
        document.write(x!=y);
        document.write("<br/>");
        document.write(x===y);
        document.write("<br/>");
        document.write(x!==y);
        document.write("<br/>");


        //logical operator
        document.write((x<y)&&(y<z));
        document.write((x>y)||(y>z));
        document.write(!a);
        document.write("<br/>");


        //if else
        if(x>y){
            document.write("Hello x");
        }else if(y>z){
            document.write("Hello y");
        }else{
            document.write("Hello z");
        }

        document.write("<br/>");


        //switch case
        var x=10;
        switch(x){
            case 5:
                document.write("hello 5");
                break;
            case 10:
                document.write("hello 10");
                break;
            case 15:
                document.write("hello 15");
                break;
            default:
                document.write("hello");
                break;
        }

        document.write("<br/>");


        //for loop
        for (var i=0;i<=10;i++){
            document.write(`hello from for ${i} <br>`);
        }


        //while loop
        var i=0;
        while(i<10){
            document.write(`hello from While ${i} <br>`);
            i++;
        }
        document.write("<br/>");
        document.write(i);
        document.write("<br/>");

        //Do while loop
        var i=10;
        do{
            document.write(`hello from Do While ${i} <br>`);
            i--;
        }while(i>0);