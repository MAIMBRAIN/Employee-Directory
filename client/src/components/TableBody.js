import React from 'react'

function TableBody(props)
{
  return (
    // maps through the filtered state, and produces results on the page
    <div col-s-12> 
    {props.filtered.map((item, i) => (
      <tr key={i}>
        <td className="m-2 p-2">{item.name.first}</td>
        <td className="m-2 p-2">{item.name.last}</td>
        <td className="m-2 p-2">{item.email}</td>
        <td className="m-2 p-2">{item.phone}</td>
        <td className="m-2 p-2">{item.dob.age}</td>
      </tr>
    ))}
    </div>
  )
}
export default TableBody;