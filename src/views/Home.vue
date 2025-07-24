<template>
  <div class="relative min-h-screen bg-gradient-to-br from-blue-50 to-white font-sans text-gray-800 overflow-hidden">

    <!-- Background image behind everything -->
    <div
      class="h-[550px] absolute inset-0 bg-cover bg-center z-0"
      style="background-image:
        linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
        url('https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D')"
    ></div>

    <!-- Foreground content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
      <!-- Header -->
      <!-- Header -->
      <header class="py-5 px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-700">My Portfolio</h1>
        <nav class="font-bold space-x-7 ">
          <a href="#" class="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#about" class="text-gray-600 hover:text-blue-600 transition">About</a>
          <a href="#services" class="text-gray-600 hover:text-blue-600 transition">Services</a>
          <a href="#resume" class="text-gray-600 hover:text-blue-600 transition">Resume</a>
          <a href="#portfolio" class="text-gray-600 hover:text-blue-600 transition">Portfolio</a>
          <a href="#blog" class="text-gray-600 hover:text-blue-600 transition">Blog</a>
          <a href="#contact" class="text-gray-600 hover:text-blue-600 transition">Contact</a>
        </nav>
      </header>

      <!-- Scroll to Top   -->
    <button
  v-show="showButton"
  @click="scrollToTop"
  class="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-blue-700 transition"
>
  ↑
</button>


      <!-- Hero Section -->
      <section class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
          I Am
          <span class="typewriter">{{ displayedText }}</span>
        </h2>

        <div class="flex space-x-4 mt-4">
          <button class="px-6 py-3 border font-bold border-blue-600 text-black rounded-xl hover:bg-blue-700 hover:text-white  transition duration-300">
            View Work
          </button>
          <button class="px-6 py-3 font-bold border border-blue-600 text-black rounded-xl hover:bg-blue-700 hover:text-white transition duration-300">
            Hire Me
          </button>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="h-[180px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         About <span class="text-red-600">MySelf</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
      </section>


      <section class=" flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <div class="grid grid-cols-2  gap-10">
  <div>
      <img style="margin-top: 40px;" src="https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/0b10/live/6d7759d0-9862-11ef-9117-610baa963618.jpg" alt="">
  </div>
  <div>
    <h1 class="text-3xl md:text-4xl font-extrabold mb-6 text-left">Hello, I am <span class="text-red-600">Lim Sabrey</span></h1>
    <p class="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet..", comes from a line in.</p>
    <p class="text-gray-600 text-left mt-4">
      Name : Abdul Jalil<br>
      Age : 26<br>
      Address : Dhaka, Bangladesh<br>
      Phone Number : +00 530-445-9283<br>
      Email : info@example.com
    </p>

    <div class="flex space-x-4 mt-4">
           
          <button class="px-6 py-3 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Download CV
          </button>
        </div>
  </div>
   
</div>
      </section>

      <!-- Services Section -->
      <section id="services" class="h-[700px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
          My <span class="text-red-600">Services</span>
          </h2>
          <p class="text-gray-600 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting<br>
            industry. Lorem Ipsum standard dummy text.
          </p>
          <hr class="w-[100px] my-4 border-t border-red-300">

          <div class="grid grid-cols-3 gap-4">
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-solid fa-globe fa-2x border p-3 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-paint-brush fa-2x border p-3 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-camera fa-2x border p-3 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Photography</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-bullhorn fa-2x border p-3 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Digital Marketing</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-step-forward fa-2x border border-gray-500 p-3 rounded-full inline-flex items-center justify-center w-14 h-14"></i>
            <h4 class="mt-4 text-lg font-semibold">Motion Art</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-life-ring fa-2x border p-3 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Excellent Support</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <!-- Resume Section -->
      <section id="resume" class="h-[800px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         My <span class="text-red-600">Resume</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">

        <div class="grid grid-cols-2  gap-4">
          <div>Education:</div>
          <div>Experience:</div> 
           <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-solid fa-globe fa-2x border p-2 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-paint-brush fa-2x border p-2 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-camera fa-2x border p-2 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Photography</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-bullhorn fa-2x border p-2 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Digital Marketing</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-step-forward fa-2x border p-2 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Motion Art</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-gray-600 p-8 hover:bg-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out">
            <i class="fa fa-life-ring fa-2x border p-2 rounded-full transition duration-500 ease-in-out"></i>
            <h4 class="mt-4 text-lg font-semibold">Excellent Support</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      
      <!-- Portfolio Section -->
<section
  id="portfolio"
  class="flex flex-col justify-center items-center text-center px-6 animate-fade-in py-12"
