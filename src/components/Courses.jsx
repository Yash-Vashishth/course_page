import Card from './Card.jsx';
import img from '../assets/apphoto.jpg';
const courses = [
  {
    name: "Applied Maths",
    image: img ,
    price: "Rs. 300",
    coursetype: "Beginner"
    },
   {
    name: "Applied Physics",
    image: "/assets/ap_photo.jpeg",
    price: "Rs. 499",
    coursetype: "Intermediate"
    },
   {
    name: "Applied Chemistry",
    image: "/assets/ap_photo.jeg",
    price: "Rs. 300",
    coursetype: "Beginner"
    },
   {
    name: "Programming in C",
    image: "../assets/ap_photo.jpg",
    price: "Rs. 699",
    coursetype: "Advanced"
   },
]



function Courses() {
    return (
    <div className="flex gap-14 flex-wrap justify-center mt-20">
      {courses.map((card, idx) => (
        <Card
          key={idx}
          name={card.name}
          image={card.image}
          price={card.price}
          coursetype={card.coursetype}
        />
      ))}
    </div>
  );
}



export default Courses;
