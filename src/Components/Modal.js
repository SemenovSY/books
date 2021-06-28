import React from 'react'
import "./Modal.css"

function Modal({active, setActive, content, setContent}) {

    let currentBookInfo = null;

    if (content) {
        currentBookInfo = JSON.parse(content);
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_result active" : "modal_result"} onClick={(e) => e.stopPropagation()}>
                {currentBookInfo ? <div className="book_info">
                                        <div id="currentBook_title">
                                            {currentBookInfo.title}
                                        </div>
                                        {currentBookInfo.author_name ? 
                                        <div id="currentBook_author">
                                            {`Author: ${currentBookInfo.author_name}`}
                                        </div>:null}
                                        {currentBookInfo.publish_date[0] ?
                                        <div id="currentBook_publishDate">
                                            {`Publish Date: ${currentBookInfo.publish_date[0]}`}
                                        </div>:null}
                                        {currentBookInfo.publisher[0] ?  
                                        <div id="currentBook_publisher">
                                            {`Publisher: ${currentBookInfo.publisher[0]}`}
                                        </div> : null}
                                        {currentBookInfo.isbn[0] ? 
                                        <div id="currentBook_isbn">
                                            {`ISBN: ${currentBookInfo.isbn[0]}`}
                                        </div> : null}
                                        <div id="currentBook_cover">
                                            <img src={`http://covers.openlibrary.org/b/id/${currentBookInfo.cover_i}-L.jpg`} alt="null" width="100%" height="100%"></img>
                                        </div>                       
                                    </div> : null}
            </div>
        </div>
    )
}

export default Modal