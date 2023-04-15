import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ClgStudyMaterial.css";
import demo from "./demo.pdf";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClgStudyMaterial = () => {

  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(0);
  const [card3, setCard3] = useState(0);
  const [card4, setCard4] = useState(0);
  const [card5, setCard5] = useState(0);
  const [card6, setCard6] = useState(0);
  const [card7, setCard7] = useState(0);
  const [card8, setCard8] = useState(0);
  
  const navigate = useNavigate();
 
  return (
    <div className="clg-study-material">
      {card1 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
      <div className="card-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VrMctHmISWpk1zplsxBPbx9DlZss6yvFFQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Semester 1</Card.Title>
            <Card.Text>
              Study Materials for Semester 1 is available Here.
            </Card.Text>
            <button
              variant="primary"
              onClick={() => navigate("study-material-page1")}
            >
              Click Here
            </button>
          </Card.Body>
        </Card>
      </div>

      {card1 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
      <div className="card-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VrMctHmISWpk1zplsxBPbx9DlZss6yvFFQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Semester 2</Card.Title>
            <Card.Text>
              Study Materials for Semester 2 is available Here.
            </Card.Text>
            <button
              variant="primary"
              onClick={() => navigate("study-material-page1")}
            >
              Click Here
            </button>
          </Card.Body>
        </Card>
      </div>

      {card3 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
      <div className="card-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VrMctHmISWpk1zplsxBPbx9DlZss6yvFFQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Semester 3</Card.Title>
            <Card.Text>
              Previous Years Papers for Semester one are available Here.
            </Card.Text>
            <button variant="primary" onClick={() => setCard3(1)}>
              Get Papers
            </button>
          </Card.Body>
        </Card>
      </div>

      {card4 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
      <div className="card-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VrMctHmISWpk1zplsxBPbx9DlZss6yvFFQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Semester 4</Card.Title>
            <Card.Text>
              Previous Years Papers for Semester one are available Here.
            </Card.Text>
            <button variant="primary" onClick={() => setCard4(1)}>
              Get Papers
            </button>
          </Card.Body>
        </Card>
      </div>

      {card5 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
      <div className="card-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VrMctHmISWpk1zplsxBPbx9DlZss6yvFFQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Semester 5</Card.Title>
            <Card.Text>
              Previous Years Papers for Semester one are available Here.
            </Card.Text>
            <button variant="primary" onClick={() => setCard5(1)}>
              Get Papers
            </button>
          </Card.Body>
        </Card>
      </div>

      {card6 ? <iframe src={demo} width="100%" height="500px"></iframe> : null}
      <div className="card-6">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VrMctHmISWpk1zplsxBPbx9DlZss6yvFFQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Semester 6</Card.Title>
            <Card.Text>
              Previous Years Papers for Semester one are available Here.
            </Card.Text>
            <button variant="primary" onClick={() => setCard6(1)}>
              Get Papers
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ClgStudyMaterial;
