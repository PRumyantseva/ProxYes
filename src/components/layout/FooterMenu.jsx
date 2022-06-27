import React from 'react';

const FooterMenu = () => {
	return (
		<div className="footer-menu-wrapper">
			<div className="footer-menu-list">
				<p className="footer-menu-title">Our company</p>
				<ul className="footer-menu">
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Pricing plan</a>
					</li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Help Center</a>
					</li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Sitemap</a></li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Login</a></li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Sign Up</a></li>
				</ul>
			</div>
			<div className="footer-menu-list">
				<p className="footer-menu-title">Products</p>
				<ul className="footer-menu">
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Residential
						Proxies</a></li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Mobile Proxies</a>
					</li>
				</ul>
			</div>
			<div className="footer-menu-list">
				<p className="footer-menu-title">Documents</p>
				<ul className="footer-menu">
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Terms of Use</a>
					</li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Privacy Policy</a>
					</li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Cookie Policy</a>
					</li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">Refund &
						Cancellation Policy</a></li>
					<li className="footer-menu-item"><a
						className="footer-menu-link small-text" href="#">SLA</a></li>
				</ul>
			</div>
		</div>
	);
}

export {FooterMenu}