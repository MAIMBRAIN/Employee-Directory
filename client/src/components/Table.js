import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table(props) 
{
  return(
    
    <div className="col-s-12">
      <TableHead
      sortByFirstName={props.sortByFirstName}
      sortByLastName={props.sortByLastName}
      sortByAge={props.sortByAge}
      />
      <TableBody 
        key={props.key}
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
        phone={props.phone}
        age={props.age}
        filtered={props.filtered}
      />
    </div>
  )
}
export default Table;