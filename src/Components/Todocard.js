import React, { useState } from 'react'
export default function Todocard() {

    const [userData, setuserData] = useState("");
    const [items, setItems] = useState([]);
    const [CompletedTask, setCompletedTask] = useState([]);

    //Function to take the input value and store it in the state;
    const addItem = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setuserData(e.target.value);
            saveItems();
        }
    }

    //Function to add items;
    const saveItems = () => {
        if (!userData) {
            alert("Please write something!");
        }
        else {
            const myNewData = {
                id: new Date().getTime().toString(),
                name: userData
            };
            setItems([myNewData, ...items]);

        }
    }

    // Funtion to move the card at the bottom
    const myFunc = (index, name) => {
        const updateElem = items.filter((cElem) => {
            setCompletedTask([name, ...CompletedTask])
            return cElem.id !== index;
        })

        setItems(updateElem);
    };

    return (
        <>

            {/* Main Div */}
            <div className='bg-white min-h-screen w-full flex justify-center items-center ' >

                {/* Card */}
                <div className='  w-4/6 min-h-screen py-4 shadow-2xl' >

                    {/* Heading */}
                    <div className=' py-4 bg-indigo-900  rounded-t-xl ' >
                        <h1 className="text-center text-white text-4xl font-bold">Todo App</h1>
                    </div>

                    {/* Input */}
                    <div className='py-8 px-6 flex justify-center ' >
                        <input type="text"

                            // Getting value using hooks
                            value={userData}
                            onChange={(event) => { setuserData(event.target.value) }}
                            onKeyPress={addItem}

                            id="name" name="name" placeholder='Add items...' className="w-4/5 mx-1 bg-gray-100 bg-opacity-50 rounded border-2 border-indigo-400 focus:border-indigo-500 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button className='border-2 font-medium mx-1 py-2 px-6 rounded-md border-indigo-400 hover:bg-indigo-100' >Clear All</button>
                    </div>



                    {/* Items container */}
                    <div className=' w-full py-4 ' >
                        {/* Each item container */}
                        <div><h1 className='text-center text-indigo-900 text-2xl font-bold' >Todo Tasks </h1></div>

                        {/* Sample Task to do */}
                        <div
                            className="border-2 flex mx-auto shadow-xl px-3 hover:bg-indigo-100 w-5/6 border-indigo-800 rounded-lg bg-white my-2  sm:flex sm:flex-row justify-around items-center">
                            <div className=" flex justify-center my-2 font-bold">
                                <p className=" py-2 t ext-lg font-medium">This is a sample Task</p>
                            </div>
                            <div className='hidden'  >
                                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className='fill-indigo-600' d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                            </div>
                        </div>


                        {/* Dynamically showing the items using map method */}
                        {
                            items.map((ele, index) => {
                                return (
                                    <div key={index}
                                        title={"Click to add in the Tasks Completed"}
                                        onClick={() => myFunc(ele.id, ele.name)}
                                        className="border-2 hover:cursor-pointer flex mx-auto shadow-xl px-3 hover:bg-indigo-100 w-5/6 border-purp;e-800 rounded-lg bg-white my-2  sm:flex sm:flex-row justify-around items-center">
                                        <div className=" flex justify-center my-2 font-bold">
                                            <p className=" py-2 t ext-lg font-medium">{ele.name}</p>
                                        </div>
                                        <div className='hidden'  >
                                            <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className='fill-indigo-600' d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                                        </div>
                                    </div>
                                );
                            })
                        }



                    </div>

                    {/* Completed Tasks */}
                    <div className=' w-full py-4 ' >

                        {/* Each item container */}
                        <div><h1 className='text-center text-indigo-900 text-2xl font-bold' >Completed Tasks </h1></div>

                        {/* Sample Completed  Task to do */}
                        <div
                            className="border-2 flex mx-auto shadow-xl px-3 hover:bg-indigo-100 w-5/6 border-indigo-800 rounded-lg bg-white my-2  sm:flex sm:flex-row justify-around items-center">
                            <div className=" flex justify-center my-2 font-bold">
                                <p className=" py-2 t ext-lg font-medium">This is a sample Task</p>
                            </div>
                            <div className=''  >
                                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className='fill-indigo-600' d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                            </div>
                        </div>

                        {/* Dynamically showing the completedTask using map method */}
                        {
                            CompletedTask.map((ele, index) => {
                                return (
                                    <div key={index}
                                        className="border-2 flex mx-auto shadow-xl px-3 hover:bg-indigo-100 w-5/6 border-purp;e-800 rounded-lg bg-white my-2  sm:flex sm:flex-row justify-around items-center">
                                        <div className=" flex justify-center my-2 font-bold">
                                            <p className=" py-2 t ext-lg font-medium">{ele}</p>
                                        </div>
                                        <div className=''  >
                                            <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className='fill-indigo-600' d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </div >




        </>
    )
}
