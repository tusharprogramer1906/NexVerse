import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function Faq() {
  return (
    <div className='text-white text-2xl mx-7 sm:mx-44 mt-28 p-10 rounded-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_20px_0px_#3182ce]'>
      <Accordion type="single" collapsible className="w-full" style={{ textAlign: "justify" }}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="sm:text-2xl text-xl font-bold text-left">What is Geek Room?</AccordionTrigger>
          <AccordionContent className="text-xl text-left font-extralight">
          Geek Room is a widespread coding community with over 7500+ active coders nationwide. It was started by three 1st year coding enthusiasts with the main objective to 
          create a transparent community where sharing of ideas and helping other people is the main goal . Geek Room boasts of various hackathon winning teams , 
          6 independent institutes with Geek Room chapters and so much more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="sm:text-2xl text-xl font-bold text-left">So, what is Geek Room IITM?</AccordionTrigger>
          <AccordionContent className="text-xl text-left font-extralight">
          Geek Room IITM is a chapter of the community specifically dedicated to IITM students, offering them exclusive exposure and opportunities through events that enhance their academic and professional growth.        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="sm:text-2xl text-xl font-bold text-left">How can we benefit from it, and are they open for everyone?</AccordionTrigger>
          <AccordionContent className="text-xl text-left font-extralight">
          A big yes! We host a lot of minor and major events for both tech and non-tech students, both on-campus and off-campus as well as provide opportunities to participate in other nationwide hackathons.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="sm:text-2xl text-xl font-bold text-left">Will the experience gained from here enhance my Resume?</AccordionTrigger>
          <AccordionContent className="text-xl text-left font-extralight">
          Ofcourse! Attending our events or seminars whether as a team member or a participant will not only boost your exposure, knowledge, and skills but will also give you a competitive edge in the industry. Plus, earning a certificate or winning will further enhance your credentials and open up new opportunities.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faq