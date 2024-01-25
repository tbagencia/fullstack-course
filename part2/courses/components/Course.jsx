import Content from "./Content";

const Header = ({name}) => {
    return(
        <h1>{name}</h1>
    )
}

const Course = ({course}) => {
    return(
        <>
       <Header name={course.name} />
       <Content parts={course.parts} />
       </>
    )
}

export default Course