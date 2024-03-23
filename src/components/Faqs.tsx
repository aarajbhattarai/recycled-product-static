import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is fast fashion waste?',
      answer: 'Fast fashion waste refers to the excessive production and disposal of clothing by the fast fashion industry, leading to environmental pollution and resource depletion.',
    },
    {
      question: 'How many clothes are thrown away each year?',
      answer: 'It is estimated that billions of clothing items are discarded annually, contributing to the growing problem of textile waste.',
    },
    {
      question: 'What is fashion waste and its impact on the environment?',
      answer: 'Fashion waste refers to the environmental impact caused by the production, consumption, and disposal of clothing. It contributes to pollution, resource depletion, and landfill overflow.',
    },
  ],
  [
    {
      question: 'How does recycling help reduce fashion waste?',
      answer: 'Recycling helps reduce fashion waste by repurposing old clothing materials into new products, minimizing the need for raw materials and reducing environmental impact.',
    },
    {
      question: 'What is the process of recycling waste clothing?',
      answer: 'The process of recycling waste clothing involves collecting, sorting, and processing discarded textiles to create new materials or products through techniques like shredding, melting, and reweaving.',
    },
    {
      question: 'How can I recycle my old jeans?',
      answer: 'You can recycle your old jeans by donating them to organizations that repurpose textiles, participating in clothing recycling programs, or upcycling them into new products like bags or accessories.',
    },
  ],
  [
    {
      question: 'What are the benefits of recycling waste textiles?',
      answer: 'Recycling waste textiles conserves resources, reduces landfill waste, minimizes pollution, and supports a circular economy by giving new life to old materials.',
    },
    {
      question: 'How does jeans restoration contribute to sustainability?',
      answer: 'Jeans restoration involves repairing and refurbishing old denim garments to extend their lifespan, reducing the need for new clothing production and minimizing waste.',
    },
    {
      question: 'What are some creative ways to recycle fashion waste?',
      answer: 'Creative ways to recycle fashion waste include upcycling old clothing into new garments or accessories, repurposing textiles for household items like rugs or quilts, and participating in clothing swap events.',
    },
  ],
];


export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          If you can't find what you're looking for, reach out to our support team. 
          We're here to assist you with any questions or concerns you may have.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
