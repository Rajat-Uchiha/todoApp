import React, { useEffect, useState } from 'react'
export default function Todocard() {

    //Functions to get data from the localStorage after refreshing the page
    const getTodoData = () => {
        const todos = localStorage.getItem("Mytodolist"); //Retriving the data from the localstorage
        if (todos) {
            return JSON.parse(todos);
        }
        return [];
    }
    const getCompletedData = () => {
        const Completed = localStorage.getItem("MyCompletedTasks"); //Retriving the data from the localstorage
        if (Completed) {
            return JSON.parse(Completed);
        }
        return [];
    }

    const [userData, setuserData] = useState("");
    const [items, setItems] = useState(getTodoData);
    const [CompletedTask, setCompletedTask] = useState(getCompletedData);

    //Function to take the input value and store it in the state;
    const addItem = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setuserData(e.target.value);
            saveItems();
            setuserData("");
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

    // Function to remove all the tasks
    const removeAll = () => {
        setItems([]); //Passed an empty array
        setCompletedTask([]); //Passed an empty array
    }

    //Function to store Data in the local Storage using useEffect

    useEffect(() => {
        localStorage.setItem("Mytodolist", JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        localStorage.setItem("MyCompletedTasks", JSON.stringify(CompletedTask));
    }, [CompletedTask]);






    return (
        <>

            {/* Main Div */}
            <div className='bg-white min-h-screen w-full flex-col justify-center items-center ' >

                {/* Card */}
                <div className='  w-5/6 min-h-screen py-4 mx-auto shadow-2xl' >

                    {/* Heading */}
                    <div className=' py-4 bg-indigo-900 flex justify-around   rounded-t-xl ' >
                        <h1 className="text-center text-white text-4xl font-bold">Todo App</h1>


                        {/* //Clear All button */}
                        <div onClick={removeAll} className="flex space-x-2 justify-center">
                            <button type="button" className="inline-block px-6 py-2.5 bg-white text-indigo-900 font-bold rounded-md hover:bg-indigo-100">Clear all</button>
                        </div>

                    </div>

                    {/* Input */}
                    <div className='py-8 px-6 flex-col justify-center items-center ' >
                        <div className='py-2' >
                            <input type="text"

                                // Getting value using hooks
                                value={userData}
                                onChange={(event) => { setuserData(event.target.value) }}
                                onKeyPress={addItem}

                                id="name" name="name" placeholder='Add items...' className="w-full py-2 px-6 bg-gray-100 bg-opacity-50 rounded border-2 border-indigo-800 focus:border-indigo-900 focus:bg-white text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>




                    </div>



                    {/* Items container */}
                    <div className=' w-full py-4 ' >
                        {/* Each item container */}
                        <div><h1 className='text-center text-indigo-900 text-2xl font-bold' >Todo Tasks </h1></div>

                        {/* Sample Task to do */}
                        <div
                            className="border-2 flex mx-auto shadow-xl px-3 hover:bg-indigo-100 w-5/6 border-indigo-800 rounded-lg bg-white my-2  sm:flex sm:flex-row justify-around items-center">
                            <div className=" flex justify-center my-2 font-bold">
                                <p className=" py-2 text-lg font-medium">This is a sample Task</p>
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
                                            <p className=" py-2 text-lg font-medium">{ele.name}</p>
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
                            <div className=" flex justify-center items-center my-2 font-bold">
                                <p className=" py-2 text-lg font-medium">This is a sample Task</p>
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
                <div className=' py-4 mb-4 bg-indigo-900 w-5/6 mx-auto rounded-b-xl ' >
                    <p className="text-center text-white text-4xl font-bold">
                        <a className='text-center text-white text-xl font-light' href="https://workwithrajat.netlify.app/">@workwithrajat</a>
                    </p>
                </div>
            </div >




        </>
    )
}
