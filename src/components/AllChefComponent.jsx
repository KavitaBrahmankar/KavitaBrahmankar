import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChefService from '../services/ChefService';
import './Menu.css';
import '../App.css';
import { Button } from './Button';
import backgrdVdo from './videos/video-4.mp4';
import axios from 'axios';

const HOST = "http://localhost:8080";


class AllChefComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chefs: [],errmsg:''
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    ChefService.getChefs().then((res) => {
      this.setState({ chefs: res.data });
    })
    .catch(error=>{console.log(error)
      this.setState({errmsg:"Something went wrong"})
    });
  }

  render() {
    return (
      <>
        <MainSection />
        {/* <CarouselView/> */}
        <>
<h1  style={{ color: 'black' , textAlign:'center'}}>OUR HOME CHEFS...</h1>
                <div className="row">
                {
                    this.state.chefs.map(chef=>
                        <div className="card m-2" 
                        style={{width:'250px'}} 
                        key={chef.chefid}>
                              <div className="card-body">
                              {chef.title}
                              <Card className="cardClass" >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          className="cardClass"
                          height="140"
                          image={`${HOST}${chef.chefimagename}`}
                          title="Chef Details"
                          key={chef.chefid}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {chef.firstname}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {chef.lastname}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          View Menu
                        </Button>
                        <Button size="small" color="primary">
                          View Contact
                        </Button>
                      </CardActions>
                    </Card>
                              </div>
                        </div>
                  )
                }
                </div>
                {this.state.errmsg}
            </>
      </>
    );
  };
}


function MainSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted><source src={backgrdVdo} type='video/mp4'/></video>
      <h1>HOME COOK FOOD AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--primary'
          buttonSize='btn--large'>CHEF SPECIAL</Button>
      </div>
      <div className='h1Container'>
        <br/><br/>
          <h1>For Our Specialized CHEF's Details... Scroll down...</h1>
      </div>
    </div>
  )
}

export default AllChefComponent