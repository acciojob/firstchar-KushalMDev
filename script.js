function firstChar(s1) {
  // your code here
	s1=s1.trim()
    if(s1.length==0)return ''
    return s1[0]
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
