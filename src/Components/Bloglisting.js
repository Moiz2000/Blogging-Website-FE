import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from 'E:/blog/src/images/logo.jfif';
import 'E:/blog/src/App.css';
export default function ImgMediaCard() {
  return (
    <div className='sizing'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sawat Tour
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officiis ut asperiores ratione eligendi reprehenderit, voluptatem nisi molestiae libero mollitia iste dolore assumenda itaque enim ex nulla incidunt consequatur quae.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </div>
  );
}
