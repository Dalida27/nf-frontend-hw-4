import React from 'react'

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">N!OLX</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Products</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Create Products</a>
                    </li>

                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-autolg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">N!OLX™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer