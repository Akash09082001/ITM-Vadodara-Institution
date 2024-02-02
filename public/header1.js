// header.js
document.addEventListener("DOMContentLoaded", function () {
    const header = `
      
      <header class="flex fixed z-30 top-0 w-full shadow-md bg-white">
      <div class="flex w-full text-gray-800 max-w-7xl mx-auto py-1 px-5">
          <div class="flex w-full h-auto items-center justify-between space-x-5">
              <div class="flex lg:hidden divide-x flex-grow-0 h-14 w-fit">
                  <div onclick="window.location.href='https://itm.ac.in'" class="flex w-fit h-full">
                      <img loading="lazy" src="https://www.itm.ac.in/Images/logo.png"
                          class="flex h-full w-auto object-contain" alt="itm-logo">
                  </div>
              </div>
              <div id="desktop-nav" class="hidden lg:flex w-full items-center max-w-7xl mx-auto justify-between ">
                  <div class="">
                      <div onclick="window.location.href='https://itm.ac.in'" class="hidden lg:flex h-full w-full">
                          <img src="https://www.itm.ac.in/Images/logo.png" class="h-16 w-full object-contain"
                              alt="" />
                      </div>
                  </div>
                  <div class="flex flex-col items-end divide-y">
                      <div class="mx-auto flex w-full max-w-7xl items-center justify-end py-1">
                          <ul class="flex text-sm ">
                              <li class="flex items-center hover:text-brand-red">
                                  <a href="mailto:admissions@itmvu.in" class="flex px-3 gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                      </svg>
                                      admissions@itmvu.in
                                  </a>
                              </li>
                              <li class="flex items-center hover:text-brand-red">
                                  <a href="tel:+917043341951" class="flex px-3 gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                      </svg>
                                      +91 7043-34-1951
                                  </a>
                              </li>
                              <li class="flex items-center hover:text-brand-red">
                                  <a href="https://www.itm.ac.in/career/" class="flex px-3 gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                      </svg>
                                      Career
                                  </a>
                              </li>
                              <li class="flex items-center hover:text-brand-red">
                                  <a href="https://www.itm.ac.in/contact/" class="flex px-3 gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      Contact Us
                                  </a>
                              </li>
                              <li class="flex w-fit hover:shadow-lg">
                                  <a href="https://itmvoc.nopaperforms.com/?utm_source=web&utm_medium=web&utm_campaign=ITM%20Website"
                                      class="flex rounded-md bg-brand-red px-4 py-2 text-sm text-white hover:bg-black">
                                      Apply Now
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div class="col-span-3 flex w-full items-center justify-end ">
                          <ul class="flex text-xs uppercase">
                              <li class="program relative flex w-fit flex-col">
                                  <a href="https://itm.ac.in/aboutus/" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      about us
                                    <!--  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg> -->
                                  </a>
                                  <!-- <ul
                                      class="program-list absolute top-full hidden w-52 flex-col bg-white rounded-md border border-brand-red">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.edu/aboutus/"
                                              class="flex px-3 py-3 hover:text-brand-red">About ITM Group</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/universityadministration.html"
                                              class="flex px-3 py-3 hover:text-brand-red">University
                                              Administration</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/aboutITMuniversity.html"
                                              class="flex px-3 py-3 hover:text-brand-red">ITM Vocational
                                              University</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/visionmission.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Vision & Mission</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/presidentmessage.html"
                                              class="flex px-3 py-3 hover:text-brand-red">President Message</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/provostmessage.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Provost Message</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/faculty/"
                                              class="flex px-3 py-3 hover:text-brand-red">Faculty Profiles</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/statutory-bodies.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Statutory Bodies</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/approvalsrecognition.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Approvals & Recognition</a>
                                      </li>
                                       <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/infrastructure.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Campus Life</a>
                                      </li>
                                  </ul> -->
                              </li>
                              <li class="program relative flex w-fit flex-col">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      admissions
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-52 flex-col rounded-md border border-brand-red bg-white shadow-md">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/under-graduate-program/" class="relative flex px-3 py-3 group rounded-md">Under Graduate
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor"
                                                  class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                              </svg>
                                          </a>
                                          <ul
                                              class="program-list-items absolute left-full top-0 hidden w-56 flex-col border border-brand-red rounded-md shadow-md">
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/under-graduate-program/bba">BBA</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/under-graduate-program/b-tech">B.Tech</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/under-graduate-program/boptometry">B.Optometry</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/under-graduate-program/bscmedicallabtechnology">B.Sc
                                                      Medical Lab Technology</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/under-graduate-program/bscic">B.Sc
                                                      Industrial Chemistry</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/under-graduate-program/bca">BCA</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://itm.ac.in/post-graduate-program/" class="relative flex px-3 py-3 group rounded-md">Post Graduate
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                  stroke-width="1.5" stroke="currentColor"
                                                  class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                              </svg>
                                          </a>
                                          <ul
                                              class="program-list-items absolute left-full top-0 hidden w-60 flex-col rounded-md border border-brand-red">
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/post-graduate-program/mba">i connect
                                                      MBA</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/post-graduate-program/msc-industrial-chemistry">M.Sc
                                                      Industrial Chemistry</a>
                                              </li>
                                              <li class="relative w-full flex hover:text-brand-red">
                                                  <a class="flex w-full px-3 py-3"
                                                      href="https://www.itm.ac.in/post-graduate-program/msc-medical-lab-technology">M.Sc
                                                      Medical Lab Technology</a>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li class="program relative flex w-fit flex-col ">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      Placements
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-52 flex-col rounded-md border border-brand-red bg-white">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/iconnect-over.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Overview</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/iconnect-st.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Student testimonials</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/iconnect-ct.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Corporate testimonials</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/iconnect-pr.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Placement Report</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/iconnect-ic.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Industry Collaborations</a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="program relative flex w-fit flex-col ">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      itmvu magazine
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-52 flex-col rounded-md border border-brand-red bg-white">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="#"
                                              class="flex px-3 py-3 hover:text-brand-red">Photo Gallery</a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="program relative flex w-fit flex-col ">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      News
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-52 flex-col rounded-md border border-brand-red bg-white">
                                      
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/studentinnovation.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Student Innovation</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/newsandevents-mc.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Media Center</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/newsandevents-si.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Social Initiatives</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/newsandevents-ca.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Cultural Activities</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/newsandevents-sports.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Sports</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/gallery.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Gallery</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/video.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Video</a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="program relative flex w-fit flex-col ">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      Campus Life
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-52 flex-col rounded-md border border-brand-red bg-white">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/campus-life-photos.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Campus Life Photos</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/campus-life-videos.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Campus Life Videos</a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="program relative flex w-fit flex-col ">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      Achivements And Events
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-52 flex-col rounded-md border border-brand-red bg-white">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/newsandevents.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Events</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/events-photos.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Events Photos</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/achivements-photos.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Achivements Photos</a>
                                      </li>
                                  </ul>
                              </li>
                             <!-- <li class="program relative flex w-fit flex-col ">
                                  <a href="#" class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      Students
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                      </svg>
                                  </a>
                                  <ul
                                      class="program-list absolute top-full hidden w-48 flex-col rounded-md border border-brand-red bg-white">
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/examscheduled.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Exam Scheduled</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/examresults.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Exam Results</a>
                                      </li>
                                      <li class="relative flex w-full flex-col ">
                                          <a href="https://www.itm.ac.in/examresults.html"
                                              class="flex px-3 py-3 hover:text-brand-red">Circular</a>
                                      </li>
                                  </ul>
                              </li> -->
                              <li class="flex w-fit">
                                  <a href="https://itm.ac.in/blog.html"
                                      class="flex px-2 py-2 gap-2 hover:text-brand-red">
                                      Blog
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <nav id="mobile-nav"
                  class="hidden lg:hidden flex-col absolute w-full py-1 z-20 gap-2 max-w-sm  right-0 top-0 h-screen bg-white shadow-md">
                  <div class="flex w-full px-2 items-center justify-between">
                      <div class="h-14 w-auto ">
                          <img loading="lazy" class="flex w-full h-full object-contain"
                              src="https://www.itm.ac.in/Images/logo.png" alt="logo">
                      </div>
                      <div class="flex w-auto h-full items-center justify-end">
  
                          <button id="close" onclick="closeMenu()"
                              class="flex  rounded-md     py-2 px-2 items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                  class="w-6 h-6">
                                  <path fill-rule="evenodd"
                                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                      clip-rule="evenodd"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
                  <hr>
                  <div class="flex w-full h-full overflow-y-scroll card-scroll pb-20">
                      <ul class="navbar flex flex-col divide-y w-full h-fit">
                          <li class="flex w-full transition-all ">
                              <details class="mobile-program-details flex flex-col w-full rounded-md">
                                  <summary class="flex relative w-full px-5 py-3">
                                      <span class="flex w-full">About Us</span>
                                      <span class="flex absolute right-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                              fill="currentColor" class="w-6 h-6">
                                              <path fill-rule="evenodd"
                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </span>
                                  </summary>
                                  <div class="flex w-full">
                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span onclick="window.location.href ='https://www.itm.edu/aboutus/'"
                                                  class="flex w-full px-5 py-3">
                                                  About ITM Group
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/universityadministration.html'"
                                                  class="flex w-full px-5 py-3">
                                                  University Administration
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/aboutITMuniversity.html'"
                                                  class="flex w-full px-5 py-3">
                                                  ITM Vocational University
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/visionmission.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Vision & Mission
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/presidentmessage.html'"
                                                  class="flex w-full px-5 py-3">
                                                  President Message
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/provostmessage.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Provost Message
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span onclick="window.location.href ='https://itm.ac.in/faculty/'"
                                                  class="flex w-full px-5 py-3">
                                                  Faculty Profiles
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/statutory-bodies.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Statutory Bodies
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/approvalsrecognition.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Approvals & Recognition
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/infrastructure.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Campus Life
                                              </span>
                                          </li>
                                      </ul>
                                  </div>
  
                              </details>
                          </li>
                          <li class="flex w-full transition-all border ">
                              <details class="mobile-program-details flex flex-col w-full rounded-md">
                                  <summary class="flex relative w-full px-5 py-3">
                                      <span class="flex w-full">Admissions</span>
                                      <span class="flex absolute right-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                              fill="currentColor" class="w-6 h-6">
                                              <path fill-rule="evenodd"
                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </span>
                                  </summary>
                                  <div class="flex w-full">
                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                          <li class="flex w-full transition-all ">
                                              <details
                                                  class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                  <summary class="flex relative w-full px-5 py-3">
                                                      <span class="flex w-full">Under Graduate</span>
                                                      <span class="flex absolute right-5">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                              fill="currentColor" class="w-6 h-6">
                                                              <path fill-rule="evenodd"
                                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                  clip-rule="evenodd"></path>
                                                          </svg>
                                                      </span>
                                                  </summary>
                                                  <div class="flex w-full">
                                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                          <li class="flex w-full transition-all ">
                                                              <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/under-graduate-program/bba'"
                                                                          class="flex w-full px-5 py-3">
                                                                          BBA
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/under-graduate-program/b-tech'"
                                                                          class="flex w-full px-5 py-3">
                                                                          B.Tech
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/under-graduate-program/boptometry'"
                                                                          class="flex w-full px-5 py-3">
                                                                          B.Optometry
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/under-graduate-program/bscmedicallabtechnology'"
                                                                          class="flex w-full px-5 py-3">
                                                                          B.Sc Medical Lab Technology
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/under-graduate-program/bscic'"
                                                                          class="flex w-full px-5 py-3">
                                                                          B.Sc Industrial Chemistry
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/under-graduate-program/bca'"
                                                                          class="flex w-full px-5 py-3">
                                                                          BCA
                                                                      </span>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                      </ul>
                                                  </div>
  
                                              </details>
                                          </li>
                                          <li class="flex w-full transition-all ">
                                              <details
                                                  class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                  <summary class="flex relative w-full px-5 py-3">
                                                      <span class="flex w-full">Post Graduate</span>
                                                      <span class="flex absolute right-5">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                              fill="currentColor" class="w-6 h-6">
                                                              <path fill-rule="evenodd"
                                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                  clip-rule="evenodd"></path>
                                                          </svg>
                                                      </span>
                                                  </summary>
                                                  <div class="flex w-full">
                                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                          <li class="flex w-full transition-all ">
                                                              <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/post-graduate-program/mba'"
                                                                          class="flex w-full px-5 py-3">
                                                                          iConnect MBA
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/post-graduate-program/msc-industrial-chemistry'"
                                                                          class="flex w-full px-5 py-3">
                                                                          M.Sc Industrial Chemistry
                                                                      </span>
                                                                  </li>
                                                                  <li
                                                                      class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                      <span
                                                                          onclick="window.location.href ='https://www.itm.ac.in/post-graduate-program/msc-medical-lab-technology'"
                                                                          class="flex w-full px-5 py-3">
                                                                          M.Sc Medical Lab Technology
                                                                      </span>
                                                                  </li>
                                                                
                                                              </ul>
                                                          </li>
                                                      </ul>
                                                  </div>
  
                                              </details>
                                          </li>
                                      </ul>
                                  </div>
                              </details>
                          </li>
                          <li class="flex w-full transition-all ">
                              <details class="mobile-program-details flex flex-col w-full rounded-md">
                                  <summary class="flex relative w-full px-5 py-3">
                                      <span class="flex w-full">Placements</span>
                                      <span class="flex absolute right-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                              fill="currentColor" class="w-6 h-6">
                                              <path fill-rule="evenodd"
                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </span>
                                  </summary>
                                  <div class="flex w-full">
                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/iconnect-over.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Overview
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/iconnect-st.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Students Testimonials
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/iconnect-ct.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Corporate Testimonials
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/iconnect-pr.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Placement Report
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/iconnect-ic.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Industry Collaborations
                                              </span>
                                          </li>
                                      </ul>
                                  </div>
  
                              </details>
                          </li>
                          <li class="flex w-full transition-all ">
                              <details class="mobile-program-details flex flex-col w-full rounded-md">
                                  <summary class="flex relative w-full px-5 py-3">
                                      <span class="flex w-full">ITMVU magazine</span>
                                      <span class="flex absolute right-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                              fill="currentColor" class="w-6 h-6">
                                              <path fill-rule="evenodd"
                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </span>
                                  </summary>
                                  <div class="flex w-full">
                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/Images/chronicles.pdf'"
                                                  class="flex w-full px-5 py-3">
                                                  Chronicles
                                              </span>
                                          </li>
                                      </ul>
                                  </div>
  
                              </details>
                          </li>
                          <li class="flex w-full transition-all ">
                              <details class="mobile-program-details flex flex-col w-full rounded-md">
                                  <summary class="flex relative w-full px-5 py-3">
                                      <span class="flex w-full">News</span>
                                      <span class="flex absolute right-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                              fill="currentColor" class="w-6 h-6">
                                              <path fill-rule="evenodd"
                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </span>
                                  </summary>
                                  <div class="flex w-full">
                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/newsandevents.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Events
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/studentinnovation.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Student Innovation
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/newsandevents-mc.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Media Center
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/newsandevents-si.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Social Initiatives
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/newsandevents-ca.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Cultural Activities
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/newsandevents-sports.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Sports
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://www.itm.ac.in/gallery.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Gallery
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span onclick="window.location.href ='https://www.itm.ac.in/video.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Video
                                              </span>
                                          </li>
                                      </ul>
                                  </div>
  
                              </details>
                          </li>
                          
                          <li class="flex w-full transition-all ">
                              <details class="mobile-program-details flex flex-col w-full rounded-md">
                                  <summary class="flex relative w-full px-5 py-3">
                                      <span class="flex w-full">Students</span>
                                      <span class="flex absolute right-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                              fill="currentColor" class="w-6 h-6">
                                              <path fill-rule="evenodd"
                                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </span>
                                  </summary>
                                  <div class="flex w-full">
                                      <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/examscheduled.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Exam Scheduled
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span
                                                  onclick="window.location.href ='https://itm.ac.in/examresults.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Exam Results
                                              </span>
                                          </li>
                                          <li
                                              class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                              <span onclick="window.location.href ='https://itm.ac.in/circular.html'"
                                                  class="flex w-full px-5 py-3">
                                                  Circular
                                              </span>
                                          </li>
                                          <li </ul>
                                  </div>
  
                              </details>
                          </li>
                          
                          <li
                              class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                              <a class="flex w-full px-5 py-3" href="https://itm.ac.in/blog.html">Blogs</a>
                          </li>
                          <li class="flex w-full items-center px-5 py-5 gap-2">
                              <a class="shimmer-effect2 text-white bg-brand-red flex  py-2 px-5 rounded-md text-center items-center justify-center font-normal text-lg "
                                  href="https://itmvoc.nopaperforms.com/?utm_source=web&utm_medium=web&utm_campaign=ITM%20Website">Apply
                                  Now
                              </a>
                          </li>
                      </ul>
                  </div>
  
              </nav>
              <div
                  class="flex-grow-0 h-fit w-fit lg:hidden lg:rounded-full bg-white rounded-md transition-all hover:text-white hover:bg-brand-red lg:shadow-md">
                  <button id="open" onclick="openMenu()"
                      class="flex w-fit h-fit rounded-md py-2 px-2 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          class="w-7 h-7 ">
                          <path fill-rule="evenodd"
                              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                              clip-rule="evenodd"></path>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
  </header>
  
      `;
  
    const headerContainer = document.getElementById("header-container");
    headerContainer.innerHTML = header;
  
    const mobileMenu = document.getElementById("mobile-nav");
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("close");
  
    // open menu
    openButton.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
      openButton.style.display = "none";
      closeButton.style.display = "block";
    });
  
    closeButton.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      openButton.style.display = "block";
      closeButton.style.display = "none";
    });
    // open menu
  });
  