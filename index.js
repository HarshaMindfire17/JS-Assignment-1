var a,b,result,operator;
function callCaptcha()
{
	a=Math.floor(Math.random() * 100)+1;//Math.random(1,99);
	b=Math.floor(Math.random() * 100);
	var operations=["+","-","*","/"];
	operator=operations[Math.floor(Math.random() * operations.length)];
	if(operator=="/")
	{
		while(((a/b)!=Math.round(a/b))||b==0)
		{
			a=Math.floor(Math.random() * 100)+1;//a may be prime
			b=Math.floor(Math.random() * 100);
		}
	}
	document.getElementById("calc").innerHTML=a+operator+b;
	switch(operator)
	{
		case "+":
			result=a+b;
			break;
		case "-":
			result=a-b;
			break;
		case "*":
			result=a*b;
			break;
		case "/":
			result=a/b;
			break;
	}
	
}
function validate()
{
	if(result!=document.getElementById("captcha").value)
	{
		document.getElementById("recap").style.display = "block";
		document.getElementById("recap").innerHTML="Please re-enter captcha";
		callCaptcha();
		return false;
	}
	document.getElementById("recap").style.display = "none";

	var elements=[],i,x,y,inputs,check1,check2,flag;
	inputs = document.getElementsByTagName('input');

	for(i=0;i<inputs.length;i++)
	{
		elements.push(inputs[i].id.toString());
	}
	elements.pop();
	elements.push("address");

	inputs = document.getElementsByTagName('select');
	for(i=0;i<inputs.length;i++)
	{
		elements.push(inputs[i].id.toString());
	}

	inputs=["middle_name","Alt._mobile","D.O.B","zip"];
	for(i=0;i<elements.length;i++)
	{
		y=elements[i].toString();
		if (!(inputs.includes(y)))
		{
			x = document.forms["fillit"][y].value;
			if (x == "") 
		    {
			    alert("Please fill '"+y.replace("_"," ")+"'");
			    return false;
		  	}
		}	
	}
	var date=document.getElementById("D.O.B").value,curr=new Date();
	if(new Date(date)>curr)
	{
		alert("Please select a valid D.O.B");
		return false;
	}
	
	check1=document.getElementById("email_id").value;
	check1=check1.toLowerCase();//all lower case:!str.match(/[A-Z]/)
	if(!(check1.match(/^[a-z0-9_]+@[a-z]+[.]{1}[a-z]{2,3}$/)))
	{	
		document.getElementById("valid").style.display = "block";
		document.getElementById("valid").innerHTML="Please enter a valid email";
		return false;
	}
	else
	{
		document.getElementById("valid").style.display = "none";
	}
	
	check1=document.getElementById("mobile_no.").value;
	if(!(check1.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)))
	{
		alert("Please enter a valid mobile no.");
		return false;
	}
	check1=document.getElementById("Alt._mobile").value;
	if(check1!="")
	{	if(!(check1.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)))
		{
			alert("Please enter a valid alternate mobile no.");
			return false;
		}
	}

	//Password matching

	check1=document.getElementById("password").value;
	check2=document.getElementById("confirm_password").value;

	//var pattern=  /^[A-Z0-9@]{8,16}$/;
	document.getElementById("pass_ver").style.display = "block";
	if (!(check1.match(/[A-Z]+/)))
	{
		document.getElementById('pass_ver').innerHTML="Password should contain atleast 1 uppercase letter";
		return false;
	}
	else if (!(check1.match(/[a-z]+/)))
	{
		document.getElementById('pass_ver').innerHTML="Password should contain atleast 1 lowercase letter";
		return false;
	}
	else if (!(check1.match(/[0-9]+/)))
	{
		document.getElementById('pass_ver').innerHTML="Password should contain atleast 1 digit";
		return false;
	}
	else if(!(check1.match(/[@#$&]+/)))
	{
		document.getElementById('pass_ver').innerHTML="Password should contain atleast one of @,#,$,&";
		return false;
	}
	else if(check1.match(/[`!%^*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
	{ 
		document.getElementById('pass_ver').innerHTML="Password should contain only @,#,$,& as special characters";
		return false;
	}
	else if(check1.length<8 || check1.length>16)
	{
		document.getElementById('pass_ver').innerHTML="Passwords should be between 8-16 characters.";
		return false;
	}
	else if (check1!=check2)
	{
		document.getElementById("password").value="";
		document.getElementById("confirm_password").value="";
		document.getElementById('pass_ver').innerHTML="Passwords not matching. Please verify.";
		return false;
	}
	else{
		document.getElementById("pass_ver").style.display = "none";
	}
	/*date=date.toString().split("-");
	curr=curr.toLocaleDateString().split("/");
	flag=1;
	if(date[0]>curr[2])
	{
		flag=0;
	}
	else if((date[0]==curr[2]))
	{ 
		if(parseInt(date[1])>parseInt(curr[0]))
		{
			flag=0;
		}
		else if(parseInt(date[1])==parseInt(curr[0]))
		{
			if(parseInt(date[2])>parseInt(curr[1]))
			{
				flag=0
			}
		}
	}
	if(!flag)
	{
		alert("Please select valid date");
		return false;
	}*/
}
function toggle(id) 
{
	var decider1=document.getElementById(id);
    if (id=="yes")
    {
        document.getElementById("no").checked= false;
    }    
    if (id=="no")
    {
        document.getElementById("yes").checked= false;
    } 
 }