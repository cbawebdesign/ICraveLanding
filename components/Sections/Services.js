import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
    return (
        <section id="services" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>How It Works?</h3>
							<p>Discover how iCrave makes sharing homemade goodness effortless in just three simple steps.
</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-server2"></div>
							
							<h5>Choose Your Craving:
</h5>
							<p>Browse through our diverse menu and select your favorite dishes from partnered restaurants or homemade delights. Personalize your order with special instructions or dietary preferences.</p>
							
						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-headset"></div>
							
							<h5>Prepare and Package:
</h5>
							<p>For senders: Cook your selected dishes with love and care, then pack them securely, and send personalized messages to add an extra touch of warmth and thoughtfulness.</p>
							<p>For receivers: Unbox your iCrave delivery with excitement, enjoy the delicious homemade meals, and share heartfelt messages to express your gratitude and connection with the sender.
</p>
						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-software-pen"></div>
							
							<h5>Ship and Share:
</h5>
							<p>Select your preferred shipping partner, schedule a pickup, and let our trusted carriers deliver your package safely to its destination. Share your iCrave experience with loved ones by posting photos, stories, and messages on our platform

</p>
						
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Services;