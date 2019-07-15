let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; 
let result = userCheck.test(username);

/* The only numbers in the username have to be at the end. \d$ There can be zero or more of them at the end.
   Username letters can be lowercase and uppercase. i 
   Usernames have to be at least two characters long. {2,} A two-letter username can only use alphabet letter characters. ^[a-z] */
