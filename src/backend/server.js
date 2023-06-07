const express = require('express')
const app = express()
const port = 4000
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root123',
    port: 5432,
  });

const dateuser=require('./data/datediffdata.js')
const filterreq=require('./data/dynamicfilterdata.js')
const rc_dc_daily_data=require('./data/rc_dc_daily_data.js')
const rc_dc_monthly_data=require('./data/rc_dc_monthly_data.js');
const saidi_data=require('./data/saidi.js')
const caifi_data=require('./data/caifi.js')
const caidi_data=require('./data/caidi.js')


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/datediff',(req,res)=> res.json(dateuser[0]));

app.get('/api/overalldata',(req,res)=> res.json(dateuser[2]));

app.get('/api/rcdcdaily',(req,res)=>{res.json(rc_dc_daily_data)})

app.get('/api/rcdcmonthly', (req, res) => res.json(rc_dc_monthly_data));

app.get('/api/saidi', (req, res) => res.json(saidi_data))

app.get('/api/caifi', (req, res) => res.json(caifi_data))

app.get('/api/caidi',(req,res)=> res.json(caidi_data));



app.get('/api/filterdata/city', async (req, res) => res.json(filterreq[0]));
app.get('/api/filterdata/discom', async (req, res) => res.json(filterreq[1]));
app.get('/api/filterdata/division', async (req, res) => res.json(filterreq[2]));
app.get('/api/filterdata/subdivision', async (req, res) => res.json(filterreq[3]));
app.get('/api/filterdata/substation', async (req, res) => res.json(filterreq[4]));


app.get('/api/dataquery',async(req,res)=>{
const {query}=req.query;
try{
const result=await pool.query(query);
res.json(result.rows);    
}catch(error){res.status(500).send('Error Fetching data ')}
});

app.get('/api/dataoverallquery',async(req,res)=>{
  const {query}=req.query;
  try{
  const result=await pool.query(query);
  res.json(result.rows);    
  }catch(error){res.status(500).send('Error Fetching data ')}
  });



app.listen(port, () => console.log(`Example app listening on port ${port}!`))