import { useState } from "react";
import Star from "./Star";

const Card = () => {
  const [contact, setcontact] = useState({
    firstname: "John",
    lastname: "doe",
    phone: "9811213763",
    email: "shghdskg@gmail.com",
    isfavourite: false,
  });
  const [newnumber, setnewnumber] = useState("");
  const changenumber = (countrycode) => {
    // const updatedcontact = { ...contact, phone: newnumber };
    setcontact((prevcontact) => {
      return {
        ...prevcontact,
        phone: `+${countrycode}- ${newnumber}`,
      };
    });
    setnewnumber("");
  };
  const toggle = () => {
    setcontact((prevcontact) => ({
      ...prevcontact,
      isfavourite: !prevcontact.isfavourite,
    }));
  };
  let countrycode = 91;

  return (
    <div className="w-[176px] h-[340px] p-2 shadow-md m-2 mt-1 relative ">
      <img src="./myimg.svg" alt="" />

      <Star isfilled={contact.isfavourite} handleclick={toggle} />
      <div className="rating flex items-center p-1 ">
        <span>
          <img src="./star.svg" alt="" />
        </span>
        <span className="ml-1">{contact.firstname}</span>
        <span className="text-[#918E9B] text-[12px] m-1">
          {contact.lastname}
        </span>
      </div>
      <div className="text-sm p-1">
        <p>{contact.phone}</p>
        <p>
          <span className="font-semibold ">{contact.email}</span>
        </p>
        <input
          type="text"
          value={newnumber}
          onChange={(event) => {
            setnewnumber(event.target.value);
          }}
          placeholder="enter phone number"
          className="brdr"
        />
        <button className="brdr" onClick={() => changenumber(countrycode)}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Card;
