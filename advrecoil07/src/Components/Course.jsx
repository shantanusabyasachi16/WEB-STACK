
import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Loading } from "./Loading";
import { BASE_URL } from "../config.js";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { courseState } from "../Store/atoms/course.js";
import { isCourseLoadingState, courseTitleState, courseDetailState, courseImageState, coursePriceState } from "../store/selectors/course.js";

function Course() {
    let { courseId } = useParams();

    const setCourse = useSetRecoilState(courseState);
    const isCourseLoading = useRecoilValue(isCourseLoadingState);

    useEffect(() => {
        axios.get(`${BASE_URL}/admin/course/${courseId}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setCourse({
                isLoading: false,
                course: res.data.course
            });
        }).catch(e => {
            setCourse({
                isLoading: false,
                course: null
            });
        });
    }, [courseId, setCourse]);

    if (isCourseLoading) {
        return <Loading />;
    }

    return (
        <div>
            <GrayTopper />
            <Grid container>
                <Grid item lg={8} md={12} sm={12}>
                    <UpdateCard />
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <CourseCard />
                </Grid>
            </Grid>
        </div>
    );
}

function GrayTopper() {
    const courseTitle = useRecoilValue(courseTitleState);

    return (
        <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
            <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <div>
                    <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
                        {courseTitle}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

function UpdateCard() {
    const setCourse = useSetRecoilState(courseState);
    const courseDetails = useRecoilValue(courseDetailState);

    const [title, setTitle] = useState(courseDetails?.title || "");
    const [description, setDescription] = useState(courseDetails?.description || "");
    const [image, setImage] = useState(courseDetails?.imageLink || "");
    const [price, setPrice] = useState(courseDetails?.price || "");

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card varint={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
                <div style={{ padding: 20 }}>
                    <Typography style={{ marginBottom: 10 }}>Update course details</Typography>
                    <TextField
                        value={title}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth={true}
                        label="Title"
                        variant="outlined"
                    />
                    <TextField
                        value={description}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth={true}
                        label="Description"
                        variant="outlined"
                    />
                    <TextField
                        value={image}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => setImage(e.target.value)}
                        fullWidth={true}
                        label="Image link"
                        variant="outlined"
                    />
                    <TextField
                        value={price}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => setPrice(e.target.value)}
                        fullWidth={true}
                        label="Price"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        onClick={async () => {
                            await axios.put(`${BASE_URL}/admin/courses/${courseDetails._id}`, {
                                title,
                                description,
                                imageLink: image,
                                published: true,
                                price
                            }, {
                                headers: {
                                    "Content-type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            });
                            setCourse(prev => ({
                                ...prev,
                                course: {
                                    ...prev.course,
                                    title,
                                    description,
                                    imageLink: image,
                                    price
                                }
                            }));
                        }}
                    >
                        Update course
                    </Button>
                </div>
            </Card>
        </div>
    );
}

function CourseCard() {
    const title = useRecoilValue(courseTitleState);
    const imageLink = useRecoilValue(courseImageState);
    const price = useRecoilValue(coursePriceState);

    return (
        <div style={{ display: "flex", marginTop: 50, justifyContent: "center", width: "100%" }}>
            <Card style={{
                margin: 10,
                width: 350,
                minHeight: 200,
                borderRadius: 20,
                marginRight: 50,
                paddingBottom: 15,
                zIndex: 2
            }}>
                <img src={imageLink} style={{ width: 350 }} alt="Course" />
                <div style={{ marginLeft: 10 }}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="subtitle2" style={{ color: "gray" }}>
                        Price
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Rs {price} </b>
                    </Typography>
                </div>
            </Card>
        </div>
    );
}

export default Course;
