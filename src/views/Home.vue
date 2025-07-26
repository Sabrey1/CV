<template>
  <div class="relative min-h-screen font-sans text-gray-800 overflow-hidden">
    
    <!-- Custom Animated Background -->
    <div class="fixed inset-0 z-0">
      <!-- Gradient Base -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"></div>
      
      <!-- Animated Geometric Shapes -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 4s;"></div>
      </div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <div class="particle particle-6"></div>
      </div>
      
      <!-- Grid Overlay -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-pattern"></div>
      </div>
    </div>

    <!-- Hero Background Overlay -->
    <div class="absolute top-0 left-0 right-0 h-[550px] z-1">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>
      <div
        class="absolute inset-0 bg-cover bg-center opacity-20"
        style="background-image: url('https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D')"
      ></div>
    </div>

    <!-- Foreground content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
      <!-- Header -->
      <header class="py-5 px-8 flex justify-between items-center backdrop-blur-sm bg-white/5 border-b border-white/10">
        <h1 class="text-2xl font-bold text-white">My Portfolio</h1>
        <nav class="font-bold space-x-7">
          <a href="#" class="text-gray-300 hover:text-blue-400 transition">Home</a>
          <a href="#about" class="text-gray-300 hover:text-blue-400 transition">About</a>
          <a href="#services" class="text-gray-300 hover:text-blue-400 transition">Services</a>
          <a href="#resume" class="text-gray-300 hover:text-blue-400 transition">Resume</a>
          <a href="#portfolio" class="text-gray-300 hover:text-blue-400 transition">Portfolio</a>
          <a href="#blog" class="text-gray-300 hover:text-blue-400 transition">Blog</a>
          <a href="#contact" class="text-gray-300 hover:text-blue-400 transition">Contact</a>
        </nav>
      </header>

      <!-- Scroll to Top -->
      <button
        v-show="showButton"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl flex items-center justify-center text-xl hover:from-blue-700 hover:to-purple-700 transition backdrop-blur-sm border border-white/20"
      >
        ↑
      </button>

      <!-- Hero Section -->
      <section class="h-[500px] flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          I Am
          <span class="typewriter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{{ displayedText }}</span>
        </h2>

        <div class="flex space-x-4 mt-4">
          <button class="px-6 py-3 border font-bold border-blue-400 text-white rounded-xl hover:bg-blue-600 hover:border-blue-600 transition duration-300 backdrop-blur-sm bg-white/10">
            View Work
          </button>
          <button class="px-6 py-3 font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition duration-300 border border-transparent">
            Hire Me
          </button>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in backdrop-blur-sm bg-white/5 border-y border-white/10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
          About <span class="text-red-400">MySelf</span>
        </h2>
        <p class="text-gray-300 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-400">
      </section>

      <section class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <div class="grid grid-cols-2 gap-10">
          <div>
            <img 
              style="margin-top: 40px;" 
              src="https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/0b10/live/6d7759d0-9862-11ef-9117-610baa963618.jpg" 
              alt=""
              class="rounded-lg shadow-2xl border border-white/20"
            >
          </div>
          <div>
            <h1 class="text-3xl md:text-4xl font-extrabold mb-6 text-left text-white">Hello, I am <span class="text-red-400">Lim Sabrey</span></h1>
            <p class="text-gray-300 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet.., comes from a line in.</p>
            <p class="text-gray-300 text-left mt-4">
              Name : Abdul Jalil<br>
              Age : 26<br>
              Address : Dhaka, Bangladesh<br>
              Phone Number : +00 530-445-9283<br>
              Email : info@example.com
            </p>

              <div class="flex space-x-4 mt-4">
    <button
      @click="downloadFile"
      class="px-6 py-3 font-bold border border-red-400 text-white rounded-xl hover:bg-red-600 hover:border-red-600 transition duration-300 backdrop-blur-sm bg-white/10"
    >
      Download CV
    </button>
  </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in backdrop-blur-sm bg-white/5 border-y border-white/10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
          My <span class="text-red-400">Services</span>
        </h2>
        <p class="text-gray-300 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-400">

        <div class="grid grid-cols-3 gap-6 mt-8">
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:border-red-500">
            <i class="fa fa-solid fa-globe fa-2x border border-white/30 p-3 rounded-full transition duration-500 ease-in-out text-blue-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Development</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:border-red-500">
            <i class="fa fa-paint-brush fa-2x border border-white/30 p-3 rounded-full transition duration-500 ease-in-out text-purple-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Design</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:border-red-500">
            <i class="fa fa-camera fa-2x border border-white/30 p-3 rounded-full transition duration-500 ease-in-out text-pink-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Photography</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:border-red-500">
            <i class="fa fa-bullhorn fa-2x border border-white/30 p-3 rounded-full transition duration-500 ease-in-out text-yellow-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Digital Marketing</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:border-red-500">
            <i class="fa fa-step-forward fa-2x border border-white/30 p-3 rounded-full inline-flex items-center justify-center w-14 h-14 text-green-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Motion Art</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:border-red-500">
            <i class="fa fa-life-ring fa-2x border border-white/30 p-3 rounded-full transition duration-500 ease-in-out text-cyan-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Excellent Support</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <!-- Resume Section -->
      <section id="resume" class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
          My <span class="text-red-400">Resume</span>
        </h2>
        <p class="text-gray-300 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-400">

        <div class="grid grid-cols-2 gap-8 mt-8">
          <div class="text-white text-xl font-semibold">Education:</div>
          <div class="text-white text-xl font-semibold">Experience:</div> 
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5">
            <i class="fa fa-solid fa-graduation-cap fa-2x border border-white/30 p-2 rounded-full transition duration-500 ease-in-out text-blue-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Computer Science</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5">
            <i class="fa fa-briefcase fa-2x border border-white/30 p-2 rounded-full transition duration-500 ease-in-out text-purple-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Senior Developer</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5">
            <i class="fa fa-certificate fa-2x border border-white/30 p-2 rounded-full transition duration-500 ease-in-out text-pink-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Web Design</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="border border-white/20 p-8 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg transition duration-500 ease-in-out backdrop-blur-sm bg-white/5">
            <i class="fa fa-code fa-2x border border-white/30 p-2 rounded-full transition duration-500 ease-in-out text-yellow-400"></i>
            <h4 class="mt-4 text-lg font-semibold text-white">Full Stack Developer</h4>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      
      <!-- Portfolio Section -->
      <section id="portfolio" class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in backdrop-blur-sm bg-white/5 border-y border-white/10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
          My <span class="text-red-400">Portfolio</span>
        </h2>
        <p class="text-gray-300 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br />
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-400" />

        <div>
          <!-- Category Buttons -->
          <div class="grid grid-cols-4 gap-4 mb-6 mt-6">
            <button
              v-for="(item, index) in categories"
              :key="index"
              :class="[
                'p-3 text-white rounded-lg transition duration-300 ease-in-out backdrop-blur-sm border',
                selected === item 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 border-red-500' 
                  : 'bg-white/10 border-white/20 hover:bg-white/20',
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
              class="border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105"
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
      <section id="blog" class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
          My <span class="text-red-400">Blog</span>
        </h2>
        <p class="text-gray-300 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-400">
        
        <div class="grid grid-cols-3 gap-10 mt-8">
          <div class="border border-white/20 backdrop-blur-sm bg-white/5 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 hover:scale-105">
            <img style="height: 255px; width: 100%;" src="https://government-cio.imgix.net/wp-content/uploads/2022/03/Careers-Cybersecurity-Header-5.png?ar=814:569&fit=crop&auto=format&auto=compress&trim=color&trim-color=FFFFFF&trim-tol=10" alt="">
            <div class="p-8">
              <h3 class="text-2xl text-left font-bold mb-2 text-white">Digital Security Job</h3>
              <p class="text-left text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
              <button class="px-6 py-3 mt-4 font-bold border border-red-400 text-white rounded-xl hover:bg-red-600 hover:border-red-600 transition duration-300 backdrop-blur-sm bg-white/10">
                Read More
              </button>
            </div>
          </div>
          <div class="border border-white/20 backdrop-blur-sm bg-white/5 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 hover:scale-105">
            <img class="p-0 w-full h-[255px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCraN0uicLDXcPJIfVz8noZ0-RMYBZFFDV_Gw8T5Sl52BqV7OZPTRslQUtiW14DIThD14&usqp=CAU" alt="">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-left mb-2 text-white">Creative Website Team</h3>
              <p class="text-left text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
              <button class="px-6 py-3 mt-4 font-bold border border-red-400 text-white rounded-xl hover:bg-red-600 hover:border-red-600 transition duration-300 backdrop-blur-sm bg-white/10">
                Read More
              </button>
            </div>
          </div> 
          <div class="border border-white/20 backdrop-blur-sm bg-white/5 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 hover:scale-105">
            <img class="w-full h-[255px] object-cover" src="https://media.istockphoto.com/id/1430393066/photo/creative-startup-and-team-webinar-on-laptop-for-professional-internet-communication-in-office.jpg?s=612x612&w=0&k=20&c=mCwrbA9A1u4ezzncWOFOBx0NV3sykfx84ZRM_HdkjGw=" alt="">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-left mb-2 text-white">Business Strategy Man</h3>
              <p class="text-left text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
              <button class="px-6 py-3 mt-4 font-bold border border-red-400 text-white rounded-xl hover:bg-red-600 hover:border-red-600 transition duration-300 backdrop-blur-sm bg-white/10">
                Read More
              </button>
            </div>
          </div> 
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 flex flex-col justify-center items-center text-center px-6 animate-fade-in backdrop-blur-sm bg-white/5 border-t border-white/10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
          Contact <span class="text-red-400">Me</span>
        </h2>
        <p class="text-gray-300 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting<br>
          industry. Lorem Ipsum standard dummy text.
        </p>
        <hr class="w-[100px] my-4 border-t border-red-400">
        
        <form action="https://formsubmit.co/limsabriey94@gmail.com" method="POST" class="mt-8 space-y-4">
          <div class="flex gap-4">
            <input type="text" name="name" placeholder="Enter Your Name" required class="flex-1 border border-white/20 bg-white/10 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none">
            <input type="email" name="email" placeholder="Enter Your Email" required class="flex-1 border border-white/20 bg-white/10 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none">
          </div>
          <input type="text" name="subject" placeholder="Enter Your Subject" required class="w-full border border-white/20 bg-white/10 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none">
          <textarea name="message" rows="5" placeholder="Enter Your Message" required class="w-full border border-white/20 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none resize-none"></textarea>

          <button type="submit" class="px-8 py-3 mt-6 font-bold bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition duration-300 border border-red-500">
            Send Message
          </button>
        </form>

      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const texts = ['Lim Sabrey', 'Web Developer'];
