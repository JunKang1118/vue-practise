<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="loaded">
        <section class="text-3xl flex justify-center content-center flex-col mx-auto text-center"></section>
        <section class="text-6xl flex justify-center content-center">
        <div class="days mr-2 relative">
            {{day}}
            <div class="label text-sm absolute bottom-0">days</div>
        </div>
        <span class="leading-snug">:</span>
        <div class="hours mx-2 relative">
            {{hour}}
            <div class="label text-sm absolute bottom-0">hours</div>
        </div>
        <span class="leading-snug">:</span>
        <div class="minutes mx-2 relative">
            {{minute}}
            <div class="label text-sm absolute bottom-0">minutes</div>
        </div>
        <span class="leading-snug">:</span>
        <div class="hours ml-2 relative">
            {{second}}
            <div class="label text-sm absolute bottom-0">seconds</div>
        </div>
        </section>        
    </div>
</template>

<script>
export default {
    props:['inputYear','inputMonth','inputDate'],
    data() {
        return {
            day:0,
            hour:0,
            minute:0,
            second:0,
            loaded:false,
        }
    },
    computed: {
        seconds() {
            return 1000
        },
        minutes() {
            return this.seconds * 60
        },
        hours() {
            return this.minutes * 60
        },
        days() {
            return this.hours * 60
        },
        endDate() {
            return new Date(this.inputYear,this.inputMonth-1,this.inputDate)
        }
    },
    methods: {
        showRemainingTime() {
            const timer = setInterval(()=>{
                const now = new Date()
                const timeDiff = this.endDate.getTime() - now.getTime();

                if(timeDiff < 0) {
                    clearInterval(timer);
                    return
                }

                const days = Math.floor(timeDiff / this.days)
                const hours = Math.floor((timeDiff % this.days) / this.hours)
                const minutes = Math.floor((timeDiff % this.hours) / this.minutes)
                const seconds = Math.floor((timeDiff % this.minutes) / this.seconds)
                this.day = days < 10 ? "0" + days : days
                this.hour = hours < 10 ? "0" + hours : hours
                this.minute = minutes < 10 ? "0" + minutes : minutes
                this.second = seconds < 10 ? "0" + seconds : seconds
                this.loaded=true;
            },1000)
        }
    },
    mounted() {
        this.showRemainingTime();
    }
}
</script>

<style scoped>
.seconds {
    max-width: 60px;
}
</style>