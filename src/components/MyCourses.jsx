import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch user's purchased courses
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://courseappbackend-yydm.onrender.com/api/purchase/my-courses', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're storing the token in localStorage
                    },
                });
                setCourses(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch courses.');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleStartLearning = (courseId) => {
        navigate(`/course/${courseId}`, { state: { fromMyCourses: true } }); // Pass state indicating navigation from MyCourses page
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="my-courses-container">
            {courses.length > 0 ? (
                <div className="my-course-list">
                    {courses.map((course) => (
                        <div key={course._id} className="my-course-card">
                            <img src={course.img} alt={course.title} className="my-course-image" />
                            <h3 className="my-course-title">{course.title}</h3>
                            <button
                                className="start-learning-button"
                                onClick={() => handleStartLearning(course._id)}
                            >
                                Start Learning
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No courses purchased yet.</div>
            )}
        </div>
    );
};

export default MyCourses;
