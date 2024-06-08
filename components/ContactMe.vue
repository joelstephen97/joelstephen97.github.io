<template>
  <div class="flex justify-center items-start mt-10 w-full h-full">
    <Carousel
      class="relative w-full h-full max-w-full max-h-full"
      :opts="{
        align: 'start',
      }"
      :plugins="[Autoplay({
        delay: 2000,
      })]"
    >
      <CarouselContent class="w-full h-full">
        <CarouselItem
          v-for="(item, index) in contactInfo"
          :key="index"
          class="basis-full h-full"
        >
          <div :class="['p-1', item.bgClass, 'w-full', 'h-full', 'mx-auto', 'bg-cover', 'bg-center']">
            <Card class="w-full h-full bg-transparent shadow-none">
              <CardContent class="flex w-full h-full items-center justify-center p-6 bg-white bg-opacity-75">
                <div class="text-center">
                  <span class="block text-2xl font-semibold">{{ item.label }}</span>
                  <span class="block text-xl">
                    <a :href="item.link" class="text-blue-500 underline" target="_blank">
                      {{ item.value }}
                    </a>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>

  <!-- Form Section -->
  <div class="flex flex-col justify-center items-center mt-10 w-full">
    <h1 class="block text-2xl font-semibold mb-4">Contact Form</h1>
    <form @submit.prevent="submitForm" class="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        ></textarea>
      </div>
      <div class="flex items-center justify-end">
        <button
          type="submit"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'

const contactInfo = [
  { label: 'Contact Number', value: '+971568098085', link: 'tel:+971568098085', bgClass: 'bg-contact' },
  { label: 'Email', value: 'joel.stephen.work@gmail.com', link: 'mailto:joel.stephen.work@gmail.com', bgClass: 'bg-email' },
  { label: 'LinkedIn', value: 'linkedin.com/in/joelthomasstephen', link: 'https://linkedin.com/in/joelthomasstephen', bgClass: 'bg-linkedin' },
  { label: 'GitHub', value: 'github.com/joelstephen97', link: 'https://github.com/joelstephen97', bgClass: 'bg-github' }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  const mailtoLink = `mailto:joel.stephen.work@gmail.com?subject=Contact via Website Form&body=Name: ${form.value.name}%0AEmail: ${form.value.email}%0AMessage: ${form.value.message}`
  window.location.href = mailtoLink
}
</script>

<style>
.bg-contact {
  background-image: url('assets/images/contact.webp');
}
.bg-email {
  background-image: url('assets/images/email.webp');
}
.bg-linkedin {
  background-image: url('assets/images/linkedin.webp');
}
.bg-github {
  background-image: url('assets/images/github.webp');
}
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
.shadow-xl {
  box-shadow:  0 5px 50px rgba(0, 0, 0, 0.12), 0 5px 50px rgba(0, 0, 0, 0.10);
}
</style>
