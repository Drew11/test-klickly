import React from 'react';
import './style/cardform.sass';
import cardLogos from './style/img/card-logos.svg';
import {months} from  './helpers/months';



const CardForm = () => {
    return (
        <div className="card__form">
            <div className="card__form-container">
                <form action="">

                    <span>
                        We're pretty unique in that you don't need to pay upfront to advertise. Add a payment method
                        info so that we can get paid when we make a sale.
                    </span>

                    <span>
                        Billing Information
                    </span>

                    <div className="card__form-card">
                        <select
                            name="card" id=""
                            size={1}
                            className={"minimal"}
                        >
                            <option value="">Credit or Debit card</option>
                            <option value="">Credit or Debit card</option>
                            <option value="">Credit or Debit card</option>

                        </select>

                        <div className={"card__form-card-dropdown"}>
                            <div className="card__form-card-dropdown-arrow">
                            </div>
                        </div>

                        <div className={"card__form-card-wrapper"}>
                        </div>

                    </div>

                    <div>
                        <span>Name on Card</span>
                        <img src={cardLogos} alt=""/>
                    </div>

                    <input name={"name"}
                           type="text"
                           placeholder={"Jimmy Santos"}
                    />

                    <div>
                        <div className="card__number">
                            <span>
                               card number
                            </span>
                            <input name="card-number"
                                   type="text"
                                   placeholder={"e.g. 1234 1234 1234 1234"}
                            />

                        </div>

                        <div className="cvv">
                            <span>
                               cvv
                            </span>
                            <input name="cvv"
                                   type="text"
                            />
                        </div>

                        <div className="date">
                            <span>
                               Expiration date
                            </span>

                            <div className="date__select">

                                <div className="date__month">
                                    <select
                                        size={1}
                                        name="month"
                                        id="">
                                        <option
                                            value="month"
                                            selected={true}
                                            disabled={"disabled"}
                                        >Month
                                        </option>
                                        {months.map(month=><option>{month}</option>)}
                                    </select>

                                    <div className={"date__year-dropdown"}>
                                        <div className="date__year-arrow">
                                        </div>
                                    </div>

                                    <div className={"date__year-bgcolor"}>
                                    </div>

                                </div>


                                <div className="date__year">
                                    <select
                                        name="year"
                                        id="">

                                        <option
                                            value="year"
                                            selected={true}
                                            disabled={"disabled"}
                                        >Year
                                        </option>

                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                    </select>

                                    <div className={"date__year-dropdown"}>
                                        <div className="date__year-arrow">
                                        </div>
                                    </div>

                                    <div className={"date__year-bgcolor"}>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={'form__button'}>
                        <div className="form__button-wrapper">
                            <button className={'button cancel'}>Cancel</button>
                            <button className={'button save'}>Save</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )

} ;

export default CardForm;