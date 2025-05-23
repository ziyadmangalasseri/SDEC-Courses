import Image from "next/image";
import Link from "next/link";
import course4 from '../public/Images/course4.jpg'
import course3 from '../public/Images/course3.jpg'
import startup from "../public/Images/startup1.jpg"
import { FadeInOnScroll } from "./FadeInOnScroll";

export default function FeaturedCourses() {
  const courses = [
  {
        id: 1,
        title: "Full Stack Developer Course",
        description:
          "Become proficient in both front-end and back-end development to build end-to-end web applications.",
        price: "80,000",
        image: course4,
        level: "Intermediate",
        featured: true,
      },
      {
        id: 2,
        title: "Freelance Master Course",
        description:
          "Equip yourself with the skills needed to successfully work as a freelancer in the tech world.",
        price: "50,000",
        image: course3,
        level: "Intermediate",
        featured: true,
      },
      {
        id: 3,
        title: "Entrepreneur Course",
        description:
          "Learn how to build and scale your own tech startup.",
        price: "100,000",
        image: startup,
        level: "Intermediate",
        featured: true,
      },
  ];

  return (
    <div className="py-16 bg-gradient-to-r  from-white via-[#f6e7ff] to-white ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative elements */}

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-purple-50 border-2 border-gray-200 px-0 py-0 rounded-full flex items-center">
              <div className="text-black font-medium w-[130px] text-sm flex items-center gap-2">
                <span className="h-6 w-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" fill="#976dff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg></span>
                </span>
                Our Courses
              </div>
            </div>
          </div>
          <FadeInOnScroll direction="up" delay={0.1}>
          <h2 className="md:text-4xl text-3xl text-black mb-4">Featured Courses</h2>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.2}>
          <p className="text-black max-w-xl mx-auto">
            From critical skills to technical topics, we support your
            professional development with courses that help you grow and
            succeed.
          </p>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll direction="up" delay={0.3}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ">
          {courses.map((course) => (
            <div
              style={{ border: "3px solid white" }}
              key={course.id}
              className="bg-gradient-to-b from-[#f6f2f8] to-[#ffffff] rounded-[22px] shadow-lg overflow-hidden p-6 transition-transform duration-300 ease-in-out transform-gpu hover:translate-x-[0px] hover:[transform:perspective(160px)_rotateY(-3deg)_rotateX(0deg)_rotate(-0deg)]"
            >
              <div className="relative w-full h-50">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover rounded-[22px]"
                />
              </div>
              <div>
                <div className="flex justify-end items-center py-3">
                  <span className="text-xl text-right text-black">
                    {course.price} ₹
                  </span>
                </div>
                <h3 className="text-xl text-black mb-2 truncate">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-gray-600 text-sm">{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </FadeInOnScroll>

        {/* View Courses button */}
        <FadeInOnScroll direction="up" delay={0.4}>
        <div className="flex justify-center">
          <Link href="/courses">
            <button className="px-8 py-3 border border-black rounded-full text-gray-700  hover:bg-black hover:text-white transition shadow">
              View Courses
            </button>
          </Link>
        </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
