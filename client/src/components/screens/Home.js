import React from 'react'

export default function Home() {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Alexis Gonzalez</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:'red'}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Alexis Gonzalez</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:'red'}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
        </div>
    )
}
