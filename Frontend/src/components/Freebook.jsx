import React from 'react'
import FileList from '../../public/list.json'

const Freebook = () => {
    const filterData = FileList.filter(item => item.category === 'free')
  return (
    <div>Freebook</div>
  )
}

export default Freebook