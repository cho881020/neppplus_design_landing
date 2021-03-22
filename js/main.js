// w3.includeHTML();

let gnbBtn = document.getElementById('gnbBtn');
let closeGnbBtn = document.getElementById('closeGnbBtn');
let gnbBg = document.getElementById('gnbBg');
let gnb = document.getElementById('gnb');
let header = document.getElementById('header');
let kakaotalkAcademyBtns = document.getElementsByClassName('kakaotalkAcademyBtn');
let kakaotalkOfficeBtns = document.getElementsByClassName('kakaotalkOfficeBtn');

Kakao.init('119a5e3f55e106d09ee101302c37b036');

for(let i = 0; i < kakaotalkAcademyBtns.length; i++) {
    kakaotalkAcademyBtns[i].addEventListener('click', ()=>{
        console.log('이벤트')
        Kakao.Channel.chat({
            channelPublicId: '_xoxjWUK' // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
          });
    })
}

gnbBtn.onclick = () =>{
    gnb.classList.add('on');
    header.classList.add('gnbOn');
};
closeGnbBtn.onclick = function() {
    gnb.classList.remove('on');
    header.classList.remove('gnbOn');
};

gnbBg.onclick = () => {
    gnb.classList.remove('on');
    header.classList.remove('gnbOn');
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(37.57779997102228, 127.03361687202978), // 지도의 중심좌표
            level: 2 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

var marker = new kakao.maps.Marker({ 
    // 지도 중심좌표에 마커를 생성합니다 
    position: map.getCenter() 
}); 
// 지도에 마커를 표시합니다
marker.setMap(map);


  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay:{
      delay: 5000,
    },
    pagination: {
      el: '.pagination',
    },
    navigation: {
      nextEl: '.btnNext',
      prevEl: '.btnPrev',
    },
  });