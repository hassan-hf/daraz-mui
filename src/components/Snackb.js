import React, { useState } from 'react'
import MuiAlert from '@mui/material/Alert';
import { Button ,Snackbar} from '@mui/material';



const Alert =React.forwardRef(function Alert(props,ref){
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props}/>
})
function Snackb() {
    const [open , setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(true)
    }
    const handleClose = (event , reason)=>{
        if (reason === 'Clickedway'){
            return;
        }
        setOpen(false)
    }


  return (
    <div >
      <Button variant='outlined' onClick={handleClick}>Show SnackBar</Button>
      <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={2000}
      anchorOrigin={{vertical:'bottom',horizontal:'right'}}

      >
        <Alert onClose={handleClose} severity='success'>This is a Success Message</Alert>
      </Snackbar>
    </div>
  )
}

export default Snackb

