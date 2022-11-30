import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Slot.css'
import axios from 'axios'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

function Slot() {
  const handleChange = (event) => {
     setStoreState(event.target.value);
     console.log(storeState,"who are you");
  };
   
  const [open, setOpen] = React.useState(false);
   const handleOpen = (id) => {
      setOpen(true);
      setValueState(id)

   }

   const handleClose = () => setOpen(false);

   const [result,setResult]=useState([])
   const [readState,setReadState]=useState([])
   const [valueState,setValueState]=useState('')
   const [storeState,setStoreState]=useState('')



useEffect(()=>{
   axios.get("http://localhost:3002/postUpdate").then((responce)=>{
      console.log(responce.data);
      setResult(responce.data)
   }).catch((error)=>{
      console.log(error);
   })
},[])


useEffect(()=>{
   axios.get("http://localhost:3002/readslot").then((responce)=>{
      console.log(responce.data[0].state,'slot review');
      setReadState(responce.data)
   }).catch((error)=>{
      console.log(error);
   })
},[])



function handleONSubmit(){
   axios.post("http://localhost:3002/editSlot",{valueState,storeState}).then((response)=>{
    console.log(response.slot,"slot check");
    axios.get("http://localhost:3002/readslot").then((responce)=>{
      console.log(responce.data[0].state,'slot review');
      setReadState(responce.data)
      handleClose()
   }).catch((error)=>{
      console.log(error);
   })
   })
}

  return (
   <div>
                     <Grid container spacing={2}>
                     {
                        readState.map((data,index)=>{
                           return (
                           (data.state==="true")?
                           (
                              <Grid item xs={3} md={3}>
                              <Box
                                    component="button"
                                    sx={{
                                    width: 200,
                                    height: 200,
                                    backgroundColor: 'error.dark',
                                    '&:hover': {
                                       backgroundColor: 'primary.main',
                                       opacity: [0.9, 0.8, 0.7],
                                    },
                                    
                                    }}
                                    onClick={()=>handleOpen(data._id)}
                                 />
                              </Grid>
                           ):(
                   
                              <Grid item xs={3} md={3}>
                              <Box
                                    component="button"
                                    sx={{
                                    width: 200,
                                    height: 200,
                                    backgroundColor: 'primary.dark',
                                    '&:hover': {
                                       backgroundColor: 'primary.main',
                                       opacity: [0.9, 0.8, 0.7],
                                    },
                                    
                                    }}
                                    onClick={()=>handleOpen(data._id)}
                                 />
                              </Grid>
                            )  
                                )
                              })
                           }
                  
                  </Grid>


                  <Modal
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description"
                     >
                     <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           Choose the company
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                           <InputLabel id="demo-simple-select-standard-label">name</InputLabel>
                              <Select
                                 labelId="demo-simple-select-standard-label"
                                 id="demo-simple-select-standard"
                                 onChange={handleChange}
                                 label="Age">
                                 {/* <MenuItem value="">
                                    <em>None</em>
                                 </MenuItem> */}
                                 {
                                    result.map((data)=>{
                                       return(
                                          (data.state==="false")?
                                          <MenuItem value={data._id} >{data.companyName}</MenuItem>
                                        :<MenuItem></MenuItem>
                                          )
                                    })
                                 }
                                 
                              </Select>
                           </FormControl>
                          <Grid>
                          <Button onClick={handleONSubmit} variant="contained" color="success">submit</Button>
                          <Button variant="contained" color="error">Close</Button>
                          </Grid>
                        </Typography>
                     </Box>
                     </Modal>
</div>
  )
}

export default Slot
