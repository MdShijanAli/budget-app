import React from 'react';

import { Link } from 'react-router-dom';



const AddIncome = () => {
    



    return (



      <div>
        
                       <div>
                          <label htmlFor="add_income_modal">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
                                              <g filter="url(#filter0_d_46_1632)">
                                                <circle cx="46.3791" cy="46.7595" r="31.1035" fill="#00b22d"/>
                                              </g>
                                                <path d="M46.3792 35.9758V57.5428" stroke="white" stroke-width="3.2176" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M35.5957 46.7593H57.1627" stroke="white" stroke-width="3.2176" stroke-linecap="round" stroke-linejoin="round"/>
                                                <defs>
                                                  <filter id="filter0_d_46_1632" x="0.275635" y="0.656006" width="92.2069" height="92.207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset/>
                                                    <feGaussianBlur stdDeviation="7.5"/>
                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.56087 0 0 0 0 1 0 0 0 0.4 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_46_1632"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_46_1632" result="shape"/>
                                                  </filter>
                                                </defs>
                                      </svg>
                               </label>
                          </div>


          

    
        <input type="checkbox" id="add_income_modal" className="modal-toggle" />
        <div className='modal'>
                        <div className="modal-box mx-auto">

                            <form >
                                <h3 className='text-center text-3xl font-semibold mb-10'>Add Income</h3>
                                <div className="mb-4">


                                    <label className="block text-gray-700 dark:text-white font-bold mb-2" htmlFor="category">
                                        Select Category
                                    </label>

                                    <select
                                        required
                                        id="category"
                                        name="category"
                                        className="block appearance-none w-full dark:text-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                               
                                    >
                                
                                            <option value="option1">Option-1</option>
                                            <option value="option-2">Option-2</option>
                                            <option value="option-3">Option-3</option>
                                      

                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="money">
                                        Money
                                    </label>
                                    <input
                                        required
                                        id="money"
                                        name="money"
                                        type="number"
                                        step="0.01"
                                        className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                  
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="date">
                                        Date
                                    </label>
                                    <input
                                        required
                                        id="date"
                                        name="date"
                                        type="date"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                    
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="time">
                                        Time
                                    </label>
                                    <input
                                        required
                                        id="time"
                                        name="time"
                                        type="time"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="notes">
                                        Notes
                                    </label>
                                    <input
                                        required
                                        id="notes"
                                        name="notes"
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                    
                                    />
                                </div>



                                <div className="modal-action">
                                    <button type='submit' htmlFor="fund-modal" className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Add Income</button>
                                </div>
                            </form>




          </div>
          <label className="modal-backdrop" htmlFor="add_income_modal">Close</label>
          </div>
                   
       



        </div>
    );
};

export default AddIncome;