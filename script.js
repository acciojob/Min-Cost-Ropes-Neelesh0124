function mincost(arr)
{ 
//write your code here
// return the min cost
	let ans  = 0;
	arr.sort((a,b) => b-a);
   while (arr.length>1) {
   	let first = arr.pop();
	let sec = arr.pop();
	   ans += first + sec;
	   arr.push(first + sec);
	   arr.sort((a,b) => b-a);
}
  return ans;
}

module.exports=mincost;
