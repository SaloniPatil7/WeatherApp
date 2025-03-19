import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function InfoBox({ info }) {

  return (

    <div className='InfoBox'>
      <h1> Weather Information:</h1>
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent className='cardContent'>
            <Typography gutterBottom variant="h4" component="span">
              CITY:{info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <p> Temperature={info.temp}</p>
              <p> Max Temperature={info.tempMax}</p>
              <p> Min Temperature={info.tempMin}</p>
              <p> Humidity={info.humidity}</p>
              <p>the weather can be described as a <i>{info.weather} </i> and  Feels Like={info.feelsLike}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}