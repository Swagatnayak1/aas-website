

// 'use client';
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import cn from "clsx";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useDispatch, useSelector } from 'react-redux';  // Import useDispatch and useSelector
// import { useState } from 'react';
// import { createContact } from '@/redux/slices/contactSlice'; // Import the action
// import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

// export function ContactUsForm({ className, ...props }) {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     contactType: '',
//     message: '',
//     attachment: null,  // Rename this key to match the backend input name
//   });

//   // To handle form input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'file' ? files[0] : value,  // Handle files properly
//     }));
//   };

//   // Submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();  // Create a FormData object for file upload

//     // Append form fields to the FormData object
//     form.append('firstName', formData.firstName);
//     form.append('lastName', formData.lastName);
//     form.append('email', formData.email);
//     form.append('contactType', formData.contactType);
//     form.append('message', formData.message);

//     // Only append the file if it exists
//     if (formData.attachment) {
//       form.append('attachment', formData.attachment);
//     }

//     try {
//       // Dispatch the action to send the contact data to the backend
//       await dispatch(createContact(form));
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//     }
//   };

//   // Get loading and error states from the Redux store
//   const { loading, error } = useSelector((state) => state.contact);

//   return (
//     <div className={cn("flex flex-col gap-6 min-h-[100vh]", className)} {...props}>
//       <CardHeader className="text-left">
//         <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//           Connect with us
//         </CardTitle>
//         <CardDescription className="text-1xl lg:text-2xl">
//           We’re so glad you reached out! Connecting you to our experts on the ground is a priority for us.
//         </CardDescription>
//         <CardDescription className="text-1xl lg:text-2xl">
//           Tell us which region you’re looking to find out more about, and we’ll put you in touch.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-6">
//             {/* First Name Field */}
//             <div className="grid gap-2">
//               <Input
//                 id="first-name"
//                 name="firstName"
//                 type="text"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Last Name Field */}
//             <div className="grid gap-2">
//               <Input
//                 id="last-name"
//                 name="lastName"
//                 type="text"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div className="grid gap-2">
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="contact@aasint.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Reason Dropdown */}
//             <div className="grid gap-2">
//               <Select
//                 name="contactType"
//                 value={formData.contactType}
//                 onValueChange={(value) => handleChange({ target: { name: 'contactType', value } })}  // Correct way to update formData
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="What can we help you with?" />
//                 </SelectTrigger>
//                 <SelectContent className="absolute z-10">
//                   <SelectGroup >
//                     <SelectLabel>What can we help you with?</SelectLabel>
//                     <SelectItem value="collaboration">Collaboration</SelectItem>
//                     <SelectItem value="career">Career</SelectItem>
//                     <SelectItem value="data & privacy">Data and Privacy Request</SelectItem>
//                     <SelectItem value="services">Services</SelectItem>
//                     <SelectItem value="media inquiries">Media Inquiries</SelectItem>
//                     <SelectItem value="sponsorship">Sponsorship</SelectItem>
//                     <SelectItem value="feedback">Website Feedback</SelectItem>
//                     <SelectItem value="partners">Alliance & Partners</SelectItem>
//                     <SelectItem value="none">None of the Above</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Message Field */}
//             <div className="grid gap-2">
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Write your message here"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//               />
//             </div>

//             {/* Attachment Field */}
//             <div className="grid w-full gap-1.5">
//               <Input
//                 id="picture"
//                 name="attachment"
//                 className="flex items-center"
//                 type="file"
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Checkbox */}
//             <div className="flex items-center justify-center gap-2">
//               <Checkbox id="agree" required />
//               <Label htmlFor="agree" className="text-sm">
//                 I agree to the{" "}
//                 <a href="#" className="text-blue-500">
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-500">
//                   Privacy Policy
//                 </a>
//               </Label>
//             </div>

//             {/* Submit Button */}
//             <div className="flex items-center justify-center gap-2">
//               <Button type="submit" className="w-[200px]" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit"}
//               </Button>
//             </div>
//           </div>
//         </form>

//         {/* Show error message if any */}
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </CardContent>
//     </div>
//   );
// }
'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import cn from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createContact } from '@/redux/slices/contactSlice';
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
 
export function ContactUsForm({ className, ...props }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactType: '',
    message: '',
    attachment: null,
  });
 
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('firstName', formData.firstName);
    form.append('lastName', formData.lastName);
    form.append('email', formData.email);
    form.append('contactType', formData.contactType);
    form.append('message', formData.message);
    if (formData.attachment) {
      form.append('attachment', formData.attachment);
    }
    try {
      await dispatch(createContact(form));
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
 
  const { loading, error } = useSelector((state) => state.contact);
 
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Contact Form */}
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg order-2 lg:order-1">
          <CardHeader className="px-0">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl">
              Connect with us
            </CardTitle>
            <CardDescription className="text-lg">
              We're so glad you reached out! Connecting you to our experts on the ground is a priority for us.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4">
                {/* First Name Field */}
                <Input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
 
                {/* Last Name Field */}
                <Input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
 
                {/* Email Field */}
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contact@aasint.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
 
                {/* Reason Dropdown */}
                <Select
                  name="contactType"
                  value={formData.contactType}
                  onValueChange={(value) => handleChange({ target: { name: 'contactType', value } })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>What can we help you with?</SelectLabel>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="data & privacy">Data and Privacy Request</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="media inquiries">Media Inquiries</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="feedback">Website Feedback</SelectItem>
                      <SelectItem value="partners">Alliance & Partners</SelectItem>
                      <SelectItem value="none">None of the Above</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
 
                {/* Message Field */}
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>
 
                {/* Attachment Field */}
                <div>
                  <Input
                    id="picture"
                    name="attachment"
                    type="file"
                    onChange={handleChange}
                  />
                </div>
 
                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <Checkbox id="agree" required />
                  <Label htmlFor="agree" className="text-sm">
                    I agree to the{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
 
                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
 
        {/* Right Side - Contact Information */}
        <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-lg order-1 lg:order-2">
          <div className="space-y-6 md:space-y-8">
            {/* Company Name */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">AAS Information Technology</h2>
            </div>
 
            {/* Addresses */}
            <div className="space-y-4 md:space-y-6">
              {/* Corporate Office */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1 text-sm md:text-base">CORPORATE OFFICE</strong>
                  <p className="text-gray-600 text-sm md:text-base">
                    Plot No. 52, Bapuji Nagar, Unit-1 Main Street,
                    Forest Park, Bhubaneswar, Khordha, Odisha, India 751009
                  </p>
                </div>
              </div>
 
              {/* Registered Office */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1 text-sm md:text-base">REGISTERED OFFICE</strong>
                  <p className="text-gray-600 text-sm md:text-base">
                    Sanara Chhaka, Jagatsinghpur,
                    Odisha, India, 754104
                  </p>
                </div>
              </div>
 
              {/* Branch Office */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1 text-sm md:text-base">BRANCH OFFICE</strong>
                  <p className="text-gray-600 text-sm md:text-base">
                    5678 Trade St,
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
 
            {/* Contact Details */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">Connect with us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500 transition-colors"
                     onClick={() => window.location.href = 'tel:+911234567890'}>
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-sm md:text-base">+91 12345 67890</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:text-green-500 transition-colors"
                     onClick={() => window.location.href = 'mailto:info@aasit.com'}>
                  <Mail className="w-5 h-5 text-green-500" />
                  <span className="text-sm md:text-base">contact@aasint.com</span>
                </div>
              </div>
            </div>
 
            {/* Social Media */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="https://facebook.com" target="_blank" className="hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6 text-blue-400" />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
 