const displayedText = ref('');
let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 70;
const pauseTime = 1500;

const showButton = ref(false)

const categories = ["All", "Branding", "Application", "Development"]
const selected = ref("All")


function downloadFile() {
  const link = document.createElement("a");
  link.href = "/file/AssigmentComputerSystemAdministrator.docx";  
  link.download = "AssigmentComputerSystemAdministrator.docx";   
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYwfEBERN2U9oXdKRS8pY4fYcMFkb5v2qfA&s", category: "Branding" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKuG-CFDIFGA3d1r6p8hMmocb_CMhszYQqQ&s", category: "Application" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVHWvgqs2z1qibP1ufFKb5ICyp9F9JVoybw&s", category: "Development" },
  { src: "https://thumbs.dreamstime.com/b/mobile-phone-map-showing-local-location-mobile-phone-map-showing-local-location-routes-to-destination-366871893.jpg", category: "Branding" },
  { src: "https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q=", category: "Application" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9ZC2cHZVHgCBsCQ_qrxVw519s3ov9TbCrA&s", category: "Development" }
]

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
  setTimeout(type, 500);
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

html {
  scroll-behavior: smooth;
}

/* Custom Animated Background Elements */
.particle {
  position: absolute;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

.particle-1 {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  width: 6px;
  height: 6px;
  top: 60%;
  left: 80%;
  animation-delay: -5s;
}

.particle-3 {
  width: 3px;
  height: 3px;
  top: 80%;
  left: 20%;
  animation-delay: -10s;
}

.particle-4 {
  width: 5px;
  height: 5px;
  top: 30%;
  left: 70%;
  animation-delay: -15s;
}

.particle-5 {
  width: 4px;
  height: 4px;
  top: 70%;
  left: 50%;
  animation-delay: -8s;
}

.particle-6 {
  width: 6px;
  height: 6px;
  top: 10%;
  left: 90%;
  animation-delay: -12s;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Grid Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
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
  color: #ef4444;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #2563eb, #7c3aed);
}
</style>