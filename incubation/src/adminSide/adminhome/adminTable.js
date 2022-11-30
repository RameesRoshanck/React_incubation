import * as React from 'react';
import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import axios from 'axios'



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [result ,setResult]=useState([])
  const [singleData,setSingleData]=useState([])
  const [processUpdata,setProcessUpdata]=useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setResult(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
  axios.get("http://localhost:3002/getregister").then((response)=>{
    setResult(response.data)
    console.log(response.data);
  }).catch((error)=>{
    console.log(error);
  })
  
  // axios.get("http://localhost:3001/getSingle/:id").then((singledata)=>{
  //   console.log(singledata.data);
  //   setSingleData(singledata.data)
  // }).catch((error)=>{
  //   console.log(error);
  // })

 

  },[])



function handleUpdateProcess(id){
   
    axios.put("http://localhost:3002/getUpdate/"+id).then((process)=>{
      console.log(process.data);
      setProcessUpdata(process.data)
      axios.get("http://localhost:3002/getregister").then((response)=>{
    setResult(response.data)
    console.log(response.data);
  }).catch((error)=>{
    console.log(error);
  })
    }).catch((error)=>{
      console.log(error);
    })
}

function handleUpdateApproved(id){
    // console.log(id,"djfhdaskjhadskjfghadkjhf");
  axios.patch("http://localhost:3002/postUpdate/"+id).then((approved)=>{
    console.log(approved.data);
    axios.get("http://localhost:3002/getregister").then((response)=>{
  setResult(response.data)
  console.log(response.data);
}).catch((error)=>{
  console.log(error);
})
  }).catch((error)=>{
    console.log(error);
  })
}

function handleSubmitDelete(id){
  console.log(id,"djfhdaskjhadskjfghadkjhf");
  axios.delete("http://localhost:3002/deleteRegister/"+id).then((approved)=>{
    console.log(approved.data);
    axios.get("http://localhost:3002/getregister").then((response)=>{
  setResult(response.data)
  console.log(response.data);
}).catch((error)=>{
  console.log(error);
})
  }).catch((error)=>{
    console.log(error);
  })
 }



  return (
    <div style={{textAlign:'-webkit-center'}}>
      <h1>New application List</h1>
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell>index</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company Details</TableCell>
                <TableCell>Datails</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            result.map((data,index) => {
              if(data.status==="pending"){
                return (
                  <TableRow >
                    <TableCell>{index}</TableCell>
                        <TableCell>{data.surename}</TableCell>
                        <TableCell>{data.details}</TableCell>
                        <TableCell><Button variant="contained" color="primary" >More Details</Button></TableCell>
                        <TableCell><Button variant="contained" onClick={(e)=>{handleUpdateProcess(data._id)}} color="success">Process</Button></TableCell>
                        
                        
                  </TableRow>
                );
              }})}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={result.length}
        result={result}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    <h1>Pending application List</h1>
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell>index</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company Details</TableCell>
                <TableCell>Datails</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((data,index) => {
             if(data.status==="process"){
                return (
                  <TableRow >
                    <TableCell>{index}</TableCell>
                        <TableCell>{data.surename}</TableCell>
                        <TableCell>{data.details}</TableCell>
                        <TableCell><Button variant="contained" onClick={(e)=>{handleSubmitDelete(data._id)}} color="error" >Declaine</Button></TableCell>
                        <TableCell><Button variant="contained" onClick={(e)=>{handleUpdateApproved(data._id)}} color="success">Approved</Button></TableCell>
                        
                        
                  </TableRow>
                );
              }})}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={result.length}
        result={result}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    <h1>Approved application List</h1>
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell>index</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company Details</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((data,index) => {
             if(data.status==="Aproved"){
                return (
                  <TableRow >
                    <TableCell>{index}</TableCell>
                        <TableCell>{data.surename}</TableCell>
                        <TableCell>{data.details}</TableCell>
                        <TableCell><Button variant="contained" onClick={(e)=>{handleUpdateProcess(data._id)}} color="error">Process</Button></TableCell>
                        <TableCell><Button variant="contained" color="success">{data.state}</Button></TableCell>
                  </TableRow>
                );
              }})}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={result.length}
        result={result}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}