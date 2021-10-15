const btn = document.querySelector(".actionBtn");

btn.addEventListener("click", () => {
  const input = document.querySelector(".inputTracker");
  axios
    .get(`http://ip-api.com/json/${input.value}`)
    .then((response) => {
      if (response.data.status === "fail") {
        throw new Error("Result not Found");
      }
      document.querySelector('.apiOutput').style.display = 'flex'
      document.querySelector(".apiOutput").innerHTML = `
        <article class="apiOutput-boxes">
        <h4>IP Adress</h4>
        <p class=" ipOutput">${response.data.query}</p>
    </article>
    <article class="apiOutput-boxes">
        <h4>Location</h4>
        <p class="locationOutput" >${response.data.city}</p>
    </article>
    <article class="apiOutput-boxes">
        <h4>Timezone</h4>
        <p class="timezoneOutput">${response.data.timezone}</p>
    </article>
    <article class="apiOutput-boxes">
        <h4>ISP</h4>
        <p class="ispOutput">${response.data.isp}</p>
    </article>
    `;

      document.querySelector('.map').innerHTML = `
      <div class="mapouter"><div class="gmap_canvas"><iframe   height=100% id="gmap_canvas" width=100% src="https://maps.google.com/maps?q=${response.data.city}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" ></iframe><a class='mapka' href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;}</style><a href="https://www.embedgooglemap.net">google map website embed</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;}</style></div></div>
      
      
      
      
      
      `


})
.catch((error) => {
  document.querySelector(".apiOutput").innerHTML = `<h1>${error}</h1>`;
});
});
        
        

        
