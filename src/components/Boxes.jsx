// import { useState } from "react";
// import boxesdata from "../assets/boxes";
// import PropTypes from "prop-types";
// import Smallbox from "./Smallbox";

import { useState } from "react";

const Boxes = () => {
  // const [boxes, setboxes] = useState(boxesdata);
  // console.log(boxes);

  // first way to do this
  // const toggle = (id) => {
  //   setboxes((prev) => {
  //     const newsquare = [];
  //     for (let i = 0; i < prev.length; i++) {
  //       const currsquare = prev[i];
  //       if (currsquare.id === id) {
  //         const updatesquare = {
  //           ...currsquare,
  //           on: !currsquare.on,
  //         };
  //         newsquare.push(updatesquare);
  //       } else {
  //         newsquare.push(currsquare);
  //       }
  //     }
  //     return newsquare;
  //   });

  // second way
  // const toggle = (id) => {
  //   setboxes((prev) => {
  //     return prev.map((box) => {
  //       return box.id === id ? { ...box, on: !box.on } : box;
  //     });
  //   });
  // };
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isfriendly: true,
    employment: "",
    favcolor: "",
  });
  // const [lastname, setlastname] = useState("chauhan");

  // 1st way

  // const handlechange = (event) => {
  //   // console.log(event.target.value);
  //   // setfirstname(event.target.value);
  //   // setlastname(event.target.value);
  //   setformdata((prev) => {
  //     return { ...prev, [event.target.name]: event.target.value };
  //   });
  // };

  // 2nd way

  const handlechange = (event) => {
    const { name, value, type, checked } = event.target;
    setformdata((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    // submittoapi(formdata)
    console.log(formdata);
  };

  // console.log(formdata.employment);
  // console.log(formdata.favcolor);
  // console.log(formdata.firstname);
  return (
    <div>
      {/* {boxes.map((box) => (
        <Smallbox
          on={box.on}
          // id={box.id}
          key={box.id}
          handleclick={() => toggle(box.id)}
        />
      ))} */}
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handlechange}
          value={formdata.firstname}
          className="brdr indent-3"
        />
        <input
          type="text"
          name="lastname"
          placeholder="last name"
          className="brdr indent-3"
          value={formdata.lastname}
          onChange={handlechange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="brdr indent-3"
          value={formdata.email}
          onChange={handlechange}
        />
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="10"
          className="brdr"
          placeholder="hello there it is my textarea"
          value={formdata.comments}
          onChange={handlechange}
        ></textarea>
        <br />
        <label htmlFor="isfriendly">Are you Friendly?</label>
        <input
          type="checkbox"
          onChange={handlechange}
          checked={formdata.isfriendly}
          id="isfriendly"
          name="isfriendly"
        />
        <br />
        <hr />
        <label htmlFor="">Current employment status</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="unemployed"
          value="unemployed"
          onChange={handlechange}
          checked={formdata.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          onChange={handlechange}
          name="employment"
          id="parttime"
          value="parttime"
          checked={formdata.employment === "parttime"}
        />
        <label htmlFor="parttime">Part-time</label>
        <br />
        <input
          type="radio"
          onChange={handlechange}
          name="employment"
          id="fulltime"
          value="fulltime"
          checked={formdata.employment === "fulltime"}
        />
        <label htmlFor="fulltime">Full-time</label>
        <hr />
        <label htmlFor="favcolor">what is your favourite colour</label>
        <br />
        <select
          id="favcolor"
          name="favcolor"
          value={formdata.favcolor}
          className="brdr"
          onChange={handlechange}
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="orange">orange</option>
          <option value="pink">pink</option>
          <option value="purple">purple</option>
        </select>
        <br />
        <hr />
        <button type="submit" className="brdr">
          send
        </button>
      </form>
    </div>
  );
};

// Boxes.propTypes = {
//   darkmode: PropTypes.bool.isRequired,
// };
export default Boxes;
