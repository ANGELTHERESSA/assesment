import React, { useEffect, useState } from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography,} from '@mui/material';
import axios from 'axios';

const Blogdashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom style={{backgroundColor:'darkgreen',color:'white'}}>
       Dashboard
      </Typography>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((val) => (
              <TableRow key={val.id}>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Blogdashboard;
