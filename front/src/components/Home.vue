<template>
  <div>
    <h1>Hello, World!</h1>
<!--    {{test_image}}-->
    <img :src="test_image" alt="test" id="abc">
    <button v-on:click="run_ocr">Run OCR</button>
    <p>{{ocr_text}}</p>
  </div>
</template>

<script>
import get_text_from_image from "@/scripts/image-parser.js"
export default {
  data() {
    return {
      ocr_text: null
    }
  },
  computed: {
    test_image() {
      return require("@/assets/test-image.png")
    }
  },
  methods: {
    async run_ocr() {
      alert("aaa" + this.test_image)
      // get_text_from_image()
      let img = new Image()
      img.src = this.test_image
      this.ocr_text = await get_text_from_image(img)
      console.log(this.ocr_text)
    }
  }
}
</script>

<style>

</style>
