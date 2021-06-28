import React, {useState} from 'react'
import './BookResult.css';
import Modal from './Modal';

function BookResult({res}) {

    const [modalActive, setModalActive] = useState(false)
    const [modalContent, setModalContent] = useState("")

    return (
        <div className="result">
            {res.map((elem, idx) => {
                 return <div className="book" key={idx}>
                            <div id="cover" onClick={() => {setModalActive(true); setModalContent(JSON.stringify(elem))}}>
                                <img src={`http://covers.openlibrary.org/b/id/${elem.cover_i}-M.jpg`} alt="null" width="200px" height="310px"></img>
                            </div>
                            <div id="title">
                                {elem.title}
                            </div>
                            <div id="description">
                                {`Author: ${elem.author_name}`}
                            </div>
                        </div>
            })}
            <Modal active={modalActive} setActive={setModalActive} content={modalContent} setContent={setModalContent}>

            </Modal>
        </div>
    )
}

export default BookResult; 