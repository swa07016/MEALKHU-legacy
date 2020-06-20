import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import cookie from 'react-cookies';
import axios from 'axios';
import PickedCard from '../components/PickedCard';

const UserCards = (props) => {
    const [datas, setDatas] = useState([]);
    const [username, setUsername] = useState('User');
    const [picks, setPicks] = useState([{
        "id": "1",
        "name": "#신슨즈(#Shinsons)",
        "address": "경기도 용인시 기흥구 서그내로15번길 34 (서천동)",
        "latitude": "37.2464876",
        "longitude": "127.0768072",
        "type": "호프",
        "menu": "칵테일, 술",
        "img": "/images/1_img.jpg",
        "img_source": "https://www.picuki.com/profile/shinsons"
      },
      {
        "id": "2",
        "name": "감쟈",
        "address": "경기도 용인시 기흥구 서그내로15번길 29, 102호 (서천동)",
        "latitude": "37.2464608",
        "longitude": "127.0764465",
        "type": "술집",
        "menu": "안주, 술",
        "img": "/images/2_img.jpg",
        "img_source": "https://www.facebook.com/gamjua/posts/1408798555882739/"
      },
      {
        "id": "3",
        "name": "깜냥",
        "address": "경기도 용인시 기흥구 서그내로15번길 29 (서천동,1층)",
        "latitude": "37.2464608",
        "longitude": "127.0764465",
        "type": "술집",
        "menu": "안주, 술",
        "img": "/images/3_img.jpg",
        "img_source": "https://www.facebook.com/ggamnyang316/"
      },
      {
        "id": "4",
        "name": "꼬꼬리아통닭",
        "address": "경기도 용인시 기흥구 서그내로15번길 39 (서천동)",
        "latitude": "37.2465772",
        "longitude": "127.0775286",
        "type": "호프",
        "menu": "치킨, 술",
        "img": "/images/4_img.jpg",
        "img_source": "https://bigsta.net/tag/%EA%BC%AC%EA%BC%AC%EB%A6%AC%EC%95%84/"
      },
      {
        "id": "5",
        "name": "도스마스수원경희대점",
        "address": "경기도 용인시 기흥구 서그내로15번길 33 (서천동, 서윤빌딩1층)",
        "latitude": "37.2467668",
        "longitude": "127.0768863",
        "type": "기타",
        "menu": "부리또, 타코",
        "img": "/images/5_img.jpg",
        "img_source": "https://blog.naver.com/alttium/221443978130"
      }]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
              'http://localhost:5000/api/datas',
              // localhostë¡œ ë°”ê¾¸ê¸°
            );
            setDatas(result.data);       
          };
          fetchData();
          setUsername(props.username);
          // setUsername(cookie.load('username'));
    }, [username]);

    const LogoutHandler = (e) => {
      e.preventDefault();
      localStorage.removeItem('user');
      // cookie.remove('username');
      props.isLogin(false);
      return ;
    }

    return (
        <>
            <h1 style={{'paddingTop':'3rem'}} className="text-center">
                <div className="font-weight-bold">{username}'s Pick</div>
                <Button onClick={LogoutHandler} color="link" className="float-right"><h4>Logout</h4></Button>
            </h1>  
            <br/>
                <hr className="my-2" />
            <br/>
            <Container style={{'paddingTop':'1.2rem'}}>
                <Row xs="2" sm="2" md="4">
                    {picks.map((data, index) => 
                    <Col>
                    <PickedCard
                        key = {index}
                        id = {data.id}
                        name = {data.name}
                        address = {data.address}
                        latitude = {data.latitude}
                        longitude = {data.longitude}
                        type = {data.type}
                        menu = {data.menu}
                        img = {data.img}
                        img_source = {data.img_source}
                    />
                    </Col>
                    ) 
                    }
                    </Row>
            </Container>
        </>
    )
}

export default UserCards;