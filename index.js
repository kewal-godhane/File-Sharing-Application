const dropZone =document.querySelector(".drop-zone");
const browsebtn=document.querySelector(".browsebtn");
const fileInput=document.querySelector(".fileInput");
const fileurl=document.querySelector('#fileURL');

// const baseURL = "https://innshare.herokuapp.com";
const uploadURL = "http://localhost:3000/api/files"; 

// some file dragged over the icons then this event will execute
dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault();
    // if the css class was not evoked then only evoke it
    if(!dropZone.classList.contains('dragged'))
    {
        dropZone.classList.add('dragged');
    }

})

// when we drag the file outside the icons  // then remove the class which is evoked
dropZone.addEventListener('dragleave',()=>{
    dropZone.classList.remove('dragged');
})

// when the file droped 
dropZone.addEventListener('drop',(e)=>{
    // for css
    e.preventDefault();
    dropZone.classList.remove('dragged');
    // for js(implimenting the feature)
    const file=e.dataTransfer.files;
    // console.log("123");

    // if the file is droped then pass the file to fileInput
    if(file.length){
    fileInput.files=file;
    // console.log("123");
    uploadFile(); 
    }
})


// making file input work
browsebtn.addEventListener('click',()=>{
    // if browsebtn get clicked we are making fileInput get clicked
    fileInput.click();
})

 
const uploadFile=()=>{
    console.log("ke");
    const file = fileInput.files[0];
    const formData=new FormData();
    formData.append("myfile",file);

    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        // console.log(xhr.readyState);
        if(xhr.readyState === XMLHttpRequest.DONE)
        {
            console.log(xhr.response);
            showLink(JSON.parse(xhr.response));
        }
    }

    xhr.open("POST",uploadURL)
    xhr.send(formData);
}

const showLink =({file:url})=>{
    fileurl.innerHTML=url;
    console.log(url);
}