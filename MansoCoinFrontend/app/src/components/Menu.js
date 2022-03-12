import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';   
import '../stylesheets/Menu.css';

function Menu(props) {

    const defaultAnimationRange = {startPoint: 0.5, endPoint: 0.8}
    const animationRange = useRef(defaultAnimationRange)
    const [animationProgress, setAnimationProgress] = useState(0.0)
    const [scrollPosition, setScrollPosition] = useState(0.0);

    const handleScroll = () => {
        const position = Math.floor(window.scrollY)/window.innerHeight;
        setScrollPosition(position);
        setAnimationProgress(menuAnimation(position))
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //IDEA
    //Transition the color when scrolling down. That shit might look fucking fire

    function menuToggle(open){
        //This goes against everything React stands for, but i just can't be assed to fix it. Maybe do Refs, but i don't have the patience to fix it
        const menuOpenRange = {
            startPoint: 0.3,
            endPoint: 0.4
        }
        if(open){
            animationRange.current = menuOpenRange
        } else {
            animationRange.current = defaultAnimationRange
        }
    }

    function range(min, max, input){
        let percent = (input - min) / (max - min)
        return percent
    }

    function menuAnimation(scrollPos) {
        if(scrollPos > animationRange.current.startPoint && scrollPos < animationRange.current.endPoint) {  
            return range(animationRange.current.startPoint, animationRange.current.endPoint, scrollPos)
        } else if (scrollPos < animationRange.current.startPoint) {
            menuToggle(false)
            return 0
        } else {
            menuToggle(true)
            return 1
        }
    }

    return (
        <div className="menu-parent" style={{top: `-${10-(animationProgress*10)}%`}}>
            {}
        </div>
    )
}

export default Menu