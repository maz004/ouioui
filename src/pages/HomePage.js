import React from "react";
import adminLayout from "../hoc/adminLayout"

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <iframe title="HomePage" width="1400" height="670" src="https://app.powerbi.com/reportEmbed?reportId=971979e2-b644-48d1-b54f-aef05d18adb5&autoAuth=true&ctid=3dce8bf6-d374-4bbf-92c0-aafa67adb68e" frameborder="0" allowFullScreen="true"></iframe>
        </>
    }
}

export default adminLayout(HomePage);