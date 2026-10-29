import { ref } from 'vue'

export function useExperienceData() {

  const baseUrl = 'https://my-portfolio-data-json.nolipernes.workers.dev';
  const experienceData = ref([])
  const isLoading = ref(true)
  const error = ref(null)
  const dataURL = new URL('/index.json', baseUrl);

  const fetchExpData = async () => {
    try {
      const response = await fetch(dataURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      // Crucial step: Check if the response was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the stream body into a usable JavaScript object
      const data = await response.json();
      console.log('Success:', data);
      experienceData.value = data.experience;
      console.log('Data loaded into state:', experienceData.value);
    } catch (error) {
      // Catches network failures AND the custom errors thrown above
      error.value = error
      console.error('Fetch operation failed:', error.message);
    } finally {
      isLoading.value = false
    }
  }

  return { experienceData, error , isLoading , fetchExpData }
}