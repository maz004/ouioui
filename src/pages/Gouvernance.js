import React from "react";
import adminLayout from "../hoc/adminLayout"

class Gouvernance extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                <iframe title="HomePage" width="1400" height="670" src="https://app.powerbi.com/reportEmbed?reportId=601f53f9-ca85-4a3d-b80a-96e8f31d6547&autoAuth=true&ctid=3dce8bf6-d374-4bbf-92c0-aafa67adb68e" frameborder="0" allowFullScreen="true"></iframe>        </>
    }
}

export default adminLayout(Gouvernance);