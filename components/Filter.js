import React, { useState } from 'react'
import styles from '../styles/Filter.module.css'

const Filter = ({ onChange, options }) => {
  const [expandState, setExpandState] = useState(false)
  const [filter, setFilter] = useState([])

  const onClick = (e) => {
    var newFilter = null
    if (e.target.checked) {
      newFilter = filter.concat(e.target.id)
      e.target.nextSibling.style.color = 'white'
      e.target.nextSibling.style.textDecoration = 'underline'
    } else {
      newFilter = filter.filter((elem) => {
        return elem != e.target.id
      })
      e.target.nextSibling.style.color = 'inherit'
      e.target.nextSibling.style.textDecoration = 'inherit'
    }
    setFilter(newFilter)
    onChange(newFilter)
  }

  const toggleExpand = (e) => {
    setExpandState(!expandState)
  }

  var expandStyle =
    expandState == true ? { flexWrap: 'wrap' } : { flexWrap: 'nowrap' }
  var arrowClass = expandState == false ? styles.arrowDown : styles.arrowUp

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterSelector} style={expandStyle}>
        {options.map((option, index) => (
          <div className={styles.subject} key={option.value}>
            <input hidden id={option.value} type="checkbox" onClick={onClick} />
            <label htmlFor={option.value}>{option.label}</label>
            {index < options.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </div>
        ))}
      </div>
      <div className={arrowClass} onClick={toggleExpand}>
        <div></div>
      </div>
    </div>
  )
}

export default Filter
