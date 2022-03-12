import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../stylesheets/Menu.css';

function Menu(props) {
    const backgroundColorGradient = {
        grey: {red: 199, green: 209, blue: 211, coord: 0.0},
        lightorange: { red: 244, green: 151, blue: 84 , coord: 0.5},
        sunset: { red: 200, green: 93, blue: 87 , coord: 0.65},
        purple: { red: 55, green: 56, blue: 76, coord: 0.8}
    }
    const defaultAnimationRange = { startPoint: 0.0, endPoint: 0.8 }
    const animationRange = useRef(defaultAnimationRange)
    const [animationProgress, setAnimationProgress] = useState(0.0)
    const [backgroundColor, setBackgroundColor] = useState(backgroundColorGradient.grey)
    const handleScroll = () => {
        const position = Math.floor(window.scrollY) / window.innerHeight;
        setAnimationProgress(menuAnimation(position))
        setBackgroundColor(colorAnimation(position))
        console.log(position)

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //IDEA
    //Transition the color when scrolling down. That shit might look fucking fire
    function colorAnimation(scrollPos) {

        if (scrollPos >= backgroundColorGradient.grey.coord && scrollPos <= backgroundColorGradient.lightorange.coord) {
            return calcColor(scrollPos, "grey", "lightorange")
        }
        if (scrollPos > backgroundColorGradient.lightorange.coord && scrollPos <= backgroundColorGradient.sunset.coord) {
            return calcColor(scrollPos, "lightorange", "sunset")
        }
        if(scrollPos > backgroundColorGradient.sunset.coord && scrollPos <= backgroundColorGradient.purple.coord) {
            return calcColor(scrollPos, "sunset", "purple")
        } else {
            return backgroundColorGradient.purple
        }

    }

    function calcColor(scrollPos, startColor, endColor) {
        const scrollStart = backgroundColorGradient[startColor].coord
        const scrollEnd = backgroundColorGradient[endColor].coord
        let red = range(scrollStart, scrollEnd, backgroundColorGradient[startColor].red, backgroundColorGradient[endColor].red, scrollPos)
        let green = range(scrollStart, scrollEnd, backgroundColorGradient[startColor].green, backgroundColorGradient[endColor].green, scrollPos)
        let blue = range(scrollStart, scrollEnd, backgroundColorGradient[startColor].blue, backgroundColorGradient[endColor].blue, scrollPos)
        return { red: red, green: green, blue: blue }
    }

    function colorTransitionBlock(startColor, end){

    }

    function menuToggle(open) {
        //Uses refs
        const menuOpenRange = {
            startPoint: 0.2,
            endPoint: 0.3
        }
        if (open) {
            animationRange.current = menuOpenRange
        } else {
            animationRange.current = defaultAnimationRange
        }
    }

    function range(ymin, ymax, xmin, xmax, input) {
        let percent = (input - ymin) / (ymax - ymin)
        return percent * (xmax - xmin) + xmin
    }

    function menuAnimation(scrollPos) {
        if (scrollPos >= animationRange.current.startPoint && scrollPos < animationRange.current.endPoint) {
            return range(animationRange.current.startPoint, animationRange.current.endPoint, 0, 1, scrollPos)
        } else if (scrollPos == 0.0) {
            menuToggle(false)
            return 0
        } else if (scrollPos > animationRange.current.endPoint){
            menuToggle(true)
            return 1
        }
    }

    return (
        <div className="menu-parent" style={{ top: `-${10 - (animationProgress * 10)}%`, backgroundColor: `rgba(${backgroundColor.red}, ${backgroundColor.green}, ${backgroundColor.blue}, 1)` }}>
            { }
        </div>
    )
}

export default Menu