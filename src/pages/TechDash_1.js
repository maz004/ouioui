import React from "react";
import adminLayout from "../hoc/adminLayout"

class TechDash_1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                <iframe title="HomePage" width="1400" height="670" src="https://app.powerbi.com/reportEmbed?reportId=36252ab1-1517-4fdb-9bb7-f1d908e99103&autoAuth=true&ctid=3dce8bf6-d374-4bbf-92c0-aafa67adb68e" frameborder="0" allowFullScreen="true"></iframe>        </>
    }
}

export default adminLayout(TechDash_1);