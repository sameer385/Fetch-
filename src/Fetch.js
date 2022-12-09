import React, { Component } from 'react'

class Fetch extends Component {
    constructor() {
        super()
        this.state = {
            item: [],
            DataisLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json)
            .then((json) => {
                this.setState({
                    item: json,
                    DataisLoaded: true
                })
            })
    }

    render() {
        const { DataisLoaded, item } = this.state
        if (!DataisLoaded) return <h1>Please wait some time</h1>

        return (
            <>
                <h1>fetch data from api </h1>
                {
                    item.map((item) => (
                        <ol key={item.id} >
                            User_Name: {item.username},
                            Full_Name: {item.name},
                            User_Email: {item.email}
                        </ol>
                    ))
                }
            </>
        )
    }
}

export default Fetch;