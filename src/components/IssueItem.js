
    import React,{ Fragment } from 'react'


    const IssueItem = ({item})=>{

        return(
        <Fragment>
            <h1>{item.title}</h1>
            <div className="some">
                <h6> Issue no: {item.number} </h6>
                <h6> Date posted:{item['created_at'].toString()} </h6>
                <p> Posted by:{item.user.login}</p>
            </div>
        </Fragment>
        
    )
    }

    export default IssueItem