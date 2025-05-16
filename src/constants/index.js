export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Awward-Winning Website',
        desc: 'A visually stunning and highly interactive website designed to showcase award-worthy web development techniques. It features smooth animations, modern design patterns, and a polished user experience.',
        subdesc:
            'Built using JavaScript, React, Tailwind CSS, and GSAP for dynamic animations, ensuring optimal performance and interactivity.',
        href: 'https://awward-winning-website.rodrigofilho.io/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/zentry.png',
        logoStyle: {
            backgroundColor: '#1A0F23',
            border: '0.2px solid #3A245F',
            boxShadow: '0px 0px 60px 0px #7A42F54D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'GSAP',
                path: '/assets/gsap.png',
            },
        ],
    },
    {
        title: 'Xora Landing Page',
        desc: 'A sleek and modern landing page designed for startups and businesses. It effectively showcases a product or service with a clean UI, smooth animations, and a user-friendly layout.',
        subdesc:
            'Developed using JavaScript, React, and Tailwind CSS for a highly maintainable and scalable architecture.',
        href: 'https://xora-landing-page.rodrigofilho.io/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/favicon.ico',
        logoStyle: {
            backgroundColor: '#0F1A2B',
            border: '0.2px solid #1C3A5F',
            boxShadow: '0px 0px 60px 0px #3F82F54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [8.5, -6.1, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 4.2, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-15, -10, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Xora-Landing Page',
        title: "My first project, built to solidify my Frontend skills. Focused on responsive design, component-based development, and clean UI/UX. Helped me put theory into practice and create an intuitive user experience.",
        icon: '/assets/favicon.ico',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Awward-Winning Website',
        title: "A project to enhance my front-end skills by integrating smooth animations with GSAP. Focused on creating engaging motion design while maintaining performance and responsiveness. Improved my understanding of animation timing and scroll-based interactions.",
        icon: '/assets/zentry.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: '3D Portfolio',
        title: "A showcase of my projects with a more interactive and immersive approach. Integrates 3D models using Three.js, blending performance, aesthetics, and interactivity. A step forward in my growth as a developer.",
        icon: '/assets/robotic-hand.png',
        animation: 'salute',
    },
];