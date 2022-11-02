import React from "react";
import Tag from "../../ui-kit/text/tag";

const tags = ["Beans", "Carrots", "Apples", "Garlic", "Mushrooms", "Tomatoes", "Chilli peppers", "Broccoli", "Watermelons", "Oranges", "Bananas", "Grapes", "Cherries", "Seo tag", "Fish", "Fresh food", "Lemons"]

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-column">
                        <div className="footer-title">Get in touch</div>
                        <div className="footer-column-item">About Us</div>
                        <div className="footer-column-item">Careers</div>
                        <div className="footer-column-item">Press Releases</div>
                        <div className="footer-column-item">Blog</div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Connections</div>
                        <div className="footer-column-item">Facebook</div>
                        <div className="footer-column-item">Twitter</div>
                        <div className="footer-column-item">Instagram</div>
                        <div className="footer-column-item">Youtube</div>
                        <div className="footer-column-item">LinkedIn</div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Earnings</div>
                        <div className="footer-column-item">Advertise your product</div>
                        <div className="footer-column-item">Advertise your product</div>
                        <div className="footer-column-item">Sell on Market</div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Your account</div>
                        <div className="footer-column-item">Returns Centre</div>
                        <div className="footer-column-item">100 % purchase protection</div>
                        <div className="footer-column-item">Chat with us</div>
                        <div className="footer-column-item">Help</div>
                    </div>
                </div>
                <div className="footer-tags">
                    <div className="footer-title">Product tags</div>
                    <div className="footer-tag-list">
                        {tags.map(tag => <Tag label={tag} color="secondary" size="small" key={tag} />)}
                    </div>
                </div>
                <div className="footer-copyright">Copyright © 2022 localhost:3000</div>
            </div>
        </div>
    )
}

export default Footer