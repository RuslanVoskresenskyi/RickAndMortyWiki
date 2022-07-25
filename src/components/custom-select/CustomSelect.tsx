import React from 'react'

import styles from './CustonSelect.module.scss'

interface FilterItemProps {
  labelName: string
  selectOptions: string[]
  defaultValue: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const CustomSelect: React.FC<FilterItemProps> = ({ labelName, selectOptions, defaultValue, onChange }) => {
  return (
    <div className={styles.filterItemContainer}>
      <label className={styles.filterItemTitle}>{labelName}</label>
      <select
        className={styles.filterItemSelect}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {selectOptions.map((value, i) => {
          return (
            <option
              className={styles.filterItemOption}
              key={i}
              value={value}
            >{value}</option>
          )
        })}
      </select>
    </div>
  )
}

export default CustomSelect