import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const List = () => {

    const [AllData, setAllData] = useState([])

    useEffect(() => {
        setAllData(JSON.parse(localStorage.getItem('MangageCoupan')) || [])
    },[])
    
  return (
    <>
        <h1>List</h1>
        <Table>
            <thead>
                <tr>
                    <th>Brand Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Description</th>
                    <th>Percentage(%)</th>
                </tr>
            </thead>
            <tbody>
                {
                    AllData?.map((i) => {
                        return(
                            <tr>
                                <td>{i.brand}</td>
                                <td>{i.start_date}</td>
                                <td>{i.end_date}</td>
                                <td>{i.desciption}</td>
                                <td>{i.coupan_per}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        <Link to={'/'}>Add Data</Link>
    </>
  )
}

export default List
