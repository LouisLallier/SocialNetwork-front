import React from 'react';

const Page2 = () => {
    return (
        <div className="hobbies">
            <h3>Intéret</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span> Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span> Randonnées </span>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span> Permaculture</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-headphones"></i>
                    <span> Musique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span> Espace</span>
                </li>

            </ul>
        </div>
    );
};

export default Page2;