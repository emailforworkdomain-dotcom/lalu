'use client';

import Testimonial1 from '@/assets/images/11.webp';
import { tickSrc } from '@/components/icons';
import { useState, type FC } from 'react';

interface TestimonialSectionProps {
    texts: Record<string, string>;
}

const TestimonialSection: FC<TestimonialSectionProps> = ({ texts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: texts.testimonial1 || '"Joining the Meta Partner Program transformed our business. The dedicated support and priority placement helped us reach 3x more customers in just two months."',
            avatar: Testimonial1,
            user: '@kimalban',
            follow: '68K+ followers',
            link: 'https://www.instagram.com/kimalban/'
        },
        {
            quote: texts.testimonial2 || '"The Meta Partner badge instantly boosted our credibility. Clients trust us more knowing we are officially recognized by Meta."',
            avatar: Testimonial1,
            user: '@sssourabh',
            follow: '90k+ followers',
            link: 'https://www.instagram.com/sssourabh/'
        },
        {
            quote: texts.testimonial3 || '"The advanced analytics tools available through the Partner Program gave us insights we never had before. Our ad performance improved by 40%."',
            avatar: Testimonial1,
            user: '@lizzlovestech',
            follow: '94K+ followers',
            link: 'https://www.instagram.com/lizzlovestech/'
        },
        {
            quote: texts.testimonial4 || '"Being a Meta Partner opened doors to exclusive beta features that gave us a competitive edge in our market."',
            avatar: Testimonial1,
            user: '@inversionista_gal',
            follow: '4K+ followers',
            link: 'https://www.instagram.com/inversionista_gal/'
        }
    ];

    const current = testimonials[currentIndex];

    return (
        <div className='mv-testimonial'>
            <div className='mv-quote' id='mvQuote'>
                {current.quote}
            </div>

            <div className='mv-profile'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={current.avatar.src} className='mv-avatar' id='mvAvatar' alt='avatar' />

                <div className='mv-name'>
                    <a id='mvUser' className='mv-user-link' href={current.link} target='_blank' rel='noopener noreferrer'>
                        {current.user}
                    </a>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tickSrc} width='18' alt='tick' style={{ verticalAlign: 'middle' }} />
                </div>

                <div className='mv-follow' id='mvFollow'>
                    {current.follow}
                </div>
            </div>

            <div className='mv-controls'>
                <button type='button' className='mv-btn' id='mvPrev' onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
                    ‹
                </button>

                <div className='mv-dots' id='mvDots'>
                    {testimonials.map((_, i) => (
                        <div key={i} className={`mv-dot ${i === currentIndex ? 'active' : ''}`} />
                    ))}
                </div>

                <button type='button' className='mv-btn' id='mvNext' onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}>
                    ›
                </button>
            </div>
        </div>
    );
};

export default TestimonialSection;
