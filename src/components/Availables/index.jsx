import ModalButton from '../ModalButton'


const availableData = [{
    id: 1,
    image: "/icon1.svg",
    name: "Book N Play"
  },
  {
    id: 2,
    image: "/icon2.svg",
    name: "Membership"
  },
  {
    id: 3,
    image: "/icon3.svg",
    name: "Coaching"
  }]


const Availables =()=>{
    return(
        <div className="amenities">
          <h3>Availables</h3>
          <div className="available">
            {
              availableData.map((each) => (<ModalButton key={each.id} userData={each} />)
              )
            }
          </div>
        </div>
    )
}

export default Availables