import React from 'react'


const TableHeader = () =>{
    return(
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
    )
}
const TableBody = (props) =>{
    const rows = props.characterData.map((rowItems, indx) =>{
        return(
            <tr key={indx}>
                <td>{rowItems.name}</td>
                <td>{rowItems.job}</td>
                <td>
                  <button onClick={() => props.removeCharacter(indx)}>DELETE ITEM</button>
                </td>
            </tr>
        )
    })
    return(
       <tbody>{rows}</tbody>
    )
}
const Table = (props) => {
   
  const {characterData, removeCharacter} = props

  return (
    <table>
      <TableHeader/>
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        
    </table>
  )
}


export default Table