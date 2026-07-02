import Link from 'next/link';
import React from 'react';

const tags_data  = [
    {id: 1, tag: "symphony", Link: "#"},
    {id: 2, tag: "nokia", Link: "#"},
    {id: 3, tag: "tech", Link: "#"},
    {id: 4, tag: "Samsung", Link: "#"},
    {id: 5, tag: "Alcatel", Link: "#"},
    {id: 6, tag: "mous", Link: "#"},
    {id: 7, tag: "landing", Link: "#"},
    {id: 8, tag: "Oppos", Link: "#"},
]

const Tags = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Tags</h3>
                <div className="sidebar__widget-content">
                    <div className="tagcloud">
                        {tags_data.map((item, i) =>  <Link href="#" key={i}>{item.tag}</Link>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tags;