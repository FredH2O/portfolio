import axios from "axios";

const sendEmail = async (formData) => {
  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: formData,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error sending email.", error.response || error);
    throw new Error("Failed to send email.");
  }
};

export default sendEmail;
