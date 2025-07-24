<template>
  <div class="relative min-h-screen bg-gradient-to-br from-blue-50 to-white font-sans text-gray-800 overflow-hidden">

    <!-- Background image behind everything -->
    <div
      class="h-[700px] absolute inset-0 bg-cover bg-center z-0"
      style="background-image:
        linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
        url('https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D')"
    ></div>
    

    <!-- Foreground content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
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
      <section class="h-[650px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
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
      <section id="about" class="h-[300px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
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
        <div class="grid grid-cols-2  gap-4">
  <div>01</div>
  <div>
    <h1 class="text-3xl md:text-4xl font-extrabold mb-6 text-left">Hello, I am <span class="text-red-600">Abdul Jalil</span></h1>
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
      <section id="services" class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         My <span class="text-red-600">Services</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
      </section>

      <section class=" flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <div class="grid grid-cols-3  gap-4">
          <div>01</div>
          <div>02</div> 
          <div>03</div> 
          <div>04</div> 
          <div>05</div> 
          <div>06</div> 
        </div>
      </section>

      <!-- Resume Section -->
      <section id="resume" class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         My <span class="text-red-600">Resume</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
      </section>

      <!-- Portfolio Section -->
      <section id="portfolio" class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         My <span class="text-red-600">Portfolio</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
      </section>

      <!-- Blog Section -->
      <section id="blog" class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
         <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center">
         My <span class="text-red-600">Blog</span>
        </h2>
        <p class="text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-300">
        <div class="grid grid-cols-3 gap-10">
          <div class="border border-red-600 p-10">
            <h3 class="text-2xl text-left font-bold mb-2">Digital Security Job</h3>
            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
          <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Read More
          </button>
          </div>
          <div class="border border-red-600 p-10">
            <h3 class="text-2xl font-bold text-left mb-2">Creative Website Team</h3>
            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
          <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Read More
          </button>
          </div> 
          <div class="border border-red-600 p-10">
            <h3 class="text-2xl font-bold text-left mb-2">Business Strategy Man</h3>
            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
          <button class="px-6 py-3 mt-4 font-bold border border-red-600 text-black rounded-xl hover:bg-red-700 hover:text-white transition duration-300">
            Read More
          </button>
          </div> 
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
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
import { ref, onMounted, onBeforeUnmount } from 'vue';

const texts = ['Lim Sabrey', 'Web Developer'];
const displayedText = ref('');
let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 120;  // typing speed in ms per char
const erasingSpeed = 70;  // erasing speed in ms per char
const pauseTime = 1500;   // pause after typing before erasing


const showButton = ref(false)

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
.background-image {
  background-image: url('https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D');
 
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.typewriter {
   white-space: nowrap;
  overflow: hidden;
  animation: blink 1s step-end infinite;
  
  /* Gradient text */
  background: linear-gradient(90deg, #3b82f6, #06b6d4); /* from blue-500 to cyan-500 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
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
