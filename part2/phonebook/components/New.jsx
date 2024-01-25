const New = (props) => {
  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={props.submit}>
        <div>
          name: <input value={props.name} onChange={props.namefn} />
        </div>
        <div>
          number: <input value={props.number} onChange={props.numberfn} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default New
