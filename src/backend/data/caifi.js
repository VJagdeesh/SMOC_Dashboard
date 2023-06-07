const {Client} = require('pg');

let data=[];

const client=new Client({
user:'postgres',
host:'localhost',
database:'postgres',
password:'root123',
port:5432, 
});

client.connect();


client.query('SELECT * FROM caifi',(err,res)=>{
    if(err)
    {
    console.log("Error");       
    }
    else{
    data.push(res.rows);
    // console.log(res.json());    
    }
    client.end();
})

module.exports=data;