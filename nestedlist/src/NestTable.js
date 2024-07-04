import React from "react";
import Table from 'react-bootstrap/Table';

function NestTable() {
    const Users = [
        {name:"Ankita",gender:"F",age:29,seat:[{s1:"s1301",r1:"s2304"},{s1:"s1302",r1:"s2404"}]},
        {name:"Anvi",gender:"F",age:1,seat:[{s1:"s1302",r1:"s2306"},{s1:"s1302",r1:"s2404"}]},
        {name:"Santosh",gender:"M",age:30,seat:[{s1:"s1303",r1:"s2305"}]},

    ];
    return(
        <>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>Sr No.</td>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Age</td>
                    <td>Seat</td>
                </tr>
                
                {
                    Users.map((item,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>
                        <Table striped bordered hover variant="dark"><tbody>
                            {item.seat.map((data,j)=>
                        <tr key={j}>
                            <td>{data.r1}</td>
                            <td>{data.s1}</td>
                        </tr>
                        )}</tbody>
                        </Table></td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </>
    );
}
export default NestTable;