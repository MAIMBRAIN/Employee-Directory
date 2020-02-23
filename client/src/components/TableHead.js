import React from 'react';

function TableHead() 
{
  return (
    <div className="col-s-12">
      <tr>
        <th className="mx-5 pl-2 pr-4">First Name</th>
        <th className="mx-5 pr-5">Last Name</th>
        <th className="mx-5 pr-5">Email</th>
        <th className="mx-5 pr-5">Phone</th>
        <th className="mx-5 pr-5">Age</th>
      </tr>
    </div>
  )

}
export default TableHead;