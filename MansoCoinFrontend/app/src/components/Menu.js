import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';   
import '../stylesheets/Menu.css';

function Menu(props) {


    const [menuOpen, setMenuOpen] = useState(false)
    const [animationProgress, setAnimationProgress] = useState(0.0)
    const [scrollPosition, setScrollPosition] = useState(0.0);
    const startPoint = 0.5
    const endPoint = 0.8

    const handleScroll = () => {
        console.log(window.innerHeight)
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

    function range(min, max, input){
        let percent = (input - min) / (max - min)
        return percent
    }

    function menuAnimation(scrollPos) {
        if(scrollPos > startPoint && scrollPos < endPoint) {
            return range(startPoint, endPoint, scrollPos)
        } else if (scrollPos < startPoint) {
            return 0
        } else {
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