import { PieChart,Pie,Cell,Legend,Tooltip } from "recharts";
import "./styles.css";
import { Text } from "recharts";
const Pie_Dia=(props)=>{




const COLORS=["#8df2e6","#1c1e4f","#471c4f","#e82ccc","#de1245"];

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                <label>{`${payload[0].name} : ${payload[0].value}`}</label>
            </div>
        );
    }

    return null;
};

return(
<>
{ (props.data.reduce((a,b)=>a+b.value,0) !== 0) ?
<PieChart width={750} height={500} className="pieChart">
    <Pie data={props.data} datakey={props.data.value} outerRadius={150} label={props.data.name} fill="8884d8"  startAngle={0} endAngle={360} cx={400} cy={200}>
        {
        props.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
    </Pie>
    <Legend align="right" layout="vertical" iconSize={10} iconType="square" verticalAlign="top" formatter={(value) => <span style={{ color: "black"}}>{value}</span>}>
    
    </Legend> 
</PieChart> 
: 
<p className="pieChart">No data to represent</p>
}
</>
);
}
export default Pie_Dia;