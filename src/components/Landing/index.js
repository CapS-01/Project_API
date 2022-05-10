import React, {useRef, useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import Singup from '../SingUp';
import Login from '../Login';

const Landing = () => {

    const [btn, setBtn] = useState(false)
    const refwolverine =  useRef(null);
    // console.log(refwolverine);

    useEffect(() => {
        refwolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refwolverine.current.classList.remove("startingImg");
            setBtn(true)
        }, 1000);
    }, [])

    const setLeftImg = () => {
        refwolverine.current.classList.add("leftImg");}
    const setRightImg = () => {
        refwolverine.current.classList.add("rightImg");
  
    }

    const clearImg = () =>  {
        if (refwolverine.current.classList.contains("leftImg")) {
            refwolverine.current.classList.remove("leftImg")}
            
         else if ( refwolverine.current.classList.contains("rightImg")) {
            refwolverine.current.classList.remove("rightImg")
         }              
    }
   const displaybtn = btn && (
        <Fragment>
            <div  onMouseOver={setLeftImg} onMouseOut={clearImg}  className="leftBox">
            <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg}  className="rightBox">
            <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

  return (
    <main ref={refwolverine} className="welcomePage">
       { displaybtn }
    </main>
  )}

export default Landing