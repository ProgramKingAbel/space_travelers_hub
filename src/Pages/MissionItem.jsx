/* eslint-disable */
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const MissionItem = ({id,title,description}) => {
  return (
    <div>  
       {/* <Table  responsive striped bordered hover>
       <thead>
            <tr>
              <th>Mission</th>
              <th colSpan={4}>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead> */}
          <tr>
          <th>{title}</th>
            <td colSpan={4}>{description}</td>
            <td><Button variant="success">Success
            </Button></td>
            <td> <Button variant="outline-danger">Danger</Button></td>
          </tr>
           
        
        {/* </Table>  */}
     
    </div>
  )
}
 

export default MissionItem;
