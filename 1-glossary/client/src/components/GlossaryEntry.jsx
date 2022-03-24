import React from "react";
import EditForm from "./EditForm.jsx";

const GlossaryEntry = function({entry, handlers}) {
  return (
    <div>
      <span>{entry.word}</span>
        <div>
          <h5>Definition:</h5>
          <span>{entry.definition}</span>
        </div>
        <button onClick={handlers[0]}>edit</button>
        <button onClick={handlers[1]}>delete</button>
        <div>{
          entry.editView ? <EditForm handlers={handlers}/> : null
       }</div>
    </div>
  )
};

export default GlossaryEntry;