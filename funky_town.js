var fibonacci=function(n){
    if(n<=2){
	return 1;
    }
    else{
	return fibonacci(n-1)+fibonacci(n-2);
    }
}

var gcd=function(a,b){
    while(b!=0){
	temp=a;
	a=b;
	b=temp%b;
    }
    return a;
}


var randomStudent=function(){
    var l=["A", "B", "C", "D", "E", "F", "G"];
    var ind=Math.floor(Math.random()*l.length);
    return l[ind];
}

