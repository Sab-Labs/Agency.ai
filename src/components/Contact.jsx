import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "motion/react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "78181fac-e210-4614-afe3-7914ecc457c4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Save to Firebase Firestore
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        await addDoc(collection(db, "contacts"), {
          name,
          email,
          message,
          submittedAt: serverTimestamp(),
        });

        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact-us"
      className="scroll-mt-20 flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-24 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft
digital solutions that move your business forward."
      />
      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full mx-auto "
      >
        <div>
          <p className="mb-2 text-sm font-medium">Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div
            className="flex pl-3 rounded-lg border border-gray-300
                    dark:border-gray-600"
          >
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full px-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.93, opacity: 0.85 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Submit
          <img src={assets.arrow_icon} />
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
