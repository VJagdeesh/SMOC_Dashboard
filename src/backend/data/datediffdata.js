const {Client}=require('pg')
let data_diff=[]
let data_diff_all=[]
let overall_data=[];

const client=new Client({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'root123',
    port:5432,   
});

client.connect();

client.query('SELECT * FROM final_readstatus',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    overall_data.push(res.rows);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
    })


client.query('SELECT diff FROM final_readstatus WHERE diff=0',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff.push(res.rows.length);
    // console.log(res.rows.length); 
    }
    })

client.query('SELECT diff FROM final_readstatus WHERE diff=1',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff.push(res.rows.length);
    // console.log(res.rows.length); 
    }
    })

client.query('SELECT diff FROM final_readstatus WHERE diff>=2 and diff<=3',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff.push(res.rows.length);
    // console.log("Difference 2-3 is ",res.rows.length); 
    }
    })


client.query('SELECT diff FROM final_readstatus WHERE diff>=4 and diff<=7',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff.push(res.rows.length);
    // console.log("Difference 4-7 is ",res.rows.length); 
    }
    })


client.query('SELECT diff FROM final_readstatus WHERE diff>=8 and diff<=14',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff.push(res.rows.length);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
    })

client.query('SELECT * FROM final_readstatus WHERE diff=0',(err,res)=>{
    if(!err)
    {
    data_diff_all.push(res.rows);        
    }
    else
    {
    console.log(err.message);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
    })
                    
client.query('SELECT * FROM final_readstatus WHERE diff=1',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff_all.push(res.rows);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
    })


client.query('SELECT * FROM final_readstatus WHERE diff>=2 and diff<=3',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff_all.push(res.rows);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
    })

client.query('SELECT * FROM final_readstatus WHERE diff>=4 and diff<=7',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff_all.push(res.rows);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
    })

client.query('SELECT * FROM final_readstatus WHERE diff>=8 and diff<=14',(err,res)=>{
    if(err)
    {
    console.log(err.message);    
    }
    else
    {
    data_diff_all.push(res.rows);
    // console.log("Difference 8-14 is ",res.rows.length); 
    }
client.end();
    })

                                        
module.exports=[data_diff,data_diff_all,overall_data];