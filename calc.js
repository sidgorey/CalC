var deci=0;

function func(num)
{
	var inp=document.querySelector('input');
	if(deci==0)
		inp.value=inp.value*10+num;
	else
		inp.value=(inp.value+num)/Math.pow(10,deci);
}
var op="+";
var fInput=0;

function math(operator)
{
	op=operator;
	var inp=document.querySelector('input').value;
	fInput=inp;
	document.querySelector('input').value="0";
	deci=0;
}
function equalTo()
{
	var lInp=document.querySelector('input').value;
	
	switch(op)
	{
		case '+':lInp=parseFloat(lInp)+parseFloat(fInput);
					break;
		case '-':lInp=parseFloat(fInput)-parseFloat(lInp);
					break;
		case '*':lInp=parseFloat(fInput)*parseFloat(lInp);
					break;
		case '/':lInp=parseFloat(fInput)/parseFloat(lInp);				 						
	}
	document.querySelector('input').value=lInp;				
}
function decimal()
{
	deci=deci+1;
	
}
function cls()
{
	document.querySelector('input').value="0";
	op='+';
	deci=0;
	fInput=0;
}