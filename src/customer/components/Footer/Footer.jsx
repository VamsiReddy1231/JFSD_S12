import React from 'react';

import { Button, Grid, Grid2, Typography } from '@mui/material'
const Footer = () => {
    return (
        <div>
            <Grid className= 'bg-black text-white text-center mt-10' 
            container 
            sx={{bgcolor:"black",color:"white",py:3}}  
            >
                <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>About</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>Blog</Button>
                </div><Button className='pb-5' variant='h6'gutterBottom>Press</Button>
                <div><Button className='pb-5' variant='h6'gutterBottom>Jobs</Button>
                </div><Button className='pb-5' variant='h6'gutterBottom>Partners</Button>
                </Grid>



                <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>Marketing</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>Analytics</Button>
                </div><Button className='pb-5' variant='h6'gutterBottom>Commerce</Button>
                <div><Button className='pb-5' variant='h6'gutterBottom>Insights</Button>
                </div><Button className='pb-5' variant='h6'gutterBottom>Support</Button>
                </Grid>




                <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>Guides</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>API Status</Button>
                </div>
                
                </Grid>



                <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>claim</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom>Privacy</Button>
                </div><Button className='pb-5' variant='h6'gutterBottom>Terms</Button>
            
                </Grid>



                </Grid>
<Grid className=' pt-20' item xs={12}>
<Typography variant="body2" component="p" align="center">
&copy; 2023 My Company. All rights reserved.
</Typography>
< Typography variant="body2" component="p" align="center">
Made with love by Me.
</Typography>
<Typography variant="body2" component="p" align="center">
</Typography>
</Grid>


            
      </div>  
    )
}

export default Footer