import { Card, Typography, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Usecourse() {
  let { courseId } = useParams();//to extraxt the id of th courses
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      setCourses(data.courses);
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching courses:", error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  const course = courses.find(c => c.id.toString() === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <Coursecard course={course} />
      <Updatecard course={course} />
    </div>
  );

  function Updatecard(props) {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState("");

    const course = props.course;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <Typography>Update course details</Typography>
          <TextField
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            variant="outlined"
          />
          <br /><br />
          <TextField
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
          />
          <br /><br />
          <TextField
            fullWidth
            onChange={(e) => setImage(e.target.value)}
            label="Image link"
            variant="outlined"
          />
          <br /><br />
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/courses/" + course.id, {
                method: "PUT",
                body: JSON.stringify({
                  title: Title,
                  description: Description,
                  imageLink: Image,
                  published: true
                }),
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + localStorage.getItem("token")
                }
              }).then((res) => {
                return res.json();
              }).then((data) => {
                alert("Course updated successfully");
              }).catch((error) => {
                console.error("Error updating course:", error);
                alert("Failed to update course");
              });
            }}
          >
            Update course
          </Button>
        </Card>
      </div>
    );
  }

  function Coursecard(props) {
    const course = props.course;
    return (
      <div style={{display:"flex",justifyContent:"center"}}>
        <Card style={{
          margin: 10,
          width: 300,
          minHeight: 200
        }}>
          <Typography textAlign={"center"} variant='h6'>{course.title}</Typography>
          <Typography textAlign={"center"} variant='h6'>{course.description}</Typography>
          <img src={course.imageLink} style={{ width: 300 }} alt="course" />
        </Card>
      </div>
    );
  }
}

export default Usecourse;
