import React from 'react';
import { Card } from 'react-bootstrap';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import './Review.css';

const Review = ({ value }) => {


  return (
    <div className="px-4 my-5">
      <Card border="dark cardContainer border-0 ">
        <Card.Header className="cardHeader py-0 ps-0">
          <Card.Img variant="top" src="https://i.ibb.co/KVvwcWD/team-img-6.jpg" className="logoImage me-3" />
          <div className="cardTextBody">
            <Card.Title className="cardTitle robotoFont">Dark Card Title</Card.Title>
            <Card.Text className="cardText mt-0 pt-0">
              Some quick
            </Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="rating-star my-0">
            <GoIcons.GoStar />
            <GoIcons.GoStar />
            <GoIcons.GoStar />
            <GoIcons.GoStar />
          </Card.Text>
          <Card.Text className="text-muted">
            <RiIcons.RiDoubleQuotesL className="quote" />Some quick example text to build on the card title and make up the bulk
            of the card's content.  <RiIcons.RiDoubleQuotesR className="quote" />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>


  );
};

export default Review;