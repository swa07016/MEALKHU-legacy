import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardFooter, Button } from 'reactstrap';
import './MealCard.css';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MealCard = (props) => {
  return (
    <>
      <Card style={{
        'marginTop': '0.6rem',
        'marginBottom': '0.6rem',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>
        
        <CardImg 
        top width="100%" 
        src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>{props.name}</strong></CardTitle>
          <CardText>
            <small>{props.menu}</small>
          </CardText>
        </CardBody>
        <CardFooter className="wrap" style={{
          'padding': '0 0 0 0'
        }}>
        
        <Button 
        className="button"  
        style={{
          'width':'100%',
          'borderRadius':'0 0 0 0',
          'backgroundColor': '#F6F6F6',
          'border': '0px',
          'color':'black'
        }}>
        <span style={{
          'float':'left',
          'fontSize': '14px'
        }}>
        view more
        </span>
          <FontAwesomeIcon style={{
            'color': 'black',
            'float': 'right',
            'paddingTop':'0.1rem'
          }}
          size="lg" icon={faAngleRight} />
        </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default MealCard;