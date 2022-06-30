import * as React from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import PrimarySearchAppBar from '../../Components/header';
import axios from 'axios';

export default function AddProduct() {

    const [productName, setProductName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');

    console.log(image);

    const addProduct = async () =>{
      const form = new FormData();
      form.append('name', productName);
      form.append('price', price);
      const res = await axios.post('api/product/create', form);
      console.log(res);
    }
    

    
  return (
    <>
    <PrimarySearchAppBar />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
    <div>
        <h2>Add Product</h2>
    </div>
    <form onSubmit={addProduct}>
      <input type="text" placeholder='Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="file" placeholder='Image' name="productImage" onChange={(e) => setImage(e.target.files[0])} />
      <button type='submit' style={{ color: 'white' , backgroundColor:'green', border:'0px', padding:'5px', margin:'25px' }}>Add Product</button>
    </form>
    {/* <div>
    <TextField id="standard-basic" label="Name" type={'text'} variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
    <TextField id="standard-basic" label="Price" type={'number'} variant="standard" />
    </div>
    <div>
    <TextField id="standard-basic" label="Description" type={'text'} variant="standard" />
    </div>
    <div>
    <TextField id="standard-basic" label="Image" type={'file'} variant="standard" />
    </div> */}
    
    {/* <Button type='submit' style={{ color: 'white' , backgroundColor:'green' }} color='secondary'  >
                      Add Product
                  </Button> */}
    
    
    </Box>
    </>
  );
}
