import {useState} from 'react'

function List( {contacts} ) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase()));
    })


  return (
    <div>

        <input 
        placeholder='Filter'
        value = {filterText}
        onChange = {(event) => setFilterText(event.target.value)} />

      <ul className='list' >
        {
            filtered.map((contact, index) => (
            <li key = {index} >
                <span> {contact.fullname} </span>
                <span> {contact.phone_number} </span>
            </li>
            ))}
      </ul>

      <p> Total Contacts ({filtered.length}) </p>

    </div>
  )
}

export default List