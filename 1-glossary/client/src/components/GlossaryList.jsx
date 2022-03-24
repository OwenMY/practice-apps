import React from "react"
import GlossaryEntry from './GlossaryEntry.jsx'


const GlossaryList = function({list, handlers}) {
  return (
    <div>
      <h4>Glossary</h4>
      <div>{
        list.map((entry, key) => <GlossaryEntry entry={entry} key={key} handlers={handlers}/>)
     }</div>
    </div>
  )
};


export default GlossaryList;