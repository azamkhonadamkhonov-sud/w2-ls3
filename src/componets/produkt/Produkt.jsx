import React, { useState } from 'react'
import img from "../../assets/image.png";
import img2 from "../../assets/image copy.png";
import img3 from "../../assets/image copy 2.png";
import img4 from "../../assets/image copy 3.png";
import img5 from "../../assets/image copy 4.png";
import img6 from "../../assets/image copy 5.png";
import img7 from "../../assets/image copy 6.png";
import img8 from "../../assets/image copy 7.png";
import img9 from "../../assets/image copy 8.png";
import img10 from "../../assets/image copy 9.png";
import img11 from "../../assets/image copy 10.png";
import img12 from "../../assets/image copy 11.png";
import { ArchiveX, PencilLine } from 'lucide-react';



export default function Produkt() {
    const [data, setData] = useState([
        {
            id: 1,
            img: img,
            title: "High-Back Bench",
            price: "$9,99",
        },
        {
            id: 2,
            img: img2,
            title: "Albany Table",
            price: "$79,99",
        },
        {
            id: 3,
            img: img3,
            title: "Accent Chair",
            price: "$25,99",
        },
        {
            id: 4,
            img: img4,
            title: "Wooden Table",
            price: "$45,99",
        },
        {
            id: 5,
            img: img5,
            title: "Dining Table",
            price: "$6,99",
        },
        {
            id: 6,
            img: img6,
            title: "Sofa Set",
            price: "$69,99",
        },
        {
            id: 7,
            img: img7,
            title: "Modern Bookshelf",
            price: "$8,99",
        },
        {
            id: 8,
            img: img8,
            title: "Emperor Bed",
            price: "$21,99",
        },
        {
            id: 9,
            img: img9,
            title: "Utopia Sofa",
            price: "$39,95",
        },
        {
            id: 10,
            img: img10,
            title: "Entertainment Center",
            price: "$29,98",
        },
        {
            id: 11,
            img: img11,
            title: "Albany Sectional",
            price: "$10,99",
        },
        {
            id: 12,
            img: img12,
            title: "Leather Sofa",
            price: "$9,99",
        },
    ])
    let [Open, setOpen] = useState(false)
    let [Open1, setOpen1] = useState(false)
    const deleteProdukt = (id) => {
        setData(data.filter((el) => el.id != id));
    };
    const [idx, setIdx] = useState(null)
    const [title, setTitle] = useState("");
    const [imgUrl, setImg] = useState("");
    const [price, setPrice] = useState("");
    let AddProdukt = () => {
        let pp = {
            id: Date.now(),
            title: title,
            img: imgUrl || img,
            price: price
        };
        setData([...data, pp])
        setOpen(false)
    }
    const [titleE, setTitleE] = useState("");
    const [imgUrlE, setImgE] = useState("");
    const [priceE, setPriceE] = useState("");
    function editUser() {
        setData(data.map((el) => {
            if (el.id == idx) {
                return {
                    ...el,
                    title: titleE,
                    img: imgUrlE,
                    price: priceE
                }
            }
            return el
        }))
        setOpen1(false)

    }

    function openModalEdit(el) {
        setOpen1(true)
        setTitleE(el.title)
        setImgE(el.img)
        setIdx(el.id)
        setPriceE(el.price)
    }
    return (
        <div>
            <dialog open={Open1} className='m-auto mt-[400px]'>
                <input
                    className='border m-2 text-2xl pr-2 pl-2'
                    type="text"
                    value={imgUrlE}
                    onChange={(e) => setImgE(e.target.value)}
                />
                <input
                    className='border m-2 text-2xl pr-2 pl-2'
                    type="text"
                    value={titleE}
                    onChange={(e) => setTitleE(e.target.value)}
                />
                <input
                    className='border m-2 text-2xl pr-2 pl-2'
                    type="text"
                    value={priceE}
                    onChange={(e) => setPriceE(e.target.value)}
                />
                <button onClick={editUser} className='bg-blue-500 text-white text-2xl p-4 pt- pb-2 m-2'>Save Edit</button>
            </dialog>
            <dialog open={Open} className='m-auto mt-[400px]'>
                <input
                    className='border m-2 text-2xl pr-2 pl-2'
                    type="text"
                    value={""}
                    onChange={(e) => setImg(e.target.value)}
                />
                <input
                    className='border m-2 text-2xl pr-2 pl-2'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className='border m-2 text-2xl pr-2 pl-2'
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button onClick={AddProdukt} className='bg-blue-500 text-white text-2xl p-4 pt-2 pb-2 m-2'>Save</button>
            </dialog>
            <button onClick={() => setOpen(true)} className='bg-blue-600 text-white m-6 p-4 font-bold text-2xl pt-2 pb-2'>Add +</button>
            <div className='flex items-center justify-between flex-wrap w-[90%] m-auto mt-8 mb-8'>
                {data.map((el) => (
                    <div key={el.id} className='w-[31%] mt-6 mb-6   shadow-2xl bg-white hover:shadow-2xl hover:shadow-white'>
                        <img className='w-[100%]' src={el.img} alt="" />
                        <div className='p-4 text-center'>
                            <h1 className='mt-4 mb-4 text-xl font-bold'>{el.title}</h1>
                            <div className='flex items-center justify-between'>
                                <button onClick={() => openModalEdit(el)} ><PencilLine color='blue' /></button>
                                <p className='font-bold'>{el.price}</p>
                                <button onClick={() => deleteProdukt(el.id)}><ArchiveX color='red' /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
