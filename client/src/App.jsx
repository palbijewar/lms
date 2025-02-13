import { Route, Routes } from 'react-router-dom';
import {
  Home, CoursesList, CourseDetails, MyEnrollements, Player
} from './pages/student';
import {Loading} from './components/student';
import {
  Educator, Dashboard, AddCourse, StudentsEnrolled, MyCourses
} from './pages/educator';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollements' element={<MyEnrollements />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        <Route path='/educator' element={<Educator />}>
          <Route index element={<Dashboard />} /> 
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='students-enrolled' element={<StudentsEnrolled />} />
          <Route path='my-courses' element={<MyCourses />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
