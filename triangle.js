function isTriangle(a,b,c)
{
   if(a==b && b==c){
       return true;
   }
   return false;
}
console.log(isTriangle(1,2,2));