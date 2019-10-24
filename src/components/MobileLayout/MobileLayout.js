import React, {useState} from 'react';
import img from './style/img/plante.jpg';
import './style/mobile-layout.sass';

const MobileLayout = () => {

    const [count, setCount] = useState(1);

    function removeItem () {
        if(count<2){
            return
        }
        setCount(count-1)
    }

    return (
        <div className="container__mobile_layout">

            <section className="header">
                <span>Thank you for your purchase!</span>
                <span>Special offer</span>
            </section>

            <section className="content">

                <span className="content__caption">
                    As a thank you for shopping with us,
                    get this additional item for <strong>only $15!</strong>
                </span>

                <div className="offer">
                    <span className="offer__hurry"> Hurry, your offer ends in:</span>

                    <div className="offer__time-wrapper">

                        <div className="offer__time">
                            <span className="number">
                                 00:
                            </span>

                            <span>
                                Hours
                            </span>
                        </div>

                        <div className="offer__time">

                            <span className="number">
                                 10:
                            </span>

                            <span className>
                                Mins
                            </span>
                        </div>

                        <div className="offer__time">
                             <span className="number">
                                 00
                            </span>

                            <span>
                                Secs
                            </span>
                        </div>
                    </div>
                </div>

                <div className="content__image">
                    <img src={img} alt=""/>

                    <div className="circle__wrapper">
                        <div className="circle gray"></div>
                        <div className="circle white"></div>
                    </div>
                </div>

                <span className="content__super tshirts">
                    Your Super T-shirts
                </span>
                <span className="content__super super">
                    Your Super
                </span>

                <div className="content__details">

                    <span className="content__details-buy">
                        Buy
                    </span>

                    <span className="content__details-details">
                        Details
                    </span>
                </div>


                <div className="price">

                    <div className="price__original">
                        <span>Original price:</span>
                        <span>$29.90</span>
                    </div>

                    <div className="price__deal">
                        <span>Deal price:</span>
                        <span>$15.00</span>
                    </div>

                    <div>
                        <span>Shipping:</span>
                        <span>$2.00</span>
                    </div>

                    <div>
                        <span>Tax:</span>
                        <span>$1.00</span>
                    </div>

                    <div>
                        <span>Total:</span>
                        <span>$18.00</span>
                    </div>

                </div>

            </section>


            <section className={"footer"}>
                <span>Qty</span>

                <div className={"footer__counter"}>

                    <div
                        className="counter add"
                        onClick={removeItem}
                    >
                        -
                    </div>

                    <div className="counter quality">
                        {count}
                    </div>

                    <div className="counter add"
                         onClick={()=>setCount(count+1)}
                    >
                        +
                    </div>

                </div>

                <button className="footer__btn-buy">
                    Buy
                </button>

                <a href="" className="no_thanks">
                    No, thanks, I’ll pass.
                </a>
            </section>



        </div>
    )
};

export default MobileLayout;