import React, { useState } from "react";

const Home = () => {
  const [input, setinput] = useState("");
  const [listdata, setlistdata] = useState([]);

  const Handlebtn = () => {
    setlistdata((listdata) => {
      const update = [...listdata, input];
      console.log(update);
      setinput("");
      return update;
    });
  };

  const btnHandle = (index) => {
    const updateddata = listdata.filter((ele, id) => {
      return index != id;
    });
    setlistdata(updateddata);
  };

  const RemoveAll = () => {
    setlistdata([]);
  };

  return (
    <>
      <div className="container">
        <h1>TODOLIST</h1>
        <div>
          <input
            type="text"
            value={input}
            placeholder="search"
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={Handlebtn}>Add</button>
        </div>

        <h2>List Department</h2>
        {listdata.length >= 1 && (
          <button className="btn" onClick={RemoveAll}>
            Remove All
          </button>
        )}

        {listdata != [] &&
          listdata.map((item, index) => {
            return (
              <>
                <div className="card" key={index}>
                  <div>
                    <span>{item}</span>
                    <button className="btn" onClick={() => btnHandle(index)}>
                      delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Home;
