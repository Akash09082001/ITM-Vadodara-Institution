// footer.js
document.addEventListener("DOMContentLoaded", function () {
    const footer = `

    <!-- Footer -->
    
    <footer class="flex w-full bg-gray-950">
    <div class="flex flex-col w-full max-w-7xl mx-auto py-10 gap-3 px-5 text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:divide-y-0 lg:grid-cols-5 w-full divide-y">
            <div class="flex flex-col w-full lg:col-span-2">
                <div class="flex w-full py-4">
                    <div class="flex h-14 md:h-20 w-full">
                        <img loading="lazy" class="flex rounded-md bg-white"
                            src="https://www.itm.ac.in/Images/logo.png" alt="">
                    </div>
                </div>
                <div class="flex flex-col w-full py-4 gap-2">
                    <strong class="text-sm md:text-base ">Research & Development</strong>
                    <p class="text-sm md:text-base pl-3">
                        “ITM Vocational University has its international peer-reviewed academic research journal
                        titled Journal of ITMVU: Science & Techno-Management. To get your research paper/article
                        published, email us at journal@itmvu.in”
                    </p>
                </div>
                <!-- <div class="flex gap-5 w-full">
                    <a href="https://itmhm.nopaperforms.com/?utm_source=Web&utm_medium=Web&utm_campaign=ITMWebsiteOurInstitutes"
                        class="flex w-fit h-auto rounded-md py-2 px-2 md:px-5 bg-brand-red text-white items-center justify-center shimmer-effect2">
                        Apply Now
                    </a>
                    <button onclick="openModal()"
                        class="shimmer-effect2 bg-brand-red text-white flex flex-nowrap py-2 px-2 md:px-5 font-normal  text-lg  rounded-md">Enquire
                        Now</button>
                </div> -->
            </div>
            <div class="flex flex-col w-full py-4">
                <h3 class="flex font-bold text-sm md:text-base ">About Us</h3>
                <ul class="grid grid-cols-1 w-full text-sm md:text-base ">
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.edu/aboutus/"
                            class="flex w-fit hover:text-brand-red px-3 py-1">About ITM Group</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://itm.ac.in/universityadministration.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">University Administration</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/aboutITMuniversity.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">ITM Vocational University</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/visionmission.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">Vision & Mission</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/presidentmessage.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">President Message</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/provostmessage.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">Provost Message</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/faculty.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">Faculty Profiles</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/statutory-bodies.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">Statutory Bodies</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/approvalsrecognition.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">Approvals & Recognition</a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col w-full py-4">
                <h3 class="flex font-bold text-sm md:text-base ">Under Graduate</h3>
                <ul class="grid grid-cols-1 w-full text-sm md:text-base ">
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/undergraduate-bba.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">BBA</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/undergraduate-btech.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">B.Tech</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/undergraduate-boptometry.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">B.Optometry</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/undergraduate-bscmedicallabtechnology.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">B.Sc
                            Medical Lab Technology</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/undergraduate-bscic.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">B.Sc Industrial Chemistry</a>
                    </li>
                    <li class="flex w-fit group hover:bg-white rounded-md">
                        <a href="https://www.itm.ac.in/undergraduate-bca.html"
                            class="flex w-fit hover:text-brand-red px-3 py-1">BCA</a>
                    </li>
                </ul>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full py-4 md:col-span-2 lg:col-span-1">
                <div class="flex flex-col w-full">
                    <h3 class="flex font-bold text-sm md:text-base ">Post Graduate</h3>
                    <ul class="grid grid-cols-1 w-full text-sm md:text-base ">
                        <li class="flex w-fit group hover:bg-white rounded-md">
                            <a href="https://www.itm.ac.in/postgraduate-mba.html"
                                class="flex w-fit hover:text-brand-red px-3 py-1">iConnect MBA</a>
                        </li>
                        <li class="flex w-fit group hover:bg-white rounded-md">
                            <a href="https://www.itm.ac.in/postgraduate-M.Sc.industrialchemistry.html"
                                class="flex w-fit hover:text-brand-red px-3 py-1">M.Sc Industrial
                                Chemistry</a>
                        </li>
                        <li class="flex w-fit group hover:bg-white rounded-md">
                            <a href="https://www.itm.ac.in/postgraduate-msc-mlt.html"
                                class="flex w-fit hover:text-brand-red px-3 py-1">M.Sc Medical Lab
                                Technologies</a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-2 py-4 w-full">
                    <h3 class="flex font-bold text-sm md:text-base ">Connect with us on:</h3>
                    <ul class="grid grid-cols-5 w-fit gap-3   text-sm md:text-base ">
                        <li class="flex w-fit group rounded-md">
                            <a href="https://www.facebook.com/ITMIDMOfficial"
                                class="flex w-fit  rounded-full px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li class="flex w-fit group rounded-md">
                            <a href="https://www.instagram.com/itmidmofficial/"
                                class="flex w-fit  rounded-full px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li class="flex w-fit group rounded-md">
                            <a href="https://www.linkedin.com/company/itm-institute-of-design-and-media1/"
                                class="flex w-fit  rounded-full px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li class="flex w-fit group rounded-md">
                            <a href="https://twitter.com/itm_idm" class="flex w-fit  rounded-full px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91306,15l14.10742,20h3.06445l-14.10742,-20z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li class="flex w-fit group rounded-md">
                            <a href="https://www.youtube.com/channel/UC03s_ZENlqNqov5Zl0m0HuA"
                                class="flex w-fit  rounded-full px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex w-full  py-10 ">
            <span
                class="flex w-full text-center text-sm md:text-base lg:text-lg items-center justify-center">Copyright
                © 2024 ITM Vocational University</span>
        </div>
    </div>
</footer>

    `;

    const footerContainer = document.getElementById("footer-container");
    footerContainer.innerHTML = footer;
});