import React, {Component} from 'react';

export default class TableStructure extends Component{

    render() {

        const post = this.props.post;
        return(
            <table>
                <tr>
                    <td>{post.firstname}</td>
                    <td>{post.lastname}</td>
                    <td>{post.username}</td>
                    <td>{post.title}</td>
                    <td>{post.status}</td>
                    <td><a href="#">Edit</a></td>
                </tr>
            </table>
        )
    }
}
