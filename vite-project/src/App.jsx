import Demo from "./Demo";
import Header from "./Component/header";
import Footer from "./Component/Footer";
import { useRef } from "react";

const App = () => {
  let marks = 82;
  let array = [2, 3, 4, 5, 66, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19];
  let course_name = [
    { name: "bangla", price: "$80" },
    { name: "English", price: "$70" },
    { name: "Math", price: "$100" },
  ];

  const StatusCheck = (Status) => {
    if (Status == true) {
      return <button>Login</button>;
    } else {
      return <button>Sign up</button>;
    }
  };

  const objective = {
    name: "shafin",
    id: "20-43736-2",
    university: "AIUB ",
  };

  let status = true;

  const ButtonClick = () => {
    alert("Please click the button");
  };

  let useReffer = useRef();

  const UseButton = () => {
    useReffer.current.innerHTML = " hello world ";
  };

  let imgChange = useRef();

  const ImageChange = () => {
    imgChange.current.src = "https://placehold.co/600x400?text=Hello\nWorld";
  };
  // ref attribute
  //image change ref

  let secend_img = useRef();
  //actions
  const SecendImg = () => {
    imgChange.current.src = "https://placehold.co/600x400/000000/FFF";
    imgChange.current.setAttribute("height", "300px");
    imgChange.current.setAttribute("width", "300px");
  };

  let first_name = useRef();
  let last_name = useRef();
  const name = () => {
    let f_name = first_name.current.value;
    let l_name = last_name.current.value;
    alert(f_name + " " + l_name);
  };
  let chgclr = useRef();
  const chg = () => {
    chgclr.current.classList.remove("text-success");
    chgclr.current.classList.add("text-danger");
  };

  return (
    <>
      <div>
        <h1 ref={chgclr} class="text-success">
          This is Summer page
        </h1>
        <br />
        <button onClick={chg} type="submit">
          Click
        </button>
      </div>

      <h1 ref={useReffer}></h1>
      <button type="submit" onClick={UseButton}>
        Button
      </button>
      <br />
      <br />
      <div>
        <input ref={first_name} type="text" placeholder="first name" />
        <br />
        <br />
        <input ref={last_name} type="text" placeholder="last name" />
        <br />
        <br />
        <button onClick={name} type="submit">
          Click{" "}
        </button>
      </div>

      <Header
        name="E-shop"
        description="this is e-commerce site where we can buy product for your need "
        BtClick={ButtonClick}
      ></Header>
      <h1> Hello world ! </h1>
      <div>
        <Demo></Demo>
      </div>
      <div>{marks > 80 ? <h1> Good Result </h1> : <h1> Bad Result </h1>}</div>
      {
        // Jsx terney operator ? if : else
      }
      <h1> this is map </h1>
      {
        <ul>
          {array.map((array) => (
            <li>{array}</li>
          ))}
        </ul>
      }

      {
        <ul>
          {course_name.map((course) => (
            <li>
              Course Name : {course.name} & Course Price {course.price}
            </li>
          ))}
        </ul>
      }

      <h1>Status check </h1>
      {StatusCheck(false)}
      <h1>Terney Operator </h1>

      <div>
        {status == false ? <button>Sign up</button> : <button>Log In</button>}
      </div>

      <div>
        <img ref={imgChange} src="https://placehold.co/400" alt="" />
        <br />
        <button onClick={ImageChange}>Click</button>
      </div>

      <div>
        <img
          ref={secend_img}
          src="https://placehold.co/600x400@2x.png"
          alt=""
        />
        <br />
        <button onClick={SecendImg}>Click</button>
      </div>

      <div>
        <h1>
          IIF = immediately invoked function = create hower shate shate execute
          hoye jai
        </h1>

        {(() => {
          if (status == true) {
            return <button type="submit">Log in</button>;
          } else {
            return <button type="submit">Log out</button>;
          }
        })()}
      </div>

      <Footer item={objective}></Footer>
    </>
  );
};

export default App;
