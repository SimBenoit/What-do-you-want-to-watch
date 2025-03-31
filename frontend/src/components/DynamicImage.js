import React from "react";

class DynamicImage extends React.Component{

    render(){
        return(
            <div>
                <img
                    src={this.props.link}
                    alt="Rotating"
                    className="borpa-logo"
                />
                <h5>ceci n'est pas un borpa</h5>
            </div>
        );
    }
}

export default DynamicImage;
