const readlineSync = require("readline-sync");

var bill = readlineSync.question("Please enter the bill amount\n");

cashList = [1,5,10,20,100,500,2000];

var cash = readlineSync.question("Please enter the cash\n");

var cashReturn = cash - bill;

console.log("Please Return : ");

while(cashReturn > 0)
{
  for(var i = cashList.length-1; i>=0; i--)
  {
    var count = 0;
    while(cashReturn >= cashList[i])
    {
      if(cashReturn-cashList[i] >= 0){
        count++;
      }
      cashReturn -= cashList[i];
    }
    if(count > 0){
    console.log(`${count} Notes of Rs.${cashList[i]} `);
    }
  }

}




