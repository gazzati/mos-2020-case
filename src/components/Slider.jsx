import React from "react";

const Slider = () => {
    return(
        <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
            <div id="rev_slider_1_1" className="rev_slider fullwidthabanner">
                <ul>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="700" data-saveperformance="off">
                        <img src="images/slider/winter-3193439_1920.jpg" alt="slider" data-bgposition="center top" data-bgfit="cover"
                             data-bgrepeat="no-repeat"/>

                        <div className="tp-caption slider-title sfr tp-resizeme"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="-52"
                             data-speed="1200"
                             data-start="500"
                             data-easing="easeOutExpo"
                             data-splitin="chars"
                             data-splitout="none"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"> Одежда
                        </div>

                        <div className="tp-caption black customin customout tp-resizeme"
                             data-x="center" data-hoffset="-19"
                             data-y="center" data-voffset="110"
                             data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="1500"
                             data-start="1600"
                             data-easing="Back.easeInOut"
                             data-splitin="none"
                             data-splitout="none"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="1000"
                             data-endeasing="Power4.easeOut"><a href='shop.html' className='buttom_bike'>Начать покупки</a>
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="700" data-saveperformance="off">
                        <img src="images/slider/shoes-2425122_960_720.jpg" alt="slider31" data-bgposition="center top" data-bgfit="cover"
                             data-bgrepeat="no-repeat"/>

                        <div className="tp-caption slider-title sfr tp-resizeme"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="-52"
                             data-speed="1200"
                             data-start="500"
                             data-easing="easeOutExpo"
                             data-splitin="chars"
                             data-splitout="none"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"> Обувь
                        </div>

                        <div className="tp-caption black sfb tp-resizeme"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="34"
                             data-speed="800"
                             data-start="2200"
                             data-easing="Quad.easeInOut"
                             data-splitin="none"
                             data-splitout="none"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"><a href='shop.html' className='buttom_bike'>Начать покупки</a>
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="700" data-saveperformance="off">
                        <img src="images/slider/skier-999277_1920.jpg" alt="slider2" data-bgposition="center top" data-bgfit="cover"
                             data-bgrepeat="no-repeat"/>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Slider
