import styled from 'styled-components'

function Login (props){
    return (
        <div className='Login'>
            <Container>
                <Content>
                    <CTA>
                        <CTALOGOONE src="/images/cta-logo-one.svg"/>
                        <SignUp>GET ALL THERE</SignUp>
                        <Description>
                        Got Premium Access to Raya and the last dragon for an additionalfee with a disney+ subscription. As of 03/26/21, The price of the disney+ and the disney bundle will increase by $1
                        </Description>
                        <CTALOGOTWO src="/images/cta-logo-two.png"/>

                    </CTA>
                    <BGImage/>
                </Content>
            </Container>
        </div>
    )
}

const Container = styled.section`
    display:flex;
    flex-direction:column;
    height:100vh;
    overflow:hidden;
    text-align:center;
`;
const Content =styled.div`
    width:100%;
    min-height:100vh;
    box-sizing: border-box;
    margin-bottom:10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    
`;

const BGImage =  styled.div`
    width:100%;
    height:100%;
    background-image: url('/images/login-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position:absolute;
    z-index:-1;
`

const CTA=  styled.div`
    display:flex;
    flex-direction:column;    
    width:100%;
    max-width:650px;
    margin-left:auto;
    margin-right:auto;
    
`
const CTALOGOONE = styled.img`
    display:block;
    width:100%;
    min-height:1px;
    max-width:600px;
    margin-bottom:10px;
`;

const SignUp = styled.a`
    font-weight:bold;
    font-size:18px;
    color:#f9f9f9;
    background-color:#006305;
    margin-bottom:10px;
    width:100%;
    letter-spacing:12px;
    padding:16.5px 0px;
    border:1px solid transparent;
    border-radius:4px;
    cursor:pointer;
    &:hover {
        background-color:red;
}

   `

const  Description = styled.p`
    color:hsla(0,0%,95.3%,1);
    font-size:11px;
    margin:0  0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
`;
const CTALOGOTWO = styled.img`
    max-width:600px;
    margin-bottom:20px;    
    display:inline-block;
    vertical-align:bottom;
    width:100%;
`


export default Login;