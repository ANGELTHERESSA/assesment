import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <h2 style={{color:'green'}}>Blog form</h2>
       <TextField variant='outlined' label='Blog Name'/>  <br /><br />
        <TextField variant='outlined' label="Description"/> <br /><br />
        <TextField variant='outlined' label="Author name"/> <br /><br />

        <br /><br />
       <Button variant='contained' style={{backgroundColor:'red'}}>submit</Button>
      

    </div>
  )
}

export default Add