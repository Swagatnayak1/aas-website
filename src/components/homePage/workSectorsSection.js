// "use client";
// import React from 'react'

// import Link from "next/link";

// const industries = [
//   {
//     title: "Hospitality",
//     href: "/industries/web3",
//     description:
//       "We help long-standing companies reshape and amplify their positions by implementing Web3 technologies. We also collaborate with emerging startups to launch innovative web3 products that make a splash in the market.",
//   },
//   {
//     title: "E-commerce",
//     href: "/industries/e-commerce",
//     description:
//       "Partnering with $10M+ revenue brands, we expertly scale and solve their business challenges, offering E-commerce website design & development.",
//   },
//   {
//     title: "Fashion",
//     href: "/industries/real-estate",
//     description:
//       "We holistically advocate for a convenient user experience and design digital real estate websites to convey the physical world. By creating user-friendly digital design, we refine the way people perceive your property business.",
//   },
//   {
//     title: "FinTech",
//     href: "/industries/fintech",
//     description:
//       "We design smart, in-demand financial solutions, delighting your audience with innovations in the finance sector. By putting end-users at the forefront and creating a high-end experience, we improve your business metrics.",
//   },
//   {
//     title: "AI & ML",
//     href: "/industries/ui-ux-design-for-ai-ml-products",
//     description:
//       "Designing digital experiences for AI and ML products, we focus on creating unique differentiators to set your product apart. Our expertise lies in developing intuitive UX while ensuring optimal AI model performance with minimal iterations.",
//   },
// ];

// const WorkSectorsSection = () => {
//   return (
//     // <div className='flex flex-col z-10 min-h-[100vh] py-8'>
    
//     //     <div className="container mx-auto px-4 ">
//     //         {/* Animated Line */}
//     //         <div
//     //             className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
//     //             style={{ transform: 'translate3d(0px, 0px, 0px)' }}
//     //         ></div>
    
//     //         {/* Heading Section */}
//     //         <h2 className="text-5xl font-semibold text-gray-800">Industries We Works</h2>
    
//     //         {/* Description Section */}
//     //         <p className="mt-4 text-lg text-gray-600">
//     //             Our industry-specific knowledge and digital product design expertise contribute to solving the
//     //             right problems, creating the right products, and designing the products right.
//     //         </p>

//     //         <div className="group relative  h-full">
//     //             industiest list
//     //         </div>
//     //     </div>
    
    
//     //     </div>
    
//     <div className='flex flex-col z-10 min-h-[100vh] py-8'>
//           <div className="container mx-auto px-4  flex flex-col gap-20">
//                 {/* Heading Section */}
//                 <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800">Industries We Works</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {industries.map((industry, index) => (
//                     <Link
//                         key={index}
//                         href={industry.href}
//                         aria-label={`${industry.title} Link`}
//                         className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//                     >
//                         <div className="flex items-center gap-4">
//                         <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
//                             <svg
//                             fill="none"
//                             viewBox="0 0 15 15"
//                             className="h-6 w-6"
//                             >
//                             <path
//                                 fill="currentColor"
//                                 fillRule="evenodd"
//                                 d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z"
//                                 clipRule="evenodd"
//                             ></path>
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-semibold">{industry.title}</h3>
//                         </div>
//                         <p className="mt-4 text-gray-600">{industry.description}</p>
//                     </Link>
//                     ))}
//                 </div>
//     </div>
   
//     </div>
//   )
// }

// export default WorkSectorsSection


'use client';
import { motion } from "framer-motion";
import { FaIndustry, FaHospital, FaGraduationCap, FaShoppingBag, FaPlane, FaLaptopCode } from 'react-icons/fa';
import { MdEngineering, MdBiotech } from 'react-icons/md';

const industries = [
  {
    icon: FaIndustry,
    title: "Manufacturing",
    description: "Smart manufacturing solutions with IoT integration and automation",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FaHospital,
    title: "Healthcare",
    description: "Digital health solutions and medical technology integration",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "E-learning platforms and educational technology solutions",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FaShoppingBag,
    title: "Retail",
    description: "E-commerce and omnichannel retail solutions",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FaPlane,
    title: "Aviation",
    description: "Aviation software and logistics management systems",
    color: "from-sky-500 to-sky-600"
  },
  {
    icon: MdEngineering,
    title: "Engineering",
    description: "CAD/CAM solutions and engineering software",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: MdBiotech,
    title: "Biotech",
    description: "Biotechnology and research management systems",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: FaLaptopCode,
    title: "Technology",
    description: "Custom software solutions and digital transformation",
    color: "from-indigo-500 to-indigo-600"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function IndustriesSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600  mx-auto text-left">
            Delivering innovative solutions across diverse sectors with expertise and precision
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
