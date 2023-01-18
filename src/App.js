import './App.css';
import icon from './assets/Vector.png'
import globe from './assets/globe.png'
import bgHeader from './assets/bg-header.png'
import {CSSTransition} from 'react-transition-group';
import content from './assets/content.png'
import footer from './assets/footer.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import profile from './assets/profile.png'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import React, {useEffect, useState} from 'react';

const App = () =>  {
  const [buttonNext, setButtonNext] = useState(false);
  const [buttonPrev, setButtonPrev] = useState(true);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  useEffect(() => {
    const slider = document.querySelector('.slider');
    console.log(slider)
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      slider.style.scrollBehavior = 'auto';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active')
      slider.style.scrollBehavior = 'smooth';
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active')
    });
  })

  const slideLeft = (e) => {
    console.log(e);
    const slider = document.querySelector('.slider');
    // slider.classList.add('')
    slider.scrollLeft = slider.scrollLeft - 500;
    if (slider.scrollLeft <= 500) {
      setButtonPrev(true)
    } else{
      setButtonPrev(false)
    }
    console.log(slider.scrollLeft, slider.clientWidth)
  }

  const slideRight = (e) => {
    console.log(e)
    const slider = document.querySelector('.slider');
    slider.scrollLeft = slider.scrollLeft + 500;
    if (slider.scrollLeft >= slider.clientWidth - 100) {
      setButtonNext(true)
    }
    else {
      setButtonNext(false)
      setButtonPrev(false)
    }
    console.log(slider.scrollLeft, slider.clientWidth)
  }

  return (
    <div>
      {searchVisible && (
        <CSSTransition transitionName="example">
          <div className="search-field row pt-5 pb-3 position-relative" style={{zIndex: 1, backgroundColor: "#FFF"}}>
            <div className="col-2" />
            <div className="input-group mb-3 w-50 rounded-pill p-2" style={{border: "1px solid grey"}}>
              <div className="mx-2">
                <button style={{background: "none", border: "none"}}>
                  <img className="w-100 h-100 bg-transparent mt-2" src={icon} alt=""/>
                </button>
              </div>
              <input type="text" className="form-control" placeholder="검색어를 입력해 주세요." aria-label="Username"
                     aria-describedby="basic-addon1" style={{border: "none"}}/>
            </div>
            <div className="col-2" />
            <div className="col-1 d-flex align-items-center justify-content-center mb-3" style={{cursor: "grab"}} onClick={() => setSearchVisible(false)}>
              <IoMdClose size={20}/>
            </div>
          </div>
        </CSSTransition>
      )}
    <div className="app overflow-hidden position-absolute top-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: "80px"}}>
        <div className="container">
          <a className="navbar-brand" href="#" style={{color: "#272727"}}>logo logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-4" onMouseEnter={() => setHoverMenu(false)}>
                <a className="nav-link active" aria-current="page" href="#" style={{color: "#272727"}}>DNA 질문검사</a>
              </li>
              <li className="nav-item mx-4" onMouseEnter={() => setHoverMenu(true)}>
                <a className="nav-link dropdown-toggle" href="#"
                   aria-expanded="false" style={{color: "#272727"}}>
                  타입 리포트
                </a>
                {hoverMenu && (
                  <div onMouseEnter={() => setHoverMenu(true)} onMouseLeave={() => setHoverMenu(false)} className="row position-absolute mt-3 d-flex flex-column flex-nowrap" style={{backgroundColor: "white", zIndex: 1, marginLeft: "-25%", width: "60%", height: "80vh", overflowY: "scroll"}}>
                    <div className="col d-flex flex-column">
                      <p>아에그룹(II-A)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00019", width: "15%"}}>
                          <span className="fw-bold">01 아에사스</span> <br/><span> (II-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00019", width: "15%"}}>
                          <span className="fw-bold">02 아에사스</span> <br/><span> (II-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00019", width: "15%"}}>
                          <span className="fw-bold">03 아에사스</span> <br/><span> (II-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00019", width: "15%"}}>
                          <span className="fw-bold">04 아에사스</span> <br/><span> (II-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00019", width: "15%"}}>
                          <span className="fw-bold">05 아에사스</span> <br/><span> (II-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00019", width: "15%"}}>
                          <span className="fw-bold">01 아에사스</span> <br/><span> (II-A-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>알에그룹(ID-A)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#F49300", width: "15%"}}>
                          <span className="fw-bold">07 알에사스</span> <br/><span>(ID-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#F49300", width: "15%"}}>
                          <span className="fw-bold">08 알에사스</span> <br/><span>(ID-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#F49300", width: "15%"}}>
                          <span className="fw-bold">09 알에사스</span> <br/><span>(ID-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#F49300", width: "15%"}}>
                          <span className="fw-bold">10 알에사스</span> <br/><span>(ID-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#F49300", width: "15%"}}>
                          <span className="fw-bold">11 알에사스</span> <br/><span>(ID-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#F49300", width: "15%"}}>
                          <span className="fw-bold">12 알에사스</span> <br/><span>(ID-A-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>디에그룹(DD-A)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#FBE41A", width: "15%"}}>
                          <span className="fw-bold">13 디에사스</span> <br/><span>(DD-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#FBE41A", width: "15%"}}>
                          <span className="fw-bold">14 디에사스</span> <br/><span>(DD-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#FBE41A", width: "15%"}}>
                          <span className="fw-bold">15 디에사스</span> <br/><span>(DD-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#FBE41A", width: "15%"}}>
                          <span className="fw-bold">16 디에사스</span> <br/><span>(DD-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#FBE41A", width: "15%"}}>
                          <span className="fw-bold">17 디에사스</span> <br/><span>(DD-A-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#FBE41A", width: "15%"}}>
                          <span className="fw-bold">18 디에사스</span> <br/><span>(DD-A-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>아비그룹(II-B)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#76D200", width: "15%"}}>
                          <span className="fw-bold">19 아비사스</span> <br/><span>(II-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#76D200", width: "15%"}}>
                          <span className="fw-bold">20 아비사스</span> <br/><span>(II-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#76D200", width: "15%"}}>
                          <span className="fw-bold">21 아비사스</span> <br/><span>(II-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#76D200", width: "15%"}}>
                          <span className="fw-bold">22 아비사스</span> <br/><span>(II-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#76D200", width: "15%"}}>
                          <span className="fw-bold">23 아비사스</span> <br/><span>(II-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#76D200", width: "15%"}}>
                          <span className="fw-bold">24 아비사스</span> <br/><span>(II-B-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>알비그룹(ID-B)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#008EDE", width: "15%"}}>
                          <span className="fw-bold">25 알비사스</span> <br/><span>(ID-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#008EDE", width: "15%"}}>
                          <span className="fw-bold">26 알비사스</span> <br/><span>(ID-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#008EDE", width: "15%"}}>
                          <span className="fw-bold">27 알비사스</span> <br/><span>(ID-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#008EDE", width: "15%"}}>
                          <span className="fw-bold">28 알비사스</span> <br/><span>(ID-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#008EDE", width: "15%"}}>
                          <span className="fw-bold">29 알비사스</span> <br/><span>(ID-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#008EDE", width: "15%"}}>
                          <span className="fw-bold">30 알비사스</span> <br/><span>(ID-B-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>디비그룹(DD-B)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#002FA8", width: "15%"}}>
                          <span className="fw-bold">31 디비사스</span> <br/><span>(DD-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#002FA8", width: "15%"}}>
                          <span className="fw-bold">32 디비사스</span> <br/><span>(DD-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#002FA8", width: "15%"}}>
                          <span className="fw-bold">33 디비사스</span> <br/><span>(DD-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#002FA8", width: "15%"}}>
                          <span className="fw-bold">34 디비사스</span> <br/><span>(DD-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#002FA8", width: "15%"}}>
                          <span className="fw-bold">35 디비사스</span> <br/><span>(DD-B-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#002FA8", width: "15%"}}>
                          <span className="fw-bold">36 디비사스</span> <br/><span>(DD-B-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>아시그룹(II-C)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#9A00D0", width: "15%"}}>
                          <span className="fw-bold">37 아시사스</span> <br/><span>(II-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#9A00D0", width: "15%"}}>
                          <span className="fw-bold">38 아시사스</span> <br/><span>(II-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#9A00D0", width: "15%"}}>
                          <span className="fw-bold">39 아시사스</span> <br/><span>(II-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#9A00D0", width: "15%"}}>
                          <span className="fw-bold">40 아시사스</span> <br/><span>(II-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#9A00D0", width: "15%"}}>
                          <span className="fw-bold">41 아시사스</span> <br/><span>(II-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#9A00D0", width: "15%"}}>
                          <span className="fw-bold">42 아시사스</span> <br/><span>(II-C-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>알시그룹(ID-C)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#00D0C4", width: "15%"}}>
                          <span className="fw-bold">43 알시사스</span> <br/><span>(ID-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#00D0C4", width: "15%"}}>
                          <span className="fw-bold">44 알시사스</span> <br/><span>(ID-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#00D0C4", width: "15%"}}>
                          <span className="fw-bold">45 알시사스</span> <br/><span>(ID-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#00D0C4", width: "15%"}}>
                          <span className="fw-bold">46 알시사스</span> <br/><span>(ID-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#00D0C4", width: "15%"}}>
                          <span className="fw-bold">47 알시사스</span> <br/><span>(ID-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#00D0C4", width: "15%"}}>
                          <span className="fw-bold">48 알시사스</span> <br/><span>(ID-C-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-3">
                      <p>디시그룹(DD-C)</p>
                      <p>해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다. 해당 그룹의 설명입니다.</p>
                      <div className="d-flex justify-content-around">
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00089", width: "15%"}}>
                          <span className="fw-bold">49 디시사스</span> <br/><span>(DD-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00089", width: "15%"}}>
                          <span className="fw-bold">50 디시사스</span> <br/><span>(DD-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00089", width: "15%"}}>
                          <span className="fw-bold">51 디시사스</span> <br/><span>(DD-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00089", width: "15%"}}>
                          <span className="fw-bold">52 디시사스</span> <br/><span>(DD-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00089", width: "15%"}}>
                          <span className="fw-bold">53 디시사스</span> <br/><span>(DD-C-44-SS)</span>
                        </div>
                        <div className="rounded-2 p-2 text-center text-white" style={{backgroundColor: "#D00089", width: "15%"}}>
                          <span className="fw-bold">54 디시사스</span> <br/><span>(DD-C-44-SS)</span>
                        </div>
                      </div>
                    </div>
                    {/*<li><a className="dropdown-item" href="#">Action</a></li>*/}
                    {/*<li><a className="dropdown-item" href="#">Another action</a></li>*/}
                    {/*<li>*/}
                    {/*  <hr className="dropdown-divider" />*/}
                    {/*</li>*/}
                    {/*<li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                  </div>
                )}
              </li>
              <li className="nav-item mx-4" onMouseEnter={() => setHoverMenu(false)}>
                <a className="nav-link" style={{color: "#272727"}} href="#">54DNAtype</a>
              </li>
              <li className="nav-item mx-4" onMouseEnter={() => setHoverMenu(false)}>
                <a className="nav-link" style={{color: "#272727"}}>학습유전자</a>
              </li>
            </ul>
            <div className="mx-2 search">
              <button style={{background: "none", border: "none"}} onClick={() => setSearchVisible(true)}>
                <img className="w-100 h-100 bg-transparent" src={icon} alt=""/>
              </button>
            </div>
            <div className="mx-2">
              <button style={{background: "none", border: "none"}}>
                <img className="w-100 h-100" src={globe} alt=""/>
              </button>
            </div>
            <div className="mx-2">
              <a className="navbar" style={{color: "#272727"}} href="#">로그인</a>
            </div>
            <div className="mx-2">
              <button className=" px-5 py-3 rounded text-white" style={{fontSize: "1rem", border: "none", backgroundColor: "#005BE2"}}>검사시작</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="row" style={{position: "relative"}}>
        <div className="column">
          <img className="w-100 h-100" src={bgHeader} alt=""/>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column" style={{position: "absolute", marginTop: "150px"}}>
          <p style={{fontSize: "2rem"}}>메인 소개 문구 메인 소개 문구 메인 소개 문구</p>
          <button className=" px-5 py-3 rounded text-white" style={{fontSize: "1rem", border: "none", backgroundColor: "#005BE2"}}>검사시작</button>
        </div>
      </div>
      {/*<div className="container my-5">*/}
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col text-center d-flex flex-column" style={{}}>
            <p style={{fontSize: "3rem", color: "#1C319F", fontWeight: "600"}}>141K+</p>
            <p style={{color: "#575757", fontSize: "1rem", lineHeight: 0}}>서브 텍스트 서브 텍스트</p>
            <p style={{color: "#575757", fontSize: "1rem"}}>서브 텍스트</p>
          </div>
          <div className="col text-center d-flex flex-column" style={{}}>
            <p style={{fontSize: "3rem", color: "#1C319F", fontWeight: "600"}}>84M+</p>
            <p style={{color: "#575757", fontSize: "1rem", lineHeight: 0}}>서브 텍스트 서브 텍스트</p>
            <p style={{color: "#575757", fontSize: "1rem"}}>서브 텍스트</p>
          </div>
          <div className="col text-center d-flex flex-column" style={{}}>
            <p style={{fontSize: "3rem", color: "#1C319F", fontWeight: "600"}}>731M+</p>
            <p style={{color: "#575757", fontSize: "1rem", lineHeight: 0}}>서브 텍스트 서브 텍스트</p>
            <p style={{color: "#575757", fontSize: "1rem"}}>서브 텍스트</p>
          </div>
          <div className="col text-center d-flex flex-column">
            <p style={{fontSize: "3rem", color: "#1C319F", fontWeight: "600"}}>91.2%</p>
            <p style={{color: "#575757", fontSize: "1rem", lineHeight: 0}}>서브 텍스트 서브 텍스트</p>
            <p style={{color: "#575757", fontSize: "1rem"}}>서브 텍스트</p>
          </div>
        {/*</div>*/}
      </div>
      {/*<div className="container align-content-center">*/}
      <div className="row" style={{marginTop: "150px"}}>
        <div className="col d-flex flex-column justify-content-center" style={{paddingLeft: "120px"}}>
          <p className="text-start" style={{fontWeight: 600}}>타입 리포트</p>
          <p className="w-75">간단 설명 영역 간단 설명 영역 간단 설명 영역 간단 설명 영역 간단 설명 영역 간단 설명 영역
            간단 설명 영역 간단 설명 영역 간단 설명 영역 간단 설명 영역 간단 설명 영역
            간단 설명 영역 간단 설명 영역 간단 설명 영역 간단 설명 영역</p>
          <div className="mt-5">
            <button className=" px-5 py-3 rounded text-white" style={{fontSize: "1rem", border: "none", backgroundColor: "#005BE2"}}>검사시작</button>
          </div>
        </div>
        <div className="col justify-content-center text-center">
          <img className="w-auto h-auto" src={content} alt="" style={{marginRight: "20px"}}/>
        </div>
        {/*</div>*/}
      </div>
      <div className="row d-flex flex-column" style={{background: "linear-gradient(to bottom, rgba(0, 91, 226, 0.04) 0%, rgba(0, 91, 226, 0) 100%", marginTop: "150px"}}>
        <div className="col text-center" style={{paddingTop: "100px", fontWeight: 600, fontSize: "1.5rem"}}>
          <p>사용후기</p>
        </div>
        <div className="col" style={{paddingTop: "40px"}}>
          <div className="slider row d-flex flex-row flex-shrink-0 flex-nowrap overflow-scroll mx-5" style={{cursor: "grab", scrollBehavior: "smooth"}}>
            <div className="d-flex flex-column w-25 me-5" style={{borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", borderTop: "4px solid #005BE2", backgroundColor: "#FFF"}}>
              <div className="d-flex align-items-center p-3">
                <img className="w-auto h-auto" src={profile} alt="" style={{marginRight: "20px"}}/>
                <div>
                  <span>이름 영역</span><br/><span style={{color: "#005BE2", fontWeight: 600}}>성향 영역 성향 영역</span>
                </div>
              </div>
              <p className="mt-3 ms-3">
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용
              </p>
            </div>
            <div className="d-flex flex-column w-25 me-5" style={{borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", borderTop: "4px solid #005BE2", backgroundColor: "#FFF"}}>
              <div className="d-flex align-items-center p-3">
                <img className="w-auto h-auto" src={profile} alt="" style={{marginRight: "20px"}}/>
                <div>
                  <span>이름 영역</span><br/><span style={{color: "#005BE2", fontWeight: 600}}>성향 영역 성향 영역</span>
                </div>
              </div>
              <p className="mt-3 ms-3">
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용
              </p>
            </div>
            <div className="d-flex flex-column w-25 me-5" style={{borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", borderTop: "4px solid #005BE2", backgroundColor: "#FFF"}}>
              <div className="d-flex align-items-center p-3">
                <img className="w-auto h-auto" src={profile} alt="" style={{marginRight: "20px"}}/>
                <div>
                  <span>이름 영역</span><br/><span style={{color: "#005BE2", fontWeight: 600}}>성향 영역 성향 영역</span>
                </div>
              </div>
              <p className="mt-3 ms-3">
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용
              </p>
            </div>
            <div className="d-flex flex-column w-25 me-5" style={{borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", borderTop: "4px solid #005BE2", backgroundColor: "#FFF"}}>
              <div className="d-flex align-items-center p-3">
                <img className="w-auto h-auto" src={profile} alt="" style={{marginRight: "20px"}}/>
                <div>
                  <span>이름 영역</span><br/><span style={{color: "#005BE2", fontWeight: 600}}>성향 영역 성향 영역</span>
                </div>
              </div>
              <p className="mt-3 ms-3">
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용
              </p>
            </div>
            <div className="d-flex flex-column w-25 me-5" style={{borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", borderTop: "4px solid #005BE2", backgroundColor: "#FFF"}}>
              <div className="d-flex align-items-center p-3">
                <img className="w-auto h-auto" src={profile} alt="" style={{marginRight: "20px"}}/>
                <div>
                  <span>이름 영역</span><br/><span style={{color: "#005BE2", fontWeight: 600}}>성향 영역 성향 영역</span>
                </div>
              </div>
              <p className="mt-3 ms-3">
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용
              </p>
            </div>
            <div className="d-flex flex-column w-25 me-5" style={{borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", borderTop: "4px solid #005BE2", backgroundColor: "#FFF"}}>
              <div className="d-flex align-items-center p-3">
                <img className="w-auto h-auto" src={profile} alt="" style={{marginRight: "20px"}}/>
                <div>
                  <span>이름 영역</span><br/><span style={{color: "#005BE2", fontWeight: 600}}>성향 영역 성향 영역</span>
                </div>
              </div>
              <p className="mt-3 ms-3">
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
                후기 내용 후기 내용 후기 내용
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col d-flex me-3 justify-content-center">
              <button className="rounded-circle p-3 me-5" style={{backgroundColor: "#FFF", border: "none"}} disabled={buttonPrev} onClick={(e) => slideLeft(e)}>
                <FaChevronLeft size={20} />
              </button>
              <button className="rounded-circle p-3" style={{backgroundColor: "#FFF", border: "none"}} disabled={buttonNext} onClick={(e) => slideRight(e)}>
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column" style={{marginTop: "200px"}}>
          <p className="text-center" style={{fontWeight: 600, fontSize: "1.5rem"}}>클로징 검사유도</p>
          <p className="text-center" style={{fontWeight: 600, fontSize: "2rem", marginTop: "50px"}}>간단 문구 영역 간단 문구 영역 간단 문구 영역</p>
          <div className="mt-5 text-center">
            <button className=" px-5 py-3 rounded text-white" style={{fontSize: "1rem", border: "none", backgroundColor: "#005BE2"}}>검사시작</button>
          </div>
        </div>
      </div>
      <div className="row" style={{marginTop: "50px"}}>
        <div className="col justify-content-center text-center ">
          <img className="w-100 h-100" src={footer} alt=""/>
        </div>
      </div>
      <div className="row d-flex flex-column my-5">
        <div className="col text-center">
          <p style={{color: "#999999"}}>©2022-2023 54DNAtype</p>
        </div>
        <div className="row mt-3">
          <div className="col-2"></div>
          <div className="col d-flex flex-row justify-content-evenly" style={{fontWeight: 600, fontSize: "1rem"}}>
            <p>Contact</p>
            <p>Testimonials</p>
            <p>Term & Condition</p>
            <p>Privacy Policy</p>
            <p>For Teams</p>
            <p>Join Us!</p>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="col text-center d-flex justify-content-center mt-3">
          <img className="w-auto h-auto me-3" src={facebook} alt=""/>
          <img className="w-auto h-auto me-3" src={instagram} alt=""/>
          <img className="w-auto h-auto" src={twitter} alt="" style={{marginRight: "20px"}}/>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
