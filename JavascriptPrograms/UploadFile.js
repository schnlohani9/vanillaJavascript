// How to upload files to the server using JavaScript

<input type="file" id="fileUpload"></input>;

const handleFileUpload = event => {
  const files = event.target.files;
  const formData = new FormData();
  formData.append("myfiles", files[0]);

  fetch("/saveImage", {
    method: "POST",
    body: formData
  })
    .then(response => {
      response.json();
    })
    
    .then(data => {
      console.log(data.path);
    })
    .catch(error => {
      console.log(error);
    });
};

document.querySelector("#fileUpload").addEventListener("change", event => {
  handleFileUpload(event);
});
