import emailjs from "@emailjs/browser";

 export const sendEnquiryEmail = async (formData) => {
  return emailjs.send(
    "service_wz4bpwu",      
    "template_ko1uvp9",     
    {
      fullname: formData.fullname,
      phone: formData.phone,
      email: formData.email,
      enqueryfor: formData.enqueryfor,
      message: formData.message,
    },
    "_ibnTlqoGnefjbb8y"       
  );
};