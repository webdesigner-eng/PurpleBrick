import React from 'react'
import Container from '../common/container/container'
import Link from 'next/link'
import Linkbtn from '../ui/button/Linkbtn'


const CTA = () => {
    return (
        <section className='cta-section flex items-center'>
            <Container className='common-container w-full'>
                <div className="cta-content-wrapper flex justify-end">
                <div className='sm-w-3/4 w-3/5'>
                    <h3>Your Business Deserves Better Marketing Results</h3>
                    <p className="cta-para">Let’s identify what’s holding your growth back and build a performance-driven system that delivers measurable results.</p>
                    <div className="cta-btn">
                        <Linkbtn href="#" variant="secondary" size="md">Get Free Audit</Linkbtn>
                    </div>
                </div>
                </div>
            </Container>
        </section>
    )
}

export default CTA