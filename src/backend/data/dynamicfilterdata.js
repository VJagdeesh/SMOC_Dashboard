const {Client}=require("pg")
let datum=[]
let datum2=[]
let datum3=[]
let datum4=[]
let datum5=[]
const client=new Client({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'root123',
    port:5432,    
});

client.connect();

client.query('SELECT DISTINCT UPPER(city) as city FROM final_readstatus ',(err,res)=>{
if(err)
{
console.log(err.message);    
}
else
{
datum.push(res.rows);  
// console.log(res.rows);  
}
});

client.query('SELECT DISTINCT discom FROM final_readstatus',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    datum2.push(res.rows);   
    // console.log(res.rows) 
    }
    });

    client.query('SELECT DISTINCT division FROM final_readstatus',(err,res)=>{
        if(err)
        {
        console.log(err.message);    
        }
        else
        {
        datum3.push(res.rows);   
        // console.log(res.rows) 
        }
        });

        client.query('SELECT DISTINCT subdivision FROM final_readstatus',(err,res)=>{
            if(err)
            {
            console.log(err.message);    
            }
            else
            {
            datum4.push(res.rows);   
            // console.log(res.rows) 
            }
            });

            client.query('SELECT DISTINCT substation_name FROM final_readstatus',(err,res)=>{
                if(err)
                {
                console.log(err.message);    
                }
                else
                {
                datum5.push(res.rows);   
                // console.log(res.rows) 
                }
                client.end();
                });

module.exports=[datum,datum2,datum3,datum4,datum5];