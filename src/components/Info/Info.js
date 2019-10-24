import React from 'react';
import './style/info.sass';

const Info = () => {
    return (
        <section className="main__info">
            <div className="main__info_content">

                <span>
                    Helpful hints
                </span>

                <span>
                    We hate filling out info too,
                    but we can't process your sales without more details - we need things like your
                    deposit account info, customer service details, and a CC in order to accept orders
                    and payments from future customers. But don't worry! Most of this information is
                    easily available in your <a href="#">Shopify Settings</a>.
                    And while we can't copy this information directly for security reasons,
                    we've provided a link to help make your job a little easier.
                </span>

            </div>
        </section>
    )
} ;

export default Info;