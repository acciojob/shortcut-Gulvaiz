function shortcut(s1, s2) {
  // your code here
	 if(s1 == "" || s2 == ""){
          return ("")
     }
     
     else{
         while(i=0){
            s3 = s1[i]
            s4 = s2[i]
         }
         return (s3+s4)
     }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
