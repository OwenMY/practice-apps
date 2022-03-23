import React from "react"
import GlossaryEntry from './GlossaryEntry'


const GlossaryList = function({list}) {
  return (
    <div>
      <h4>Glossary</h4>
      <div>{
        list.map((entry, key) => <GlossaryEntry entry={entry} key={key}/>)
     }</div>
    </div>
  )
};


export default GlossaryList;