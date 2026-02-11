//스크롤 이벤트 시작
//스크롤 했을 때 헤더 색상 가독성 높일 수 있도록 
$(window).scroll(function() { 

	var scrollValue = $(document).scrollTop(); 
    //현재 스크롤의 위치를 알 수 있습니다.
    //console.log(scrollValue); 
//var sec1Height = document.querySelector('#sec1').height();
var introHeight = $("#sec2").height();
    //console.log("태그높이:", introHeight);

//만약 스크롤 값이 497 보다 크다면~ 로고의 크기를 줄이고 위치를 바꿔줘.
    if(scrollValue > introHeight){
        //console.log(introHeight);
        // $('.move_logo').addClass('move_logo_ani');
        $('.ul').css({
            'width':'30vw',
            'height':'2vh',
            // 'backdrop-filter':'blur(20px)',
            'padding':'1.1rem',
            'border-radius':'0.5rem',
            // 'border':'2px solid white',
            'justify-content':'space-between',
    });
    $('.ul a').css('color','white');
    $('.header-logo').css('left','3vw');
    $('.icon-wrap').css('right','3vw');
}else if(scrollValue < introHeight){
        // $('.move_logo').removeClass('move_logo_ani');
        $('.ul').css({
            'width':'100%',
            'backdrop-filter':'none',
            'justify-content':'space-between',
            'border':'none',
            'backgroundColor':'rgba(#ffffff00)'
        });
        $('.ul a').css('color','black');
        $('.header-logo').css('left','-10vw');
        $('.icon-wrap').css('right','-10vw');
    }



    if(scrollValue > 1800){
        //console.log('스크롤 위치:2400');
        $('.one-month-img').css({'left':'0','opacity':'1'});
        $('.one-month-img2').css({'left':'-1.7vw','opacity':'1'});
        $('.one-month-img3').css({'left':'-3.2vw','opacity':'1'});
    }else if(scrollValue < 1800){
        $('.one-month-img').css({'left':'15vw','opacity':'0'});
        $('.one-month-img2').css({'left':'20vw','opacity':'0'});
        $('.one-month-img3').css({'left':'25vw','opacity':'0'});
    }





    
    //service3 티켓 움직임
    if(scrollValue > 3609.5 && scrollValue < 5041.33){
        //console.log("움직여라");
        $('.tick_1').css({
            'transform':'rotate(5deg)',
            'transition':'all 1s ease',
        });
        $('.tick_2').css({
            'transform':'rotate(10deg)',
            'transition':'all 2s ease',
        });
        $('.tick_3').css({
            'transform':'rotate(20deg)',
            'transition':'all 3s ease',
        });
        $('.tick_4').css({
            'transform':'rotate(-10deg)',
            'transition':'all 4s ease',
        });
        /*$('.h3_6_2').css({
            'color':'#D0F500',
            'transition':'all 1s ease',
        });*/
    }else if(scrollValue < 5041.33){
        $('.tick_1').css({
            'transform':'rotate(0deg)',
            'transition':'all 1s ease',
        });
        $('.tick_2').css({
            'transform':'rotate(0deg)',
            'transition':'all 2s ease',
        });
        $('.tick_3').css({
            'transform':'rotate(0deg)',
            'transition':'all 3s ease',
        });
        $('.tick_4').css({
            'transform':'rotate(0deg)',
            'transition':'all 4s ease',
        });
    }


    //sec06 스크롤 이벤트 6264
    /*if(scrollValue > 21244){
        $('.title6').css({
            'position':'relative',
            'left':'0',
            'transition':'all 1s ease',
            'opacity':'1'
        });

        $('.title6_2').css({
            'position':'relative',
            'left':'0',
            'transition':'all 1s ease',
            'opacity':'1'
        });
        $('.p_cont6').css({
            'position':'relative',
            'left':'0',
            'transition':'all 1s ease',
            'opacity':'1'
        });
    }else if(scrollValue < 21244){
        $('.title6').css({
            'position':'relative',
            'left':'20vw',
            'transition':'all 0.3s ease',
            'opacity':'0'
        });
        $('.h3_6').css({
            'color':'#D0F500'
        });
        $('.title6_2').css({
            'position':'relative',
            'left':'-20vw',
            'transition':'all 0.3s ease',
            'opacity':'0'
        });
       
        $('.p_cont6').css({
            'position':'relative',
            'left':'-10vw',
            'transition':'all 1s ease',
            'opacity':'0'
        });
    }

    */
//해외 한달 살기, 즐거운 경험이 되도록 6264
/*
   if(scrollValue > 43669 ){
        $('.img11_1').css({
            'position':'relative',
            'left':'0vw',
        });
    }else if(scrollValue < 43669){
        $('.img11_1').css({
            'position':'relative',
            'left':'6vw',
        });
    }
*/
    //왼쪽 첫번째 글 이미지 6264
    /*
    if(scrollValue > 43702 ){
        $('.festival11').css({
            'position':'relative',
            'top':'0vw',
            'opacity':'1'
        });
        $('.under_right_wrap').css({
            'position':'relative',
            'left':'0vw',
            'opacity':'1'
        });
    }else if(scrollValue < 43702){
        $('.festival11').css({
            'position':'relative',
            'top':'-7vw',
            'opacity':'0.7'
        });
        $('.under_right_wrap').css({
            'position':'relative',
            'left':'-5vw',
            'opacity':'0.7'
        });
    }
*/
//6264
    if(scrollValue > 47122 ){
        $('.under2_img').css({
            'position':'relative',
            'top':'0vw',
            'opacity':'1'
        });
    }else if(scrollValue > 47122){
        
        $('.under2_img').css({
            'position':'relative',
            'top':'-7vw',
            'opacity':'0.1'
        });
    }

//51289와치 54500.5
    if(scrollValue > 48954 ){
        $('.text_line_11').css({
            'position':'relative',
            'left':'0vw',
            'opacity':'1'
        });
        $('.under_p_1').css({
            'position':'relative',
            'left':'0vw',
            'opacity':'1'
        });
    }else if(scrollValue > 48954){
        
        $('.text_line_11').css({
            'position':'relative',
            'left':'7vw',
            'opacity':'1'
        });
        $('.under_p_1').css({
            'position':'relative',
            'left':'7vw',
            'opacity':'1'
        });
    }

    var totalHeight = 0;

for (var i = 1; i <= 12; i++) {
  var sectionId = 'sec' + i;
  var sectionHeight = $('#' + sectionId).height();
  totalHeight += sectionHeight;
}



//선택된 요소 가져오기
var scrollValue = $(document).scrollTop(); 
var sec14 = $("#sec14").offset().top;
console.log("섹션 14의 스크롤 값은? "+sec14);

//console.log('총 높이:', totalHeight);
   
    if (scrollValue < sec14 * 0.9) {
        $('.w1').css({'left':'34vw'});
        $('.w2').css({'left':'17vw'});
        $('.w4').css({'left':'-18vw'});
        $('.w5').css({'left':'-35vw'});//다시 모아줘
    }else if (scrollValue > sec14){
        $('.w1').css({'left':'0'});
        $('.w2').css({'left':'0'});
        $('.w4').css({'left':'0'});
        $('.w5').css({'left':'0'}); 
    }
    });

