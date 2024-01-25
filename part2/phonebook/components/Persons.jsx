import Person from "./Person"

const Persons = ({persons,filter}) => {
    //console.log(filter);
    const arrPersons = (filter != "") 
    ? persons.filter(person => person.name.toLowerCase().search(filter.toLowerCase()) >= 0)
    : persons

    //console.log('filter by: ', filter, ' / results: ' , arrPersons);
    return(
        <div>
        <h2>Numbers</h2>
        {arrPersons.map((person,id) => <Person key={id} person={person} />)}
        </div>
    )
}

export default Persons
