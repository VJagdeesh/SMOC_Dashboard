import { Table } from "antd";
const Table=()=>{
const columns=[{title:'RC',dataIndex:'rc'},{title:'DC',dataIndex:'dc'},{title:'YTC',dataIndex:'ytc'}];
value=[100,120,110]
return(
<>
<Table
columns={columns}
dataSource={value}
/>
</>    
);
}
export default Table;