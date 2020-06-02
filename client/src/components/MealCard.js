import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardFooter, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import './MealCard.css';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MealCard = (props) => {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  
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
        onClick={toggleModal}
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
     
      <Modal size="lg" className="modalClass" isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{props.name}</ModalHeader>
        <ModalBody>
        
        주소
        <hr className="my-2"/>
        {props.address}
        <br/>
        
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
        <div style={{
          width:'100%',
          overflow:'hidden',
          wordWrap:'break-word'
        }}>
        <small>
        썸네일 출처
        <hr className="my-2"/>
        {props.img_source}
        </small>
        </div>
        </ModalFooter>
      </Modal>
      
    </>
  );
};

export default MealCard;