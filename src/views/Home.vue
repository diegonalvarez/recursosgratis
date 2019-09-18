<template>
    <div class="absolute w-full flex flex-col">
        <Header />
        <div class="container mx-auto px-4 md:px-12">
            <div class="container mx-auto py-8">
                <input class="w-full h-16 px-3 rounded mb-8 outline-none shadow-outline text-xl px-8 shadow-lg" type="search" v-model="search" placeholder="Escribe aquí para buscar...">
            </div>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <div class="my-1 px-1 w-full w:16 md:w-1/2 lg:my-4 lg:px-2 lg:w-1/4" v-for="course in this.filterCourses">
                    <Card 
                        :course="course"
                    />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Card from '@/components/app/Card';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import cardsJson from '@/cards';

    export default {

        components: {
          Card,
          Header,
          Footer
        },

        data() {
          return {
            cards: cardsJson,
            search: ''
          }
        },

        computed:{
           filterCourses: function() {
                return this.cards.courses.filter((card) => {
                    return card.title.toLowerCase().match(this.search.toLowerCase())
                            || card.website.toLowerCase().match(this.search.toLowerCase())
                            || card.tags.includes(this.search.toLowerCase());
                })
           }
        }
    }
</script>
