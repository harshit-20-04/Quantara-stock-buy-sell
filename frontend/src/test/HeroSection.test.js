import React from 'react'
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../landing_page/home/HeroSection';

describe('Hero Component', ()=>{
    test('renders hero image', ()=>{
        render(<HeroSection/>);
        const heroImage = screen.getByAltText("HeroImage");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", expect.stringContaining('homeHero.png'));
    });

    test('renders signup button', ()=>{
        render(<HeroSection/>);
        const heroImage = screen.getByRole('button');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveClass("btn-primary");
    });
});