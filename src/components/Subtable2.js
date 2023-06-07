import React from "react";
import { Input,Table } from "antd";
import {SearchOutlined} from "@ant-design/icons";

const Subtable2=(props)=>{



    const columns = [
        { title: 'DISCOM', dataIndex: 'discom',
      filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
        return <Input placeholder="Type text here!!!" autoFocus 
        value={selectedKeys[0]}
        onPressEnter={()=>{
        confirm();
        }}
        onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
        onBlur={()=>{
        confirm();
        }}
        ></Input>
      },
      filterIcon:()=>{
        return <SearchOutlined></SearchOutlined>
      },
      onFilter:(value,record)=>{return record.discom.toLowerCase().includes(value.toLowerCase())}
      },
        { title: 'Zone', dataIndex: 'zone',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.zone.toLowerCase().includes(value.toLowerCase())}
      },
        { title: 'Circle', dataIndex: 'circle',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.circle.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Division', dataIndex: 'division',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.division.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Sub-Division	', dataIndex: 'subdivision',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.subdivision.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Sub-Station', dataIndex: 'substation_name',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.substation_name.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Feeder', dataIndex: 'feeder_name',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.feeder_name.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'DT-name', dataIndex: 'dt_name',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.dt_name.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'City', dataIndex: 'city',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.city.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Division', dataIndex: 'divisionname',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.divisionname.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Consumer', dataIndex: 'consumerid',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.consumerid.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Name', dataIndex: 'name',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.name.toLowerCase().includes(value.toLowerCase())}
      },
        { title: 'Address', dataIndex: 'address',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.address.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Mobile', dataIndex: 'mobile',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.mobile.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Badge Number', dataIndex: 'badgenumber',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
          return <Input placeholder="Type text here!!!" autoFocus 
          value={selectedKeys[0]}
          onPressEnter={()=>{
          confirm();
          }}
          onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[])}}
          onBlur={()=>{
          confirm();
          }}
          ></Input>
        },
        filterIcon:()=>{
          return <SearchOutlined></SearchOutlined>
        },
        onFilter:(value,record)=>{return record.badgenumber.toLowerCase().includes(value.toLowerCase())}
        },
        { title: 'Creation Date', dataIndex: 'creation_date'},
        { title: 'Last Communication date', dataIndex: 'last_commdate' },
        { title: 'Difference', dataIndex: 'diff'},
        { title: 'Last Read Status', dataIndex: 'lastreadstatus' },
      ];


      return(
        // <div style={{ width: '100%', height: '400px', overflow: 'auto', border: '1px solid black' }}>
        <div style={{ width: '100%', height: '400px', overflow: 'auto', border: '1px solid black' }}>
        <Table
        // scroll={{ x: 'max-content' }} scrollable bordered
        className="my-table"
        columns={columns}
        dataSource={props.data}
        pagination={{ pageSize: 300 }}/> 
        </div>
        );
};
export default Subtable2;


//Filters using states