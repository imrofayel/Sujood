<script lang="ts" setup>

import html2canvas from 'html2canvas';

const { data: articles, error } = await useAsyncData('home', () => queryContent('/').sort({ _id: -1 }).find())

// Redirect to 404 if there's an error
if (error.value) navigateTo('/404')

// Selected tag for filtering
const selectedTag = ref('')

// Computed data with tag filtering
const filteredArticles = computed(() => {
  return articles.value?.filter(article => {
    if (!selectedTag.value) return true
    return article.tags.includes(selectedTag.value)
  }) || []
})

// Extracting unique tags for dropdown
const tags = computed(() => {
  const allTags = articles.value?.flatMap(article => article.tags) || []
  return [...new Set(allTags)]
})

const captureScreenshot = async (articleId: any) => {
  const element = document.getElementById(`article-${articleId}`);
  if (element) {
    try {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const link = document.createElement('a');
      link.download = `article-${articleId}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  }
}

</script>

<template>
  <div class="grid justify-center">
    <!-- Tag selection dropdown -->
    <div class="ml-6 sm:ml-10 mt-10 text-xl"><select v-model="selectedTag" class="mb-4">
      <option value="">All</option>
      <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
    </select></div>

    <!-- Displaying filtered articles -->
    <div v-for="article in filteredArticles" :key="article._path" class="dua-box m-4 sm:m-8 justify-center">

      
      <div class="justify-between flex">

      <button class="text-xl bg-[#263238] text-[#ffffff] dark:bg-[#1A3636] cursor-default p-3 rounded-3xl relative -top-4 rounded-t-none">{{ article.title }}</button>

      <button class="text-xl text-[#263238] dark:text-[#ffffff] p-3 rounded-3xl relative -top-4 rounded-t-none cursor-pointer transform ease-in-out duration-500 " @click="captureScreenshot(article._id)"><Icon name="lucide:download"></Icon>
      </button>

      </div>
      
      <!-- Content Renderer for article content -->
      <ContentRenderer :value="article" class="grid justify-center px-4 py-2 sm:px-10" style="direction:rtl;" :id="`article-${article._id}`"">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>

    </div>
  </div>
</template>

<style scoped>
.dua-box {
  border: 1px solid #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  background-color: #ffffff;
}

.dark .dua-box {
  border: 1px solid #617d7258;
  background-color: #40534C;
}

select {
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid #f5f5f5;
  background-color: #ffffff;
}

.dark select {
  border: 1px solid #617d7258;
  background-color: #40534C;
}
</style>
