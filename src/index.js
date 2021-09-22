import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Smith" time="Today at 6 pm" blog= "This is good" avatar={faker.image.avatar()}/> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" time="Today at 4 pm" blog="I'm super impressed" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Flex" time="Today at 10 pm" blog="I love this blog" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h1>Warning</h1>
                    <p>This is getting hot!</p>
                </div>
            </ApprovalCard>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'))