//스크롤 시, 헤더를 위로 올립니다.
var didScroll;
var lastScrollTop = 0;
var delta = 5;
//헤더가 없어지는 지점
var navbarHeight = $('#sec01').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    //delta값 이상이라면 적용되도록 합니다.
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }
    // 과거의 nav값 보다 스크롤이 내려와 있다면 nav_up이라는 클래스를 붙여주세요.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').addClass('nav-up');
        // $('.header2').addClass('nav-up');
        // $('.icon-header').addClass('nav-up');
    } else {
        //document 높이 값이 window보다 내려가 있다면 헤더에 nav-up 클래스를 삭제해주세요.
    if (st + $(window).height() < $(document).height()) {
        $('.header').removeClass('nav-up');
        // $('.header2').removeClass('nav-up').addClass('nav-down');
        // $('.icon-wrap').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
//스크롤 효과 끝.





//프로그래스 바
window.addEventListener("scroll", () => {
        const indicatorBar = document.querySelector(".scroll-indicator-bar");

        const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = (pageScroll / height) * 100;

        indicatorBar.style.width = scrollValue + "%";

//javascript for responsive menu
    // const menuBtn = document.querySelector(".menu-btn");
    // const navigation = document.querySelector(".navigation");

    // menuBtn.addEventListener("click", () =>{
    //     menuBtn.classList.toggle("active");
    //     navigation.classList.toggle("active");
    // });
});





//스토버 띠 배너 돌아가는 자바스크립트
window.addEventListener("a", () => {
// 롤링 배너 복제본 생성
let roller = document.querySelector('.flow');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true);
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.flow_boxes').appendChild(clone);// wrap 하위 자식으로 부착

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.flow').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');

});





