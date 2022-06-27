import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '../ui-components/Icon';
import '../images/icons/arrow-right-light-icon.svg';
import './images/blog1.png';
import './images/blog2.png';
import './images/blog3.png';
import './images/blog4.png';


const BlogList = () => {
	let settings = {
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		infinite: false,
		responsive: [
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 1052,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					centerMode: true,
					centerPadding: '12px'
				}
			}
		]
	};
	
	return (
		<div className="blog-wrapper">
			<div className="container">
				<div className="blog-title-wrap">
					<h3 className="blog-title">Блог</h3>
					<button className="btn btn-primary">Смотреть все</button>
				</div>

				<Slider {...settings} className="js-blog-list blog-list">
					<div className="blog-list-item-wrap">
						<div className="blog-list-item">
							<img className="blog-list-item-img" src="../../dist/images/blog1.png"/>
							<h6 className="blog-list-item-title">5 Reasons Why Your Business Needs a Proxy
								Provider</h6>
							<p className="blog-list-item-desc small-text">Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Vivamus quis diam in lectus interdum porttitor a id
								nunc...</p>
							<div className="blog-list-item-tags">
								<p className="tag-item">Products</p>
								<p className="tag-item">Business</p>
								<p className="tag-item">Proxy</p>
							</div>
							<a className="blog-list-item-read-link link-with-icon">
								<span>Read</span>
								<Icon glyph="arrow-right-light-icon"/>
							</a>
						</div>
					</div>
					<div className="blog-list-item-wrap">
						<div className="blog-list-item">
							<img className="blog-list-item-img" src="../../dist/images/blog2.png"/>
							<h6 className="blog-list-item-title">Free vs. Paid Proxies: The Pros & Cons</h6>
							<p className="blog-list-item-desc small-text">Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Vivamus quis diam in lectus interdum porttitor a id
								nunc...</p>
							<div className="blog-list-item-tags">
								<p className="tag-item">Products</p>
								<p className="tag-item">Business</p>
								<p className="tag-item">Proxy</p>
							</div>
							<a className="blog-list-item-read-link link-with-icon">
								<span>Read</span>
								<Icon glyph="arrow-right-light-icon"/>
							</a>
						</div>
					</div>
					<div className="blog-list-item-wrap">
						<div className="blog-list-item">
							<img className="blog-list-item-img" src="../../dist/images/blog3.png"/>
							<h6 className="blog-list-item-title">Everything You Need to Know about Residential
								Proxies</h6>
							<p className="blog-list-item-desc small-text">Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Vivamus quis diam in lectus interdum porttitor a id
								nunc...</p>
							<div className="blog-list-item-tags">
								<p className="tag-item">Products</p>
								<p className="tag-item">Business</p>
								<p className="tag-item">Proxy</p>
							</div>
							<a className="blog-list-item-read-link link-with-icon">
								<span>Read</span>
								<Icon glyph="arrow-right-light-icon"/>
							</a>
						</div>
					</div>
					<div className="blog-list-item-wrap">
						<div className="blog-list-item">
							<img className="blog-list-item-img" src="../../dist/images/blog4.png"/>
							<h6 className="blog-list-item-title">How to Use Residential Proxy to Boost your
								Business: 6 Tips and ...</h6>
							<p className="blog-list-item-desc small-text">Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Vivamus quis diam in lectus interdum porttitor a id
								nunc...</p>
							<div className="blog-list-item-tags">
								<p className="tag-item">Products</p>
								<p className="tag-item">Business</p>
								<p className="tag-item">Proxy</p>
							</div>
							<a className="blog-list-item-read-link link-with-icon">
								<span>Read</span>
								<Icon glyph="arrow-right-light-icon"/>
							</a>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}

export {BlogList}