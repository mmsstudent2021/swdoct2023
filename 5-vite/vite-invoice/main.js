import Swal from "sweetalert2";
import toast from 'solid-toast';
import "./input.css";
import Invoice from "./src/js/Invoice.js";

const invoice = new Invoice();
invoice.init();

// toast.success('Successfully saved!');

// Swal.fire("hello hello");
// Swal.fire({
//     title: "My alert box title",
//     text: "san kyi tar",
//     icon: "info",

// })

// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "question",
//   showCancelButton: true,
//   // confirmButtonColor: "#3085d6",
//   // cancelButtonColor: "#d33",
//   confirmButtonText: "Confirm",
// }).then((result) => {
//   if (result.isConfirmed) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// });
