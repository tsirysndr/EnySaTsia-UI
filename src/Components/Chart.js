import React from 'react'
import { PieChart, Pie, Sector, Cell} from 'recharts'

const data = [ { name: 'OUI', value: 400 }, { name: 'NON', value: 100 } ]
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#FF8042']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x  = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy  + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const Chart = (props) => (
  <div>
    <PieChart width={400} height={300}>
      <Pie
        data={data} 
        cx={200} 
        cy={140} 
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100} 
        fill="#8884d8"
        dataKey='value'
      >
        {
          data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
        }
      </Pie>
    </PieChart>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  width: 400  }}>
      <div style={{ display: 'flex', marginBottom: 50, alignItems: 'center', justifyContent: 'center',}}>
        <div style={{ display: 'flex', marginRight: 20 }}>
          <div style={{ backgroundColor: '#0088FE', height: 20, width: 40, marginRight: 10 }}></div>
          <span>OUI (400)</span>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ backgroundColor: '#FF8042', height: 20, width: 40, marginRight: 10  }}></div>
          <span>NON (100)</span>
        </div>
      </div>
    </div>
  </div>
)

export default Chart