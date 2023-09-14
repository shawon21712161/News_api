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
    // console.log(data.data);
  const cardContain = document.getElementById('card-contain')
  cardContain.innerHTML='';
    data.data.forEach((news)=>{
      console.log(news);

      const div = document.createElement('div')
      div.innerHTML=`
      <div class="card mx-auto bg-base-100 shadow-xl">
      <figure><img src=${news?.image_url}></figure>
      <div class="card-body">
        <h2 class="card-title">
          ${news?.title.slice(0,20)}
          <div class="badge badge-secondary">${news?.rating?.badge}</div>
        </h2>
        <p>${news?.details.slice(0,200)}</p>
        <div>
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-12 m-1">
              <img src= ${news?.author?.img} alt="">
            </div>
            <h4 class="text-xl">${news?.author?.name}</h4>
            <h6><span>published_date :</span> ${news?.author?.published_date}</h6>
          </div> 
        </div>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Ratting : ${news?.rating?.number}</div> 
          <div class="badge badge-outline">Views : ${news?.total_view}</div>
        </div>
      </div>
    </div>
      `;
      cardContain.appendChild(div)
      
    })
}


handleCatagory();
handleLoadNews(1)

