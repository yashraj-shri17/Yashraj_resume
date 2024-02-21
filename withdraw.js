function withdraw_status(withdraw_amt,current_bal,via){
if(withdraw_amt<=current_bal){
    if(via == "UPI"){
        console.log("AMOUNT REMAINING",current_bal - withdraw_amt);
    }
    else{
        console.log("AMOUNT REMAINING",current_bal - withdraw_amt); 
    }
}
else{
    console.log("INSUFFICIENT BALANCE");
}
}
let withdraw_amt = 1200;
let current_bal = 1550;
let via = "UPI"
withdraw_status(withdraw_amt,current_bal,via);
