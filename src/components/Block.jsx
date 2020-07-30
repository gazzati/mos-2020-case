import React from "react";

const Block = () => {
    return(
        <div className="container">
            <div className="box-shadow section-small">
                <div className="row">
                    <div className="col-md-4">
                        <div className="custom-content">
                            <h3>Бесплатная доставка</h3>
                            <p>По всей России</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="custom-content border-left">
                            <h3>Скидки</h3>
                            <p>Регулярные распродажи</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="custom-content border-left">
                            <h3>Гарантия</h3>
                            <p>Возврат в течение 14 дней</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block
