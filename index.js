const handleCatagory =async () =>{
   

  const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await response.json()

  const tabContainer = document.getElementById('tab-conatainer');
  const trimedData = data.data.news_category.slice(0,3);
  trimedData.forEach((category)=>{
    const div = document.createElement ('div');
    div.innerHTML=`
    <a onclick="handleLoadNews(${category.category_id})" class="tab">${category.category_name}</a>
    `
    tabContainer.appendChild(div)
  }
  )
  console.log(data.data.news_category);

}

const handleLoadNews = async (categoryId)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${categoryId}`);
    const data = await response.json()
    console.log(data);
}


handleCatagory();

