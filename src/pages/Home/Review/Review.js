import React from 'react';
import { Card } from 'react-bootstrap';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import './Review.css';

const Review = ({ review }) => {

  const { comment, email, img, ratings, user_name } = review;


  return (
    <div className="px-4 my-5">
      <Card border="dark cardContainer border-0 ">
        <Card.Header className="cardHeader py-0 ps-0">
          <Card.Img variant="top" src={img} className="logoImage me-3" />
          <div className="cardTextBody">
            <Card.Title className="cardTitle robotoFont">{user_name}</Card.Title>
            <Card.Text className="cardText mt-0 pt-0 ">
              {email}
            </Card.Text>
          </div>
        </Card.Header>
        <Card.Body>

          {
            ratings == 1 && <Card.Text className="rating-star my-0">
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings == 2 && <Card.Text className="rating-star my-0">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings == 3 && <Card.Text className="rating-star my-0">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings == 4 && <Card.Text className="rating-star my-0">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings == 5 && <Card.Text className="rating-star my-0">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }

          <Card.Text className="text-muted">
            <RiIcons.RiDoubleQuotesL className="quote" />{comment?.slice(0, 100)}...<RiIcons.RiDoubleQuotesR className="quote" />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>


  );
};

export default Review;