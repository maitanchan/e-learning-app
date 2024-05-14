import { useGetUserAllCoursesQuery } from '../../../redux/features/courses/coursesApi'
import React, { useEffect, useState } from 'react'
import CourseCard from '../Course/CourseCard'

type Props = {}

const Courses = (props: Props) => {

    const { data, isLoading } = useGetUserAllCoursesQuery({})
    const [courses, setCourses] = useState<any[]>([])

    useEffect(() => {

        setCourses(data?.courses)

    }, [data])

    return (


        <div className=''>
            <div className={`w-[90%] 800px:w-[80%] m-auto `}>

                <h1 className='text-center font-Poppins text-[20px]  leading-[35px] sm:text-2xl lg:text-2xl dark:text-white text-black 800px:!leading-[60px] font-[700] tracking-tight'>

                    Expand your career {""}

                    <span className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-[700]  text-transparent sm:text-2xl lg:text-3xl font-Poppins'>Opportunity</span> <br />
                    Opportunity with our courses

                </h1>

                <br /><br />

                <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] md-12 border-0'>

                    {courses && courses.map((item: any, index: number) => (

                        <CourseCard
                            item={item}
                            key={index}
                        />


                    ))}

                </div>


            </div>
        </div>

    )

}

export default Courses