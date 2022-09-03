import styled from "styled-components";

function Viewers(props){

    return(
        <div className="Viewers">
            <Container>
                <Wrap>
                    <img src="/images/viewers-disney.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-pixar.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
            </Container>
        </div>
    )
}

const Container = styled.div`
    margin-top:30px ;
    padding:30px 0px 25px;
    display:grid;
    // grid-gap:25px;
    gap:24px;
    grid-template-columns:repeat(5, minmax(0 , 1fr));
    
    @media (max-width:768px){
        grid-template-columns:repeat(1, minmax(0 , 1fr));
        
    }


`

const Wrap=styled.div`
    padding-top:56.35%;
    border-radius:10px;
    box-shadow:rgba(0 0 0 / 69% ) 0px 26px 30px -10px, rgba(0 0 0 / 79%) 0px 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    transition:all 250ms cubic-bezier(0.25,0.46,0.3,0.4);
    border:3px solid white;

    img{
        position:absolute;
        top:0;
        z-index:1;

        inset:0px ; 
        display:block;
        object-fit:cover;
        height:100%; width:100%;
        opacity:1;
    }
    video{
        width:100%;height:100%;
        position:absolute;
        top:0px;
        opacity:0;
    }
    &:hover{
        transform:scale(1.05);
        border-color:white;
        video{
            opacity:1;
        }
    }

`;


export default Viewers;
