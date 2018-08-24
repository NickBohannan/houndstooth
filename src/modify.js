import React, { Component } from 'react'

class Modify extends Component {
    render() {
        return (
            <div>
                <form method="POST" className="mainbody">
                    <input id="addname" name="name" />
                    <input id="adddescription" name="description" />
                    <input id="addprice" name="price" />
                    <input id="addwood" name="wood" />
                    <input type="submit" value="Submit" />
                </form>
            </div >
        )
    }
}

export { Modify }