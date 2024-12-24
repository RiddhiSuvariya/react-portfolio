// import "../PageStyles/Experiance.css";
// import skillsjso from "../data/skills.json";
// import history from "../data/history.json";
// import logo from "../assets/profile_2.jpg";

// function Skills(){
//     return (<>
//         <section id="experience" className="container2">
//             <h2 className="title2">Skills</h2>
//             <div className="content2">
//                 <div className="skills2">
//                     {
//                         skillsjso.map((skill,id)=>{
//                             return <div key={id} className="skill2">
//                                 <div className="skillImgContainer">
//                                     <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt={skill.title}/>
//                                 </div>
//                                 <p>{skill.title}</p>
//                             </div>
//                         })
//                     }
//                 </div>
//                 <ul className="history" >
//                     {
//                         history.map((historyItem, id)=>{
//                             return (
//                             <li key={id} className="historyItem">
//                                 <img src={logo} alt={historyItem.organisation}/>
//                                 <div className="historyItemDetails">
//                                     <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                                     <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                                     <ul>
//                                         {historyItem.experiance.map((experiance, id)=>{
//                                             return <li key={id}>{experiance}</li>
//                                         })}
//                                     </ul>
//                                 </div>
//                             </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </section>
//     </>);
// }
// export {Skills};
import React from 'react';
import "../PageStyles/Skills.css";
import skillsjso from "../data/skills.json";
import history from "../data/history.json";
import logo from "../assets/extra.png";
import img1 from "../assets/skills.png";

function Skills() {
    const getImage = (imageSrc) => {
        try {
            return require(`${imageSrc}`);
        } catch (err) {
            return null;
        }
    };

    return (
        <>
            <section id="experience" className="container2">
                <h2 className="title3">Skills</h2>
                <div className="content2">
                    <div className="skills2">
                        {
                            skillsjso.map((skill, id) => {
                                const imgSrc = skill.imageSrc.startsWith('http') ? skill.imageSrc : getImage(skill.imageSrc);
                                return (
                                    <div key={id} className="skill2">
                                        <div className="skillImgContainer">
                                            <img src={imgSrc} alt={skill.title} />
                                        </div>
                                        <p>{skill.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ul className="history">
                        {/* {
                            history.map((historyItem, id) => {
                                return (
                                    <li key={id} className="historyItem">
                                        <img src={logo} alt={historyItem.organisation} />
                                        <div className="historyItemDetails">
                                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                            <ul>
                                                {historyItem.experiance.map((experiance, id) => {
                                                    return <li key={id}>{experiance}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                        } */}
                           <div className="profile-container">
                            <img src={img1} alt="Profile 1" className="profile-image"/>
                        </div>
                    </ul>
                </div>
            </section>
        </>
    );
}

export { Skills };
