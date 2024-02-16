import React from 'react';
import {Table} from 'react-bootstrap';

export default function TableApp() {
    const users = [
        { name: 'Anil', email: 'anil@gmail.com', contact: '111' },
        { name: 'Burce', email: 'Burce@gmail.com', contact: '222' },
        { name: 'Peter', email: 'Peter@gmail.com', contact: '111' },
        { name: 'Sam', email: 'Sam@gmail.com', contact: '111' },
    ];

    return (
        <div>
            <h1>List With Nested Array</h1>
            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                
                    {users.map((item, i) => {
                        return (
                            item.contact === '111'?
                            <tbody>
                                <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                            </tbody>
                            :null
                        );
                    })}
            </Table>
        </div>
    );
}
