function shortcut(s1, s2) {
  // your code here
	s1 = s1.toUpperCase()
  s2 = s2.toLowerCase()
     if(s1 == "" || s2 == ""){
          return ("")
     }
     
     else
  
         return (s1[0]+s2[0])
     }
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
