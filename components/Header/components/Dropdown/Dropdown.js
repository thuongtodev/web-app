import React, { useReducer } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { reducer } from '../../../../utils/functions'
import styles from './styles.scss'

const Dropdown = ({ list = [] }) => {
  const initState = {
    listOpen: false,
    imgUrl: list[0].imgUrl,
  }

  const [state, setState] = useReducer(reducer, initState)

  const handleClickOutside = () => {
    setState({
      listOpen: false,
    })
  }

  const toggleList = () => {
    setState({ listOpen: !state.listOpen })
  }

  return (
    <div className={styles.ddWrapper}>
      <div className={styles.ddHeader} onClick={() => toggleList()}>
        <div className={styles.ddHeaderTitle}>
          <img src={state.imgUrl} alt="language" />
        </div>
        {state.listOpen ? (
          <FaAngleUp className={styles.angleDown} />
        ) : (
          <FaAngleDown className={styles.angleDown} />
        )}
      </div>
      {state.listOpen && (
        <ul className={styles.ddList}>
          {list.map(item => (
            <li className={styles.ddListItem} key={item.id}>
              <img src={item.imgUrl} alt="language" />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
