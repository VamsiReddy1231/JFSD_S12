import React, { useState, useRef } from "react";
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from "../HomeSectionCard/HomeSectioncard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = ({ data,sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 6 },
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
            carouselRef.current.slidePrev(); // Trigger AliceCarousel to slide back
        }
    };

    const slideNext = () => {
        if (activeIndex < items.length - Math.ceil(responsive[1024].items)) {
            setActiveIndex((prevIndex) => prevIndex + 1);
            carouselRef.current.slideNext(); // Trigger AliceCarousel to slide forward
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} key={item.id} />);

    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}  // Use ref to control the carousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    infinite={false}  // Optional: Prevent infinite looping
                />
                {activeIndex < items.length - Math.ceil(responsive[1024].items) && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
