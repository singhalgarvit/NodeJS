const dns=require('dns')
dns.lookup('facebook.com',(err,addr,family)=>{
    if(err){console.log(err);return}
    else{console.log(`Address : ${addr} \n Family : ${family}`)}
})


// DNS module provide information about the IP of a DNS server 
// DNS : Domain name system