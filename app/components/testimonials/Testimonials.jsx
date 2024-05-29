// import { useState, useEffect } from 'react';

// const testimonials = [
//   { id: 1, content: 'Testimonial 1', author: 'Author 1' },
//   { id: 2, content: 'Testimonial 2', author: 'Author 2' },
//   { id: 3, content: 'Testimonial 3', author: 'Author 3' },
//   { id: 4, content: 'Testimonial 4', author: 'Author 4' },
//   { id: 5, content: 'Testimonial 5', author: 'Author 5' },
// ];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     document.documentElement.style.setProperty('--current-index', current);
//   }, [current]);

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const getVisibleTestimonials = () => {
//     const total = testimonials.length;
//     const prevIndex = (current - 1 + total) % total;
//     const nextIndex = (current + 1) % total;
//     return [
//       testimonials[prevIndex],
//       testimonials[current],
//       testimonials[nextIndex],
//     ];
//   };

//   return (
//     <div className="carousel-container relative flex justify-center items-center">
//       <button onClick={handlePrev} className="absolute left-0 p-2 bg-red-500 text-white">Left</button>
//       <div className="carousel-inner flex space-x-4">
//         {getVisibleTestimonials().map((testimonial, index) => (
//           <div
//             key={testimonial.id}
//             className={`carousel-item p-4 border rounded-lg ${index === 1 ? 'center-item' : 'side-item'}`}
//             style={{
//               backgroundColor: '#FFFEEF5',
//             }}
//           >
//             <p>{testimonial.content}</p>
//             <p className="text-right">- {testimonial.author}</p>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleNext} className="absolute right-0 p-2 bg-red-500 text-white">Right</button>
//     </div>
//   );
// };

// export default Carousel;