window.addEventListener("a", () => {
// 롤링 배너 복제본 생성
let roller = document.querySelector('.flow2');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true);
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.flow_boxes').appendChild(clone);// wrap 하위 자식으로 부착

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.flow').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');

});





//배너 복제본 생성
let roller = document.querySelector('.rolling-list');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true)
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.wrap-banner').appendChild(clone); // wrap 하위 자식으로 부착: display flex를 미리 선언했기 때문에 옆으로 가서 붙는다.

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'vw';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');





//스토버 띠 복제본 생성
let flow = document.querySelector('.flow');
flow.id = 'flow1'; // js에서 아이디 부여

let copy = flow.cloneNode(true)
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
copy.id = 'flow2';
document.querySelector('.flow-wrap').appendChild(copy); // wrap 하위 자식으로 부착: display flex를 미리 선언했기 때문에 옆으로 가서 붙는다.

document.querySelector('#flow1').style.left = '0vw';
document.querySelector('#flow2').style.left = document.querySelector('.flow').offsetWidth + 'vw';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

flow.classList.add('original');
copy.classList.add('clone');





 //이미지 배열을 담는 변수를 넣는다.
 var imgArray = new Array();
            imgArray[0] = "./img_src/main-bg-noColor.gif";
            imgArray[1] = "./img_src/stover_main_bg.gif";
            imgArray[2] = "./img_src/main-bg-noColor.gif";
            imgArray[3] = "./img_src/stover_main_bg.gif";
            imgArray[4] = "./img_src/main-bg-noColor.gif";


        //5개의 이미지들을 무작위로 가져오는 변수
        var imgNum = Math.round(Math.random()*4);
        //도큐먼트와 자바스크립트를 이어준다 objImg = follow-image
		var objImg = document.querySelector(".follow-images");
        //주어진 ID("introImg")를 가진 이미지 요소의 src 속성을 무작위 이미지로 변경하는 역할을 합니다.
	
        //도큐먼트 상의 박스를 연결한다.
        const box = document.querySelector('.box');
        //도큐먼트 상의 이미지와 연결한다.
        const followImages = document.querySelector('.follow-images');


//스페이스로 유저 스크롤링 코드        
let scrolling = false;

// 스페이스바를 눌렀을 때 스크롤 시작
window.addEventListener('keydown', function (event) {
    if (event.code === 'Space' && !scrolling) {
        scrolling = true;
        scrollDown();
    }
});

// 스페이스바를 놓았을 때 스크롤 중지
window.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
        scrolling = false;
    }
});

function scrollDown() {
    if (scrolling) {
        // 스크롤할 거리 (픽셀 단위)를 설정합니다.
        const scrollDistance = 3; // 원하는 스크롤 거리로 변경 가능

        // 페이지를 scrollDistance만큼 아래로 스크롤합니다.
        window.scrollBy(0, scrollDistance);

        // 다음 스크롤을 요청합니다. (재귀적으로 호출)
        requestAnimationFrame(scrollDown);
    }
}

