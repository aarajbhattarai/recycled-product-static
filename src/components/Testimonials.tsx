import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/Avatar1.jpg'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/Avatar3.jpg'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'

const testimonials = [
  [
    {
      content:
        `Using Lezlaj's denim bags has been a game-changer for me. Not only are they stylish, but knowing they're made from recycled jeans makes me feel good about my fashion choices.`,
      author: {
        name: 'Prabish Dangi',
        role: 'Designer',
        image: avatarImage1,
      },
    },
    {
      content:
        `I donated my old jeans to Lezlaj and was amazed to see them transformed into beautiful bags. It's inspiring to see how a simple act of recycling can make a big impact.`,
      author: {
        name: 'Agnes Wilson',
        role: 'Fashion Entrepreneur',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        `As a supporter of sustainable fashion, I love what Lezlaj is doing. Their mission to repurpose denim into trendy accessories aligns perfectly with our company's values of environmental stewardship`,
      author: {
        name: 'Sajan Thapa',
        role: 'Environmental Advocate',
        image: avatarImage5,
      },
    },
    {
      content:
        `I've received so many compliments on my Lezlaj denim bag! It's not only fashionable but also durable and eco-friendly. I'm proud to support a brand that prioritizes sustainability.`,
      author: {
        name: 'Elena Petrova',
        role: 'Fashion Model',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Donating my old jeans to Lezlaj was such a rewarding experience. Seeing them transformed into stylish bags gives me hope for a more sustainable future.',
      author: {
        name: 'Yashahwi Karkee',
        role: 'Developer at Refobe',
        image: avatarImage3,
      },
    },
    {
      content:
        `Lezlaj's denim bags are more than just accessories - they're a statement. It's empowering to know that by using their products, I'm contributing to a cleaner, greener planet.`,
      author: {
        name: 'Samantha White',
        role: 'Journalist',
        image: avatarImage6,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Hear from our supporters
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          These are the individuals and organizations we&apos;ve collaborated with, 
          sharing their experiences and contributions to our journey.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
