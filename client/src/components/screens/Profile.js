import React from 'react'

export default function Profile() {
    return (
        <div style={{maxWidth:'550px',margin:'0px auto'}}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0px',borderBottom: '1px solid grey' }}>
                <div>
                    <img alt="profileImg" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{ width: "160px", height: "160px", borderRadius: "80px", }}></img>
                </div>
                <div>
                    <h4>Alexis Glez</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '108%' }}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>

                </div>
            </div>
        <div className="gallery">
        <img className="item" alt="second" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="second" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="second" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="second" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="second" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <img className="item" alt="second" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        </div>
    )
}
