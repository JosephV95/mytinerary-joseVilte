import { Button } from "react-bootstrap";
import "./EditDeleteItinerary.css"

export default function EditDeleteItinerary() {
  return (
    <div className="col-9 col-md-1 ps-1 pe-0">
      <div className="w-100 d-flex justify-content-center flex-md-column " >
        <Button variant="outline-warning" className="mb-2 buttonIti fw-bold border-2 text-xl-start"><i className="fa-solid fa-pen-to-square"></i> Edit</Button>
        <Button variant="outline-danger" className="mb-2 buttonIti delete fw-bold border-2 text-xl-start"><i className="fa-solid fa-delete-left"></i> Delete</Button>
      </div>
    </div>
  )
}
