import React from "react";

const Header = () => {
    const style = {
        'fontWeight': 700,
        'fontSize': '4.5rem',
        'lineHeight': '5rem',
    }

    const url = 'https://fabrx.co/muze/assets/img/templates/clinic-banner.svg'
    return ( 
        <React.Fragment>
            <div className="col-lg-10 m-auto text-center">
                <div className="my-3">
                    <h1 style={style}>Consult with the <br />right doctor for you</h1>
                    <h3 className="mb-0 fw-bolder">Search 14,600 doctors and find the perfect help.</h3>
                </div>
                <div>
                    <img src={url} alt="Header" />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Header;