>
  <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
    My <span class="text-red-600">Portfolio</span>
  </h2>
  <p class="text-gray-600 text-center">
    Lorem Ipsum is simply dummy text of the printing and typesetting<br />
    industry. Lorem Ipsum standard dummy text.
  </p>
  <hr class="w-[100px] my-4 border-t border-red-300" />

  <!-- filter -->
  <div>
    <!-- Category Buttons -->
    <div class="grid grid-cols-4 gap-4 mb-6 mt-6">
      <button
        v-for="(item, index) in categories"
        :key="index"
        :class="[
          'p-2 text-white rounded-lg transition duration-300 ease-in-out',
          selected === item ? 'bg-red-600' : 'bg-gray-600',
        ]"
        @click="selected = item"
      >
        {{ item }}
      </button>
    </div>

    <!-- Image Grid -->
    <div class="grid grid-cols-3 gap-6 py-4">
      <div
        v-for="(img, index) in filteredImages"
        :key="index"
        class="border rounded-lg overflow-hidden"
      >
        <img
          :src="img.src"
          class="w-full h-48 object-cover"
        />
       
      </div>
    </div>
  </div>
</section>

      
      <!-- Blog Section -->
      <section id="blog" class="h-[650px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         My <span class="text-red-600">Blog</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
        <div class="grid grid-cols-3 gap-10">
          <div class="border border-red-600  ">
            <img style="height: 255px; width: 100%;" src="https://government-cio.imgix.net/wp-content/uploads/2022/03/Careers-Cybersecurity-Header-5.png?ar=814:569&fit=crop&auto=format&auto=compress&trim=color&trim-color=FFFFFF&trim-tol=10" alt="">
            <div class="p-8">
              <h3 class="text-2xl text-left font-bold mb-2">Digital Security Job</h3>
            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
          <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Read More
          </button>
            </div>
          </div>
          <div class="border border-red-600 ">
            <img class="p-0  w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCraN0uicLDXcPJIfVz8noZ0-RMYBZFFDV_Gw8T5Sl52BqV7OZPTRslQUtiW14DIThD14&usqp=CAU" alt="">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-left mb-2">Creative Website Team</h3>
            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
          <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Read More
          </button>
            </div>
          </div> 
          <div class="border border-red-600  ">
            <img src="https://media.istockphoto.com/id/1430393066/photo/creative-startup-and-team-webinar-on-laptop-for-professional-internet-communication-in-office.jpg?s=612x612&w=0&k=20&c=mCwrbA9A1u4ezzncWOFOBx0NV3sykfx84ZRM_HdkjGw=" alt="">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-left mb-2">Business Strategy Man</h3>
              <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
          <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Read More
          </button>
            </div>
          </div> 
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="h-[600px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         Contact  <span class="text-red-600">Me</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
        <form action="" class="mt-4">
          <input type="text" placeholder="Enter Your Name" class="border border-gray-300 p-2 mr-2">
          <input type="text" placeholder="Enter Your Email" class="border border-gray-300 p-2 mr-2">
          <input type="text" placeholder="Enter Your Subject" class="border border-gray-300 p-2 mr-2">
          <br> 
          <br>
          <textarea name="" id="" cols="168" rows="5" placeholder="Enter Your Message" class="border border-gray-300 p-4"></textarea>
        </form>
        <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Send Message
          </button>
      </section>


    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount,computed } from 'vue';

const texts = ['Lim Sabrey', 'Web Developer'];
const displayedText = ref('');
let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 120;  // typing speed in ms per char
const erasingSpeed = 70;  // erasing speed in ms per char
const pauseTime = 1500;   // pause after typing before erasing

const showButton = ref(false)

const categories = ["All", "Branding", "Application", "Development"]
const selected = ref("All")

// Sample Images
const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYwfEBERN2U9oXdKRS8pY4fYcMFkb5v2qfA&s", category: "Branding" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKuG-CFDIFGA3d1r6p8hMmocb_CMhszYQqQ&s", category: "Application" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVHWvgqs2z1qibP1ufFKb5ICyp9F9JVoybw&s", category: "Development" },
  { src: "https://thumbs.dreamstime.com/b/mobile-phone-map-showing-local-location-mobile-phone-map-showing-local-location-routes-to-destination-366871893.jpg", category: "Branding" },
  { src: "https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q=", category: "Application" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9ZC2cHZVHgCBsCQ_qrxVw519s3ov9TbCrA&s", category: "Development" }
]

// Computed Filter
const filteredImages = computed(() => {
  if (selected.value === "All") return images
  return images.filter(img => img.category === selected.value)
})

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function type() {
  if (charIndex <= texts[currentIndex].length) {
    displayedText.value = texts[currentIndex].substring(0, charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, pauseTime);
  }
}

function erase() {
  if (charIndex >= 0) {
    displayedText.value = texts[currentIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

onMounted(() => {
  setTimeout(type, 500);  // small delay before typing starts
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
.background-image {
  background-image: url('https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D');
 
}
html {
  scroll-behavior: smooth;
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease forwards;
}
/* Typewriter effect cursor */
.typewriter::after {
  content: '|';
  animation: blink 1.5s infinite;
  margin-left: 4px;
  color: #ef4444; /* red-500 */
}
@keyframes blink {
  0%, 50% {
    border-color: #2563eb;
  }
  51%, 100% {
    border-color: transparent;
  }
}
</style>
