import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import '../Portal/container.css'
import useResources from '../hooks/useResources'

function Subjects(props) {
  const [save, setSave] = useState([])
  const { sendRequest } = useResources()

  const selectSubject = (id) => {
    const selected = [...save]
    const subjectIndex = save.findIndex((subject) => subject.id === id)
    if (subjectIndex >= 0) {
      selected.splice(subjectIndex, 1)
    } else {
      selected.push({ id })
    }
    setSave(selected)
  }

  const subjectsToShow = props.props.subjects.map((data) => (
    <div
      className='listcontent'
      key={data.id}
      onClick={() => {
        selectSubject(data.id)
      }}
    >
      <h3>{data.name}</h3>
      <FontAwesomeIcon
        className={`${
          save.find((item) => item.id === data.id) ? 'selected' : 'none'
        }`}
        id={data.id}
        icon={faCheckCircle}
      />
    </div>
  ))

  const handleRequest = (event) => {
    event.preventDefault()
    sendRequest(save)
  }

  return (
    <form onSubmit={(event) => handleRequest(event)}>
      <div className='container'>
        <div className='listContainer'>{subjectsToShow}</div>
        <button type='submit'>Send</button>
      </div>
    </form>
  )
}

export default Subjects
