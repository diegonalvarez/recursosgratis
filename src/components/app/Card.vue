<template>
    <!-- Article -->
    <article class="overflow-hidden rounded-lg shadow-lg">

        <a href="#">
            <img alt="Placeholder" class="block h-auto w-full" src="@/assets/images/hacker_mind.svg">
        </a>

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" :href="course.website" target="_blank">
                    {{ course.title }}
                </a>
            </h1>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <a class="flex items-center no-underline hover:underline text-black" :href="course.website" target="_blank">
                <p class="ml-2 text-sm">
                    {{ course.website }}
                </p>
            </a>
            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
            </a>
        </footer>

    </article>
    <!-- END Article -->
</template>

<script>
export default {
    props: {
      course: {
        required: true,
        type: Object
      }
    }
};
</script>