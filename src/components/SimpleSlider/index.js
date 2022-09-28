import Slider from 'react-slick';
import { Box } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MovieCard from '../MovieCard';
import data from '../../mock.json';

const SimpleSlider = () => {
  const Arrow = ({ className, style, onClick }) => {
    return (
      <Box
        className={className}
        style={{ ...style, display: 'block', background: '#111' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box p={5}>
      <Slider {...settings}>
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </Box>
  );
};

export default SimpleSlider;