//티켓에 호버하면 wrap08 배경을 바꿔줘!
$('.img_box8').hover(function() {
    //console.log("호버 했습니다");
    $('#sec9').css({
        'background':'url(./img_src/by-town-theather.png) no-repeat',
        'background-size':'cover',
        'transition':'all 0.5s ease'
    });
});


//티켓에 호버하면 wrap08 배경을 바꿔줘!
$('.img_box8').hover(function() {
    //console.log("sec02 마우스 인터");
    $(this).css({
        'background':'url(./img_src/main-bg-noColor.gif)',
        'background-position':'right',
        'background-size':'cover',
        'transition':'all 1s ease'
    });
});


$('#sec02').mouseleave(function() {
    //console.log("sec02 마우스 떠났습니다.");
    $(this).css({
        'background':'#1E1E1E',
        'background-position':'right',
        'background-size':'cover',
        'transition':'all 1s ease'
    });
});

    document.getElementById('vid').play();



//워크 베케이션 이미지 
//해당 클레스를 찾아주고
const opacityImage = document.querySelector('.opacity-image');
const opacityImage2 = document.querySelector('.opacity-image2');
const opacityImage3 = document.querySelector('.opacity-image3');
const opacityImage4 = document.querySelector('.opacity-image4');
const opacityImage5 = document.querySelector('.opacity-image5');

//const w1_ani = document.querySelector('.w1_ani');

const callback = ([entry], observer) => {
    entry.target.style.opacity = entry.intersectionRatio;
}
//observer2는 해당 다른 스타일을 관찰해줘
const callback2 = ([entry], observer2) => {
    entry.target.style.opacity = entry.intersectionRatio;
}
const callback3 = ([entry], observer3) => {
    entry.target.style.transform = entry.intersectionRatio;
}
const callback4 = ([entry], observer4) => {
    entry.target.style.transform = entry.intersectionRatio;
}
const observer = new IntersectionObserver(callback, {
  threshold: [...new Array(101)].map((_, i) => i / 100)
});
const observer2 = new IntersectionObserver(callback2, {
    threshold: [...new Array(101)].map((_, i) => i / 100)
  });
const observer3 = new IntersectionObserver(callback, {
    threshold: [...new Array(101)].map((_, i) => i / 100)
  });
const observer4 = new IntersectionObserver(callback2, {
    threshold: [...new Array(101)].map((_, i) => i / 100)
  });
const observer5 = new IntersectionObserver(callback2, {
    threshold: [...new Array(101)].map((_, i) => i / 100)
  });
observer.observe(opacityImage);



//observer2.observe(w1_ani);



// Intersection Observer를 사용하여 이미지가 특정 영역에 진입할 때 애니메이션을 실행합니다.



/*const container = document.querySelector('.container');
const objects = document.querySelectorAll('.object');
const centerObject = document.querySelector('.center-object');

const numObjects = objects.length;
const spacing = 100; // 오브젝트들 사이의 간격 (픽셀 단위)

function moveObjects() {
  const containerRect = container.getBoundingClientRect();
  const centerObjectRect = centerObject.getBoundingClientRect();

  const containerCenterX = containerRect.left + containerRect.width / 2;
  const centerObjectCenterX = centerObjectRect.left + centerObjectRect.width / 2;

  const scrollDistance = centerObjectCenterX - containerCenterX;

  objects.forEach((object, index) => {
    const distance = spacing * (index - 2); // 인덱스에 따른 오브젝트의 위치 계산

    if (index < 2) {
      // 왼쪽 오브젝트들은 오른쪽에서 왼쪽으로 이동
      object.style.transform = `translateX(${distance + scrollDistance}px)`;
    } else if (index > 2) {
      // 오른쪽 오브젝트들은 왼쪽에서 오른쪽으로 이동
      object.style.transform = `translateX(${distance - scrollDistance}px)`;
    }
  });
}

window.addEventListener('scroll', moveObjects);

*/
