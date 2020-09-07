import React from 'react';
import './Course.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {course_name, instructor, price,image} = props.course;
    const enrollHandler = props.enrollHandler;
    return (
        <div className="course-main">
            <div className="course">
            <Row className="justify-content-md-center single-course">
                <Col xs={12} md={4}>
                <Card className="card-class" style={{ width: '18rem' }}>
                <Card.Img variant="top" height="180" src={image}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>  
                    By {instructor} <br/>
                    <h5>৳{price}</h5>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-center card-footer">
                    <Button onClick={() => enrollHandler(props.course)} variant="secondary"> <FontAwesomeIcon icon={faPlusCircle} /> Enroll now</Button>
                </Card.Footer>
                </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Course;