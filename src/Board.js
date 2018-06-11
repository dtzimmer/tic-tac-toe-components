import React, {Component} from 'react';
import Ocomponent from './Ocomponent';
import Xcomponent from "./Xcomponent";

class Board extends Component {
    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <table>
                    <tr>
                        <td> </td>
                        <td className="vert"><Ocomponent/></td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="hori"> </td>
                        <td className="vert hori"><Xcomponent/></td>
                        <td className="hori"> </td>
                    </tr>
                    <tr>
                        <td><Ocomponent/></td>
                        <td className="vert"> </td>
                        <td> </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Board;