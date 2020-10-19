        import React ,{useState, useEffect} from 'react'
        import { useParams } from 'react-router-dom'
        import axios from 'axios'

        import styles from './Issues.module.css'

        const fetchURLPrefix ="https://api.github.com/repos/facebook/react/issues"

        const IssueDetail =()=>{
            let {issueId } = useParams();

            const[issueDetail, setIssueDetail] = useState({details:{}, loading: false, error: false})

            useEffect(()=>{
                setIssueDetail(currState => ({...currState, loading: true}))
                axios.get(`${fetchURLPrefix}/${issueId}`)
                .then(res=> setIssueDetail({details: res.data, loading: false, error: false}),
                err=>setIssueDetail(currState => ({...currState, error: true})))
            },[issueId])

            let { details } = issueDetail
            console.log(details)
            return(
                <div>
                    <h1>Title: {details.title} </h1>
                    <h3> State: {details.state}</h3>
                    <h6> By: {details.user && details.user.login} </h6>

                    {details.labels && details.labels.map(label => (
                    <div key={label.id} 
                        className={styles.label} 
                        style={{backgroundColor: `#${label.color}`}}> 
                            {label.name} 
                    </div>))} 
                    
                    <div  className={styles.issueItemContent}
                        dangerouslySetInnerHTML={{__html: details.body}}>
                        
                    </div>
                </div>
            
            )
        }

        export default IssueDetail