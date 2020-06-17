/*global kakao*/
import React, { useEffect, useState } from 'react'
import appKey from '../config/appKey.json';

const LandingMap = (props) => {

    useEffect(()=>{
        
        const script = document.createElement("script");
        script.async = true;
        script.src =
          `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey.value}&autoload=false`;
        document.head.appendChild(script);
    
        script.onload = () => {
          kakao.maps.load(() => {
            let container = document.getElementById("map");
            let options = {
              center: new kakao.maps.LatLng(37.2464876, 127.0768072),
              level: 3
            };
            let map = new window.kakao.maps.Map(container, options);
            let positions = [];
            // 마커 이미지를 생성합니다    
            // 마커 이미지의 이미지 크기 입니다
            let imageSize = new kakao.maps.Size(40, 40); 
            // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
            let imageSrc_cafe = "https://cdn.icon-icons.com/icons2/882/PNG/512/1-68_icon-icons.com_68826.png";
            let imageSrc_meal = "https://cdn.icon-icons.com/icons2/882/PNG/512/1-63_icon-icons.com_68800.png";
            let imageSrc_pub = "https://cdn.icon-icons.com/icons2/882/PNG/512/1-71_icon-icons.com_68803.png";
            
            const CreateMarkerImage = (type) => {
                if(type === '술집' || type === '호프') return new kakao.maps.MarkerImage(imageSrc_pub, imageSize);
                else if(type === '카페' || type === '디저트') return new kakao.maps.MarkerImage(imageSrc_cafe, imageSize);
                else return new kakao.maps.MarkerImage(imageSrc_meal, imageSize);
            }
            
            for(let i=0; i<props.datas.length; i++) {
                const temp = props.datas[i];
                positions.push({
                    title: temp.name,
                    latlng: new kakao.maps.LatLng(temp.latitude, temp.longitude),
                    image : CreateMarkerImage(temp.type)
                });
            }

             
            for (let i = 0; i < positions.length; i ++) {
    
                
                
                
                
                // 마커를 생성합니다
                let marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : positions[i].image // 마커 이미지 
                });
            }
            });
            
            
        };  
    });


    return (
        <>
            <h1 className="text-center">
                <span className="font-weight-bold">MEALKHU MAP</span>
            </h1>
            <div id='map' style={{
                'width':'100%',
                'height':'30rem'
            }}></div>
        </>
    )
}

export default LandingMap;