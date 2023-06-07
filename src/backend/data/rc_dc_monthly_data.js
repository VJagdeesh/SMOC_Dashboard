const {Client}=require('pg')
let main_data=[]

const client=new Client({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'root123',
    port:5432,  
});

client.connect();

client.query('SELECT * FROM rc_dc',(err,res)=>{
if(err)
{
console.log(err.message);    
}
else
{
main_data.push(res.rows);
 
}
client.end();
})

module.exports=main_data;
