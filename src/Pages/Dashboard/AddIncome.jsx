import React from 'react';

import { Link } from 'react-router-dom';



const AddIncome = () => {
    



    return (



      <div className='mx-2 md:mx-10'>

            
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center mt-10">
               
               <div className='flex justify-between items-center lg:col-span-1 md:col-span-1 p-5 bg-white rounded-lg shadow-lg'>
                       <div class=" flex justify-start gap-5 items-center  ">

                       
                           
                           <div class="bg-[#6665DD] rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                          <circle cx="23.2579" cy="22.5119" r="22.3536" fill="#6665DD"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5214 11.5154C21.4293 11.5766 21.1768 11.9057 20.8478 12.393C20.5584 12.8219 20.295 13.1708 20.2625 13.1685C20.2301 13.1662 19.8466 12.9273 19.4102 12.6376C18.6725 12.1478 18.6023 12.1109 18.4091 12.1109C18.1721 12.1109 17.9625 12.2279 17.8212 12.439C17.772 12.5125 17.6317 12.982 17.5019 13.5075L17.2704 14.4449L16.5565 13.9714C15.8974 13.5341 15.8267 13.4978 15.6351 13.4978C15.3983 13.4978 15.1886 13.6149 15.0473 13.8259C14.9982 13.8994 14.8579 14.3689 14.7281 14.8944L14.4965 15.8319L13.7827 15.3583C13.1236 14.921 13.0529 14.8847 12.8613 14.8847C12.6186 14.8847 12.4164 15.0013 12.258 15.2325C12.1617 15.373 12.1564 15.411 12.1793 15.7949C12.2121 16.3464 12.4321 18.0612 12.5966 19.0483C13.3474 23.5527 14.5049 27.1427 16.0123 29.6423C16.7882 30.9289 17.4384 31.5606 18.3694 31.9323C18.9409 32.1606 19.1579 32.1984 19.9005 32.1989C20.6965 32.1995 20.963 32.1354 21.4367 31.8292C22.8805 30.8961 22.9452 28.8101 21.5608 27.8318C21.1103 27.5135 20.7727 27.4039 20.1333 27.3682C19.7117 27.3447 19.5525 27.3185 19.4399 27.2538C19.2798 27.1619 19.0981 26.8529 19.0996 26.6751C19.1012 26.4977 19.2568 26.2047 19.3935 26.1218C19.4631 26.0796 20.7155 25.5867 22.1766 25.0265C25.0487 23.9254 25.0619 23.9189 25.1692 23.5609C25.234 23.3445 25.2408 23.3694 24.8026 22.2188C23.7989 19.5834 22.9297 15.6511 22.5848 12.1854C22.5519 11.8547 22.4525 11.6709 22.2226 11.516C22.0247 11.3826 21.7214 11.3823 21.5214 11.5154ZM29.1504 12.9029C29.07 12.9571 28.9598 13.0673 28.9056 13.1477C28.817 13.2791 28.8071 13.3453 28.8071 13.8017V14.3094L28.5316 14.445C28.2225 14.5972 27.8784 14.9125 27.7125 15.1956C27.3508 15.8127 27.3738 16.6992 27.7673 17.3124C28.0437 17.7431 28.3468 17.9461 29.2838 18.3281C29.558 18.4398 29.8271 18.5602 29.8818 18.5957C30.1352 18.7596 30.2262 19.1593 30.0689 19.4173C29.8378 19.7964 29.0585 19.836 28.5617 19.4938C28.3758 19.3657 28.2983 19.3388 28.1157 19.3388C27.6021 19.3388 27.2788 19.8369 27.48 20.3183C27.5922 20.5869 28.2224 20.9913 28.6383 21.0616L28.8071 21.0901V21.5566C28.8071 21.9701 28.8183 22.0398 28.9056 22.1694C29.2164 22.6305 29.7847 22.6305 30.0954 22.1694C30.1841 22.0379 30.194 21.9719 30.194 21.5126V21.0022L30.4215 20.8965C31.5164 20.3878 31.8921 19.0103 31.2145 17.9894C30.9182 17.5431 30.6906 17.3915 29.6973 16.9787C29.3884 16.8504 29.0987 16.7119 29.0536 16.6711C28.8553 16.4916 28.792 16.1636 28.9112 15.9331C29.046 15.6724 29.5469 15.5252 29.9817 15.6184C30.1125 15.6465 30.3128 15.7362 30.4393 15.8233C30.6253 15.9513 30.7027 15.9783 30.8854 15.9783C31.399 15.9783 31.7222 15.4802 31.5211 14.9988C31.4088 14.7302 30.7787 14.3258 30.3628 14.2555L30.194 14.227V13.7605C30.194 13.347 30.1828 13.2773 30.0954 13.1477C29.8654 12.8063 29.4524 12.6994 29.1504 12.9029ZM20.0972 17.7561C20.3053 17.861 20.4865 18.1389 20.4846 18.3504C20.4832 18.5158 20.3336 18.8128 20.2113 18.8929C20.0579 18.9934 16.5531 20.3926 16.3874 20.4195C16.0715 20.4708 15.715 20.1887 15.6481 19.8346C15.6161 19.6656 15.7226 19.354 15.8524 19.2365C15.9666 19.1333 19.6495 17.6589 19.7938 17.6587C19.8543 17.6586 19.9908 17.7024 20.0972 17.7561ZM20.7772 20.5175C20.9754 20.6074 21.1186 20.798 21.1624 21.0302C21.1968 21.212 21.0793 21.5292 20.9357 21.6421C20.7938 21.7538 17.1525 23.2062 17.0146 23.2062C16.9552 23.2062 16.8196 23.1623 16.7133 23.1087C16.5052 23.0038 16.324 22.7258 16.3258 22.5144C16.3273 22.348 16.4771 22.0518 16.6009 21.9707C16.7823 21.8519 20.3684 20.4329 20.4856 20.4336C20.5452 20.434 20.6764 20.4717 20.7772 20.5175ZM30.6707 23.2335C30.5317 23.2899 25.7123 25.1355 24.2346 25.6982C22.5899 26.3244 22.4793 26.3834 22.4793 26.6336C22.4793 26.7355 22.5456 26.8289 22.798 27.083C23.3091 27.5975 23.6445 28.1772 23.8273 28.8622C23.9582 29.3525 23.9584 30.234 23.8278 30.7259C23.557 31.7457 22.8854 32.6177 21.9937 33.1075C21.6895 33.2745 21.6194 33.3724 21.6983 33.5197C21.7369 33.5918 21.7885 33.608 21.9786 33.608C22.298 33.608 22.815 33.504 23.1168 33.3789C26.3895 32.0232 30.9802 30.1408 31.0138 30.1408C31.0382 30.1408 31.1709 30.0852 31.3087 30.0172C31.4465 29.9493 31.9396 29.7396 32.4044 29.5513C33.1822 29.2362 33.2668 29.1912 33.467 28.9861C34.0657 28.3725 34.3879 27.4675 34.3435 26.524C34.2607 24.762 32.8375 23.2917 31.1491 23.2237C30.9217 23.2146 30.7065 23.2189 30.6707 23.2335Z" fill="white"/>
                                   </svg>

                           </div>

                           <div>
                               <p class="text-gray-700 font-semibold">Salary</p>
                                   <div class="flex gap-2 justify-center items-center text-lg font-semibold text-gray-800">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                           <path d="M1.51685 4.22632H10.4542" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                           <path d="M8.00806 0.511963V2.16609" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                           <path d="M3.95801 0.511963V2.16609" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                           <path d="M8.10828 1.30396H3.85265C2.37896 1.30396 1.46167 2.12602 1.46167 3.63479V8.14607C1.46167 9.67489 2.37896 10.512 3.85265 10.512H8.09325C9.56693 10.512 10.4842 9.68994 10.4842 8.18116V3.60974C10.4993 2.12603 9.58197 1.30396 8.10828 1.30396Z" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                       <span className='text-xs'>24-MAR-2020</span>
                                   </div>
                           </div>
                           </div>
                               
                           <div>
                               <h2 className='text-xl font-semibold'>$5000</h2>   
                           </div>
                   
               </div>


               <div className='flex justify-between items-center lg:col-span-1 md:col-span-1 p-5 bg-white rounded-lg shadow-lg'>
                       <div class=" flex justify-start gap-5 items-center  ">

                       
                           
                           <div class="bg-[#00B6E6] rounded-full ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                 <circle cx="23.2579" cy="23.0644" r="22.3536" fill="#00B6E6"/>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0472 12.9538C15.5727 13.0918 15.2873 13.263 14.9193 13.6302C14.6769 13.8722 14.5302 14.0626 14.435 14.259C14.1429 14.8614 14.1616 14.2925 14.1616 22.5817C14.1616 30.87 14.1426 30.2931 14.4352 30.9006C14.6257 31.2961 15.1604 31.829 15.5598 32.0214C16.1327 32.2974 16.0026 32.29 20.3061 32.2907C22.4577 32.2911 24.2181 32.2823 24.2181 32.2712C24.2181 32.2601 24.1097 32.0577 23.9773 31.8214C23.562 31.081 23.2524 30.2163 23.0629 29.2683C23.0124 29.0154 22.9904 28.5307 22.9744 27.3142C22.9547 25.8269 22.9472 25.6994 22.8812 25.7321C22.8417 25.7516 21.644 25.773 20.2196 25.7795C17.7187 25.7909 17.6241 25.7884 17.4629 25.7062C16.8094 25.3728 16.7758 24.4795 17.403 24.1108L17.6077 23.9904L20.0741 23.9782C22.0767 23.9683 22.579 23.9773 22.7455 24.0261L22.9505 24.0862L23 23.7859C23.0886 23.2495 23.353 22.7246 23.7388 22.319C23.8356 22.2173 23.9147 22.1275 23.9147 22.1195C23.9147 22.1114 22.5067 22.1048 20.7857 22.1048C17.7005 22.1048 17.6541 22.1036 17.4697 22.0142C17.0822 21.8267 16.8781 21.3994 16.9776 20.9844C17.0402 20.7234 17.2426 20.4717 17.4746 20.3663C17.6425 20.2901 17.8635 20.2861 22.0098 20.2852L26.3685 20.2843L26.5966 20.398C26.7415 20.4701 26.8654 20.573 26.936 20.6797C26.9972 20.7721 27.0541 20.8478 27.0624 20.8478C27.0744 20.8478 29.6253 19.9928 29.8424 19.916C29.928 19.8857 29.9182 15.3017 29.8317 14.8876C29.6386 13.9636 28.8527 13.1534 27.9415 12.9386C27.7015 12.882 26.9009 12.8735 21.9858 12.8757C16.7162 12.8779 16.2886 12.8835 16.0472 12.9538ZM21.9457 16.6693C22.154 16.7681 22.3845 17.0404 22.4427 17.2565C22.5464 17.6418 22.367 18.0726 22.0171 18.2783L21.8124 18.3987H19.71H17.6077L17.403 18.2783C16.9079 17.9873 16.7987 17.3246 17.1768 16.906C17.462 16.5904 17.3672 16.6019 19.7035 16.6008C21.5377 16.5999 21.8175 16.6084 21.9457 16.6693ZM30.4515 21.6628C30.31 21.6796 25.4367 23.3348 25.2605 23.4259C25.0916 23.5132 24.8911 23.7651 24.8311 23.9654C24.7666 24.1806 24.763 28.1327 24.8269 28.6514C24.9273 29.4678 25.1858 30.2515 25.6032 31.005C26.3962 32.4363 27.9494 33.8477 29.7405 34.7646C30.5691 35.1888 30.6516 35.1826 31.6916 34.6195C33.9689 33.3863 35.6485 31.4651 36.1542 29.5152C36.3394 28.801 36.3553 28.5398 36.3543 26.2305C36.3535 24.1902 36.3477 24.0213 36.2736 23.858C36.0991 23.4739 36.0661 23.459 33.3704 22.5436C30.9049 21.7064 30.6732 21.6365 30.4515 21.6628ZM33.3783 25.4023C33.5781 25.4578 33.8499 25.6938 33.9451 25.8945C34.0348 26.0835 34.0348 26.4913 33.9451 26.6648C33.828 26.8913 31.0464 30.574 30.8984 30.6985C30.62 30.9327 30.2143 30.9547 29.8749 30.7539C29.7796 30.6974 29.2506 30.1962 28.6995 29.6399C27.6014 28.5315 27.5751 28.4929 27.608 28.0386C27.6406 27.5879 27.9563 27.2744 28.4228 27.2296C28.7952 27.1938 28.9101 27.2638 29.6039 27.9495C29.991 28.332 30.258 28.5649 30.2809 28.5398C30.3018 28.5171 30.8078 27.8451 31.4054 27.0464C32.0738 26.1532 32.5447 25.5632 32.6288 25.5136C32.8933 25.3575 33.1041 25.3262 33.3783 25.4023Z" fill="white"/>
                               </svg>

                           </div>

                           <div>
                               <p class="text-gray-700 font-semibold">Business</p>
                                   <div class="flex gap-2 justify-center items-center text-lg font-semibold text-gray-800">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                           <path d="M1.51685 4.22632H10.4542" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                           <path d="M8.00806 0.511963V2.16609" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                           <path d="M3.95801 0.511963V2.16609" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                           <path d="M8.10828 1.30396H3.85265C2.37896 1.30396 1.46167 2.12602 1.46167 3.63479V8.14607C1.46167 9.67489 2.37896 10.512 3.85265 10.512H8.09325C9.56693 10.512 10.4842 9.68994 10.4842 8.18116V3.60974C10.4993 2.12603 9.58197 1.30396 8.10828 1.30396Z" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                       <span className='text-xs'>24-MAR-2020</span>
                                   </div>
                           </div>
                           </div>
                               
                           <div>
                               <h2 className='text-xl font-semibold'>$50000</h2>   
                           </div>
                   
               </div>


               <div className='flex justify-between items-center lg:col-span-1 md:col-span-1 p-5 bg-white rounded-lg shadow-lg'>
                            <div class=" flex justify-start gap-5 items-center  ">

                            
                                
                                <div class="bg-[#FF659C] rounded-full ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                        <circle cx="23.2579" cy="22.6169" r="22.3536" fill="#FF659C"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7632 12.9536C22.6353 12.9904 22.4297 13.0833 22.3063 13.16C22.0174 13.3396 11.2316 22.3274 11.1288 22.4743C11.0378 22.6041 11.0284 22.8133 11.1068 22.9603C11.1896 23.1157 12.0849 24.1688 12.2066 24.2541C12.3314 24.3415 12.5419 24.3498 12.6875 24.2732C12.7447 24.243 15.1465 22.2565 18.0247 19.8587L23.2576 15.4991L28.5558 19.9136C33.4629 24.0023 33.8667 24.328 34.0287 24.328C34.1249 24.328 34.2511 24.2948 34.3091 24.2541C34.4309 24.1688 35.3262 23.1157 35.409 22.9603C35.4937 22.8016 35.4756 22.5906 35.3653 22.4505C35.3106 22.381 34.5275 21.7109 33.6249 20.9615L31.9838 19.5987V16.4583C31.9838 14.3019 31.9675 13.2823 31.932 13.2043C31.8122 12.9415 31.7464 12.932 30.0548 12.932C28.3817 12.932 28.2955 12.9434 28.1587 13.1828C28.1141 13.2607 28.0912 13.6993 28.0738 14.8067L28.05 16.3238L26.1904 14.7686C24.0989 13.0195 23.9707 12.9348 23.37 12.9051C23.1366 12.8936 22.9081 12.9118 22.7632 12.9536ZM18.878 20.4195L14.532 24.002L14.5331 27.777C14.5341 31.3252 14.5393 31.5634 14.6209 31.7431C14.7295 31.982 14.9993 32.2229 15.2345 32.2909C15.3579 32.3266 16.3402 32.3385 18.3704 32.3289L21.3268 32.3148L21.3391 29.4181L21.3513 26.5214H23.2579H25.1645L25.1767 29.4181L25.189 32.3148L28.1453 32.3289C30.1755 32.3385 31.1579 32.3266 31.2813 32.2909C31.5165 32.2229 31.7863 31.982 31.8948 31.7431C31.9765 31.5634 31.9817 31.3252 31.9827 27.777L31.9838 24.0022L27.6678 20.4441C25.2941 18.4872 23.3231 16.8751 23.2879 16.8616C23.2508 16.8473 21.3964 18.3435 18.878 20.4195Z" fill="white"/>
                                   </svg>

                                </div>

                                <div>
                                    <p class="text-gray-700 font-semibold">House Rent</p>
                                        <div class="flex gap-2 justify-center items-center text-lg font-semibold text-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                <path d="M1.51685 4.22632H10.4542" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.00806 0.511963V2.16609" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M3.95801 0.511963V2.16609" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.10828 1.30396H3.85265C2.37896 1.30396 1.46167 2.12602 1.46167 3.63479V8.14607C1.46167 9.67489 2.37896 10.512 3.85265 10.512H8.09325C9.56693 10.512 10.4842 9.68994 10.4842 8.18116V3.60974C10.4993 2.12603 9.58197 1.30396 8.10828 1.30396Z" stroke="#7D8CAC" stroke-width="0.942497" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <span className='text-xs'>24-MAR-2020</span>
                                        </div>
                                </div>
                                </div>
                                    
                                <div>
                                    <h2 className='text-xl font-semibold'>$25000</h2>   
                                </div>
                        
                    </div>
           
           

            </div>
            

            <div className='fixed right-0 bottom-0'>
            <label htmlFor="add_income_modal">
                                  <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto' width="100" height="100" viewBox="0 0 93 93" fill="none">
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
                                        Pay Type
                                    </label>

                                       <select className="select select-success w-full ">
                                                      

                                                         <option value="Weekly">Weekly</option>
                                                          <option value="Bi-Weekly">Bi-Weekly</option>
                                                          <option value="Others">Others</option>
                                        </select>
                                
                                      

                                </div>
                               
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="date">
                                        Select Pay Period
                                    </label>
                            
                            <div className='flex justify-between items-center gap-5 mb-3 bg-[#ddd] p-2'>
                                <div className='flex items-center gap-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                      <circle cx="6.76043" cy="6.48456" r="6.26043" fill="#00E6BD"/>
                                   </svg>
                                    <h3>Pay Period 1 ( 1-15 )</h3>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">    
                                         <circle cx="6.60028" cy="6.48431" r="6.26043" fill="#FFAF02"/>
                                    </svg>
                                    <h3>Pay Period 2 ( 16-31 )</h3>
                                </div>
                                    </div>
                             
                                    <input
                                        required
                                        id="date"
                                        name="date"
                                        type="date"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                    
                                    />
                               </div>
                        
                        <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="money">
                                       Income
                                    </label>
                                    <label className="input-group">
                                         <span>$</span>
                                         <input type="number" placeholder="15,000" className="input input-bordered input-success w-full" />
                                   </label>
                                </div>
                                

                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="notes">
                                        Notes
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-success w-full" />
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