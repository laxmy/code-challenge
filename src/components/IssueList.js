    import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    import { Link, Route, Switch , useRouteMatch} from 'react-router-dom'

    import IssueDetail from './IssueDetail'
    import IssueItem from './IssueItem'

    import styles from './Issues.module.css'

    const fetchURL = 'https://api.github.com/repos/facebook/react/issues';
    const IssuesList = props =>{

        let { path, url } = useRouteMatch();

        const[issues, setIssues] = useState({list:[], loading: false, error: false})

        //const [searchInput, setSearchInput] =useState({''})

        const[ pageState, setPageState] = useState({ 
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0,
            pageCpunt: 0})

        useEffect(()=>{
            setIssues(currState => ({...currState, loading: true}))
            axios.get(fetchURL)
            .then(res=> setIssues({list: res.data, loading: false, error: false}),
            err=>setIssues(currState => ({...currState, error: true})))
        },[])

        console.log(issues.list)

        if(issues.error)
            return(<h1> Some error in fetching data. Please refresh</h1>)
        else if(issues.loading)
            return(<h1> Loading ...</h1>)
        else{
            let issueLinks = (<ul className={styles.issueList}>
                {issues.list && issues.list.length >0 && issues.list.map(issue => 
                {
                return  (
                    <li key = {issue.id} className={styles.issueListItem}>
                        <Link to={`${url}/${issue.number}`} className={styles.issueLink}>
                            <IssueItem  item ={issue}/>
                        </Link>
                    </li>
                    )
                })}
            </ul>) 
            
        return(
            <div>
            <Switch>
            <Route path="/Issues" exact render={()=> issueLinks} />
            <Route path={`${url}/:issueId`}>
                <IssueDetail />
            </Route>
            </Switch>
            </div>)
        }
    }

    export default IssuesList