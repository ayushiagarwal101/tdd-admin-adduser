import React, {Component} from 'react';
import TableStructure from './TableStructure';
export default class Table extends Component {

    render() {
        return (<div>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Username</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
            </table>
            {this.props.data.map((post,index)  =>
                <TableStructure key= {index} post = {post} />)}
        </div> );
    }
}
