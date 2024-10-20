import React from 'react'

function Model({ header, body, footer, handlePopup }) {
    return (
        <div className="model-container">
            <div className="header">
                <span className='cross-icon-container' onClick={handlePopup}>&times;</span>
                {
                    header ? header : <h2>Header Content</h2>
                }
            </div>
            <div className="body">
                {
                    body ? body : <p>Body content</p>
                }
            </div>
            <div className="footer">
                {
                    footer ? footer : <h2>Footer Content </h2>
                }
            </div>
        </div>
    )
}

export default Model