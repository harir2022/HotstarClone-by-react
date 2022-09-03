import styled  from "styled-components";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function ImageSlider(props){
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }

    return (

        // <div className="ImageSlider">
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/slider-scale.jpg"></img>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-badging.jpg"></img>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg"></img>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg"></img>
                    </a>
                </Wrap>

            </Carousel>
        // </div>
    )
}

const Carousel = styled(Slider)`
    margin-top:12px;

    & > button{
        height:100%;
        width:5vw;
        z-index:1;
        opacity:0;

        &:hover{
            opacity:1;
            transition: opacity 0.2s ease 0s;
        }
    }
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);
        }
    }

    li.stick-active button:before{
        color:white
    }
    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left:-75px;
    }
    .slick-next{
        right:-75px;

    }

`

const Wrap = styled.div`
    position:relative;
    cursor:pointer;
    border-radius:4px;

    a{
        border-radius:4px;
        box-shadow:rgba(0 0 0 / 69% ) 0px 26px 30px -10px,
                    rgba(0 0 0 / 79%) 0px 16px 10px -10px;
        display:block;
        position:relative;
        padding:4px;
    
        img{
            width:100%;
            height:100%;
        }

        &:hover{
            padding:0;
            border :4px solid white;
            transition-duration:300ms;
        }
    }


`





export default ImageSlider;