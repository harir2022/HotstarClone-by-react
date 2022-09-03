import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import db from '../firebaseApp';
import { setMovies } from '../features/Movies/movieSlice';
import { selectUserName } from '../features/user/userSlice';

import {collection,onSnapshot} from 'firebase/firestore'


import styled  from "styled-components";
//components;
import ImageSlider  from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommendation from "./Recommendation";
import Trending from "./Trending";
import Viewers from "./Viewers";

function Home (props){

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends=[];
    let originals=[];
    let newDisneys=[];
    let trending=[];
    useEffect(() => {
        console.log("Collections from firestore");
        let collections = collection(db,"movies");
        onSnapshot(collections,(snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(originals);
            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
          });
    
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
        });
      }, [userName]);
    return (

        <div className="Home">
            <Container>
                <ImageSlider/>
                <Viewers/>
                <Recommendation/>
                <NewDisney/>
                <Originals/>
                <Trending/>
            </Container>
        </div>
    )
}
const Container =styled.main`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw + 5px );
    
    &:after{
        content:'';
        position:absolute;
        background : url("/images/home-background.png") center center / cover no-repeat fixed;
        inset:0px;
        opacity:1;
        z-index:-1;
    }

`;


export default Home;