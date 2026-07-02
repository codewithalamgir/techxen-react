import Link from 'next/link';
import React from 'react';

const category_data = [
    {id: 1, category: "Cleaning", items: "03" },
    {id: 2, category: "Consultant", items: "05" },
    {id: 3, category: "Creative", items: "08" },
    {id: 4, category: "Technology", items: "06" },
]
const Category = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Category</h3>
                <div className="sidebar__widget-content">
                    <ul>
                        {category_data.map((item, i)  => <li key={i}><Link href="/blog">{item.category}<span>{item.items}</span></Link></li>)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Category;